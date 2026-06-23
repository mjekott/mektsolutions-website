/* ------------------------------------------------------------------ */
/* Site content — single source of truth for the landing page.        */
/* ------------------------------------------------------------------ */

export type Project = {
  slotId: string;
  src: string;
  brand: string;
  year: string;
  shot: string;
  headline: string;
  overview: string;
  bullets: string[];
  tags: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    slotId: "mekt-shot-transferpay",
    src: "/shots/tranzypay.webp",
    brand: "TranzyPay",
    year: "2025",
    shot: "product shot — global payments platform",
    headline: "Simplifying global payments for businesses",
    overview:
      "An enterprise FX platform trusted by 1,000+ businesses to move money across borders.",
    bullets: [
      "Multi-step Send Money flow — progress tracking, validation, confirmation, success states",
      "Payment requests & approvals — approve/reject modals, audit trail, notifications",
      "NGN virtual accounts & deposits — dynamic account provisioning and reconciliation",
      "PDF account statements — PDFKit + AWS S3 pipeline with scheduled email distribution",
    ],
    tags: ["Fintech", "FX", "Remittance"],
    url: "https://www.tranzypay.co.uk/",
  },
  {
    slotId: "mekt-shot-tradeline",
    src: "/shots/betaling.webp",
    brand: "Betaling",
    year: "2024",
    shot: "product shot — cross-border trade dashboard",
    headline: "Cross-border infrastructure for African trade",
    overview: "A cross-border payments platform connecting Africa to global markets.",
    bullets: [
      "Multi-step money transfer flows with validations and success handling",
      "Payment requests & approval systems — workflows, audit logs, real-time notifications",
      "NGN virtual accounts & deposits with reconciliation systems",
      "Automated PDF account statements with scheduled email delivery",
    ],
    tags: ["Fintech", "FX", "Remittance"],
    url: "https://www.betaling-africa.com/",
  },
  {
    slotId: "mekt-shot-maple",
    src: "/shots/nearpays.webp",
    brand: "Nearpays",
    year: "2024",
    shot: "product shot — Soft POS & payments platform",
    headline: "The modern way to manage finances",
    overview: "A Soft POS and payments platform built for multi-business operations.",
    bullets: [
      "One Platform — multiple businesses, one shared core",
      "Soft POS — card acceptance on any Android phone",
      "Multi-Provider — Paystack, Flutterwave, Vogue Pay live",
      "Fast Onboarding — new tenants live in days, not months",
    ],
    tags: ["Fintech", "Payments Infrastructure", "Embedded Finance"],
    url: "https://www.nearpays.com/",
  },
  {
    slotId: "mekt-shot-goodlife",
    src: "/shots/rockbalm.webp",
    brand: "RockBalm Health",
    year: "2023",
    shot: "product shot — elderly care platform",
    headline: "Better health for your parents, made simple",
    overview: "An integrated healthcare platform for elderly care and remote monitoring.",
    bullets: [
      "Telemedicine & Care Access — doctors, pharmacists, and specialists from anywhere",
      "Personalized Care Plans for long-term elderly wellness",
      "Lab Testing & Results — easy booking with digital result tracking",
      "Health Monitoring & Insights — track vitals and progress in one place",
    ],
    tags: ["HealthTech", "Telemedicine", "Elderly Care"],
    url: "https://rockbalmhealth.com/",
  },
];

export type UiDesign = {
  id: string;
  src: string;
  brand: string;
  caption: string;
  tags: string[];
  width: number;
  widthClass: string;
  placeholder: string;
};

export const uiDesigns: UiDesign[] = [
  {
    id: "mekt-shot-jacko",
    src: "/shots/jacko.webp",
    brand: "Jacko",
    caption: "An AI study assistant for students preparing for JAMB",
    tags: ["EdTech", "Dashboard"],
    width: 900,
    widthClass: "w-[min(900px,86vw)]",
    placeholder: "dashboard screenshot — analytics & reporting",
  },
  {
    id: "mekt-shot-bonivo",
    src: "/shots/bonivo.webp",
    brand: "Bonivo",
    caption: "Invoicing, contracts, and project management in one place",
    tags: ["SaaS", "Dashboard"],
    width: 900,
    widthClass: "w-[min(900px,86vw)]",
    placeholder: "dashboard screenshot — business management",
  },
  {
    id: "mekt-shot-fresh2cart",
    src: "/shots/fresh2cart.webp",
    brand: "Fresh2Cart",
    caption: "Grocery marketplace for fresh local produce",
    tags: ["Mobile"],
    width: 620,
    widthClass: "w-[min(620px,86vw)]",
    placeholder: "app screens — grocery marketplace",
  },
];

export type Service = {
  no: string;
  title: string;
  desc: string;
  skills: string[];
};

export const services: Service[] = [
  {
    no: "01",
    title: "Product Design",
    desc: "Research, UX, and interface design that turns ambiguity into shippable specs.",
    skills: ["UX research", "Design systems", "End-to-end flows for web & mobile"],
  },
  {
    no: "02",
    title: "Web Engineering",
    desc: "Fast, accessible web apps built on modern, maintainable stacks.",
    skills: ["Next.js", "React", "Admin portals", "Dashboards", "Marketing sites"],
  },
  {
    no: "03",
    title: "Mobile Apps",
    desc: "Native-quality iOS and Android products from one focused codebase.",
    skills: ["React Native", "Expo — biometrics, push, liveness, offline-first"],
  },
  {
    no: "04",
    title: "Backend & Infra",
    desc: "Reliable, secure services and integrations that scale with you.",
    skills: ["NestJS", "PostgreSQL", "Multi-tenant architectures", "Webhooks", "Queues"],
  },
];

export const industries: string[] = [
  "Banking",
  "Fintech",
  "Payments",
  "Investments",
  "E-Commerce",
  "Logistics",
  "Healthcare",
  "Proptech",
  "Construction",
  "Government",
  "Sports",
  "Productivity",
];

export type Step = { no: string; title: string; desc: string };

export const steps: Step[] = [
  { no: "01", title: "Project Intake", desc: "We scope the problem, goals, and constraints with you." },
  { no: "02", title: "Team Forming", desc: "A senior squad is assembled around your product." },
  { no: "03", title: "Discovery", desc: "Research and definition to de-risk the build." },
  { no: "04", title: "Roadmap", desc: "A clear, milestone-based plan everyone signs off on." },
  { no: "05", title: "Design & Build", desc: "Tight design–engineering loops, shipping every week." },
  { no: "06", title: "Deployment", desc: "Continuous delivery to staging and production." },
  { no: "07", title: "Data Migration", desc: "Safe, validated moves from legacy systems." },
  { no: "08", title: "QA & Assessment", desc: "Testing, audits, and a post-launch readiness plan." },
  { no: "09", title: "24/7 Support", desc: "Tier-level monitoring and bug fixes around the clock." },
];

export const founder = {
  name: "Mfonobong Ekott",
  photo: "/shots/founder.webp",
  roles: [
    { label: "CEO, MEKT Solutions", accent: true },
    { label: "Full-Stack Engineer", accent: false },
  ],
  bio: "I've spent the last several years building and leading the engineering behind some of Africa's most demanding fintech and health products — from payment rails to remote care. At MEKT, I bring that same hands-on, ship-it-right standard to every team we partner with.",
  ledProjects: ["TranzyPay", "Betaling", "RockBalm Health", "Nearpays"],
  linkedin: "https://www.linkedin.com/in/mjekott",
} as const;

export const navLinks = [
  { href: "#works", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#industries", label: "Industries" },
  { href: "#founder", label: "Founder" },
] as const;

export const contact = {
  email: "sales@mektsolutions.com",
  phoneHref: "tel:+2348107094126",
  phoneLabel: "+234 810 709 4126",
  calendly: "https://calendly.com/ekottmfon/30min",
} as const;

export const clients = ["TranzyPay", "Betaling", "Nearpays", "RockBalm", "Jacko", "Bonivo", "Fresh2Cart"];

export type Testimonial = { quote: string; name: string; role: string; initials: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "We were building for families caring for elderly parents — sensitive, high-stakes work. MEKT handled telemedicine, care plans, and lab results with a reliability that earned our users' trust from day one.",
    name: "Idongesit Umoh",
    role: "CEO, RockBalm Health",
    initials: "IU",
  },
  {
    quote:
      "The multi-step transfer flows and approval systems MEKT built are the backbone of our platform. They thought through every edge case — validation, audit trails, reconciliation — so our team could move fast without breaking things.",
    name: "Oluwatosin Adeyemi",
    role: "Product Manager, TranzyPay",
    initials: "OA",
  },
  {
    quote:
      "MEKT turned a messy spread of invoicing, contracts, and project tracking into one clean product. Our customers finally have everything in one place — and our churn dropped because of it.",
    name: "Chinedu Eze",
    role: "Founder, Bonivo",
    initials: "CE",
  },
];
