import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { ContactForm } from "@/components/sections/ContactForm";
import {
  PhoneIcon,
  MailIcon,
  InstagramIcon,
  FacebookIcon,
  ZillowIcon,
  MapPinIcon,
} from "@/components/icons";
import { AGENT } from "@/data/tabatha";

export const metadata: Metadata = {
  title: "Contact Tabatha Chase",
};

export default function ContactPage() {
  const { brokerageAddress } = AGENT;
  const addressLine = `${brokerageAddress.street}, ${brokerageAddress.city}, ${brokerageAddress.state} ${brokerageAddress.zip}`;
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(addressLine)}`;

  return (
    <>
      <Header />

      {/* Page Hero — 40vh with gradient + dark overlay */}
      <section
        className="relative flex items-center justify-center text-white"
        style={{ minHeight: "40vh" }}
        aria-label="Contact page hero"
      >
        {/* Gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1a2a3a 0%, #374D6D 50%, #2c3e50 100%)",
          }}
          aria-hidden="true"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.45)" }}
          aria-hidden="true"
        />

        {/* Hero text */}
        <div className="relative z-10 text-center px-6">
          <h1
            className="text-[43px] md:text-[70px] font-light tracking-[1px] uppercase mb-4"
            style={{ marginTop: 0, marginBottom: "24px" }}
          >
            Get in Touch
          </h1>
          <p className="text-[16px] font-light tracking-[1px] uppercase text-white/80 max-w-xl mx-auto">
            Whether you&apos;re buying, selling, or just exploring — Tabatha is here to help.
          </p>
        </div>
      </section>

      {/* Main content — 2-column grid */}
      <main>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 py-24"
          style={{ paddingTop: "96px", paddingBottom: "96px" }}
        >
          {/* LEFT — Contact Form */}
          <div>
            <p className="text-[13px] font-light tracking-[1.5px] uppercase text-[#374D6D] mb-3">
              Send a Message
            </p>
            <h2
              className="text-[43px] font-light tracking-[1px] uppercase mb-8"
              style={{ marginBottom: "32px" }}
            >
              Let&apos;s Connect
            </h2>
            <ContactForm />
          </div>

          {/* RIGHT — Agent contact card */}
          <div className="lg:pl-8">
            <p className="text-[13px] font-light tracking-[1.5px] uppercase text-[#374D6D] mb-3">
              Direct Contact
            </p>
            <h2
              className="text-[43px] font-light tracking-[1px] uppercase mb-8"
              style={{ marginBottom: "32px" }}
            >
              {AGENT.name}
            </h2>

            {/* Agent title + brokerage */}
            <p className="text-[16px] font-light leading-[1.6] text-black/70 mb-1">
              {AGENT.title}
            </p>
            <p className="text-[16px] font-light leading-[1.6] text-black/70 mb-8">
              {AGENT.brokerage} &mdash; DRE #{AGENT.dre}
            </p>

            {/* Contact links */}
            <ul className="flex flex-col gap-5">
              {/* Phone */}
              <li>
                <a
                  href={`tel:${AGENT.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-4 group"
                  aria-label={`Call Tabatha at ${AGENT.phone}`}
                >
                  <PhoneIcon
                    className="w-5 h-5 shrink-0 text-[#374D6D] transition-colors duration-200"
                    aria-hidden="true"
                  />
                  <span className="text-[16px] font-light tracking-[0.5px] text-black group-hover:text-[#374D6D] transition-colors duration-200 underline-offset-4 group-hover:underline">
                    {AGENT.phone}
                  </span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href={`mailto:${AGENT.email}`}
                  className="flex items-center gap-4 group"
                  aria-label={`Email Tabatha at ${AGENT.email}`}
                >
                  <MailIcon
                    className="w-5 h-5 shrink-0 text-[#374D6D] transition-colors duration-200"
                    aria-hidden="true"
                  />
                  <span className="text-[16px] font-light tracking-[0.5px] text-black group-hover:text-[#374D6D] transition-colors duration-200 underline-offset-4 group-hover:underline break-all">
                    {AGENT.email}
                  </span>
                </a>
              </li>

              {/* Instagram */}
              <li>
                <a
                  href={AGENT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                  aria-label="Tabatha Chase on Instagram"
                >
                  <InstagramIcon
                    className="w-5 h-5 shrink-0 text-[#374D6D] transition-colors duration-200"
                    aria-hidden="true"
                  />
                  <span className="text-[16px] font-light tracking-[0.5px] text-black group-hover:text-[#374D6D] transition-colors duration-200 underline-offset-4 group-hover:underline">
                    @socalivingbytabatha
                  </span>
                </a>
              </li>

              {/* Facebook */}
              <li>
                <a
                  href={AGENT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                  aria-label="Tabatha Chase on Facebook"
                >
                  <FacebookIcon
                    className="w-5 h-5 shrink-0 text-[#374D6D] transition-colors duration-200"
                    aria-hidden="true"
                  />
                  <span className="text-[16px] font-light tracking-[0.5px] text-black group-hover:text-[#374D6D] transition-colors duration-200 underline-offset-4 group-hover:underline">
                    tabathachasesellshomes
                  </span>
                </a>
              </li>

              {/* Zillow */}
              <li>
                <a
                  href={AGENT.zillowProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                  aria-label="Tabatha Chase on Zillow"
                >
                  <ZillowIcon
                    className="w-5 h-5 shrink-0 text-[#374D6D] transition-colors duration-200"
                    aria-hidden="true"
                  />
                  <span className="text-[16px] font-light tracking-[0.5px] text-black group-hover:text-[#374D6D] transition-colors duration-200 underline-offset-4 group-hover:underline">
                    Zillow Profile
                  </span>
                </a>
              </li>

              {/* Brokerage address */}
              <li>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                  aria-label={`Brokerage address: ${addressLine}`}
                >
                  <MapPinIcon
                    className="w-5 h-5 shrink-0 mt-0.5 text-[#374D6D] transition-colors duration-200"
                    aria-hidden="true"
                  />
                  <address className="not-italic text-[16px] font-light leading-[1.6] text-black group-hover:text-[#374D6D] transition-colors duration-200">
                    <span className="block">{AGENT.brokerage}</span>
                    <span className="block">{brokerageAddress.street}</span>
                    <span className="block">
                      {brokerageAddress.city}, {brokerageAddress.state}{" "}
                      {brokerageAddress.zip}
                    </span>
                  </address>
                </a>
              </li>
            </ul>

            {/* Divider + tagline */}
            <div className="mt-12 pt-8 border-t border-black/10">
              <p className="text-[16px] font-light leading-[1.6] text-black/50 italic">
                &ldquo;{AGENT.tagline}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
