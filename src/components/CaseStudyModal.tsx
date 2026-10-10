import React, { useEffect, useRef } from 'react';
import type { Project } from '../types';
import { GithubIcon } from './BrandIcons';
import {
  X,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers
} from 'lucide-react';


interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectService?: (serviceName: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectService
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Focus initial close button for accessibility
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-stone-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        // Light dismiss on backdrop click
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-2xl overflow-y-auto text-left flex flex-col my-auto"
      >
        {/* Sticky Modal Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50">
              {caseStudy.clientType}
            </span>
            <span className="text-xs text-stone-400">•</span>
            <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">Case Study</span>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500"
            aria-label="Close Case Study Dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* 1. Title & Tagline */}
          <div>
            <h2
              id="case-study-title"
              className="text-2xl sm:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight"
            >
              {project.title}
            </h2>
            <p className="mt-2 text-base sm:text-lg text-stone-600 dark:text-slate-300 font-medium leading-relaxed">
              {project.tagline}
            </p>

            {/* Quick Links / Actions */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo / App</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-stone-800 dark:text-stone-200 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-100 dark:border-stone-800/80">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* 2. Overview & Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-950/60 border border-stone-200/80 dark:border-stone-800/80">
              <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-stone-900 dark:text-white mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-500" />
                <span>Project Overview</span>
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40">
              <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-rose-900 dark:text-rose-300 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-500" />
                <span>Problem Addressed</span>
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>
          </div>

          {/* 3. Project Goals */}
          <div>
            <h3 className="text-base font-bold text-stone-900 dark:text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Project Goals & Success Criteria</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.goals.map((goal, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200/70 dark:border-stone-800 text-xs text-stone-700 dark:text-stone-300 flex items-start gap-2.5"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{goal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Proposed Solution & Architecture */}
          <div className="p-5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40">
            <h3 className="text-base font-bold text-blue-950 dark:text-blue-300 mb-2 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-blue-500" />
              <span>Proposed Solution & Technical Approach</span>
            </h3>
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>

          {/* 5. My Responsibilities */}
          <div>
            <h3 className="text-base font-bold text-stone-900 dark:text-white mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-500" />
              <span>My Role & Engineering Responsibilities</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.responsibilities.map((resp, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200/70 dark:border-stone-800 text-xs text-stone-700 dark:text-stone-300 flex items-start gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{resp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Important Implementation Decisions */}
          <div>
            <h3 className="text-base font-bold text-stone-900 dark:text-white mb-3">
              Key Architectural Decisions & Rationale
            </h3>
            <div className="space-y-3">
              {caseStudy.implementationDecisions.map((dec, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200/70 dark:border-stone-800 text-left"
                >
                  <div className="text-sm font-semibold text-stone-900 dark:text-white mb-1">
                    {dec.title}
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    {dec.rationale}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Challenges & Solutions */}
          <div>
            <h3 className="text-base font-bold text-stone-900 dark:text-white mb-3">
              Engineering Challenges Trapped & Solved
            </h3>
            <div className="space-y-3">
              {caseStudy.challengesAndSolutions.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200/70 dark:border-stone-800 space-y-2 text-left"
                >
                  <div className="text-xs font-semibold text-rose-600 dark:text-rose-400 flex items-start gap-1.5">
                    <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-rose-100 dark:bg-rose-950/60">
                      Challenge
                    </span>
                    <span>{item.challenge}</span>
                  </div>
                  <div className="text-xs font-medium text-emerald-700 dark:text-emerald-400 flex items-start gap-1.5 pl-2 border-l-2 border-emerald-500">
                    <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60">
                      Solution
                    </span>
                    <span className="text-stone-700 dark:text-stone-300 font-normal">
                      {item.solution}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 8. Outcome & Status */}
          <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40">
            <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-300 mb-1 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Project Outcome & Current Status</span>
            </h3>
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              {caseStudy.outcome}
            </p>
          </div>

          {/* 9. Modal Call to Action */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-bold text-lg">Planning a similar digital product?</div>
              <p className="text-xs text-blue-100 mt-0.5">
                Let's discuss requirements, architectural trade-offs, and estimated timelines.
              </p>
            </div>
            <a
              href="#contact"
              onClick={() => {
                onClose();
                if (onSelectService) {
                  onSelectService(
                    project.category === 'Web Application'
                      ? 'Web Application Development'
                      : project.category === 'Mobile & Desktop'
                      ? 'Mobile App Development'
                      : 'Backend and API Development'
                  );
                }
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-blue-900 bg-white hover:bg-blue-50 transition-colors shrink-0 flex items-center gap-2 shadow-sm"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
