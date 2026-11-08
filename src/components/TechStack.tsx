"use client";

import React, { useState, useRef, useEffect } from "react";
import { techStackData } from "@/data/technologies";
import { ServerIcon, DatabaseIcon, LayersIcon, TerminalIcon } from "@/components/Icons";

const groupIcons: Record<string, React.ReactNode> = {
  backend: <ServerIcon className="w-5 h-5 text-[#EFA12D] shrink-0" />,
  databases: <DatabaseIcon className="w-5 h-5 text-[#EFA12D] shrink-0" />,
  frontend: <LayersIcon className="w-5 h-5 text-[#EFA12D] shrink-0" />,
  tools: <TerminalIcon className="w-5 h-5 text-[#EFA12D] shrink-0" />
};

export const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [isFading, setIsFading] = useState<boolean>(false);
  const tabListRef = useRef<HTMLDivElement>(null);

  const tabs = [
    {
      id: "all",
      label: `All Categories (${techStackData.reduce((acc, g) => acc + g.items.length, 0)})`
    },
    ...techStackData.map((g) => ({
      id: g.id,
      label: `${g.title} (${g.items.length})`
    }))
  ];

  const handleTabChange = (newTab: string) => {
    if (newTab === activeTab) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveTab(newTab);
      setIsFading(false);
    }, 120);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % tabs.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    const nextTabId = tabs[nextIndex].id;
    handleTabChange(nextTabId);

    // Focus the next tab button
    if (tabListRef.current) {
      const buttons = tabListRef.current.querySelectorAll<HTMLButtonElement>("button[role='tab']");
      buttons[nextIndex]?.focus();
      buttons[nextIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  const displayedGroups =
    activeTab === "all"
      ? techStackData
      : techStackData.filter((group) => group.id === activeTab);

  return (
    <section
      id="stack"
      className="py-16 sm:py-20 md:py-28 bg-[#091410] text-[#F5ECDD] relative border-b border-[#1E4332] dark-grid scroll-mt-24 overflow-x-clip"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-[#1E4332]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#EFA12D] tracking-widest uppercase">
              <span>[ ARSENAL &amp; TOOLING ]</span>
              <span>•</span>
              <span className="text-[#34D399]">MODULAR CAPABILITIES</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5ECDD] leading-tight">
              Tools &amp; Weapons of Choice.
            </h2>
          </div>
          <div className="max-w-md text-sm text-[#A6B6A0] leading-relaxed">
            Curated toolkit chosen for backend resilience, relational integrity, predictable data
            flows, and zero unnecessary bloat.
          </div>
        </div>

        {/* Accessible Category Tablist with Horizontal Scroll on Mobile */}
        <div className="pt-6 sm:pt-8 pb-4 relative z-20">
          <div
            ref={tabListRef}
            role="tablist"
            aria-label="Technology Stack Categories"
            className="flex items-center gap-2 overflow-x-auto pb-2 scroll-smooth scrollbar-none snap-x touch-pan-x"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {tabs.map((tab, idx) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  aria-controls={`tabpanel-${tab.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => handleTabChange(tab.id)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`min-h-[44px] px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer snap-start shrink-0 select-none flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#EFA12D] ${
                    isSelected
                      ? "bg-[#EFA12D] text-[#08120E] font-bold shadow-md ring-1 ring-[#EFA12D]"
                      : "bg-[#0E241B] text-[#A6B6A0] hover:text-[#F5ECDD] hover:bg-[#153426] border border-[#1E4332]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tabpanel Grid with Fade Transition */}
        <div
          id={`tabpanel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4 transition-opacity duration-200 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {displayedGroups.map((group) => (
            <div
              key={group.id}
              className="rounded-2xl bg-[#0C1E17] border border-[#1E4332] p-5 sm:p-7 shadow-lg hover:border-[#10B981]/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4 sm:space-y-5">
                {/* Group Header */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#1E4332]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#143326] text-[#EFA12D]">
                      {groupIcons[group.id] || <ServerIcon className="w-5 h-5 text-[#EFA12D]" />}
                    </div>
                    <div>
                      <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#F5ECDD]">
                        {group.title}
                      </h3>
                      <span className="font-mono text-[10px] text-[#34D399] font-semibold tracking-wider">
                        {group.subtitle}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#EFA12D] bg-[#143326] px-2.5 py-1 rounded-md border border-[#1E4332] shrink-0">
                    [ {group.stepNumber} ]
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#A6B6A0] leading-relaxed">
                  {group.description}
                </p>

                {/* Individual Technology Items */}
                <div className="space-y-2.5 pt-1">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="group/item p-3.5 rounded-xl bg-[#0E251C] hover:bg-[#122F24] border border-[#1E4332] hover:border-[#EFA12D]/50 transition-all"
                    >
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] group-hover/item:bg-[#EFA12D] transition-colors shrink-0" />
                          <span className="font-serif-heading text-base font-bold text-[#F5ECDD]">
                            {item.name}
                          </span>
                          <span className="text-[11px] font-mono text-[#A6B6A0]/70">
                            • {item.role}
                          </span>
                        </div>
                        {item.badge && (
                          <span className="font-mono text-[10px] text-[#34D399] font-bold bg-[#143326] px-2 py-0.5 rounded border border-[#1E4332]">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#A6B6A0] mt-1 pl-3.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Group Footer Note */}
              <div className="pt-4 mt-4 border-t border-[#1E4332] flex items-center justify-between text-[11px] font-mono text-[#A6B6A0]/70">
                <span>TOTAL: {group.items.length} ITEMS</span>
                <span className="text-[#34D399]">VERIFIED IN PRODUCTION</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
