import type { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: "mobile-app-development",
    number: "01",
    title: "Mobile App Development",
    description: "Turn your idea into a polished mobile experience with intuitive interfaces, practical functionality, and a reliable foundation for growth.",
    businessValue: "Deliver a responsive, native-feeling mobile app to your users on iOS and Android without bloated timelines or fragile dependencies.",
    iconName: "Smartphone",
    deliverables: [
      "Custom mobile application development",
      "Android and iOS app experiences where applicable",
      "Responsive layouts optimized for all device sizes",
      "Authentication and secure user account management",
      "API and third-party cloud service integrations",
      "Comprehensive testing, improvements, and maintenance"
    ]
  },
  {
    id: "web-application-development",
    number: "02",
    title: "Web Application Development",
    description: "Build modern web applications that help businesses streamline workflows, serve customers, and manage their operations more efficiently.",
    businessValue: "Speed up your operational throughput and delight customers with fast-loading, intuitive web portals and dashboards.",
    iconName: "Globe",
    deliverables: [
      "Custom business web applications",
      "High-performance admin panels and operational dashboards",
      "Self-service customer portals",
      "Internal business workflow automation tools",
      "Accessible, responsive interfaces (mobile to desktop)",
      "Legacy web application modernizations and improvements"
    ]
  },
  {
    id: "backend-api-development",
    number: "03",
    title: "Backend and API Development",
    description: "Create the reliable functionality behind your digital product, including data handling, secure access, and connections between applications and services.",
    businessValue: "Ensure your application logic is resilient, fast, and structured for long-term scalability without unexpected server costs.",
    iconName: "Server",
    deliverables: [
      "Robust backend business logic and services",
      "RESTful API design, development, and documentation",
      "Role-based authentication, authorization, and session security",
      "Database schema architecture, migrations, and queries",
      "Third-party webhook and service integrations",
      "Input data validation, error handling, and rate limiting"
    ]
  },
  {
    id: "ui-implementation",
    number: "04",
    title: "UI Implementation",
    description: "Transform designs and ideas into clean, responsive interfaces that are easy to navigate and pleasant to use.",
    businessValue: "Bridge the gap between design mockups and real user software with pixel-precision and seamless interaction states.",
    iconName: "Layout",
    deliverables: [
      "Figma / Adobe XD to production application implementation",
      "Responsive user interfaces that look immaculate across devices",
      "Modular, reusable, type-safe interface component libraries",
      "Layout, typography, and usability UX refinements",
      "Cross-device and cross-browser interface testing"
    ]
  },
  {
    id: "integrations-features",
    number: "05",
    title: "Integration and Feature Development",
    description: "Connect the services your product needs and introduce new functionality without making the experience unnecessarily complicated.",
    businessValue: "Expand your product's capabilities by plugging in leading cloud, payment, or messaging tools smoothly.",
    iconName: "Cpu",
    deliverables: [
      "Authentication integrations (OAuth, social login, JWT)",
      "Cloud backend and database integrations",
      "Payment processing integrations (Stripe, PayPal, local gateways)",
      "Transactional email and push notification systems",
      "Custom third-party REST API connections",
      "Incremental feature development and sprint expansions"
    ]
  },
  {
    id: "bug-fixing-maintenance",
    number: "06",
    title: "Bug Fixing and Maintenance",
    description: "Improve the stability, usability, and reliability of your existing digital products.",
    businessValue: "Eliminate downtime, patch vulnerabilities, remove UI glitches, and safeguard your software against bit rot.",
    iconName: "Wrench",
    deliverables: [
      "Targeted troubleshooting and production bug fixes",
      "UI layout, clipping, and responsive glitch corrections",
      "API failure investigation and query optimizations",
      "Core Web Vitals and frontend load-speed tuning",
      "Package dependency upgrades and breaking-change migrations",
      "Ongoing retainer maintenance and security updates"
    ]
  }
];
