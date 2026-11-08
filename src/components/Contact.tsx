"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import {
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  CheckIcon,
  ArrowUpRightIcon,
  PhoneIcon
} from "@/components/Icons";
import { dispatchEmail } from "@/utils/emailDispatch";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [emailAppLaunched, setEmailAppLaunched] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(siteConfig.socialLinks.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const mailtoUrl = `mailto:${siteConfig.socialLinks.email}?subject=${encodeURIComponent(
    "Inquiry for Backend / Full-Stack Engineering Role"
  )}&body=${encodeURIComponent(
    "Hi Varun,\n\nI came across your portfolio and would like to discuss an opportunity regarding..."
  )}`;

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-28 bg-[#08120E] relative border-t border-[#1E4332] dark-grid text-[#F5ECDD] scroll-mt-24 overflow-x-clip"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="max-w-4xl mx-auto rounded-3xl bg-[#0C1E17] text-[#F5ECDD] border border-[#1E4332] shadow-2xl relative overflow-hidden dark-grid flex flex-col gap-6"
          style={{
            padding: "clamp(20px, 4vw, 48px)",
            minHeight: "auto"
          }}
        >
          {/* Eyebrow Status in Normal Flow (Never overlaps heading) */}
          <div className="flex items-center justify-center gap-2 font-mono text-xs text-[#10B981] select-none">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0" />
            <span className="tracking-wider">DIRECT_DISPATCH // ONLINE</span>
          </div>

          <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto w-full">
            {/* Signature Heading in Normal Flow */}
            <div className="flex flex-col gap-2">
              <span
                className="font-serif-heading font-bold text-[#EFA12D] block break-words"
                style={{
                  fontSize: "clamp(1.6rem, 5vw, 3rem)",
                  lineHeight: 1.15,
                  overflowWrap: "anywhere"
                }}
              >
                Let&apos;s talk before production breaks.
              </span>
              <h2
                className="font-serif-heading font-bold text-[#F5ECDD] block break-words"
                style={{
                  fontSize: "clamp(1.25rem, 3.8vw, 2.25rem)",
                  lineHeight: 1.2,
                  overflowWrap: "anywhere",
                  marginBottom: "12px"
                }}
              >
                Have an architectural puzzle? Let&apos;s solve it.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#A6B6A0] leading-relaxed break-words">
              Whether you are looking to engineer a high-throughput backend, eliminate deadlocks in
              PostgreSQL, or build an end-to-end full-stack app that doesn&apos;t collapse under load,
              my channels are open.
            </p>

            {/* Direct Communication Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
              {/* Option 1: Direct Mail Client Dispatch with Universal Fallback */}
              <a
                href={mailtoUrl}
                onClick={(e) => {
                  dispatchEmail(e);
                  setEmailAppLaunched(true);
                  setTimeout(() => setEmailAppLaunched(false), 3000);
                }}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#EFA12D] text-[#08120E] text-sm font-bold tracking-wide hover:bg-[#F5ECDD] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#EFA12D] cursor-pointer"
                title="Opens email composer (Gmail web on PC or mail app on mobile) & copies email"
              >
                {emailAppLaunched ? (
                  <>
                    <CheckIcon className="w-4 h-4 text-[#08120E] shrink-0" />
                    <span>Opening &amp; Copied!</span>
                  </>
                ) : (
                  <>
                    <MailIcon className="w-4 h-4 text-[#08120E] shrink-0" />
                    <span>Launch Email App</span>
                    <ArrowUpRightIcon className="w-4 h-4 shrink-0" />
                  </>
                )}
              </a>

              {/* Option 2: Direct Phone Call */}
              <a
                href={`tel:${siteConfig.socialLinks.phone}`}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#143326] text-[#F5ECDD] text-sm font-semibold border border-[#1E4332] hover:border-[#10B981] hover:bg-[#1C4635] transition-all focus:outline-none focus:ring-2 focus:ring-[#10B981]"
                title="Direct phone call"
              >
                <PhoneIcon className="w-4 h-4 text-[#34D399] shrink-0" />
                <span>Call {siteConfig.socialLinks.phoneDisplay}</span>
              </a>
            </div>

            {/* Quick-Copy Row for Browser Webmail Users */}
            <div className="pt-1 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0E241B] text-xs font-mono text-[#A6B6A0] border border-[#1E4332] hover:border-[#EFA12D] hover:text-[#F5ECDD] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#EFA12D]"
                title="Copy email to clipboard for webmail"
              >
                {copiedEmail ? (
                  <>
                    <CheckIcon className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
                    <span className="text-[#34D399] font-bold">Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <span className="break-all">{siteConfig.socialLinks.email}</span>
                    <span className="text-[#EFA12D] underline font-bold shrink-0">Copy Email</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0E241B] text-xs font-mono text-[#A6B6A0] border border-[#1E4332] hover:border-[#10B981] hover:text-[#F5ECDD] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#10B981]"
                title="Copy phone to clipboard"
              >
                {copiedPhone ? (
                  <>
                    <CheckIcon className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
                    <span className="text-[#34D399] font-bold">Phone Copied!</span>
                  </>
                ) : (
                  <>
                    <span>{siteConfig.socialLinks.phoneDisplay}</span>
                    <span className="text-[#34D399] underline font-bold shrink-0">Copy Phone</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Channels */}
            <div className="pt-6 border-t border-[#1E4332] flex flex-wrap items-center justify-center gap-4 sm:gap-8">
              <a
                href={siteConfig.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-2 py-1 inline-flex items-center gap-2 text-xs font-mono text-[#A6B6A0] hover:text-[#EFA12D] transition-colors"
              >
                <GithubIcon className="w-4 h-4 shrink-0" />
                <span>GitHub</span>
              </a>

              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-2 py-1 inline-flex items-center gap-2 text-xs font-mono text-[#A6B6A0] hover:text-[#EFA12D] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 shrink-0" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`https://wa.me/${siteConfig.socialLinks.phone.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-2 py-1 inline-flex items-center gap-2 text-xs font-mono text-[#34D399] hover:underline transition-colors"
              >
                <PhoneIcon className="w-4 h-4 shrink-0" />
                <span>WhatsApp</span>
              </a>

              <a
                href={siteConfig.resumeUrl}
                download
                className="min-h-[44px] px-2 py-1 inline-flex items-center gap-2 text-xs font-mono text-[#A6B6A0] hover:text-[#EFA12D] transition-colors"
              >
                <span className="text-[#EFA12D] font-bold">PDF</span>
                <span>Download Resume</span>
              </a>
            </div>

            {/* Sign-off with Dark Humour */}
            <div className="pt-2 text-xs font-mono text-[#A6B6A0]/80">
              &ldquo;All errors logged. All promises handled. No spam tolerated.&rdquo;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
