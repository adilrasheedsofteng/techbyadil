import React from 'react';
import { Search, Compass, Code, Rocket, ShieldCheck, ArrowRight } from 'lucide-react';


export const HowIWork: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discover',
      tagline: 'Deep dive into objectives & constraints',
      description: 'Understanding your business goals, target audience, technical constraints, timeline targets, and desired operational outcome before writing a single line of code.',
      icon: Search,
      deliverables: [
        'Requirements & feature scope alignment',
        'Technical stack & platform feasibility check',
        'Risk assessment & milestone roadmap'
      ]
    },
    {
      step: '02',
      title: 'Plan',
      tagline: 'Architecture blueprint & specification',
      description: 'Defining database models, API contracts, interface wireframes, component architectures, and transparent weekly sprint deliverables.',
      icon: Compass,
      deliverables: [
        'System architecture diagram & data schema',
        'Component hierarchy & interface specifications',
        'Sprint timeline & deliverables schedule'
      ]
    },
    {
      step: '03',
      title: 'Build',
      tagline: 'Iterative development & regular demos',
      description: 'Developing modular, typed code with continuous progress updates, automated unit checks, cross-device responsiveness testing, and regular feedback reviews.',
      icon: Code,
      deliverables: [
        'Iterative functional staging demos',
        'Strict type-checking and automated tests',
        'Client feedback loops and sprint adjustments'
      ]
    },
    {
      step: '04',
      title: 'Deliver',
      tagline: 'Deployment, verification & handover',
      description: 'Deploying to production, performing security sanity checks, providing complete documentation, transfer of source code, and establishing warranty support.',
      icon: Rocket,
      deliverables: [
        'Production release & DNS/HTTPS verification',
        'Code repository handover & README documentation',
        'Agreed warranty period & ongoing support plan'
      ]
    }
  ];

  return (
    <section
      id="workflow"
      className="py-20 sm:py-28 bg-stone-100/60 dark:bg-slate-950/40 border-y border-stone-200/80 dark:border-slate-800/80"
      aria-labelledby="workflow-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-100/80 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-mono font-medium tracking-wide mb-3">
            <span>TRANSPARENT PROCESS</span>
          </div>
          <h2
            id="workflow-heading"
            className="text-2xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white"
          >
            How I Work With Clients
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 dark:text-slate-300 leading-relaxed">
            A collaborative, low-friction four-step workflow designed to deliver high-quality digital products on schedule without technical debt.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-white dark:bg-slate-900/90 border border-stone-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-blue-500/50 transition-all duration-300"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-stone-300 dark:text-slate-700">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title & Tagline */}
                  <h3 className="text-lg font-bold text-stone-900 dark:text-white">
                    {item.title}
                  </h3>
                  <div className="text-xs font-medium text-blue-600 dark:text-blue-400 mt-0.5 mb-3">
                    {item.tagline}
                  </div>

                  {/* Step Description */}
                  <p className="text-xs text-stone-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="pt-3 border-t border-stone-100 dark:border-slate-800/80 space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 font-semibold block">
                      Key Deliverables:
                    </span>
                    {item.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="text-xs text-stone-600 dark:text-slate-400 flex items-start gap-1.5">
                        <span className="text-emerald-500 font-bold shrink-0">•</span>
                        <span className="leading-snug">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scope, Timeline & Transparency Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-stone-50 dark:bg-slate-900/60 border border-stone-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-stone-900 dark:text-white">
                Scope & Revision Transparency
              </div>
              <p className="text-xs text-stone-600 dark:text-slate-400 mt-0.5 max-w-2xl leading-relaxed">
                Timelines, revisions, automated testing, and post-delivery support are clearly detailed and agreed upon upfront in the project scope before starting. No surprise charges or hidden clauses.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shrink-0 shadow-xs"
          >
            <span>Discuss Timeline & Scope</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
