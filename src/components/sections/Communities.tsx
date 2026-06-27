import Link from "next/link";

interface Community {
  name: string;
  slug: string;
}

const COMMUNITIES: Community[] = [
  { name: "Corona", slug: "corona" },
  { name: "Eastvale", slug: "eastvale" },
  { name: "Yorba Linda", slug: "yorba-linda" },
];

export function Communities() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#f8f8f8" }}
    >
      <div
        className="mx-auto max-w-[1440px] px-10"
        style={{ paddingTop: "88px", paddingBottom: "96px" }}
      >
        {/* Header */}
        <p className="text-base font-normal mb-2 fade-up">NEIGHBORHOODS</p>
        <h2 className="mb-10 fade-up" style={{ animationDelay: "0.2s" }}>
          EXPLORE COMMUNITIES
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMMUNITIES.map((community, index) => (
            <div
              key={community.slug}
              className="fade-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Image placeholder — gradient since no community images are available */}
              <div
                className="w-full aspect-[4/5] bg-gradient-to-br from-stone-400 to-stone-600"
                aria-label={community.name}
              />

              {/* Card content below image */}
              <div className="pt-4">
                <h3 className="mb-2">{community.name}</h3>
                <Link
                  href={`/communities/${community.slug}`}
                  className="text-sm font-light uppercase tracking-[1.5px] text-black no-underline hover:underline hover:text-[#374D6D] transition-colors duration-200"
                >
                  EXPLORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
