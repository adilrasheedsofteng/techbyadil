import React, { useState, useEffect } from 'react';
import type { Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { ProjectEstimator } from './components/ProjectEstimator';
import { HowIWork } from './components/HowIWork';
import { TrustCredentials } from './components/TrustCredentials';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';

export const App: React.FC = () => {
  // Theme state: default is dark mode
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const savedTheme = localStorage.getItem('techbyadil_theme_v2');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
    } catch {
      // Storage unavailable
    }
    return 'dark';
  });
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<string>('Web Application Development');
  const [estimatorPreFill, setEstimatorPreFill] = useState<{
    service: string;
    budget: string;
    timeline: string;
    note: string;
  } | null>(null);

  // Sync theme class to documentElement
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('techbyadil_theme_v2', theme);
    } catch {
      // Storage unavailable fallback
    }
  }, [theme]);


  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEstimatorPreFill = (data: {
    service: string;
    budget: string;
    timeline: string;
    note: string;
  }) => {
    setSelectedService(data.service);
    setEstimatorPreFill(data);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-[#1c1917] dark:bg-[#0b0c10] dark:text-[#f3f4f8] transition-colors duration-200">
      {/* Skip to Main Content Link for WCAG 2.2 AA Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-lg focus:outline-2 focus:outline-white"
      >
        Skip to main content
      </a>

      {/* Sticky Navigation */}
      <Navbar
        currentTheme={theme}
        onToggleTheme={toggleTheme}
        onSelectService={handleSelectService}
      />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        <Hero />
        <Services onSelectService={handleSelectService} />
        <Projects onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)} />
        <ProjectEstimator onPreFillInquiry={handleEstimatorPreFill} />
        <HowIWork />
        <TrustCredentials />
        <About />
        <Contact
          key={`${selectedService}-${estimatorPreFill?.service || ''}-${estimatorPreFill?.note || ''}`}
          initialService={selectedService}
          preFillData={estimatorPreFill}
        />

      </main>

      {/* Footer */}
      <Footer onSelectService={handleSelectService} />

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onSelectService={handleSelectService}
      />
    </div>
  );
};

export default App;
