import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';

import { siteConfig } from '../data/siteConfig';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-heading"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-2xl p-6 sm:p-8 my-auto text-left space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <h2 id="privacy-heading" className="text-lg font-bold text-stone-950 dark:text-white">
              Privacy Policy & Data Security
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-stone-500 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            aria-label="Close Privacy Dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-stone-600 dark:text-slate-300 leading-relaxed">
          <p>
            This website (<strong>{siteConfig.domain}</strong>) is operated by Adil Rasheed. Your privacy and intellectual property are treated with strict confidentiality.
          </p>

          <div className="space-y-2">
            <div className="font-bold text-stone-900 dark:text-white">1. Zero Invasive Tracking</div>
            <p>
              We do not use invasive third-party ad trackers, canvas fingerprinting, or tracking pixels. Your session information is kept minimal and privacy-preserving.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-bold text-stone-900 dark:text-white">2. Inquiries & Project Specifications</div>
            <p>
              When you submit a project inquiry via the contact form or email, your details (name, email, project brief) are used solely to communicate with you about your software project. We never sell, lease, or share your contact info with third parties.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-bold text-stone-900 dark:text-white">3. Non-Disclosure & Intellectual Property</div>
            <p>
              All proprietary project ideas, codebase discussions, and documents shared during discovery are treated as confidential. Non-Disclosure Agreements (NDAs) can be executed before detailed architectural reviews upon request.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-bold text-stone-900 dark:text-white">4. Content Security & Hardening</div>
            <p>
              Our website is served exclusively over HTTPS with modern HSTS, strict Content Security Policy directives, and XSS sanitization safeguards.
            </p>
          </div>
        </div>

        <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-stone-900 dark:bg-stone-800 text-white hover:bg-stone-800 transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
