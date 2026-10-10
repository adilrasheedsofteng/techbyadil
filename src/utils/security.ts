import type { InquiryFormData } from '../types';
import { siteConfig } from '../data/siteConfig';

/**
 * Sanitize string input to prevent XSS and excessive payload attacks.
 * Strips HTML tags, trims whitespace, and limits character length.
 */
export function sanitizeInput(input: string, maxLength: number = 2000): string {
  if (!input) return '';
  
  // Truncate length
  let sanitized = input.slice(0, maxLength);
  
  // Strip dangerous HTML/script tags
  sanitized = sanitized.replace(/<[^>]*>?/gm, '');
  
  // Trim excessive whitespace
  return sanitized.trim();
}

/**
 * ReDoS-safe RFC-standard email validator
 */
export function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false;
  // Safe, non-backtracking email regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email);
}

/**
 * Multi-layer anti-bot validation:
 * 1. Honeypot check (hidden field that only bots fill)
 * 2. Timing challenge (humans take at least 3 seconds to complete form)
 */
export function verifySubmissionAuthenticity(data: InquiryFormData): {
  isLegitimate: boolean;
  error?: string;
} {
  // 1. Honeypot verification
  if (data.botcheck && data.botcheck.trim() !== '') {
    return {
      isLegitimate: false,
      error: 'Security challenge triggered (automated submission detected).'
    };
  }

  // 2. Timing challenge: real humans take >= 2.5 seconds to fill form
  const elapsedMs = Date.now() - (data.formRenderTime || 0);
  if (elapsedMs < 2500) {
    return {
      isLegitimate: false,
      error: 'Submission was too fast. Please take a moment to review your details.'
    };
  }

  return { isLegitimate: true };
}

/**
 * Client-side rate limiting / anti-flooding
 * Ensures minimum 30-second cooldown between inquiries
 */
const COOLDOWN_SECONDS = 30;
const STORAGE_KEY = 'techbyadil_last_inquiry_ts';

export function checkRateLimit(): { allowed: boolean; remainingSeconds: number } {
  try {
    const lastTime = sessionStorage.getItem(STORAGE_KEY);
    if (!lastTime) return { allowed: true, remainingSeconds: 0 };

    const elapsedSeconds = Math.floor((Date.now() - parseInt(lastTime, 10)) / 1000);
    if (elapsedSeconds < COOLDOWN_SECONDS) {
      return {
        allowed: false,
        remainingSeconds: COOLDOWN_SECONDS - elapsedSeconds
      };
    }
  } catch {
    // SessionStorage unavailable fallback
    return { allowed: true, remainingSeconds: 0 };
  }

  return { allowed: true, remainingSeconds: 0 };
}

export function recordSubmissionCooldown(): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, Date.now().toString());
  } catch {
    // Ignore storage errors in private browsing
  }
}

/**
 * Generate secure, formatted mailto URL as reliable fallback
 */
export function generateMailtoUrl(data: InquiryFormData): string {
  const subject = encodeURIComponent(`Project Inquiry: ${data.service || 'Software Development'} — ${data.fullName}`);
  const bodyText = [
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    data.company ? `Company / Organization: ${data.company}` : '',
    `Service Required: ${data.service}`,
    data.budget ? `Estimated Budget: ${data.budget}` : '',
    data.timeline ? `Preferred Timeline: ${data.timeline}` : '',
    '',
    'Project Overview & Requirements:',
    data.projectDetails,
    '',
    `Sent via ${siteConfig.domain}`
  ].filter(Boolean).join('\n');


  return `mailto:${siteConfig.contact.email}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
}

/**
 * Generate formatted WhatsApp direct messaging URL
 */
export function generateWhatsAppUrl(data: InquiryFormData): string {
  const message = [
    `*New Project Inquiry via TechByAdil*`,
    `*Name:* ${data.fullName}`,
    `*Email:* ${data.email}`,
    data.company ? `*Company:* ${data.company}` : '',
    `*Service:* ${data.service}`,
    data.budget ? `*Budget:* ${data.budget}` : '',
    data.timeline ? `*Timeline:* ${data.timeline}` : '',
    `*Project Details:*`,
    data.projectDetails
  ].filter(Boolean).join('\n');

  return `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
}
