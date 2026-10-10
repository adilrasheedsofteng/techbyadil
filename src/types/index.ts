export type ProjectCategory = 'all' | 'web' | 'mobile' | 'backend';

export interface ImplementationDecision {
  title: string;
  rationale: string;
}

export interface ChallengeSolution {
  challenge: string;
  solution: string;
}

export interface CaseStudyData {
  overview: string;
  problem: string;
  goals: string[];
  solution: string;
  responsibilities: string[];
  implementationDecisions: ImplementationDecision[];
  challengesAndSolutions: ChallengeSolution[];
  outcome: string;
  clientType: 'Personal Application' | 'System Architecture' | 'Systems Software' | 'Business Solution';
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Web Application' | 'Mobile & Desktop' | 'Backend & Systems';
  categorySlug: 'web' | 'mobile' | 'backend';
  featured: boolean;
  badge: string;
  summary: string;
  deliverables: string[];
  keyFeatures: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudy: CaseStudyData;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  businessValue: string;
  iconName: string;
  deliverables: string[];
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  projectDetails: string;
  botcheck: string; // Honeypot field for anti-spam
  formRenderTime: number; // For anti-bot timing check
}

export type ThemeMode = 'dark' | 'light' | 'system';
