"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { Project, getAllProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ChevronLeftIcon, ChevronRightIcon, LayersIcon, CloseIcon, ExternalLinkIcon, GithubIcon } from "@/components/Icons";

export const ProjectCarousel: React.FC = () => {
  const projects = getAllProjects();
  const trackRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);

  const updateScrollState = useCallback(() => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;

    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    const firstCard = trackRef.current.firstElementChild as HTMLElement;
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 24;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.min(Math.max(0, newIndex), projects.length - 1));
    }
  }, [projects.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    updateScrollState();

    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollToIndex = (index: number) => {
    if (!trackRef.current) return;
    const cards = trackRef.current.children;
    const targetCard = cards[Math.min(Math.max(0, index), cards.length - 1)] as HTMLElement;
    if (targetCard) {
      targetCard.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start"
      });
    }
  };

  const handlePrev = () => {
    if (!trackRef.current) return;
    const firstCard = trackRef.current.firstElementChild as HTMLElement;
    const scrollAmount = (firstCard?.offsetWidth || 340) + 24;
    trackRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const handleNext = () => {
    if (!trackRef.current) return;
    const firstCard = trackRef.current.firstElementChild as HTMLElement;
    const scrollAmount = (firstCard?.offsetWidth || 340) + 24;
    trackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28 bg-[#08120E] text-[#F5ECDD] relative overflow-x-clip dark-grid scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#1E4332]">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#EFA12D] tracking-widest uppercase">
              <span>[ FEATURED SYSTEMS ]</span>
              <span>•</span>
              <span className="text-[#34D399]">PRODUCTION READY</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5ECDD]">
              Built to Survive Load.
            </h2>
            <p className="text-sm sm:text-base text-[#A6B6A0] leading-relaxed">
              Full-stack and backend systems built with concurrency locks, decimal-safe ledgers, and zero tolerance for silent data loss.
            </p>
          </div>

          {/* Carousel Navigation Buttons & Pagination Indicator */}
          <div className="flex items-center gap-4">
            <div className="font-mono text-xs text-[#EFA12D] bg-[#0E241B] px-3.5 py-1.5 rounded-full border border-[#1E4332]">
              {String(currentIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={!canScrollLeft}
                aria-label="Previous project slide"
                className={`p-2.5 rounded-full border transition-all ${
                  canScrollLeft
                    ? "bg-[#0E241B] text-[#F5ECDD] border-[#1E4332] hover:bg-[#163628] hover:text-[#EFA12D] cursor-pointer"
                    : "bg-[#08120E] text-[#A6B6A0]/30 border-transparent cursor-not-allowed opacity-40"
                }`}
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={!canScrollRight}
                aria-label="Next project slide"
                className={`p-2.5 rounded-full border transition-all ${
                  canScrollRight
                    ? "bg-[#0E241B] text-[#F5ECDD] border-[#1E4332] hover:bg-[#163628] hover:text-[#EFA12D] cursor-pointer"
                    : "bg-[#08120E] text-[#A6B6A0]/30 border-transparent cursor-not-allowed opacity-40"
                }`}
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Project Carousel Track */}
        <div
          ref={trackRef}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Featured Projects Carousel"
          className="carousel-track flex gap-6 pt-10 pb-6 focus:outline-none focus:ring-1 focus:ring-[#EFA12D] rounded-xl"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="carousel-item w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0"
            >
              <ProjectCard
                project={project}
                onSelectProject={(proj) => setSelectedProject(proj)}
              />
            </div>
          ))}
        </div>

        {/* Carousel Bottom Indicator Dots & Expand Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#1E4332]">
          {/* Indicator dots */}
          <div className="flex items-center gap-2">
            {projects.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  currentIndex === idx
                    ? "w-8 bg-[#EFA12D]"
                    : "w-2 bg-[#1E4332] hover:bg-[#A6B6A0]"
                }`}
              />
            ))}
          </div>

          {/* View All Projects Modal Trigger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowAllModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider bg-[#0E241B] text-[#F5ECDD] hover:bg-[#163628] hover:text-[#EFA12D] border border-[#1E4332] transition-all cursor-pointer font-semibold"
            >
              <LayersIcon className="w-4 h-4 text-[#EFA12D]" />
              <span>View All Systems ({projects.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#0A1612] border border-[#1E4332] rounded-2xl p-6 sm:p-8 text-[#F5ECDD] shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#0E241B] text-[#A6B6A0] hover:text-[#F5ECDD] hover:bg-[#163628] cursor-pointer"
              aria-label="Close project details"
            >
              <CloseIcon className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-10">
              <div className="flex items-center gap-2 font-mono text-xs text-[#EFA12D]">
                <span>{selectedProject.category}</span>
                <span>•</span>
                <span className="text-[#34D399]">● {selectedProject.status}</span>
              </div>
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#F5ECDD]">
                {selectedProject.title}
              </h3>
              {selectedProject.badge && (
                <p className="font-mono text-xs text-[#EFA12D] tracking-wider uppercase font-semibold">
                  [ {selectedProject.badge} ]
                </p>
              )}
            </div>

            {/* Detailed Description */}
            <div className="pt-4 space-y-4 text-sm text-[#A6B6A0] leading-relaxed">
              <p>{selectedProject.detailedDescription}</p>

              {/* System Metrics */}
              {selectedProject.systemMetrics && (
                <div className="grid grid-cols-2 gap-3 py-2">
                  {selectedProject.systemMetrics.map((metric, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-[#0E241B] border border-[#1E4332]">
                      <span className="block font-mono text-[10px] text-[#A6B6A0] uppercase">
                        {metric.label}
                      </span>
                      <span className="block font-mono text-sm font-bold text-[#EFA12D] mt-0.5">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Backend Architecture Highlights */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#34D399] font-semibold">
                  System Architecture Highlights :
                </span>
                <ul className="space-y-2">
                  {selectedProject.backendHighlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#F5ECDD]/90">
                      <span className="text-[#EFA12D] text-sm">▸</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech tags */}
              <div className="pt-2">
                <span className="block font-mono text-[11px] text-[#A6B6A0] mb-2 uppercase">
                  Tech Stack :
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-[#0E241B] text-[#F5ECDD] border border-[#1E4332]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#1E4332]">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono bg-[#0E241B] text-[#F5ECDD] hover:bg-[#163628] hover:text-[#EFA12D] border border-[#1E4332] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono bg-[#EFA12D] text-[#08120E] font-bold hover:bg-[#F5ECDD] transition-colors"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                    <span>Live Preview</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View All Projects Full Grid Modal */}
      {showAllModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-5xl bg-[#0A1612] border border-[#1E4332] rounded-2xl p-6 sm:p-8 text-[#F5ECDD] shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setShowAllModal(false)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#0E241B] text-[#A6B6A0] hover:text-[#F5ECDD] hover:bg-[#163628] cursor-pointer"
              aria-label="Close all projects view"
            >
              <CloseIcon className="w-5 h-5" />
            </button>

            <div className="space-y-1 pb-6 border-b border-[#1E4332]">
              <span className="font-mono text-xs text-[#EFA12D] uppercase tracking-wider font-semibold">
                SYSTEMS ARCHIVE
              </span>
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold">
                All Projects &amp; Microservices ({projects.length})
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
              {projects.map((proj) => (
                <div key={proj.id} className="h-full">
                  <ProjectCard
                    project={proj}
                    onSelectProject={(p) => {
                      setShowAllModal(false);
                      setSelectedProject(p);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
