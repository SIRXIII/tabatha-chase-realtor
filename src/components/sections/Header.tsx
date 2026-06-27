"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { AGENT } from "@/data/tabatha";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const PROPERTY_ITEMS = [
  { label: "Active", href: "/properties/active" },
  { label: "Sold", href: "/properties/sold" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = cn(
    "font-sans text-[13px] font-light tracking-[1.5px] uppercase transition-colors duration-300 px-4 py-2 inline-block",
    scrolled ? "text-black hover:text-[#374D6D]" : "text-white hover:text-white/70"
  );

  const triggerClass = cn(
    "bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent",
    "font-sans text-[13px] font-light tracking-[1.5px] uppercase transition-colors duration-300 px-4 py-2",
    scrolled ? "text-black hover:text-[#374D6D]" : "text-white hover:text-white/70"
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[1000] transition-all duration-300",
        scrolled ? "bg-[#f8f8f8]" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between h-20 px-[45px] max-[380px]:px-[10px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <span
            className={cn(
              "font-sans text-[13px] font-light tracking-[2px] uppercase transition-colors duration-300",
              scrolled ? "text-black" : "text-white"
            )}
          >
            TABATHA CHASE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0">
          <NavigationMenu>
            <NavigationMenuList className="gap-0">
              {/* Properties Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={triggerClass}>
                  Properties
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-40 bg-white/90">
                    {PROPERTY_ITEMS.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink
                          href={item.href}
                          className="block px-4 py-3 font-sans text-[13px] font-light tracking-[1.5px] uppercase text-black hover:text-[#374D6D] transition-colors rounded-none"
                        >
                          {item.label}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Communities Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={triggerClass}>
                  Communities
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-44 bg-white/90">
                    {AGENT.serviceAreas.map((area) => (
                      <li key={area}>
                        <NavigationMenuLink
                          href={`/communities/${area.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block px-4 py-2 font-sans text-[13px] font-light tracking-[1.5px] uppercase text-black hover:text-[#374D6D] transition-colors rounded-none"
                        >
                          {area}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About link */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className={navLinkClass}
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contact CTA */}
          <a
            href={`mailto:${AGENT.email}`}
            className={cn(
              "ml-6 text-[14px] font-bold tracking-[1.5px] uppercase transition-all duration-200 px-[46px] py-[20px] border-2 inline-block",
              scrolled
                ? "border-black text-black hover:bg-black hover:text-white"
                : "border-white text-white hover:bg-white hover:text-black"
            )}
          >
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            aria-label="Menu"
            className="lg:hidden p-2"
          >
            <Menu
              className={cn(
                "w-6 h-6 transition-colors duration-300",
                scrolled ? "text-black" : "text-white"
              )}
            />
          </SheetTrigger>
          <SheetContent side="right" className="bg-white w-80 p-0" showCloseButton={false}>
            <div className="flex flex-col h-full">
              {/* Mobile Nav Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-black/10">
                <span className="font-sans text-[13px] font-light tracking-[2px] uppercase text-black">
                  TABATHA CHASE
                </span>
                <button
                  aria-label="Close menu"
                  className="p-1 text-black"
                  onClick={() => setMobileOpen(false)}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M1 1l18 18M19 1L1 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
                  </svg>
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col px-6 py-8 gap-1">
                {/* Properties section */}
                <div>
                  <p className="font-sans text-[13px] font-light tracking-[1.5px] uppercase text-black py-3 border-b border-black/10">
                    Properties
                  </p>
                  <div className="pl-4 flex flex-col">
                    {PROPERTY_ITEMS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="font-sans text-[12px] font-light tracking-[1.5px] uppercase text-black/70 hover:text-[#374D6D] py-2 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Communities section */}
                <div>
                  <p className="font-sans text-[13px] font-light tracking-[1.5px] uppercase text-black py-3 border-b border-black/10">
                    Communities
                  </p>
                  <div className="pl-4 flex flex-col">
                    {AGENT.serviceAreas.map((area) => (
                      <Link
                        key={area}
                        href={`/communities/${area.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={() => setMobileOpen(false)}
                        className="font-sans text-[12px] font-light tracking-[1.5px] uppercase text-black/70 hover:text-[#374D6D] py-2 transition-colors"
                      >
                        {area}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* About */}
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="font-sans text-[13px] font-light tracking-[1.5px] uppercase text-black hover:text-[#374D6D] py-3 border-b border-black/10 transition-colors"
                >
                  About
                </Link>

                {/* Contact CTA */}
                <a
                  href={`mailto:${AGENT.email}`}
                  className="mt-6 text-center font-sans text-[14px] font-bold tracking-[1.5px] uppercase py-5 px-8 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-200 inline-block"
                >
                  Contact
                </a>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
