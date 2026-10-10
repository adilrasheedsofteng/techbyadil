import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { PrivacyModal } from './PrivacyModal';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { Mail, MessageSquare, ArrowUp } from 'lucide-react';


interface FooterProps {
  onSelectService: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#08090d] border-t border-stone-200 dark:border-slate-800 text-stone-600 dark:text-slate-400 text-left transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-xs">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base text-stone-900 dark:text-white tracking-tight">
                  {siteConfig.name}
                </span>
                <span className="text-[11px] font-mono text-stone-500 dark:text-slate-400">
                  {siteConfig.brand} • Digital Development Studio
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Transforming ambitious ideas into reliable mobile apps, modern web applications, and practical digital solutions for businesses worldwide.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-slate-800/80 hover:bg-stone-200 dark:hover:bg-slate-700 text-stone-700 dark:text-slate-300 flex items-center justify-center transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-slate-800/80 hover:bg-stone-200 dark:hover:bg-slate-700 text-stone-700 dark:text-slate-300 flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />

              </a>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 flex items-center justify-center transition-colors"
                aria-label="WhatsApp Contact"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-slate-800/80 hover:bg-stone-200 dark:hover:bg-slate-700 text-stone-700 dark:text-slate-300 flex items-center justify-center transition-colors"
                aria-label="Email Inquiry"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 dark:text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 dark:text-white">
              Capabilities
            </div>
            <ul className="space-y-2 text-xs">
              {[
                'Mobile App Development',
                'Web Application Development',
                'Backend and API Development',
                'UI Implementation',
                'Bug Fixing and Maintenance'
              ].map((svc, idx) => (
                <li key={idx}>
                  <a
                    href="#contact"
                    onClick={() => onSelectService(svc)}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Availability & Direct Connect (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 dark:text-white">
              Status
            </div>
            <div className="text-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{siteConfig.availability.label}</span>
              </div>
              <div className="text-stone-500 dark:text-slate-400 text-[11px]">
                {siteConfig.availability.quarter} Sprints
              </div>
              <button
                type="button"
                onClick={scrollToTop}
                className="mt-3 inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Privacy */}
        <div className="pt-8 border-t border-stone-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span>© 2026 {siteConfig.name} ({siteConfig.brand}). All rights reserved.</span>
          </div>


          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-stone-900 dark:hover:text-white transition-colors underline"
            >
              Privacy & Security
            </button>
            <span>•</span>
            <span className="font-mono text-[11px] text-stone-400">
              {siteConfig.domain}
            </span>
          </div>
        </div>
      </div>

      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </footer>
  );
};
