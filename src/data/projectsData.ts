import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "promptia",
    title: "Promptia",
    tagline: "AI Prompt Engineering & Discovery Platform with User Authentication",
    category: "Web Application",
    categorySlug: "web",
    featured: true,
    badge: "Featured Web App",
    summary: "A personal prompt-management web application featuring secure user authentication, tag-based categorization, prompt creation, real-time search, and instant clipboard sharing.",
    deliverables: [
      "Full-stack React & Next.js web application",
      "OAuth authentication via NextAuth with secure session cookies",
      "MongoDB database modeling with Mongoose schemas",
      "Tag-based search, copy-to-clipboard, and responsive UI"
    ],
    keyFeatures: [
      "Secure Google OAuth & session management",
      "Tag-based prompt search & feed discovery",
      "Profile view with creator prompt management (Edit/Delete)",
      "One-click clipboard copy with visual feedback indicator"
    ],
    technologies: ["React", "Next.js", "MongoDB", "Mongoose", "Tailwind CSS", "NextAuth.js"],
    githubUrl: "https://github.com/techbyadil/promptia",
    liveUrl: "https://promptia.techbyadil.xyz",

    caseStudy: {
      clientType: "Personal Application",
      overview: "Promptia was built to solve the frustration of losing track of high-performing AI prompts across chat sessions. It provides developers and prompt writers with a central, accessible hub to author, tag, organize, and discover AI prompts.",
      problem: "Prompt engineers and developers routinely lose valuable system instructions and multi-turn prompt templates across scattered notes or chat logs, with no structured way to categorize them by domain or model.",
      goals: [
        "Create a streamlined workflow for authoring, editing, and deleting AI prompts in under 10 seconds.",
        "Implement a friction-free Google OAuth login flow with session protection.",
        "Enable instant client-side filtering by tag, creator, or prompt keyword.",
        "Provide zero-latency copy-to-clipboard interactions with clear visual confirmation."
      ],
      solution: "Developed a full-stack web application with serverless API routes, schema-validated MongoDB persistence, and an intuitive feed UI that balances fast browsing with personal library management.",
      responsibilities: [
        "End-to-end full-stack architecture and schema design",
        "OAuth authentication setup and token lifecycle management",
        "Frontend component development and responsive mobile layouts",
        "API endpoint implementation for CRUD operations with authorization checks"
      ],
      implementationDecisions: [
        {
          title: "Session Validation on API Endpoints",
          rationale: "Rather than relying solely on client-side state, every mutation endpoint explicitly validates the user's session against the prompt creator's ID, preventing unauthorized deletions."
        },
        {
          title: "Optimistic Feed Filtering",
          rationale: "Implemented client-side regex search on loaded prompt sets for instantaneous results, falling back to server query when searching beyond cached pages."
        }
      ],
      challengesAndSolutions: [
        {
          challenge: "Handling token expiration during long prompt composition sessions without losing user drafts.",
          solution: "Implemented local storage auto-save drafts and automatic session refresh via NextAuth hooks before form dispatch."
        },
        {
          challenge: "Preventing layout jitter when copying long prompts to clipboard on mobile screens.",
          solution: "Built a dedicated floating feedback pill with CSS transitions that doesn't perturb document flow."
        }
      ],
      outcome: "Successfully deployed and tested personal application serving as an accessible repository of over 100+ prompt templates, demonstrating clean full-stack TypeScript/React and database integration."
    }
  },
  {
    id: "inventory-management-system",
    title: "Inventory & Warehouse Operations System",
    tagline: "Role-Based Multi-Location Stock Tracking & Inventory Audit Engine",
    category: "Backend & Systems",
    categorySlug: "backend",
    featured: true,
    badge: "Enterprise Architecture",
    summary: "A robust inventory management solution designed around warehouse access controls, stock movement tracking, threshold alerts, role-based permissions, and audit logs.",
    deliverables: [
      "Role-Based Access Control (Admin, Warehouse Manager, Operations Staff)",
      "Multi-location stock transfer and reconciliation tracking",
      "Automated low-stock threshold alerting engine",
      "Comprehensive immutable audit trail for all item adjustments"
    ],
    keyFeatures: [
      "Granular role-based permissions with strict access control",
      "Batch SKU tracking with barcode & serial number lookup",
      "Stock intake, transfer, write-off, and dispatch workflows",
      "Real-time inventory level indicators with reorder triggers"
    ],
    technologies: ["Node.js", "Express", "PostgreSQL", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/techbyadil/inventory-management-system",
    liveUrl: "https://inventory.techbyadil.xyz",

    caseStudy: {
      clientType: "System Architecture",
      overview: "Designed as an operational backbone for businesses managing physical goods across multiple storage rooms and warehouses, preventing inventory shrinkage and stockouts.",
      problem: "Traditional spreadsheet tracking leads to stock discrepancies, lost items, unauthorized manual overrides, and zero accountability for who moved or adjusted inventory quantities.",
      goals: [
        "Enforce role-based separation of concerns: only Managers can authorize stock write-offs, while Staff perform physical scans.",
        "Ensure transactional consistency: moving stock between locations must be atomic (no phantom items).",
        "Provide real-time visibility into inventory values and aging stock."
      ],
      solution: "Engineered an ACID-compliant relational database schema with database-level constraints and an expressive frontend dashboard providing clear visual status indicators and CSV audit exports.",
      responsibilities: [
        "Relational database modeling with foreign keys, indexes, and transactions",
        "Role-based authorization middleware (RBAC)",
        "Audit logging interceptor recording timestamps, user IDs, and previous vs. new quantities",
        "Dashboard UI with dynamic stock status chips and search filters"
      ],
      implementationDecisions: [
        {
          title: "PostgreSQL Database Transactions for Stock Movements",
          rationale: "Used explicit `BEGIN ... COMMIT` blocks so that a stock deduction from Warehouse A and addition to Warehouse B either both succeed or rollback completely."
        },
        {
          title: "Immutable Stock Ledger Instead of Direct Overwrite",
          rationale: "Instead of simply updating quantity columns, every change creates an immutable transaction row, providing a 100% auditable history."
        }
      ],
      challengesAndSolutions: [
        {
          challenge: "Concurrent updates when multiple operators scan items at the same moment.",
          solution: "Implemented row-level locking (`SELECT ... FOR UPDATE`) in the reservation phase to prevent race conditions."
        },
        {
          challenge: "Complex filtering across SKU, location, category, and reorder status.",
          solution: "Designed parameterized SQL queries with composite indexes on `(location_id, status, sku)` for sub-50ms query response times."
        }
      ],
      outcome: "Delivered a clean, production-grade architecture that reliably handles multi-warehouse stock lifecycles without data inconsistencies."
    }
  },
  {
    id: "cafe-management-system",
    title: "Cafe POS & Operations Management System",
    tagline: "High-Reliability C++ Desktop Point-of-Sale with File-Backed Persistence",
    category: "Backend & Systems",
    categorySlug: "backend",
    featured: false,
    badge: "C++ Systems Tool",
    summary: "A high-performance C++ desktop operations application featuring administrative menu controls, shift-manager order processing, tax & billing calculation, and persistent file-based record handling.",
    deliverables: [
      "Dual-role authentication (Administrator vs. Shift Cashier/Manager)",
      "Dynamic menu price and item inventory management",
      "Automated bill generation with discount and tax calculations",
      "File-backed transactional history and end-of-day summary reports"
    ],
    keyFeatures: [
      "Zero-downtime offline execution with zero external runtime dependencies",
      "Menu item CRUD operations with input validation against corrupt data",
      "Formatted terminal & ASCII receipt generator with order IDs",
      "Daily revenue calculations and persistent file storage"
    ],
    technologies: ["C++", "Object-Oriented Programming (OOP)", "File I/O Streams", "Data Structures"],
    githubUrl: "https://github.com/techbyadil/cafe-management-system",
    caseStudy: {
      clientType: "Systems Software",
      overview: "Developed as an offline-first, high-stability management utility for cafe and restaurant operations, focusing on strict memory safety, data integrity, and fast terminal-based POS throughput.",
      problem: "Small hospitality venues frequently suffer from internet outages that freeze cloud POS systems, causing customer queues to stall and transaction records to be lost.",
      goals: [
        "Operate completely offline with sub-millisecond execution times.",
        "Provide separated privilege levels so staff cannot alter menu prices or delete past sales records.",
        "Safely persist sales ledgers to disk using robust binary or structured text serialization with recovery checks."
      ],
      solution: "Engineered a clean C++ object-oriented system with modular classes for `MenuItem`, `Order`, `Bill`, `User`, and `ReportGenerator`, using C++ `fstream` with file-locking and validation checks.",
      responsibilities: [
        "Core OOP architecture and class hierarchy design",
        "Stream-based data serialization and deserialization routines",
        "User authentication and menu permission enforcement",
        "Tax and order summary computation logic"
      ],
      implementationDecisions: [
        {
          title: "Stream-Based Persistence with Format Checksums",
          rationale: "Ensured that corrupt disk reads during power cuts are trapped gracefully with backup file restore capability."
        },
        {
          title: "Polymorphic User Roles",
          rationale: "Derived `AdminUser` and `CashierUser` from a base `User` class to guarantee compile-time access constraints."
        }
      ],
      challengesAndSolutions: [
        {
          challenge: "Preventing buffer overflow and invalid input types during rapid order entry.",
          solution: "Implemented strict input sanitization routines clearing `cin.fail()` state and discarding excess characters."
        },
        {
          challenge: "Atomic end-of-day report generation while new orders arrive.",
          solution: "Used staging output files swapped with the master ledger only upon successful verification."
        }
      ],
      outcome: "A resilient, lightweight C++ solution demonstrating foundational software engineering rigor, systems thinking, and low-level data reliability."
    }
  },
  {
    id: "pulse-metrics-saas",
    title: "PulseMetrics — Business Analytics Portal",
    tagline: "Modern Operational Dashboard & Self-Service Client Reporting Interface",
    category: "Web Application",
    categorySlug: "web",
    featured: true,
    badge: "Client Portal",
    summary: "An interactive business reporting web application that consolidates key operational KPIs, automated summary charts, exportable reports, and customer account views into a high-speed interface.",
    deliverables: [
      "Responsive analytics dashboard with interactive data views",
      "Date-range filtering, metric cards, and trend visualizations",
      "Role-tailored customer view vs. internal executive view",
      "Clean export workflows (CSV data and PDF print styling)"
    ],
    keyFeatures: [
      "Dynamic KPI summary cards with period-over-period delta indicators",
      "Custom responsive chart components without heavy external bloat",
      "Accessible table controls with sorting, pagination, and search",
      "Dark and light theme support with zero layout shift"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "SVG Visualizations"],
    githubUrl: "https://github.com/techbyadil/pulse-metrics",
    liveUrl: "https://pulse.techbyadil.xyz",

    caseStudy: {
      clientType: "Business Solution",
      overview: "PulseMetrics was architected as a prototype client reporting portal to solve the problem of dense, unreadable spreadsheets being emailed to stakeholders every Monday morning.",
      problem: "Business managers spend hours each week manually formatting data exports into presentations that clients find hard to interpret on mobile devices.",
      goals: [
        "Consolidate operational metrics into a clean, 1-screen summary dashboard.",
        "Ensure 100% mobile responsiveness so clients can review numbers on their phones.",
        "Maintain sub-second page loads with zero layout shift (CLS < 0.05)."
      ],
      solution: "Built a sleek, high-contrast dashboard with modular React components, custom lightweight SVG sparklines, and intuitive filter controls that load instantly.",
      responsibilities: [
        "UX layout and interactive prototype design",
        "React state management with URL parameter synchronization",
        "Lightweight SVG chart components with animated tooltips",
        "Accessible color contrast tuning across light and dark modes"
      ],
      implementationDecisions: [
        {
          title: "Native SVG Charts over Heavy Canvas Libraries",
          rationale: "Kept the JavaScript bundle under 150KB while ensuring charts remain crisp on retina screens and accessible to screen readers via SVG ARIA tags."
        },
        {
          title: "URL-Driven Filter State",
          rationale: "All date ranges and active metrics sync directly with URL query params, allowing team members to share exact dashboard views with a single link."
        }
      ],
      challengesAndSolutions: [
        {
          challenge: "Rendering tabular data with 500+ rows smoothly on low-power mobile devices.",
          solution: "Implemented client-side windowing and pagination, keeping DOM node count under 100 at all times."
        },
        {
          challenge: "Ensuring dark mode maintains WCAG AA contrast for small metric labels.",
          solution: "Carefully calibrated color tokens using HSL with a minimum contrast ratio of 4.8:1 for all secondary text."
        }
      ],
      outcome: "A high-conversion showcase of modern frontend craftsmanship, responsive layout mastery, and client-centric data presentation."
    }
  }
];
