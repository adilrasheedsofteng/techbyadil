import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Menu, X, Sun, Moon, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentTheme: 'dark' | 'light';
  onToggleTheme: () => void;
  onSelectService?: (serviceName: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTheme, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll position for backdrop elevation and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'services', 'projects', 'workflow', 'about', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fafaf9]/90 dark:bg-[#0b0c10]/90 backdrop-blur-md border-b border-stone-200/80 dark:border-slate-800/80 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Wordmark / Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-blue-500 rounded-md py-1"
          aria-label="TechByAdil — Adil Rasheed Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
            A
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-base sm:text-lg tracking-tight text-stone-900 dark:text-stone-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {siteConfig.name}
            </span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 dark:text-slate-400 -mt-0.5 flex items-center gap-1">
              <span>{siteConfig.brand}</span>
              <span className="inline-block w-1 h-1 rounded-full bg-blue-500"></span>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">Studio</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {siteConfig.navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/40'
                    : 'text-stone-600 dark:text-slate-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Desktop Right Actions: Theme Toggle & Let's Talk CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2 rounded-lg text-stone-600 dark:text-slate-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-slate-800/60 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500"
            aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {currentTheme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-stone-700" />
            )}
          </button>

          {/* Prominent Let's Talk Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xs shadow-blue-600/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-blue-500"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Actions: Theme Toggle + Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2 rounded-lg text-stone-600 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {currentTheme === 'dark' ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-stone-700" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-700 dark:text-slate-200 hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Accessible Collapsible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="fixed inset-0 top-[65px] z-40 bg-[#fafaf9]/95 dark:bg-[#0b0c10]/98 backdrop-blur-xl md:hidden flex flex-col p-6 animate-in fade-in slide-in-from-top-4 duration-200 border-b border-stone-200 dark:border-slate-800 overflow-y-auto"
        >
          <div className="flex flex-col space-y-3">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </a>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-stone-200 dark:border-slate-800 flex flex-col gap-4">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 px-4 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-colors"
            >
              Start a Project / Let's Talk
            </a>

            <div className="flex items-center justify-center gap-2 text-xs font-mono text-stone-500 dark:text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Independent Digital Product Studio • {siteConfig.domain}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
