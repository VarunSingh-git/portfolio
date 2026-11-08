"use client";

import React from "react";
import { Project } from "@/data/projects";
import { GithubIcon, ExternalLinkIcon, ServerIcon, DatabaseIcon, LayersIcon, TerminalIcon } from "@/components/Icons";

interface ProjectCardProps {
  project: Project;
  onSelectProject?: (project: Project) => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  "Full-Stack System": <LayersIcon className="w-4 h-4 text-[#EFA12D]" />,
  "Backend & API": <ServerIcon className="w-4 h-4 text-[#EFA12D]" />,
  "Database Architecture": <DatabaseIcon className="w-4 h-4 text-[#EFA12D]" />,
  "Web Application": <TerminalIcon className="w-4 h-4 text-[#EFA12D]" />
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  return (
    <article className="flex flex-col h-full bg-[#0C1E17] rounded-2xl overflow-hidden border border-[#1E4332] shadow-xl transition-all duration-300 hover:border-[#EFA12D]/70 hover:shadow-2xl hover:-translate-y-1 group p-6 sm:p-7 justify-between">
      <div className="space-y-4">
        {/* Top Header Row: Category & Status */}
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#1E4332]">
          <div className="flex items-center gap-2">
            {categoryIcons[project.category] || <ServerIcon className="w-4 h-4 text-[#EFA12D]" />}
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#A6B6A0]">
              {project.category}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wider bg-[#143326] text-[#34D399] border border-[#1E4332]">
              ● {project.status}
            </span>
            <span className="font-mono text-xs font-bold text-[#A6B6A0]">
              0{project.order}
            </span>
          </div>
        </div>

        {/* Project Title & Badge */}
        <div className="space-y-2">
          <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#F5ECDD] leading-snug group-hover:text-[#EFA12D] transition-colors">
            {project.title}
          </h3>

          {project.badge && (
            <div className="inline-block">
              <span className="font-mono text-[10px] text-[#EFA12D] bg-[#143326] px-2.5 py-1 rounded border border-[#1E4332] font-semibold tracking-wide">
                [ {project.badge} ]
              </span>
            </div>
          )}
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[#A6B6A0] leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Backend Highlights Bulleted */}
        {project.backendHighlights && project.backendHighlights.length > 0 && (
          <div className="pt-2 border-t border-[#1E4332] space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#34D399] font-semibold">
              Key Architecture Highlights :
            </span>
            <ul className="space-y-1.5">
              {project.backendHighlights.slice(0, 3).map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#F5ECDD]/85 leading-tight">
                  <span className="text-[#EFA12D] text-xs mt-0.5">▸</span>
                  <span className="line-clamp-2">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer Area: Tech Tags & Action Buttons */}
      <div className="space-y-4 pt-4 mt-4 border-t border-[#1E4332]">
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#143326] text-[#F5ECDD] border border-[#1E4332]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#143326] text-[#EFA12D]">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#143326] text-[#F5ECDD] hover:bg-[#1C4635] hover:text-[#EFA12D] border border-[#1E4332] transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#143326] text-[#F5ECDD] hover:bg-[#1C4635] hover:text-[#EFA12D] border border-[#1E4332] transition-colors"
                aria-label={`Visit live preview for ${project.title}`}
              >
                <ExternalLinkIcon className="w-3.5 h-3.5" />
                <span>Live</span>
              </a>
            )}
          </div>

          {onSelectProject && (
            <button
              type="button"
              onClick={() => onSelectProject(project)}
              className="text-xs font-mono text-[#EFA12D] hover:underline flex items-center gap-1 cursor-pointer font-semibold"
            >
              <span>Details</span>
              <span>→</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
