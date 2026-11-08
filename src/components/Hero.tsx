"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ArrowRightIcon,
  FileTextIcon
} from "@/components/Icons";
import { dispatchEmail } from "@/utils/emailDispatch";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92dvh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center paper-grid overflow-x-clip bg-[#08120E] text-[#F5ECDD] scroll-mt-24"
    >
      {/* Decorative background grid and corner notations */}
      <div className="absolute top-24 left-6 md:left-12 font-mono text-[10px] md:text-xs text-[#A6B6A0]/40 tracking-widest hidden sm:block pointer-events-none">
        LOCATION: CHANDHIGARH 
      </div>
      <div className="absolute top-24 right-6 md:right-12 font-mono text-[10px] md:text-xs text-[#A6B6A0]/40 tracking-widest hidden sm:block pointer-events-none">
        SYSTEM STATUS: ALL GREEN (FOR NOW)
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typographic & Engineering Identity (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E241B] border border-[#1E4332] text-xs font-mono text-[#A6B6A0]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0" />
              <span className="text-[#34D399] font-medium">{siteConfig.statusBadge}</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2.5">
              <div className="flex items-baseline gap-3 flex-wrap">
                <h1
                  className="font-serif-heading font-bold tracking-tight text-[#F5ECDD] leading-[1.05]"
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                    overflowWrap: "anywhere"
                  }}
                >
                  {siteConfig.fullName}
                </h1>
              </div>

              {/* Signature Headline */}
              <div>
                <h2
                  className="font-serif-heading font-bold text-[#EFA12D] leading-tight"
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 2.75rem)",
                    overflowWrap: "anywhere"
                  }}
                >
                  {siteConfig.headline}
                </h2>
              </div>

              {/* Supporting Sarcastic Tagline Quote */}
              <p className="font-serif-heading text-base sm:text-lg md:text-xl text-[#F5ECDD]/85 italic font-medium pt-1">
                &ldquo;{siteConfig.tagline}&rdquo;
              </p>
            </div>

            {/* Dark Humour Callout Box */}
            <div className="relative inline-block max-w-lg bg-[#0E2219] border-l-4 border-[#EFA12D] p-3.5 rounded-r-lg shadow-md border-y border-r border-[#1B3E2E]">
              <div className="flex items-start gap-2.5">
                <span className="text-[#EFA12D] font-serif text-lg leading-none shrink-0">✦</span>
                <p className="font-mono text-xs sm:text-sm text-[#F5ECDD]/90 leading-relaxed">
                  {siteConfig.subline}
                </p>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <a
                href="#projects"
                className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#EFA12D] text-[#08120E] text-sm font-bold tracking-wide hover:bg-[#F5ECDD] hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#EFA12D]"
              >
                <span>Explore Systems</span>
                <ArrowRightIcon className="w-4 h-4 text-[#08120E] shrink-0" />
              </a>

              <a
                href={siteConfig.resumeUrl}
                download="Varun-FullStack-Developer-Resume.pdf"
                className="min-h-[44px] inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0E241B] text-[#F5ECDD] text-sm font-medium border border-[#1E4332] hover:border-[#EFA12D] hover:bg-[#153426] transition-all focus:outline-none focus:ring-2 focus:ring-[#EFA12D]"
                title="Download Resume (PDF)"
              >
                <FileTextIcon className="w-4 h-4 text-[#EFA12D] shrink-0" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Connectivity */}
            <div className="pt-3 flex items-center gap-4 sm:gap-6 border-t border-[#1E4332] flex-wrap">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A6B6A0]/70">
                Connect :
              </span>
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href={siteConfig.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full text-[#A6B6A0] hover:text-[#EFA12D] hover:bg-[#163628] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full text-[#A6B6A0] hover:text-[#EFA12D] hover:bg-[#163628] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${siteConfig.socialLinks.email}`}
                  onClick={(e) => dispatchEmail(e)}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full text-[#A6B6A0] hover:text-[#EFA12D] hover:bg-[#163628] transition-colors cursor-pointer"
                  aria-label="Email Varun"
                >
                  <MailIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, STATIC Circular Portrait Frame */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex flex-col items-center justify-center">
            {/* Square Wrapper: width clamp(280px, 34vw, 440px), centered */}
            <div
              className="relative mx-auto select-none"
              style={{
                width: "min(78vw, clamp(280px, 34vw, 440px))",
                aspectRatio: "1 / 1"
              }}
            >
              {/* Soft static radial glow behind everything */}
              <div
                className="absolute inset-0 pointer-events-none rounded-full blur-2xl opacity-80"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(245, 161, 48, 0.16) 0%, transparent 70%), radial-gradient(circle at 35% 65%, rgba(45, 212, 160, 0.12) 0%, transparent 60%)"
                }}
              />

              {/* Thin static outer ring (No rotation, no moving dots) */}
              <div className="absolute inset-0 rounded-full border border-[rgba(45,212,160,0.25)] pointer-events-none" />

              {/* Photo Circle: Inset ~9%, 4px gradient border + 6px #0b1d16 inner mat */}
              <div className="absolute inset-[8%] rounded-full p-[4px] bg-[conic-gradient(from_0deg,#F5A130,#2DD4A0,#F5A130)] shadow-[0_0_35px_rgba(245,161,48,0.18)]">
                <div className="w-full h-full rounded-full p-[6px] bg-[#0b1d16]">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-[#07130f]">
                    {/* Real Profile Image: Camera and Face centered, bottom watermark cropped out */}
                    <Image
                      src="/images/image.png"
                      alt="Varun Singh holding a film camera"
                      fill
                      priority
                      sizes="(max-width: 768px) 320px, 440px"
                      className="object-cover"
                      style={{
                        objectPosition: "50% 12%",
                        transform: "scale(1.05)",
                        transformOrigin: "50% 20%"
                      }}
                    />

                    {/* Subtle inner shadow at circular edge to blend into border */}
                    <div
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{ boxShadow: "inset 0 0 25px rgba(7, 19, 15, 0.35)" }}
                    />
                  </div>
                </div>
              </div>

              {/* Status Pill: Bottom-center overlapping circle's bottom edge with pulsing green dot only */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1D16]/95 backdrop-blur-md border border-[rgba(45,212,160,0.4)] text-[11px] font-mono text-[#2DD4A0] shadow-xl tracking-wider select-none whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0" />
                  <span>OPEN TO WORK</span>
                </div>
              </div>
            </div>

            {/* Name Plate Below the Circle (Centered) */}

            <div className="mt-8 text-center space-y-1">
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#F5ECDD] tracking-tight">
                Hi I'm Varun Singh
              </h3>
              <p className="font-mono text-xs text-[#2DD4A0]/80 tracking-widest uppercase">
                MERN STACK DEVELOPER
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
