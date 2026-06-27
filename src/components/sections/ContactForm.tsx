"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

const inputClass =
  "rounded-none border-0 border-b border-black bg-transparent px-0 py-3 text-[16px] font-light tracking-[1px] placeholder:text-black/40 focus-visible:ring-0 focus-visible:border-black";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [interest, setInterest] = useState<string>("");
  const [consent, setConsent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!consent) {
      setErrorMsg("Please accept the consent checkbox to continue.");
      setFormState("error");
      return;
    }

    setFormState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      interest,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(json.error ?? "Something went wrong. Please try again.");
      }

      setFormState("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="flex flex-col items-start justify-center min-h-[400px]">
        <div className="border-l-2 border-[#374D6D] pl-6">
          <p className="text-[13px] font-light tracking-[1.5px] uppercase text-[#374D6D] mb-3">
            Message Sent
          </p>
          <h2 className="text-[30px] font-light tracking-[1px] uppercase mb-4">
            Thank you!
          </h2>
          <p className="text-[16px] font-light leading-[1.6] text-black/70">
            Thanks — Tabatha will be in touch.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="firstName"
            className="text-[13px] font-light tracking-[1.5px] uppercase text-black/60"
          >
            First Name <span className="text-black">*</span>
          </label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            placeholder="Jane"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="lastName"
            className="text-[13px] font-light tracking-[1.5px] uppercase text-black/60"
          >
            Last Name <span className="text-black">*</span>
          </label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            placeholder="Smith"
            className={inputClass}
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="email"
          className="text-[13px] font-light tracking-[1.5px] uppercase text-black/60"
        >
          Email <span className="text-black">*</span>
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jane@example.com"
          className={inputClass}
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="phone"
          className="text-[13px] font-light tracking-[1.5px] uppercase text-black/60"
        >
          Phone{" "}
          <span className="text-black/40 text-[12px] normal-case tracking-normal">
            (optional)
          </span>
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(951) 555-0100"
          className={inputClass}
        />
      </div>

      {/* Interest */}
      <div className="flex flex-col gap-1">
        <label className="text-[13px] font-light tracking-[1.5px] uppercase text-black/60">
          I Am Interested In <span className="text-black">*</span>
        </label>
        <Select value={interest} onValueChange={(v) => setInterest(v ?? "")} required>
          <SelectTrigger
            className={cn(
              inputClass,
              "w-full justify-between border-b border-black h-auto py-3"
            )}
          >
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent className="rounded-none">
            <SelectItem value="buying" className="text-[14px] font-light tracking-[0.5px]">
              Buying
            </SelectItem>
            <SelectItem value="selling" className="text-[14px] font-light tracking-[0.5px]">
              Selling
            </SelectItem>
            <SelectItem value="both" className="text-[14px] font-light tracking-[0.5px]">
              Both
            </SelectItem>
            <SelectItem value="other" className="text-[14px] font-light tracking-[0.5px]">
              Other
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="message"
          className="text-[13px] font-light tracking-[1.5px] uppercase text-black/60"
        >
          Message <span className="text-black">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell Tabatha how she can help you…"
          className={cn(inputClass, "resize-none border-b")}
        />
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 border border-black accent-black cursor-pointer"
        />
        <label
          htmlFor="consent"
          className="text-[13px] font-light leading-[1.6] text-black/60 cursor-pointer"
        >
          I agree to be contacted by Tabatha Chase regarding my real estate inquiry. I
          understand my information will not be shared with third parties.
        </label>
      </div>

      {/* Error message */}
      {formState === "error" && errorMsg && (
        <p className="text-[13px] font-light tracking-[0.5px] text-red-600">{errorMsg}</p>
      )}

      {/* Submit */}
      <div className="pt-2">
        <Button
          type="submit"
          disabled={formState === "submitting"}
          className={cn(
            "lp-btn lp-btn-dark",
            "h-auto px-[46px] py-[20px] text-[14px] font-bold tracking-[1.5px] uppercase",
            "rounded-none border-2 border-black bg-black text-white",
            "hover:bg-transparent hover:text-black",
            "transition-all duration-200",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
        >
          {formState === "submitting" ? "Sending…" : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
