import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { ArrowRight, Code2, Sparkles, CheckCircle2, ShieldCheck, Calculator } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden"
      aria-label="Introduction & Studio Overview"
    >
      {/* Subtle decorative background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] sm:w-[850px] sm:h-[500px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-violet-500/5 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Live Availability Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 text-xs font-medium text-emerald-800 dark:text-emerald-300 shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{siteConfig.availability.label}</span>
          <span className="text-stone-300 dark:text-stone-600">•</span>
          <span className="font-mono text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold">{siteConfig.availability.quarter}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-950 dark:text-white leading-[1.1] max-w-4xl mx-auto">
          Turning Ideas Into <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-400">
            Digital Products
          </span> That Work.
        </h1>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl text-stone-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {siteConfig.subTagline}
        </p>

        {/* Personal Introduction Card */}
        <div className="max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-stone-200 dark:border-slate-800 shadow-xs backdrop-blur-xs text-left">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-slate-400 font-medium">
                Independent Software Developer • Adil Rasheed
              </div>
              <p className="text-sm font-medium text-stone-800 dark:text-slate-200 mt-1 leading-snug">
                {siteConfig.intro}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-md shadow-blue-600/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-sm focus-visible:outline-2 focus-visible:outline-blue-500"
          >
            <span>Explore Completed Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#estimator"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-stone-800 dark:text-stone-100 bg-white dark:bg-slate-800/80 hover:bg-stone-50 dark:hover:bg-slate-800 border border-stone-200 dark:border-slate-700 shadow-xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-sm focus-visible:outline-2 focus-visible:outline-blue-500"
          >
            <Calculator className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Estimate Scope & Cost</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-stone-700 dark:text-stone-200 hover:text-stone-900 dark:hover:text-white transition-all duration-200 text-sm"
          >
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span>Start a Project</span>
          </a>
        </div>

        {/* Core Tech Stack Badges */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {[
            'React 19',
            'TypeScript',
            'Next.js',
            'Node.js',
            'PostgreSQL',
            'Tailwind CSS v4',
            'Flutter',
            'REST & GraphQL APIs',
            'Zero-Trust Security'
          ].map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-stone-100 dark:bg-slate-800/60 border border-stone-200 dark:border-slate-700 text-stone-700 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Value Guarantees Strip */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-stone-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Direct developer communication</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>No fabricated client claims</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
            <span>24-Hour response guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};
