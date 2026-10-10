import React, { useState, useMemo } from 'react';
import { Calculator, Check, ArrowRight, Clock, DollarSign, Zap, Smartphone, Globe, Server, Wrench } from 'lucide-react';

interface ProjectEstimatorProps {
  onPreFillInquiry: (details: { service: string; budget: string; timeline: string; note: string }) => void;
}

type PlatformType = 'web' | 'mobile' | 'fullstack' | 'maintenance';
type ScopeType = 'mvp' | 'expansion' | 'refactor';
type TimelineType = 'standard' | 'express';

interface EstimationDetail {
  serviceName: string;
  budgetBand: string;
  duration: string;
  deliverables: string[];
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onPreFillInquiry }) => {
  const [platform, setPlatform] = useState<PlatformType>('web');
  const [scope, setScope] = useState<ScopeType>('mvp');
  const [timeline, setTimeline] = useState<TimelineType>('standard');

  // Matrix defining exact real-time pricing, duration, and deliverables for every combination
  const estimateData: Record<PlatformType, Record<ScopeType, { budget: string; durationStandard: string; durationExpress: string; deliverables: string[] }>> = {
    web: {
      mvp: {
        budget: '$2,800 – $4,800',
        durationStandard: '3 – 5 Weeks',
        durationExpress: '2 – 3 Weeks',
        deliverables: [
          'Full-featured responsive web application',
          'Database schema & REST API integration',
          'Authentication, session cookies & user roles',
          'Mobile & desktop UI usability optimization'
        ]
      },
      expansion: {
        budget: '$1,800 – $3,200',
        durationStandard: '2 – 3 Weeks',
        durationExpress: '1 – 2 Weeks',
        deliverables: [
          'New business feature modules & UI screens',
          'Third-party cloud & webhook integrations',
          'State management & query performance tuning',
          'Comprehensive component test coverage'
        ]
      },
      refactor: {
        budget: '$1,400 – $2,600',
        durationStandard: '1 – 2 Weeks',
        durationExpress: '5 – 8 Days',
        deliverables: [
          'Frontend modernizations & responsive bug fixes',
          'Core Web Vitals & bundle load time reduction',
          'WCAG accessibility & cross-browser fixes',
          'Code cleanup & dependency upgrades'
        ]
      }
    },
    mobile: {
      mvp: {
        budget: '$3,800 – $6,800',
        durationStandard: '4 – 6 Weeks',
        durationExpress: '3 – 4 Weeks',
        deliverables: [
          'Native-feeling mobile app for iOS & Android',
          'Offline-first data sync & secure account storage',
          'Push notifications & user profile management',
          'Camera, storage, or biometric integrations'
        ]
      },
      expansion: {
        budget: '$2,200 – $3,900',
        durationStandard: '2 – 4 Weeks',
        durationExpress: '2 Weeks',
        deliverables: [
          'New mobile screens, navigation & UI flows',
          'API client updates & third-party service sync',
          'State persistence & device compatibility tuning',
          'Automated build & test verification'
        ]
      },
      refactor: {
        budget: '$1,600 – $2,900',
        durationStandard: '2 – 3 Weeks',
        durationExpress: '1 – 2 Weeks',
        deliverables: [
          'Layout overflow, crash & memory leak fixes',
          'OS version updates & package dependency repairs',
          'UI performance & rendering smoothness boost',
          'App Store & Play Store compliance review'
        ]
      }
    },
    fullstack: {
      mvp: {
        budget: '$4,800 – $8,500',
        durationStandard: '5 – 8 Weeks',
        durationExpress: '4 – 5 Weeks',
        deliverables: [
          'End-to-end full-stack web application + API',
          'Relational database architecture with ACID safety',
          'Role-based access control (Admin, Staff, Customer)',
          'Operational admin dashboard & CSV/PDF reports'
        ]
      },
      expansion: {
        budget: '$2,600 – $4,600',
        durationStandard: '3 – 4 Weeks',
        durationExpress: '2 – 3 Weeks',
        deliverables: [
          'Custom microservices & complex REST endpoints',
          'Database indexes & heavy SQL query optimization',
          'Payment gateway (Stripe/PayPal) & transactional email',
          'Webhook retry handlers & audit trail logging'
        ]
      },
      refactor: {
        budget: '$2,000 – $3,600',
        durationStandard: '2 – 3 Weeks',
        durationExpress: '1 – 2 Weeks',
        deliverables: [
          'Database schema migration & foreign key constraints',
          'API security hardening & rate limit enforcement',
          'Zero-downtime refactoring of legacy endpoints',
          'Automated regression testing & documentation'
        ]
      }
    },
    maintenance: {
      mvp: {
        budget: '$1,200 – $2,400',
        durationStandard: '1 – 2 Weeks',
        durationExpress: '4 – 7 Days',
        deliverables: [
          'Targeted bug diagnosis & error triage',
          'Responsive UI alignment & clipping corrections',
          'Security vulnerability patching & package updates',
          'Performance audit & server response tuning'
        ]
      },
      expansion: {
        budget: '$1,600 – $3,000',
        durationStandard: '2 – 3 Weeks',
        durationExpress: '1 – 2 Weeks',
        deliverables: [
          'Multi-issue stability overhaul & legacy cleanup',
          'Continuous regression testing & staging verification',
          'Ongoing sprint maintenance retainer hours',
          'Dedicated priority response for critical bugs'
        ]
      },
      refactor: {
        budget: '$1,000 – $2,000',
        durationStandard: '1 – 2 Weeks',
        durationExpress: '3 – 6 Days',
        deliverables: [
          'Fast emergency patch for blocking production issues',
          'SSL / HTTPS / CORS & server config remediation',
          'Deprecated API replacements & code cleanup',
          'Post-fix stability verification & monitoring'
        ]
      }
    }
  };

  // Instant reactive computation
  const currentEstimate: EstimationDetail = useMemo(() => {
    const serviceNameMap: Record<PlatformType, string> = {
      web: 'Web Application Development',
      mobile: 'Mobile App Development',
      fullstack: 'Backend & Full-Stack Development',
      maintenance: 'Bug Fixing & Maintenance'
    };

    const targetPlatformData = estimateData[platform][scope];
    const duration = timeline === 'express' ? targetPlatformData.durationExpress : targetPlatformData.durationStandard;

    return {
      serviceName: serviceNameMap[platform],
      budgetBand: targetPlatformData.budget,
      duration,
      deliverables: targetPlatformData.deliverables
    };
  }, [platform, scope, timeline]);

  const handleApplyEstimate = () => {
    const platformLabel = platform === 'web' ? 'Web Application' : platform === 'mobile' ? 'Mobile App' : platform === 'fullstack' ? 'Full-Stack System' : 'Bug Fixing & Maintenance';
    const scopeLabel = scope === 'mvp' ? 'Brand New MVP' : scope === 'expansion' ? 'Feature Expansion' : 'Modernization / Bug Fixes';
    const paceLabel = timeline === 'express' ? 'Priority Express Sprint' : 'Standard Sprint';

    const note = `Estimated project configuration: Platform = ${platformLabel}, Scope = ${scopeLabel}, Pace = ${paceLabel}, Target Duration = ${currentEstimate.duration}, Budget Guideline = ${currentEstimate.budgetBand}.`;

    onPreFillInquiry({
      service: currentEstimate.serviceName,
      budget: currentEstimate.budgetBand,
      timeline: currentEstimate.duration,
      note
    });

    // Smooth scroll down to contact section
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-stone-100/60 dark:bg-slate-950/40 border-y border-stone-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-100/80 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-mono font-medium tracking-wide mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>INSTANT PROJECT ESTIMATOR</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white">
            Estimate Your Project Scope & Timeline
          </h2>
          <p className="mt-3 text-base text-stone-600 dark:text-slate-300">
            Select your platform and requirements to see an immediate, transparent sprint budget and turnaround guideline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls: Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 bg-white dark:bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-slate-800 shadow-xs">
            {/* 1. Platform Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-mono uppercase tracking-wider font-bold text-stone-700 dark:text-slate-300">
                  1. What platform are you building for?
                </label>
                <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-semibold uppercase">
                  Select One
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'web', label: 'Web App', icon: Globe },
                  { id: 'mobile', label: 'Mobile App', icon: Smartphone },
                  { id: 'fullstack', label: 'Full Stack', icon: Server },
                  { id: 'maintenance', label: 'Maintenance', icon: Wrench }
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = platform === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPlatform(item.id as PlatformType)}
                      className={`p-3 rounded-2xl text-xs font-semibold border transition-all text-center flex flex-col items-center justify-center gap-1.5 ${
                        isActive
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20 scale-[1.02]'
                          : 'bg-stone-50 dark:bg-slate-800/60 border-stone-200 dark:border-slate-700 text-stone-700 dark:text-slate-300 hover:border-blue-400 hover:bg-stone-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Scope Stage */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-mono uppercase tracking-wider font-bold text-stone-700 dark:text-slate-300">
                  2. Project Stage & Scope
                </label>
                <span className="text-[11px] font-mono text-stone-400">
                  Sprint Scope
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'mvp', title: 'Brand New MVP', desc: 'From idea to working launch' },
                  { id: 'expansion', title: 'Feature Expansion', desc: 'Adding to existing codebase' },
                  { id: 'refactor', title: 'Modernization / Fix', desc: 'Refactor UI, bugs & performance' }
                ].map((item) => {
                  const isActive = scope === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setScope(item.id as ScopeType)}
                      className={`p-3.5 rounded-2xl text-left border transition-all ${
                        isActive
                          ? 'bg-blue-50 dark:bg-blue-950/50 border-blue-600 text-blue-950 dark:text-blue-100 ring-2 ring-blue-600/40'
                          : 'bg-stone-50 dark:bg-slate-800/60 border-stone-200 dark:border-slate-700 text-stone-700 dark:text-slate-300 hover:border-blue-400'
                      }`}
                    >
                      <div className="text-xs font-bold">{item.title}</div>
                      <div className="text-[11px] text-stone-500 dark:text-slate-400 mt-1 leading-snug">{item.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Delivery Pace */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-mono uppercase tracking-wider font-bold text-stone-700 dark:text-slate-300">
                  3. Preferred Delivery Pace
                </label>
                <span className="text-[11px] font-mono text-stone-400">
                  Turnaround
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'standard', label: 'Standard Iterative Sprint', desc: 'Balanced pace & thorough testing cycle' },
                  { id: 'express', label: 'Priority Sprint', desc: 'Dedicated focus for rapid turnaround' }
                ].map((item) => {
                  const isActive = timeline === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setTimeline(item.id as TimelineType)}
                      className={`p-3.5 rounded-2xl text-left border transition-all ${
                        isActive
                          ? 'bg-blue-50 dark:bg-blue-950/50 border-blue-600 text-blue-950 dark:text-blue-100 ring-2 ring-blue-600/40'
                          : 'bg-stone-50 dark:bg-slate-800/60 border-stone-200 dark:border-slate-700 text-stone-700 dark:text-slate-300 hover:border-blue-400'
                      }`}
                    >
                      <div className="text-xs font-bold flex items-center justify-between">
                        <span>{item.label}</span>
                        {item.id === 'express' && (
                          <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/60 px-1.5 py-0.5 rounded">
                            Fast Track
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-stone-500 dark:text-slate-400 mt-1 leading-snug">{item.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result Card: Right Column (5 cols) - Fully adaptive Light/Dark theme */}
          <div className="lg:col-span-5 bg-white dark:bg-stone-900 text-stone-900 dark:text-white p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-xl dark:shadow-2xl space-y-6 relative overflow-hidden">
            {/* Top decorative accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"></div>

            <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-4">
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider font-bold">
                Estimated Sprint Blueprint
              </span>
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 font-mono font-medium flex items-center gap-1.5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Immediate Update</span>
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-xs font-medium text-stone-500 dark:text-stone-400">Recommended Service:</div>
                <div className="text-xl font-bold text-stone-950 dark:text-white mt-0.5">
                  {currentEstimate.serviceName}
                </div>
              </div>

              {/* Dynamic Budget & Timeline Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="bg-stone-50 dark:bg-stone-950 p-3.5 rounded-2xl border border-stone-200 dark:border-stone-800/80 transition-all shadow-xs">
                  <div className="text-[11px] font-medium text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Est. Timeline</span>
                  </div>
                  <div className="text-base font-extrabold text-stone-900 dark:text-white mt-1.5">
                    {currentEstimate.duration}
                  </div>
                </div>

                <div className="bg-stone-50 dark:bg-stone-950 p-3.5 rounded-2xl border border-stone-200 dark:border-stone-800/80 transition-all shadow-xs">
                  <div className="text-[11px] font-medium text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Est. Budget Band</span>
                  </div>
                  <div className="text-base font-extrabold text-emerald-600 dark:text-emerald-400 mt-1.5">
                    {currentEstimate.budgetBand}
                  </div>
                </div>
              </div>

              {/* Real-time Deliverables Checklist */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2.5 font-semibold">
                  Included in This Sprint:
                </div>
                <ul className="space-y-2 text-xs text-stone-700 dark:text-stone-300">
                  {currentEstimate.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 stroke-[2.5]" />
                      <span className="leading-snug">{deliv}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-2 text-stone-500 dark:text-stone-400 pt-2 border-t border-stone-200 dark:border-stone-800/80 font-medium">
                    <Zap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>Weekly Video Progress Demos & Direct WhatsApp</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action CTA */}
            <button
              type="button"
              onClick={handleApplyEstimate}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <span>Inquire With This Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
