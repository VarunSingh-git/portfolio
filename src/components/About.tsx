"use client";

import React, { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/data/site";
import {
  DatabaseIcon,
  ServerIcon,
  LayersIcon,
  ArrowRightIcon,
  FileTextIcon
} from "@/components/Icons";

interface Checkpoint {
  id: string;
  icon: string;
  phase: string;
  title: string;
  line: string;
  extra: string;
  isCurrent?: boolean;
}

const checkpoints: Checkpoint[] = [
  {
    id: "origin",
    icon: "🏡",
    phase: "ORIGIN",
    title: "Saharanpur, UP",
    line: "Eldest son. Left home to build one of my own.",
    extra: "Packed light, carried heavy."
  },
  {
    id: "12th",
    icon: "🎒",
    phase: "12TH",
    title: "PCM, then a plot twist",
    line: "NCC sir said: learn computers, the army needs them.",
    extra: "I didn't like computers. Perfect candidate."
  },
  {
    id: "bca",
    icon: "🎓",
    phase: "BCA",
    title: "Joined for the army",
    line: "Stayed for the code.",
    extra: "The army quietly left the chat. 🫡"
  },
  {
    id: "first-code",
    icon: "😂",
    phase: "FIRST CODE",
    title: "Hello, World",
    line: "One missing semicolon. One hour gone.",
    extra: "Dignity: also gone."
  },
  {
    id: "detour",
    icon: "🧭",
    phase: "DETOUR",
    title: "Tutorial tourist",
    line: "PHP, Python, React. Nothing fit.",
    extra: "Great taste in what I don't like."
  },
  {
    id: "mentor",
    icon: "☕",
    phase: "MENTOR",
    title: "Chai aur Code",
    line: "Met Hitesh sir. Node.js began.",
    extra: "First teacher who explained like a human, not a compiler error."
  },
  {
    id: "backend",
    icon: "🗄️",
    phase: "BACKEND",
    title: "CSS made me sleepy",
    line: "Servers and databases didn't. Learned DBMS with seniors, paid in chai.",
    extra: "Choose the job that doesn't need a nap."
  },
  {
    id: "now",
    icon: "🚀",
    phase: "NOW",
    title: "Still building",
    line: "Real client projects, MCA on the side.",
    extra: "Initial phase, not final form.",
    isCurrent: true
  }
];

const whatISolve = [
  {
    title: "Databases that don't panic",
    description: "Schemas that stay consistent when everything else is on fire.",
    icon: <DatabaseIcon className="w-5 h-5 text-[#EFA12D]" />
  },
  {
    title: "Backends that stay calm",
    description: "APIs and edge cases, so 'Submit' x7 isn't a crisis.",
    icon: <ServerIcon className="w-5 h-5 text-[#EFA12D]" />
  },
  {
    title: "Frontends humans can use",
    description: "Clean UIs, so nobody reads raw JSON.",
    icon: <LayersIcon className="w-5 h-5 text-[#EFA12D]" />
  }
];

const beyondCodeChips = [
  "📚 Psychology and money books",
  "✍️ Hindi poetry",
  "📷 Photography"
];

export const About: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const roadmapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number | null = null;

    const updateProgress = () => {
      if (!roadmapRef.current) return;
      const rect = roadmapRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Start line fill when roadmap top reaches 75% down viewport
      // Complete when roadmap bottom reaches 40% from top of viewport
      const start = viewportHeight * 0.75;
      const end = viewportHeight * 0.4 - rect.height;
      const totalRange = start - end;
      const rawProgress = (start - rect.top) / (totalRange || 1);
      const clamped = Math.min(Math.max(rawProgress, 0), 1);
      setScrollProgress(clamped);
    };

    const onScrollOrResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    document.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("touchmove", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    window.addEventListener("orientationchange", onScrollOrResize, { passive: true });

    // Initial calculation on mount and after short delay for fonts/layout
    updateProgress();
    const timer = setTimeout(updateProgress, 100);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      document.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("touchmove", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("orientationchange", onScrollOrResize);
      clearTimeout(timer);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="who-i-am"
      className="py-16 sm:py-20 md:py-28 bg-[#091410] text-[#F5ECDD] relative border-b border-[#1E4332] dark-grid overflow-x-clip scroll-mt-24"
      style={{ minHeight: "100dvh" }}
    >
      {/* Soft radial teal glow behind roadmap */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(45, 212, 160, 0.08) 0%, transparent 65%)"
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-20">
        {/* ========================================================= */}
        {/* A) HEADER */}
        {/* ========================================================= */}
        <header className="border-b border-[#1E4332] pb-8 space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-mono text-[#EFA12D] tracking-widest uppercase">
            <span>// WHO_I_AM</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5ECDD] tracking-tight leading-tight">
            Plan A was the army. Plan B was a semicolon.
          </h2>

          <p className="font-mono text-sm sm:text-base text-[#A6B6A0] italic">
            Tier-3 college. Tier-1 curiosity.
          </p>
        </header>

        {/* ========================================================= */}
        {/* B) INTRO */}
        {/* ========================================================= */}
        <div className="space-y-4 max-w-[60ch]">
          <p className="text-base sm:text-lg text-[#A6B6A0] leading-relaxed">
            I&apos;m Varun Singh, a MERN Stack developer from Saharanpur, UP. I build things that keep
            working at 3 AM, read psychology and money books like documentation, and let Hindi
            poetry keep my commits emotionally stable.
          </p>

          <p className="font-serif-heading text-lg sm:text-xl text-[#F5A130] italic font-semibold pt-1">
            &ldquo;Padhte rehna, banate rehna, bante rehna.&rdquo;
          </p>
        </div>

        {/* ========================================================= */}
        {/* C) ROADMAP (VERTICAL SCROLL-FILL PATH, NO NUMBERS) */}
        {/* ========================================================= */}
        <div ref={roadmapRef} className="relative pt-6 pb-4">
          {/* Vertical Guide Track (Desktop Center, Mobile Left) */}
          <div
            ref={trackRef}
            className="absolute top-4 bottom-4 left-6 md:left-1/2 -translate-x-1/2 w-[2px] pointer-events-none"
          >
            {/* Background Dashed Mint Line */}
            <div className="absolute inset-0 border-l-2 border-dashed border-[rgba(45,212,160,0.25)]" />

            {/* Active Glowing Amber Filled Line */}
            <div
              className="absolute top-0 left-0 w-[2.5px] bg-[#F5A130] shadow-[0_0_12px_#F5A130] transition-all duration-75 ease-out"
              style={{
                height: `${scrollProgress * 100}%`
              }}
            />

            {/* Traveler Dot: Glowing amber with mint halo moving seamlessly with line */}
            <div
              className="absolute left-0 z-20 pointer-events-none transition-all duration-75 ease-out"
              style={{
                top: `${scrollProgress * 100}%`,
                transform: "translate3d(-50%, -50%, 0)",
                willChange: "top"
              }}
            >
              <div className="w-4 h-4 rounded-full bg-[#F5A130] border-2 border-[#0B1D16] shadow-[0_0_12px_#F5A130,0_0_24px_#2DD4A0]" />
            </div>
          </div>

          {/* Checkpoints List */}
          <ol className="relative space-y-10 sm:space-y-12">
            {checkpoints.map((cp, idx) => {
              const nodeThreshold = idx / (checkpoints.length - 1);
              const isReached = scrollProgress >= nodeThreshold - 0.05;
              const isExpanded = expandedId === cp.id;
              const isEven = idx % 2 === 0;

              return (
                <li
                  key={cp.id}
                  className="relative flex items-center md:justify-between group"
                >
                  {/* Checkpoint Node (Center on Desktop, Left on Mobile) */}
                  <div
                    className={`absolute left-6 md:left-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center text-lg select-none transition-all duration-300 ${
                      cp.isCurrent
                        ? "bg-[#143326] border-2 border-[#F5A130] shadow-[0_0_20px_rgba(245,161,48,0.4)] ring-2 ring-[#34D399]/40"
                        : isReached
                        ? "bg-[#102B20] border-2 border-[#F5A130] shadow-[0_0_14px_rgba(245,161,48,0.25)] text-[#F5ECDD]"
                        : "bg-[#0B1D16] border border-[#1E4332] text-[#A6B6A0]/60 opacity-60"
                    }`}
                  >
                    <span>{cp.icon}</span>
                  </div>

                  {/* Desktop Alternating Cards / Mobile Right-Aligned Cards */}
                  <div
                    className={`w-full flex ${
                      isEven
                        ? "md:justify-start md:pr-[calc(50%+32px)]"
                        : "md:justify-end md:pl-[calc(50%+32px)]"
                    } pl-14 sm:pl-16 md:pl-0`}
                  >
                    <div
                      role="button"
                      tabIndex={0}
                      aria-expanded={isExpanded}
                      onClick={() => toggleExpand(cp.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleExpand(cp.id);
                        }
                      }}
                      className={`w-full max-w-[340px] p-4 rounded-[14px] transition-all duration-300 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#F5A130] ${
                        cp.isCurrent
                          ? "bg-[#122A20] border border-[#F5A130] shadow-[0_0_25px_rgba(245,161,48,0.2)] ring-1 ring-[#F5A130]/50"
                          : isReached
                          ? "bg-[#0B1D16]/85 backdrop-blur-md border border-[rgba(45,212,160,0.25)] shadow-md hover:border-[#F5A130]/70 hover:shadow-[0_0_20px_rgba(245,161,48,0.12)]"
                          : "bg-[#0B1D16]/50 border border-[#1E4332]/60 opacity-60 hover:opacity-100"
                      }`}
                    >
                      {/* Top Row: Phase + Pill */}
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-mono text-[10px] tracking-widest uppercase text-[#2DD4A0] font-semibold">
                          {cp.phase}
                        </span>

                        {cp.isCurrent && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#143326] text-[#34D399] border border-[#34D399]/40 animate-pulse">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                            YOU ARE HERE
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-serif-heading text-base sm:text-lg font-bold text-[#F5ECDD] leading-snug">
                        {cp.title}
                      </h3>

                      {/* Main Line */}
                      <p className="text-xs sm:text-sm text-[#A6B6A0] leading-relaxed mt-1">
                        {cp.line}
                      </p>

                      {/* Extra Line (Toggled on Click / Hover) */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-out ${
                          isExpanded
                            ? "max-h-24 opacity-100 mt-2 pt-2 border-t border-[rgba(45,212,160,0.15)]"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="font-mono text-xs text-[#F5A130] italic">
                          ✦ {cp.extra}
                        </p>
                      </div>

                      {/* Subtle expansion indicator */}
                      <div className="flex justify-end pt-1">
                        <span className="text-[10px] font-mono text-[#A6B6A0]/50 group-hover:text-[#F5A130] transition-colors">
                          {isExpanded ? "▲ collapse" : "▼ tap for notes"}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* ========================================================= */}
        {/* D) WHAT I SOLVE (3 COMPACT CARDS) */}
        {/* ========================================================= */}
        <div className="space-y-6 pt-4 border-t border-[#1E4332]">
          <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#F5ECDD]">
            What I solve
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {whatISolve.map((card, idx) => (
              <div
                key={idx}
                className="p-5 rounded-[14px] bg-[#0B1D16]/80 backdrop-blur-md border border-[rgba(45,212,160,0.2)] hover:border-[#F5A130]/60 transition-all shadow-sm space-y-2.5"
              >
                <div className="p-2 w-fit rounded-lg bg-[#143326]">{card.icon}</div>
                <h4 className="font-serif-heading text-lg font-bold text-[#F5ECDD]">
                  {card.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#A6B6A0] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <p className="font-mono text-xs text-[#A6B6A0]/70 text-center sm:text-left pt-1">
            Currently learning: Docker and DevOps.
          </p>
        </div>

        {/* ========================================================= */}
        {/* E) BEYOND CODE (ONE SINGLE ROW OF 3 GLASS CHIPS) */}
        {/* ========================================================= */}
        <div className="pt-2 border-t border-[#1E4332]">
          <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
            {beyondCodeChips.map((chip, idx) => (
              <span
                key={idx}
                className="min-h-[44px] px-4 py-2.5 inline-flex items-center justify-center rounded-full bg-[rgba(11,29,22,0.75)] backdrop-blur-md border border-[rgba(45,212,160,0.3)] text-xs sm:text-sm font-mono text-[#F3EFE6] shadow-sm select-none hover:border-[#F5A130]/50 transition-colors"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* F) CLOSING CTA */}
        {/* ========================================================= */}
        <div className="pt-6 border-t border-[#1E4332]">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0C1E17] border border-[#1E4332] text-center space-y-5 max-w-2xl mx-auto shadow-xl">
            <p className="font-serif-heading text-base sm:text-lg font-medium text-[#F5ECDD] italic">
              &ldquo;If you read this far, you&apos;re more patient than most production servers.&rdquo;
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#EFA12D] text-[#08120E] text-sm font-bold tracking-wide hover:bg-[#F5ECDD] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#EFA12D]"
              >
                <span>Let&apos;s Build Something</span>
                <ArrowRightIcon className="w-4 h-4 text-[#08120E]" />
              </a>

              <a
                href={siteConfig.resumeUrl}
                download="Varun-FullStack-Developer-Resume.pdf"
                className="min-h-[44px] inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0E241B] text-[#F5ECDD] text-sm font-medium border border-[#1E4332] hover:border-[#EFA12D] hover:bg-[#153426] transition-all focus:outline-none focus:ring-2 focus:ring-[#EFA12D]"
              >
                <FileTextIcon className="w-4 h-4 text-[#EFA12D]" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
