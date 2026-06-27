import Link from "next/link";
import { AGENT } from "@/data/tabatha";
import { InstagramIcon, FacebookIcon, ZillowIcon } from "@/components/icons";

const navLinks = [
  { label: "ACTIVE LISTINGS", href: "/properties/active" },
  { label: "SOLD PORTFOLIO", href: "/properties/sold" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export function Footer() {
  const { brokerage, brokerageAddress, dre, phone, email, instagram, facebook, zillowProfile, tagline } = AGENT;
  const address = `${brokerageAddress.street}, ${brokerageAddress.city}, ${brokerageAddress.state} ${brokerageAddress.zip}`;
  const telHref = `tel:${phone.replace(/\D/g, "")}`;

  return (
    <footer className="bg-white border-t border-black">
      <div className="max-w-[1440px] mx-auto px-[45px] py-[72px] max-md:px-5 max-md:py-16">
        <div className="flex items-start justify-between gap-10 max-md:flex-col max-md:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4 min-w-[200px]">
            <Link href="/" aria-label="Tabatha Chase Real Estate — Home" className="text-black">
              <span className="font-bold tracking-[0.1em] uppercase text-sm leading-tight">
                TABATHA CHASE
                <br />
                <span className="font-light text-xs tracking-widest">REAL ESTATE</span>
              </span>
            </Link>
            <p className="text-[13px] font-light leading-[1.6] text-black max-w-[220px]">{tagline}</p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] font-light tracking-[1.5px] uppercase text-black no-underline hover:underline transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-[13px] font-light uppercase tracking-[1.5px] text-black mb-1">Contact</p>
            <p className="text-[13px] font-light text-black leading-[1.6]">
              {brokerage}
              <br />
              {address}
            </p>
            <a
              href={telHref}
              className="text-[13px] font-light text-black hover:text-[#374D6D] transition-colors duration-200 no-underline"
            >
              {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="text-[13px] font-light text-black hover:text-[#374D6D] transition-colors duration-200 no-underline break-all"
            >
              {email}
            </a>

            <div className="flex items-center gap-4 mt-2 border-t border-black pt-4 md:border-none md:pt-0">
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-black hover:opacity-60 transition-opacity duration-200"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-black hover:opacity-60 transition-opacity duration-200"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={zillowProfile}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zillow profile"
                className="text-black hover:opacity-60 transition-opacity duration-200"
              >
                <ZillowIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom legal row */}
        <div className="mt-12 pt-6 border-t border-black flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-[12px] font-light text-black uppercase tracking-[1px]">
              © 2026 Tabatha Chase Real Estate. All Rights Reserved.
            </p>
            <p className="text-[12px] font-light text-black leading-[1.6] max-w-[520px]">
              Tabatha Chase is a licensed real estate agent in the State of California. DRE# {dre}. {brokerage}. {address}.
            </p>
            <p className="text-[12px] font-light text-black leading-[1.6]">
              Equal Housing Opportunity. We are pledged to the letter and spirit of U.S. policy for the achievement of equal housing opportunity throughout the nation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
