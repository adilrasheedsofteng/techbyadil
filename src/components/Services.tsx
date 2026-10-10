import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import {
  Smartphone,
  Globe,
  Server,
  Layout,
  Cpu,
  Wrench,
  Check,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Sparkles
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  // Track which service card has expanded deliverables
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Map icon name to Lucide component
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'Globe':
        return <Globe className="w-5 h-5" />;
      case 'Server':
        return <Server className="w-5 h-5" />;
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="services"
      className="py-20 sm:py-28 bg-stone-100/60 dark:bg-slate-950/40 border-y border-stone-200/80 dark:border-slate-800/80"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-100/80 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-mono font-medium tracking-wide mb-3">
            <span>CORE CAPABILITIES</span>
          </div>
          <h2
            id="services-heading"
            className="text-2xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white"
          >
            How I Can Help Your Business
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 dark:text-slate-300 leading-relaxed">
            Delivering robust software solutions tailored to your operational goals. Focused on business results, clean architecture, and reliable performance.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className="group rounded-2xl bg-white dark:bg-slate-900/90 border border-stone-200 dark:border-slate-800 p-6 shadow-xs hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2.5 py-1 rounded-lg border border-blue-100 dark:border-blue-900/50">
                      SERVICE {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 transition-colors duration-200">
                      {renderIcon(service.iconName)}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-slate-300 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Business Value Highlight Block */}
                  <div className="p-3 rounded-xl bg-stone-50 dark:bg-slate-950/70 border border-stone-200/70 dark:border-slate-800/80 mb-5 text-xs text-stone-700 dark:text-slate-300">
                    <span className="font-semibold text-stone-900 dark:text-white block mb-0.5">Business Impact:</span>
                    {service.businessValue}
                  </div>

                  {/* Deliverables Accordion */}
                  <div className="mb-4">
                    <button
                      type="button"
                      onClick={() => toggleExpand(service.id)}
                      className="w-full flex items-center justify-between text-xs font-semibold text-stone-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 py-1 transition-colors"
                      aria-expanded={isExpanded}
                    >
                      <span>Key Deliverables ({service.deliverables.length})</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-stone-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-stone-400" />
                      )}
                    </button>

                    {/* Deliverables List (visible when expanded or first 3 shown) */}
                    <ul className="mt-2.5 space-y-2 text-xs text-stone-600 dark:text-slate-400">
                      {(isExpanded ? service.deliverables : service.deliverables.slice(0, 3)).map(
                        (item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                            <span className="leading-snug">{item}</span>
                          </li>
                        )
                      )}
                      {!isExpanded && service.deliverables.length > 3 && (
                        <li className="text-[11px] text-blue-600 dark:text-blue-400 font-medium pl-6">
                          +{service.deliverables.length - 3} more deliverables
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Card Action: Pre-fills contact inquiry */}
                <div className="pt-4 border-t border-stone-100 dark:border-slate-800/80 flex items-center justify-between">
                  <a
                    href="#contact"
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group-hover:underline"
                  >
                    <span>Request this service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <span className="text-[11px] font-mono text-stone-400">Fixed or Sprint</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
