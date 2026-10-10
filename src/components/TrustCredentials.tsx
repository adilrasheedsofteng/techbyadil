import React from 'react';
import { ShieldCheck, Lock, GitBranch, Code2, Terminal } from 'lucide-react';

import { siteConfig } from '../data/siteConfig';

export const TrustCredentials: React.FC = () => {
  const principles = [
    {
      title: 'Direct Developer Partnership',
      description: 'You communicate directly with the engineer writing your code. No middlemen, no account managers translating requirements, and no miscommunication.',
      icon: Code2
    },
    {
      title: 'No Fabricated Claims',
      description: 'Every project shown on this portfolio is real work with genuine architectures. I do not invent fake client logos, artificial reviews, or inflated statistics.',
      icon: ShieldCheck
    },
    {
      title: 'Production-Grade Security',
      description: 'Strict Content Security Policies, ReDoS-safe validation, anti-bot defenses, environment secret separation, and zero hardcoded credentials.',
      icon: Lock
    },
    {
      title: 'Clean, Maintainable Code',
      description: 'Typed TypeScript, modular components, relational data integrity, and readable codebases designed so any engineer can pick them up effortlessly.',
      icon: GitBranch
    }
  ];

  return (
    <section
      className="py-16 sm:py-24"
      aria-label="Engineering Standards and Trust"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100/80 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-medium tracking-wide mb-3">
            <span>CREDIBILITY & STANDARDS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white">
            Built on Real Craftsmanship, Not Hype
          </h2>
          <p className="mt-3 text-base text-stone-600 dark:text-slate-300 leading-relaxed">
            When you hire an independent developer, you need dependability, transparency, and high technical execution. Here is what you can always rely on:
          </p>
        </div>

        {/* 4 Pillars of Engineering Integrity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-stone-200 dark:border-slate-800 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-stone-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verifiable Tech Capabilities Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-stone-950 text-stone-200 border border-stone-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <Terminal className="w-4 h-4" />
              <span>CORE TECHNICAL ARSENAL</span>
            </div>
            <div className="text-sm font-semibold text-white">
              React • Next.js • TypeScript • Node.js • Express • PostgreSQL • MongoDB • C++ • Tailwind CSS
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 hover:text-white transition-colors"
            >
              Verify Code on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
