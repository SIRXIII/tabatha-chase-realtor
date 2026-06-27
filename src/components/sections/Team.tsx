import Image from "next/image";
import { AGENT } from "@/data/tabatha";
import { PhoneIcon, MailIcon, InstagramIcon, FacebookIcon } from "@/components/icons";

export function Team() {
  return (
    <section className="bg-white section-padding">
      <div className="container-padding mx-auto max-w-2xl text-center">
        {/* Pretitle */}
        <p className="text-base font-normal tracking-[1px] mb-2 fade-up">
          OUR TEAM
        </p>

        {/* Section heading */}
        <h2 className="text-[43px] font-normal leading-[1.3] tracking-[1px] uppercase mb-12 fade-up">
          MEET THE TEAM
        </h2>

        {/* Single agent card — centered, Tabatha only */}
        <div className="flex flex-col items-center">
          {/* Headshot — real client photo */}
          <div className="w-64 h-80 overflow-hidden mb-6 bg-stone-100">
            <Image
              src={AGENT.headshotLocal}
              alt={`${AGENT.name} headshot`}
              width={256}
              height={320}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>

          {/* Info block */}
          <div className="flex flex-col items-center gap-1">
            <h3 className="text-[21px] font-normal leading-snug tracking-[1px] uppercase">
              {AGENT.name}
            </h3>

            <p className="text-base font-light tracking-[1px] uppercase text-black/80">
              {AGENT.title} &mdash; {AGENT.brokerage}
            </p>

            <p className="text-sm font-light tracking-[1px] uppercase text-black/60">
              DRE #{AGENT.dre}
            </p>
          </div>

          {/* Contact icon row */}
          <div className="flex items-center gap-6 mt-6">
            <a
              href={`tel:${AGENT.phone.replace(/\D/g, "")}`}
              aria-label={`Call Tabatha Chase at ${AGENT.phone}`}
              className="text-black hover:text-[#374D6D] transition-colors duration-200"
            >
              <PhoneIcon className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${AGENT.email}`}
              aria-label={`Email Tabatha Chase`}
              className="text-black hover:text-[#374D6D] transition-colors duration-200"
            >
              <MailIcon className="w-5 h-5" />
            </a>

            <a
              href={AGENT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tabatha Chase on Instagram"
              className="text-black hover:text-[#374D6D] transition-colors duration-200"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>

            <a
              href={AGENT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tabatha Chase on Facebook"
              className="text-black hover:text-[#374D6D] transition-colors duration-200"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
