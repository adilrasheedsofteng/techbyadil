import React from 'react';
import { projectsData } from '../data/projectsData';
import type { Project } from '../types';

import { GithubIcon } from './BrandIcons';
import {
  ExternalLink,
  BookOpen,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';


interface ProjectsProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenCaseStudy }) => {
  return (
    <section
      id="projects"
      className="py-20 sm:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-left max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-100/80 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-mono font-medium tracking-wide mb-3">
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>
          <h2
            id="projects-heading"
            className="text-2xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white"
          >
            Selected Work
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 dark:text-slate-300 leading-relaxed">
            A comprehensive selection of projects demonstrating my approach to solving real-world operational problems and engineering reliable digital products.
          </p>
        </div>

        {/* Editorial Projects Grid Showing All Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => {
            return (
              <article
                key={project.id}
                className="group rounded-3xl bg-white dark:bg-slate-900/90 border border-stone-200/90 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-2xl hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-300 text-left"
              >

                <div>
                  {/* Top Header: Badge, Category, and Action Buttons */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/40">
                        {project.badge}
                      </span>
                      <span className="text-[11px] font-mono text-stone-400">
                        {project.caseStudy.clientType}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-stone-400 hover:text-stone-800 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-stone-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors"
                          aria-label={`Open live demonstration of ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-mono text-stone-500 dark:text-slate-400">
                    {project.tagline}
                  </p>

                  {/* Interface / Architectural Graphic Preview Block */}
                  <div className="my-5 rounded-2xl bg-stone-950 text-stone-200 p-4 border border-stone-800/80 shadow-inner overflow-hidden">
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-stone-800 text-[10px] font-mono text-stone-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span>{project.id}.arch</span>
                      </div>
                      <span className="text-stone-400">{project.technologies.slice(0, 3).join(' • ')}</span>
                    </div>

                    {/* Stylized Visual Mockup for the Project */}
                    {project.id === 'promptia' && (
                      <div className="space-y-2 text-left">
                        <div className="flex items-center justify-between text-xs font-semibold text-white">
                          <span>Prompt Search & Feed</span>
                          <span className="text-[10px] text-blue-400 font-mono">#web-dev</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-[11px] text-stone-300">
                          "Generate a hardened Content-Security-Policy header configuration for Vite & Nginx with zero-trust directives..."
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-stone-400 font-mono">
                          <span>OAuth Session: Active</span>
                          <span className="text-emerald-400">Copy to Clipboard ✓</span>
                        </div>
                      </div>
                    )}

                    {project.id === 'inventory-management-system' && (
                      <div className="space-y-2 text-left">
                        <div className="flex items-center justify-between text-xs font-semibold text-white">
                          <span>Multi-Location Warehouse Node</span>
                          <span className="text-[10px] text-emerald-400 font-mono">RBAC Admin</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
                          <div className="p-1.5 bg-stone-900 rounded-lg border border-stone-800">
                            <span className="text-stone-400 block">Warehouse A</span>
                            <span className="font-bold text-white">1,420 units</span>
                          </div>
                          <div className="p-1.5 bg-stone-900 rounded-lg border border-stone-800">
                            <span className="text-stone-400 block">Warehouse B</span>
                            <span className="font-bold text-white">890 units</span>
                          </div>
                          <div className="p-1.5 bg-stone-900 rounded-lg border border-stone-800">
                            <span className="text-stone-400 block">Transit</span>
                            <span className="font-bold text-blue-400">120 units</span>
                          </div>
                        </div>
                        <div className="text-[10px] text-stone-400 font-mono flex items-center justify-between">
                          <span>Ledger: Immutable ACID Log</span>
                          <span className="text-emerald-400">Threshold Alert: OK</span>
                        </div>
                      </div>
                    )}

                    {project.id === 'cafe-management-system' && (
                      <div className="space-y-2 text-left font-mono text-[11px]">
                        <div className="flex items-center justify-between text-stone-300">
                          <span className="text-emerald-400">#include &lt;fstream&gt;</span>
                          <span className="text-[10px] text-stone-400">POSIX / C++ POS Engine</span>
                        </div>
                        <div className="p-2 rounded bg-stone-900 text-stone-300 text-[10px] space-y-0.5">
                          <div>[AUTH] Role = ShiftCashier</div>
                          <div>[TX] OrderID #8492 Processed: $42.50</div>
                          <div className="text-emerald-400">[DISK] Written to daily_ledger.dat (OK)</div>
                        </div>
                      </div>
                    )}

                    {project.id === 'pulse-metrics-saas' && (
                      <div className="space-y-2 text-left">
                        <div className="flex items-center justify-between text-xs font-semibold text-white">
                          <span>Operational KPI Pulse</span>
                          <span className="text-[10px] text-purple-400 font-mono">+28.4% QoQ</span>
                        </div>
                        {/* Custom sparkline visualization */}
                        <div className="h-10 w-full flex items-end gap-1 pt-2">
                          {[30, 45, 60, 40, 75, 90, 85, 95, 100].map((val, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-gradient-to-t from-blue-600 to-indigo-500 rounded-t"
                              style={{ height: `${val}%` }}
                            ></div>
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-stone-400 font-mono">
                          <span>Latency: &lt;45ms</span>
                          <span className="text-emerald-400">CLS: 0.00</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-stone-600 dark:text-slate-300 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Key Features List */}
                  <div className="mb-5 space-y-2">
                    <div className="text-xs font-mono font-semibold text-stone-800 dark:text-slate-200 uppercase tracking-wider">
                      Core Implementation Features:
                    </div>
                    <ul className="space-y-1.5 text-xs text-stone-600 dark:text-slate-300">
                      {project.keyFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Actions: Technologies & View Case Study Modal */}
                <div className="pt-4 border-t border-stone-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-100 dark:bg-slate-800 text-stone-600 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenCaseStudy(project)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-stone-900 hover:bg-blue-600 dark:bg-slate-800 dark:hover:bg-blue-600 transition-colors shadow-xs shrink-0 focus-visible:outline-2 focus-visible:outline-blue-500"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
