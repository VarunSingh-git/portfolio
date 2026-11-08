"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";
import { MenuIcon, CloseIcon, ArrowUpRightIcon, DevLogo } from "@/components/Icons";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Who I Am", href: "#who-i-am" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" }
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position to update header styling and active link
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-[#08120E]/95 backdrop-blur-md shadow-lg border-b border-[#1B382B] py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between min-h-[44px]">
            {/* Custom Developer Monogram Logo (Left aligned) */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="group flex items-center gap-2.5 text-[#F5ECDD] focus:outline-none focus:ring-2 focus:ring-[#EFA12D] rounded-sm min-h-[44px] min-w-[44px] shrink-0"
              aria-label="Home"
            >
              <DevLogo className="w-8 h-8 transition-transform group-hover:scale-105 shrink-0" />
              <div className="flex items-baseline gap-1.5">
                <span className="font-mono text-base font-bold tracking-wider text-[#F5ECDD] group-hover:text-[#EFA12D] transition-colors">
                  VS<span className="text-[#EFA12D]">.DEV</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links Pill (Dead-Center Aligned) */}
            <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center gap-1 lg:gap-2 bg-[#0E221A]/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#1E4332] shadow-inner whitespace-nowrap z-10">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-3.5 py-1 text-sm font-medium transition-all rounded-full relative min-h-[36px] inline-flex items-center ${
                      isActive
                        ? "text-[#EFA12D] font-semibold bg-[#163628]"
                        : "text-[#A6B6A0] hover:text-[#F5ECDD] hover:bg-[#122A20]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#EFA12D]" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Let's Talk CTA */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#EFA12D] text-[#08120E] rounded-full hover:bg-[#F5ECDD] hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#EFA12D]"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>

            {/* Mobile Actions: Compact Call-to-action & Accessible Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="min-h-[44px] px-3.5 py-2 inline-flex items-center justify-center text-xs font-semibold uppercase tracking-wider bg-[#EFA12D] text-[#08120E] rounded-full hover:bg-[#F5ECDD] active:scale-95 transition-transform"
              >
                Talk
              </a>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="relative z-[1001] min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-[#F5ECDD] hover:bg-[#163628] active:bg-[#163628] focus:outline-none focus:ring-2 focus:ring-[#EFA12D] cursor-pointer touch-manipulation select-none"
                style={{ touchAction: "manipulation" }}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-nav-panel"
              >
                {isMobileMenuOpen ? (
                  <CloseIcon className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop Overlay with High Z-Index Below Drawer */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[998] transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Menu Panel (Z-Index 999, Pointer Events Auto, Real 48px Links) */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden fixed inset-x-0 top-[64px] sm:top-[72px] max-h-[calc(100dvh-64px)] overflow-y-auto bg-[#0A1612] border-b border-[#1E4332] shadow-2xl z-[999] pointer-events-auto"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="px-5 pt-4 pb-6 space-y-2">
            <div className="flex items-center justify-between pb-2 border-b border-[#1E4332] text-xs font-mono text-[#A6B6A0]">
              <span>NAVIGATION DIRECTORY</span>
              <span className="text-[#10B981]">ONLINE</span>
            </div>

            <nav className="flex flex-col space-y-1 pt-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`min-h-[48px] w-full flex items-center justify-between px-4 py-3 rounded-lg text-base transition-colors ${
                      isActive
                        ? "bg-[#163628] text-[#EFA12D] font-medium"
                        : "text-[#F5ECDD] hover:bg-[#11271D] active:bg-[#163628]"
                    }`}
                  >
                    <span className="font-serif-heading text-lg">{link.label}</span>
                    <span
                      className={`text-sm font-mono ${
                        isActive ? "text-[#EFA12D]" : "text-[#A6B6A0]"
                      }`}
                    >
                      →
                    </span>
                  </a>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-[#1E4332]">
              <a
                href={siteConfig.resumeUrl}
                download
                className="w-full min-h-[48px] flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#EFA12D] text-[#08120E] hover:bg-[#F5ECDD]"
              >
                <span>Download Resume</span>
                <span className="font-mono text-[#08120E] text-[10px] font-bold">PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
