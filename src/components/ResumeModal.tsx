import React, { useRef, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { X, Printer, Mail, MapPin, Globe } from 'lucide-react';


interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-stone-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl max-h-[92vh] bg-white text-stone-900 rounded-3xl border border-stone-200 shadow-2xl overflow-y-auto my-auto flex flex-col text-left"
      >
        {/* Modal Top Actions */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-stone-200 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              CURRICULUM VITAE
            </span>
            <span className="text-xs text-stone-500 font-medium">{siteConfig.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="p-6 sm:p-10 space-y-6 text-stone-800 font-sans print:p-0">
          {/* Header */}
          <div className="border-b border-stone-200 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 id="resume-title" className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                {siteConfig.name}
              </h1>
              <div className="text-sm font-semibold text-blue-600 mt-1">
                Full-Stack & Mobile Software Developer • Digital Product Engineer
              </div>
              <p className="text-xs text-stone-600 mt-2 max-w-xl leading-relaxed">
                Software developer focused on building resilient mobile applications, modern web applications, and backend systems for international businesses and growing startups.
              </p>
            </div>

            <div className="text-xs space-y-1 text-stone-600 shrink-0 font-mono">
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-stone-400" />
                <a href={`https://${siteConfig.domain}`} className="text-blue-600 hover:underline">{siteConfig.domain}</a>

              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-stone-400" />
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-stone-400" />
                <span>Pakistan (Global Remote)</span>
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-stone-950 border-b border-stone-200 pb-1.5 mb-3">
              Technical Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                <div className="font-bold text-stone-950 mb-1">Frontend & Mobile</div>
                <div className="text-stone-600 leading-relaxed">
                  React, Next.js, TypeScript, Tailwind CSS, Responsive UI Design, Cross-Platform Mobile Apps
                </div>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                <div className="font-bold text-stone-950 mb-1">Backend & Systems</div>
                <div className="text-stone-600 leading-relaxed">
                  Node.js, Express, REST APIs, C++, Object-Oriented Design, Microservices & Data Flows
                </div>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                <div className="font-bold text-stone-950 mb-1">Databases & Ops</div>
                <div className="text-stone-600 leading-relaxed">
                  PostgreSQL, MongoDB, ACID Transactions, RBAC Security, Git, Vercel, Production Hardening
                </div>
              </div>
            </div>
          </div>

          {/* Highlighted Project Engagements */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-stone-950 border-b border-stone-200 pb-1.5 mb-3">
              Selected Software Projects
            </h2>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-stone-950">Promptia — AI Prompt Discovery & Management Platform</span>
                  <span className="font-mono text-stone-500">React • Next.js • MongoDB • NextAuth</span>
                </div>
                <ul className="mt-1 list-disc list-inside text-xs text-stone-600 space-y-0.5 leading-relaxed">
                  <li>Engineered a full-stack prompt engineering application with secure Google OAuth token handling.</li>
                  <li>Architected tag-filtered search and client-side clipboard utilities with instantaneous response times.</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-stone-950">Inventory & Warehouse Operations System</span>
                  <span className="font-mono text-stone-500">Node.js • PostgreSQL • React • RBAC</span>
                </div>
                <ul className="mt-1 list-disc list-inside text-xs text-stone-600 space-y-0.5 leading-relaxed">
                  <li>Built multi-location inventory reconciliation engine with transactional ACID integrity to prevent stock discrepancies.</li>
                  <li>Implemented role-based permissions (Admin, Manager, Staff) and immutable audit log ledgers.</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-stone-950">Cafe POS & Operations Management System</span>
                  <span className="font-mono text-stone-500">C++ • POSIX File Streams • OOP</span>
                </div>
                <ul className="mt-1 list-disc list-inside text-xs text-stone-600 space-y-0.5 leading-relaxed">
                  <li>Developed an offline-first terminal POS system with administrative menu management and cashier order processing.</li>
                  <li>Integrated binary and structured text file serialization with checksum error recovery.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Working Philosophy */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-stone-950 border-b border-stone-200 pb-1.5 mb-2">
              Working Principles
            </h2>
            <p className="text-xs text-stone-600 leading-relaxed">
              Clear upfront communication, zero technical debt, rigorous automated testing, and guaranteed post-launch support. Committed to delivering practical business value rather than bloated, unmaintainable abstractions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
