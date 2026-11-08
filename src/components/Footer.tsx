"use client";

import React, { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/data/site";
import {
  DevLogo,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  CheckIcon,
  ArrowUpRightIcon
} from "@/components/Icons";
import { dispatchEmail } from "@/utils/emailDispatch";

const navLinks = [
  { label: "Top", href: "#home" },
  { label: "Who I Am", href: "#who-i-am" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" }
];

export const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [emailStatus, setEmailStatus] = useState<"idle" | "dispatched">("idle");
  const letterRef = useRef<HTMLDivElement>(null);

  // Soft fade-in on scroll using IntersectionObserver
  useEffect(() => {
    // Check if prefers-reduced-motion is enabled
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const currentRef = letterRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#060F0C] text-[#F5ECDD] border-t border-[#1E4332] relative overflow-hidden pt-16 sm:pt-20 md:pt-24 pb-12 dark-grid">
      {/* Ambient background teal-amber gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 40%, rgba(239, 161, 45, 0.04) 0%, transparent 60%)"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid: Letter-Style Closing on the Left + Secondary Navigation on the Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-14 border-b border-[#1E4332]">
          {/* ========================================================= */}
          {/* 1. PERSONAL LETTER-STYLE CLOSING (Max width ~600px) */}
          {/* ========================================================= */}
          <div
            ref={letterRef}
            className={`lg:col-span-8 max-w-[620px] space-y-7 text-left transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            {/* Letter Header / Dispatch Notation */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#EFA12D] tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>// DISPATCH // POSTSCRIPT</span>
            </div>

            {/* A warm one-line closing note */}
            <p className="text-base sm:text-lg text-[#F5ECDD] leading-relaxed font-sans">
              Thanks for scrolling this far. If something here caught your eye, let&apos;s build something together.
            </p>

            {/* Sign-off line & Handwritten Script Signature */}
            <div className="space-y-3 pt-2">
              <p className="font-serif-heading text-xl sm:text-2xl italic text-[#A6B6A0]">
                Catch you in production (the good kind),
              </p>

              {/* Hand-written / script signature in amber accent */}
              <div className="pt-1">
                <span className="font-signature text-4xl sm:text-5xl text-[#EFA12D] font-bold tracking-wide inline-block -rotate-2 select-none">
                  Varun
                </span>
              </div>
            </div>

            {/* P.S. line in monospace */}
            <div className="pt-2">
              <p className="font-mono text-xs sm:text-sm text-[#A6B6A0]/80 border-l-2 border-[#1E4332] pl-3.5 py-0.5">
                <span className="text-[#10B981] font-semibold">P.S.</span> I reply faster than my API&apos;s 50ms response. Almost.
              </p>
            </div>

            {/* Contact CTA buttons styled to match existing amber/green accents */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {/* Direct Email Action Button with Universal Dispatch */}
              <a
                href={`mailto:${siteConfig.socialLinks.email}`}
                onClick={(e) => {
                  dispatchEmail(e);
                  setEmailStatus("dispatched");
                  setTimeout(() => setEmailStatus("idle"), 3000);
                }}
                className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#EFA12D] text-[#08120E] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#F5ECDD] transition-all duration-200 shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#EFA12D] cursor-pointer"
                title="Opens email composer (Gmail web on PC or mail app on mobile) & copies email"
              >
                {emailStatus === "dispatched" ? (
                  <>
                    <CheckIcon className="w-4 h-4 shrink-0 text-[#08120E]" />
                    <span>Opening &amp; Copied!</span>
                  </>
                ) : (
                  <>
                    <MailIcon className="w-4 h-4 shrink-0 text-[#08120E]" />
                    <span>Write to Me</span>
                  </>
                )}
              </a>

              {/* GitHub Link Button */}
              <a
                href={siteConfig.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0E251C] text-[#F5ECDD] hover:text-[#EFA12D] hover:bg-[#143528] border border-[#1E4332] font-mono text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#EFA12D]"
                aria-label="GitHub profile"
              >
                <GithubIcon className="w-4 h-4 shrink-0 text-[#10B981]" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn Link Button */}
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0E251C] text-[#F5ECDD] hover:text-[#EFA12D] hover:bg-[#143528] border border-[#1E4332] font-mono text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#EFA12D]"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon className="w-4 h-4 shrink-0 text-[#10B981]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. SECONDARY DIRECTORY & NAVIGATION (Small & Secondary) */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8 pt-4 lg:pt-0 lg:pl-8 lg:border-l lg:border-[#1E4332]/60">
            {/* Identity & Status */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <DevLogo className="w-7 h-7 shrink-0" />
                <div>
                  <span className="font-serif-heading text-xl font-bold tracking-tight text-[#F5ECDD] block">
                    {siteConfig.fullName}
                  </span>
                  <p className="text-[11px] text-[#A6B6A0] font-mono">
                    MERN Stack Developer
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#A6B6A0]/70 leading-relaxed font-sans pt-1">
                Deterministic architectures, clean schemas, and production code that survives the real world.
              </p>
            </div>

            {/* Small & Secondary Navigation Links */}
            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#A6B6A0]/60 block">
                Index / Quick Navigation
              </span>
              <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-mono text-[#A6B6A0]">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="hover:text-[#EFA12D] transition-colors py-1 inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRightIcon className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-all text-[#EFA12D]" />
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. BOTTOM BAR (© 2026 + NO_UNHANDLED_REJECTIONS Tag) */}
        {/* ========================================================= */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A6B6A0]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
            <span>© 2026 {siteConfig.fullName}. All systems operational (for now).</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-mono text-[#10B981] font-semibold bg-[#0E241B] px-2 py-0.5 rounded border border-[#1E4332]">
              NO_UNHANDLED_REJECTIONS
            </span>
          </div>

          <div className="font-mono text-[11px] text-[#A6B6A0]/70 text-center sm:text-right">
            Engineered with Next.js, TypeScript &amp; defensive pessimism.
          </div>
        </div>
      </div>
    </footer>
  );
};
