#!/usr/bin/env node
/**
 * Downloads images listed in docs/research/tabatha-asset-urls.json
 * to public/images/. Concurrency 4, single retry on failure.
 *
 * Usage: node scripts/download-assets.mjs
 *
 * The manifest schema:
 * {
 *   "headshot": "<url-or-null>",
 *   "listings": [{ "slug": "addr-slug", "photoUrls": ["url1", "url2"] }, ...]
 * }
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const MANIFEST = resolve(ROOT, "docs/research/tabatha-asset-urls.json");
const PUBLIC = resolve(ROOT, "public");

async function ensureDir(path) {
  if (!existsSync(path)) await mkdir(path, { recursive: true });
}

async function downloadOne(url, outPath, attempt = 1) {
  if (!url) return { url, outPath, ok: false, reason: "no url" };
  try {
    const res = await fetch(url, {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await ensureDir(dirname(outPath));
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(outPath, buf);
    return { url, outPath, ok: true, bytes: buf.length };
  } catch (e) {
    if (attempt === 1) return downloadOne(url, outPath, 2);
    return { url, outPath, ok: false, reason: e.message };
  }
}

async function pool(tasks, concurrency = 4) {
  const results = [];
  let i = 0;
  const workers = Array.from({ length: concurrency }, async () => {
    while (i < tasks.length) {
      const idx = i++;
      results[idx] = await tasks[idx]();
    }
  });
  await Promise.all(workers);
  return results;
}

async function main() {
  if (!existsSync(MANIFEST)) {
    console.error(`Manifest not found: ${MANIFEST}`);
    process.exit(1);
  }
  const manifest = JSON.parse(await readFile(MANIFEST, "utf8"));
  const tasks = [];

  if (manifest.headshot) {
    tasks.push(() =>
      downloadOne(manifest.headshot, resolve(PUBLIC, "images/tabatha-headshot.jpg")),
    );
  }

  for (const listing of manifest.listings ?? []) {
    const urls = listing.photoUrls ?? [];
    urls.forEach((url, idx) => {
      const suffix = idx === 0 ? "" : `-${idx}`;
      tasks.push(() =>
        downloadOne(url, resolve(PUBLIC, `images/listings/${listing.slug}${suffix}.jpg`)),
      );
    });
  }

  for (const extra of manifest.extras ?? []) {
    tasks.push(() =>
      downloadOne(extra.url, resolve(PUBLIC, extra.dest)),
    );
  }

  if (tasks.length === 0) {
    console.log("No URLs in manifest to download.");
    return;
  }

  console.log(`Downloading ${tasks.length} assets (concurrency 4)...`);
  const results = await pool(tasks, 4);
  const ok = results.filter((r) => r.ok);
  const failed = results.filter((r) => !r.ok);
  console.log(`✓ ${ok.length} downloaded, ✗ ${failed.length} failed`);
  for (const f of failed) console.log(`  ✗ ${f.url || "<null>"} → ${f.reason}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
