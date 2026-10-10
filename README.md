# TechByAdil — Premium Developer Portfolio Website

A modern, high-performance, responsive personal portfolio and software development studio website for **Adil Rasheed** (`techbyadil.com`).

Built with React 19, TypeScript, Vite, and Tailwind CSS v4.

---

## 🌟 Key Highlights

- **Studio Aesthetic**: Clean, boutique software studio identity with confidence, high contrast, refined typography, and subtle micro-interactions.
- **Hero & Interactive Device Preview**: Live interactive tab preview demonstrating Mobile App UI, End-to-End System Architecture, and Engineering Quality Standards.
- **6 Core Services**:
  1. Mobile App Development
  2. Web Application Development
  3. Backend and API Development
  4. UI Implementation (Figma to Code)
  5. Integration and Feature Development
  6. Bug Fixing and Maintenance
- **Selected Work & 12-Point Case Studies**:
  - **Promptia**: Full-Stack AI Prompt Discovery Platform (Next.js, MongoDB, OAuth)
  - **Smart Inventory & Warehouse Engine**: Multi-Location Stock Tracking with RBAC & Audit Trails
  - **Cafe POS Operations System**: High-Reliability Desktop Point-of-Sale with C++ File Streams
  - **PulseMetrics**: Modern Operational Analytics Portal & Client Dashboard
- **Interactive Scope Estimator**: Allows prospective clients to estimate their project scope, turnaround, and budget before inquiring.
- **Transparent 4-Step Process**: Discover → Plan → Build → Deliver.
- **Robust Security Architecture**:
  - Hardened Content Security Policy (`CSP`) headers
  - Anti-Clickjacking (`X-Frame-Options: DENY`, `frame-ancestors: 'none'`)
  - Multi-layer Anti-Bot defense: Honeypot trap (`botcheck`) + Timing challenge
  - ReDoS-safe input sanitization & rate-limiting cooldown
  - Strict `rel="noopener noreferrer"` on all outbound links
- **Interactive CV / Resume**: Built-in resume viewer with instant Print-to-PDF formatting.
- **Dual Theme Support**: Dark mode by default with smooth Light mode toggle and system preference detection.
- **Accessibility & Performance**: WCAG 2.2 AA compliant, full keyboard navigation, skip-to-content links, zero layout shifts.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📁 Project Architecture

```
techbyadil/
├── public/
│   ├── favicon.svg          # Crisp vector brand monogram
│   ├── robots.txt           # Search crawler directives
│   ├── sitemap.xml          # XML sitemap for SEO
│   └── _headers             # Cloudflare Pages / Netlify security headers
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                 # Sticky navigation with mobile drawer & theme toggle
│   │   ├── Hero.tsx                   # Hero section with headline & bio
│   │   ├── HeroInteractivePreview.tsx # Interactive mobile & architecture previewer
│   │   ├── Services.tsx               # 6 service cards with expandable deliverables
│   │   ├── Projects.tsx               # Editorial portfolio grid with category filters
│   │   ├── CaseStudyModal.tsx         # Accessible 12-point modal case study dialog
│   │   ├── ProjectEstimator.tsx       # Interactive project cost & timeline calculator
│   │   ├── HowIWork.tsx               # 4-step collaborative process roadmap
│   │   ├── TrustCredentials.tsx       # Engineering standards & credibility pillars
│   │   ├── About.tsx                  # Background, working philosophy, and CV trigger
│   │   ├── ResumeModal.tsx            # Printable, formatted Curriculum Vitae
│   │   ├── Contact.tsx                # Secure inquiry form with honeypot & dispatch
│   │   ├── Footer.tsx                 # Wordmark, quick links, and privacy dialog
│   │   ├── PrivacyModal.tsx           # Privacy policy and NDA assurance
│   │   └── BrandIcons.tsx             # Sharp vector icons for GitHub and LinkedIn
│   ├── data/
│   │   ├── siteConfig.ts              # Branding, contact info, domain, and links
│   │   ├── servicesData.ts            # Detailed service definitions & deliverables
│   │   └── projectsData.ts            # Authentic project case studies
│   ├── types/
│   │   └── index.ts                   # TypeScript interfaces
│   ├── utils/
│   │   └── security.ts                # Sanitization, ReDoS-safe regex, honeypot, mailto/WA generators
│   ├── App.tsx                        # Master layout coordinator & state manager
│   ├── main.tsx                       # React DOM entry point
│   └── index.css                      # Tailwind CSS v4 tokens, base, and accessibility styles
├── vercel.json                        # Vercel production security configuration
├── SECURITY.md                        # Enterprise security documentation
├── DEPLOYMENT.md                      # Custom domain (techbyadil.com) & host setup
└── vite.config.ts                     # Vite + Tailwind CSS build configuration
```

---

## 🛡️ Security & Privacy

For full details on security headers, honeypot spam protection, and threat mitigations, consult [SECURITY.md](file:///Users/adil/Herd/techbyadil/SECURITY.md).

For custom domain configuration on `techbyadil.com`, consult [DEPLOYMENT.md](file:///Users/adil/Herd/techbyadil/DEPLOYMENT.md).
