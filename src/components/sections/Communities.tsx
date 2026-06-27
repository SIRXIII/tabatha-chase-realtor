import Image from "next/image";
import Link from "next/link";

interface Community {
  name: string;
  slug: string;
  photo: string;
  credit: string;
}

// source: Wikipedia Commons via en.wikipedia REST API (CC-BY-SA, attributed in credit field)
const COMMUNITIES: Community[] = [
  {
    name: "Corona",
    slug: "corona",
    photo: "/images/communities/corona.jpg",
    credit: "Wikimedia Commons",
  },
  {
    name: "Eastvale",
    slug: "eastvale",
    photo: "/images/communities/eastvale.jpg",
    credit: "Wikimedia Commons",
  },
  {
    name: "Yorba Linda",
    slug: "yorba-linda",
    photo: "/images/communities/yorba-linda.jpg",
    credit: "Wikimedia Commons",
  },
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
              {/* Real city photo — grayscale by default, color on hover to match site tone */}
              <Link
                href={`/communities/${community.slug}`}
                className="block relative w-full aspect-[4/5] overflow-hidden bg-stone-200 group"
                aria-label={`Explore ${community.name}`}
              >
                <Image
                  src={community.photo}
                  alt={`${community.name}, California`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-[filter,transform] duration-700 ease-out group-hover:scale-105"
                />
              </Link>

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
