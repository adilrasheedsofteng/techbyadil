import React, { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../data/siteConfig';
import type { InquiryFormData } from '../types';
import {
  sanitizeInput,
  isValidEmail,
  verifySubmissionAuthenticity,
  checkRateLimit,
  recordSubmissionCooldown,
  generateMailtoUrl,
  generateWhatsAppUrl
} from '../utils/security';
import {
  Send,
  Mail,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Copy,
  Clock,
  ShieldCheck,
  ExternalLink,
  Sparkles
} from 'lucide-react';


interface ContactProps {
  initialService?: string;
  preFillData?: {
    service: string;
    budget: string;
    timeline: string;
    note: string;
  } | null;
}

export const Contact: React.FC<ContactProps> = ({ initialService, preFillData }) => {
  const formRenderTimeRef = useRef(0);

  useEffect(() => {
    formRenderTimeRef.current = Date.now();
  }, []);

  const [formData, setFormData] = useState<InquiryFormData>(() => ({
    fullName: '',
    email: '',
    company: '',
    service: preFillData?.service || initialService || 'Web Application Development',
    budget: preFillData?.budget || '$2,500 – $5,000',
    timeline: preFillData?.timeline || 'Within 1 Month',
    projectDetails: preFillData?.note ? preFillData.note : '',
    botcheck: '', // Honeypot field
    formRenderTime: 0
  }));

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<InquiryFormData | null>(null);
  const [statusMessage, setStatusMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);
  const [copied, setCopied] = useState(false);


  // Form input change handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear field-specific error when user edits
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    const cleanName = sanitizeInput(formData.fullName, 100);
    if (!cleanName || cleanName.length < 2) {
      errors.fullName = 'Please provide your name (at least 2 characters).';
    }

    const cleanEmail = sanitizeInput(formData.email, 120);
    if (!cleanEmail || !isValidEmail(cleanEmail)) {
      errors.email = 'Please provide a valid, deliverable email address.';
    }

    const cleanDetails = sanitizeInput(formData.projectDetails, 3000);
    if (!cleanDetails || cleanDetails.length < 15) {
      errors.projectDetails = 'Please share a few details about your project (at least 15 characters).';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    // 1. Validate fields
    if (!validateForm()) {
      setStatusMessage({
        type: 'error',
        text: 'Please review the highlighted fields before submitting.'
      });
      return;
    }

    // 2. Anti-bot honeypot and timing check
    const authCheck = verifySubmissionAuthenticity({
      ...formData,
      formRenderTime: formRenderTimeRef.current
    });

    if (!authCheck.isLegitimate) {
      setStatusMessage({
        type: 'error',
        text: authCheck.error || 'Submission flagged by security filter.'
      });
      return;
    }

    // 3. Client rate limit / cooldown check
    const rateCheck = checkRateLimit();
    if (!rateCheck.allowed) {
      setStatusMessage({
        type: 'error',
        text: `Please wait ${rateCheck.remainingSeconds} seconds before sending another inquiry.`
      });
      return;
    }

    setSubmitting(true);

    // Simulate safe processing & record cooldown
    setTimeout(() => {
      recordSubmissionCooldown();
      setSubmitting(false);
      setSubmittedData({ ...formData });

      // Open mailto link automatically or prompt user
      const mailtoUrl = generateMailtoUrl(formData);
      window.location.href = mailtoUrl;

      setStatusMessage({
        type: 'success',
        text: 'Inquiry prepared! Your mail application has been opened, or choose one of the direct dispatch channels below.'
      });
    }, 600);
  };

  const handleCopyInquiry = () => {
    if (!submittedData) return;
    const summary = [
      `From: ${submittedData.fullName} (${submittedData.email})`,
      submittedData.company ? `Company: ${submittedData.company}` : '',
      `Service: ${submittedData.service}`,
      `Budget: ${submittedData.budget}`,
      `Timeline: ${submittedData.timeline}`,
      `Details:\n${submittedData.projectDetails}`
    ].filter(Boolean).join('\n');

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-stone-100/60 dark:bg-slate-950/40 border-t border-stone-200/80 dark:border-slate-800/80"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-100/80 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-mono font-medium tracking-wide mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
          <h2
            id="contact-heading"
            className="text-2xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white"
          >
            Have a Project in Mind?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 dark:text-slate-300 leading-relaxed">
            Tell me what you're planning to build, what challenge you're trying to solve, or which part of your existing product needs improvement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/90 rounded-3xl border border-stone-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
            {/* Success State Screen */}
            {submittedData ? (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-200">
                      Inquiry Package Ready
                    </h3>
                    <p className="text-xs text-emerald-800 dark:text-emerald-300 mt-1 leading-relaxed">
                      Your project inquiry has been formatted with full specifications. Choose your preferred way to transmit it directly to Adil:
                    </p>
                  </div>
                </div>

                {/* Instant Transmission Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={generateMailtoUrl(submittedData)}
                    className="p-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white flex flex-col justify-between transition-colors shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <Mail className="w-5 h-5" />
                      <span className="text-[11px] font-mono uppercase bg-blue-700 px-2 py-0.5 rounded">Primary</span>
                    </div>
                    <div className="mt-4">
                      <div className="font-bold text-sm">Send via Email Client</div>
                      <div className="text-[11px] text-blue-100 mt-0.5">{siteConfig.contact.email}</div>
                    </div>
                  </a>

                  <a
                    href={generateWhatsAppUrl(submittedData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white flex flex-col justify-between transition-colors shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <MessageSquare className="w-5 h-5" />
                      <span className="text-[11px] font-mono uppercase bg-emerald-700 px-2 py-0.5 rounded">Instant</span>
                    </div>
                    <div className="mt-4">
                      <div className="font-bold text-sm">Send via WhatsApp</div>
                      <div className="text-[11px] text-emerald-100 mt-0.5">Direct Developer Chat</div>
                    </div>
                  </a>
                </div>

                {/* Copy Formatted Text Option */}
                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-slate-950 border border-stone-200 dark:border-slate-800 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold text-stone-900 dark:text-white">
                      Copy Summary to Clipboard
                    </div>
                    <div className="text-[11px] text-stone-500 dark:text-slate-400">
                      Paste directly into Upwork, Fiverr, or LinkedIn messaging
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyInquiry}
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 text-stone-800 dark:text-stone-200 hover:bg-stone-100 transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied!' : 'Copy Text'}</span>
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSubmittedData(null)}
                    className="text-xs text-stone-500 hover:text-stone-900 dark:hover:text-white underline"
                  >
                    ← Edit inquiry or start another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Honeypot Field (invisible to users, catches bots) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="botcheck">Do not fill this field if human:</label>
                  <input
                    type="text"
                    id="botcheck"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.botcheck}
                    onChange={handleChange}
                  />
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-mono font-bold text-stone-800 dark:text-slate-200 uppercase tracking-wider mb-1"
                    >
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-stone-50 dark:bg-slate-950 border ${
                        formErrors.fullName
                          ? 'border-rose-500 ring-1 ring-rose-500'
                          : 'border-stone-200 dark:border-slate-800'
                      } text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500`}
                    />
                    {formErrors.fullName && (
                      <p className="mt-1 text-xs text-rose-500 font-medium">
                        {formErrors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono font-bold text-stone-800 dark:text-slate-200 uppercase tracking-wider mb-1"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-stone-50 dark:bg-slate-950 border ${
                        formErrors.email
                          ? 'border-rose-500 ring-1 ring-rose-500'
                          : 'border-stone-200 dark:border-slate-800'
                      } text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-xs text-rose-500 font-medium">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company Name (Optional) */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-mono font-bold text-stone-800 dark:text-slate-200 uppercase tracking-wider mb-1"
                  >
                    Company or Business Name <span className="text-stone-400 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Acme Studios, Startup, or Individual"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-stone-50 dark:bg-slate-950 border border-stone-200 dark:border-slate-800 text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Service Selection Dropdown */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-mono font-bold text-stone-800 dark:text-slate-200 uppercase tracking-wider mb-1"
                  >
                    Service Required <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-stone-50 dark:bg-slate-950 border border-stone-200 dark:border-slate-800 text-stone-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Web Application Development">Web Application Development</option>
                    <option value="Backend and API Development">Backend and API Development</option>
                    <option value="UI Implementation">UI Implementation (Figma to Code)</option>
                    <option value="Integration and Feature Development">Integration & Feature Development</option>
                    <option value="Bug Fixing and Maintenance">Bug Fixing & Performance Maintenance</option>
                    <option value="Other Project Inquiry">Other Custom Development</option>
                  </select>
                </div>

                {/* Budget & Timeline Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-xs font-mono font-bold text-stone-800 dark:text-slate-200 uppercase tracking-wider mb-1"
                    >
                      Estimated Budget <span className="text-stone-400 font-normal lowercase">(optional)</span>
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-stone-50 dark:bg-slate-950 border border-stone-200 dark:border-slate-800 text-stone-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Under $1,500">Under $1,500</option>
                      <option value="$1,500 – $3,500">$1,500 – $3,500</option>
                      <option value="$3,500 – $7,500">$3,500 – $7,500</option>
                      <option value="$7,500+">$7,500+</option>
                      <option value="To be determined">To be determined / Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-xs font-mono font-bold text-stone-800 dark:text-slate-200 uppercase tracking-wider mb-1"
                    >
                      Preferred Timeline <span className="text-stone-400 font-normal lowercase">(optional)</span>
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-stone-50 dark:bg-slate-950 border border-stone-200 dark:border-slate-800 text-stone-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Immediate / Urgent (1-2 weeks)">Immediate / Urgent (1-2 weeks)</option>
                      <option value="Within 1 Month">Within 1 Month</option>
                      <option value="1 – 2 Months">1 – 2 Months</option>
                      <option value="Flexible / Exploring ideas">Flexible / Exploring ideas</option>
                    </select>
                  </div>
                </div>

                {/* Project Details Field */}
                <div>
                  <label
                    htmlFor="projectDetails"
                    className="block text-xs font-mono font-bold text-stone-800 dark:text-slate-200 uppercase tracking-wider mb-1"
                  >
                    Project Overview & Requirements <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={4}
                    required
                    placeholder="Briefly describe what you're building, key features needed, or what problem we are solving..."
                    value={formData.projectDetails}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-stone-50 dark:bg-slate-950 border ${
                      formErrors.projectDetails
                        ? 'border-rose-500 ring-1 ring-rose-500'
                        : 'border-stone-200 dark:border-slate-800'
                    } text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500`}
                  />
                  {formErrors.projectDetails && (
                    <p className="mt-1 text-xs text-rose-500 font-medium">
                      {formErrors.projectDetails}
                    </p>
                  )}
                </div>

                {/* Status Messages */}
                {statusMessage && (
                  <div
                    className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                      statusMessage.type === 'error'
                        ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border border-rose-200 dark:border-rose-900'
                        : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900'
                    }`}
                  >
                    {statusMessage.type === 'error' ? (
                      <AlertCircle className="w-4 h-4 shrink-0" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                    )}
                    <span>{statusMessage.text}</span>
                  </div>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md shadow-blue-600/30 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-blue-500"
                >
                  {submitting ? (
                    <span>Verifying details...</span>
                  ) : (
                    <>
                      <span>Transmit Project Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Privacy & Anti-Spam Notice */}
                <div className="pt-2 text-[11px] text-stone-500 dark:text-slate-400 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Honeypot protected • Zero tracking cookies</span>
                  </span>
                  <span>Direct developer dispatch</span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Guarantee (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Response Time Guarantee Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/90 border border-stone-200 dark:border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                <Clock className="w-5 h-5" />
                <span>Response Time Guarantee</span>
              </div>
              <p className="text-xs text-stone-600 dark:text-slate-300 leading-relaxed">
                {siteConfig.availability.responseTime}. Whether via email or WhatsApp, you receive a thoughtful, direct response about technical feasibility and next steps.
              </p>
              <div className="text-[11px] font-mono text-stone-500 dark:text-slate-400 pt-1 border-t border-stone-100 dark:border-slate-800">
                Timezone: {siteConfig.contact.timezone}
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-stone-200 dark:border-slate-800 hover:border-blue-500/50 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-stone-400">Direct Email</div>
                    <div className="text-sm font-bold text-stone-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-blue-500" />
              </a>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-stone-200 dark:border-slate-800 hover:border-emerald-500/50 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-stone-400">WhatsApp Chat</div>
                    <div className="text-sm font-bold text-stone-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                      Quick Project Consultation
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-emerald-500" />
              </a>
            </div>

            {/* Proposal Readiness Note */}
            <div className="p-5 rounded-2xl bg-stone-950 text-white border border-stone-800 text-xs space-y-2">
              <div className="font-mono text-blue-400 font-bold uppercase tracking-wider text-[11px]">
                Freelance Proposals & Platforms
              </div>
              <p className="text-stone-300 leading-relaxed">
                If you reached out through Upwork, Fiverr, or LinkedIn, mention your platform in the message so we can align contracts and escrow terms according to your preference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
