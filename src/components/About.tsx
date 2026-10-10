import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { ResumeModal } from './ResumeModal';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import {
  FileText,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';


export const About: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section
      id="about"
      className="py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Profile Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-stone-900 text-white p-6 sm:p-8 border border-stone-800 shadow-2xl overflow-hidden">
              {/* Background gradient orb */}
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10"
                aria-hidden="true"
              ></div>

              {/* Developer Monogram Avatar */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-blue-600/30">
                  AR
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {siteConfig.name}
                  </h3>
                  <div className="text-xs font-mono text-blue-400 mt-0.5">
                    {siteConfig.brand} • Digital Product Engineer
                  </div>
                  <div className="text-[11px] text-stone-400 mt-0.5">
                    {siteConfig.contact.location}
                  </div>
                </div>
              </div>

              {/* Engineering Philosophy Pillars */}
              <div className="space-y-3 pt-2 border-t border-stone-800">
                <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
                  Working Philosophy:
                </div>
                {[
                  { title: 'Clarity First', desc: 'No jargon or guesswork. Direct, straightforward communication.' },
                  { title: 'Resilient Foundations', desc: 'Typed architectures, safe schemas, and zero fragile hacks.' },
                  { title: 'Client Partnership', desc: 'Transparent sprint updates, collaborative feedback, and honest advice.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-stone-950/70 border border-stone-800/80 text-xs">
                    <span className="font-bold text-white block mb-0.5">{item.title}</span>
                    <span className="text-stone-400 leading-snug">{item.desc}</span>
                  </div>
                ))}
              </div>

              {/* Download / View CV Button */}
              <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setResumeOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-blue-500"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Curriculum Vitae (CV)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Copy & Links (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-100/80 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-mono font-medium tracking-wide">
              <span>ABOUT THE DEVELOPER</span>
            </div>

            <h2
              id="about-heading"
              className="text-2xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white"
            >
              A Developer Who Cares About the Details.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-stone-600 dark:text-slate-300 leading-relaxed">
              <p>
                I'm <strong>Adil Rasheed</strong>, a software developer who enjoys turning ideas into practical digital solutions. I focus on understanding project requirements, building intuitive experiences, and delivering reliable functionality.
              </p>
              <p>
                My approach combines clear communication, thoughtful implementation, attention to detail, and continuous improvement. Whether you need a new application, additional features, or help improving an existing product, I aim to make the development process straightforward and collaborative.
              </p>
              <p>
                I partner with businesses locally in Pakistan as well as international startups and companies across North America, Europe, the UK, and Australia — providing high-quality software engineering with dependable timezone overlap.
              </p>
            </div>

            {/* Capability Badges */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-stone-50 dark:bg-slate-900 border border-stone-200/80 dark:border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="font-medium text-stone-800 dark:text-slate-200">Modern Web & APIs</span>
              </div>
              <div className="p-3 rounded-xl bg-stone-50 dark:bg-slate-900 border border-stone-200/80 dark:border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="font-medium text-stone-800 dark:text-slate-200">Mobile Applications</span>
              </div>
              <div className="p-3 rounded-xl bg-stone-50 dark:bg-slate-900 border border-stone-200/80 dark:border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="font-medium text-stone-800 dark:text-slate-200">High-Reliability C++</span>
              </div>
            </div>

            {/* Social & Professional Profile Channels */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-stone-100 hover:bg-stone-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-stone-800 dark:text-stone-200 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-stone-100 hover:bg-stone-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-stone-800 dark:text-stone-200 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-600" />

                <span>LinkedIn Profile</span>
              </a>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Reusable Modal for Resume */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
};
