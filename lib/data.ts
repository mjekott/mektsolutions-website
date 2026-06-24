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
  metric: string;
  metricLabel: string;
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
    metric: "1,000+",
    metricLabel: "businesses moving money across borders",
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
    metric: "5+",
    metricLabel: "markets connected across the continent",
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
    metric: "Days",
    metricLabel: "to onboard a new business — not months",
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
    metric: "24/7",
    metricLabel: "remote access to doctors and care",
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

export type ServiceIcon = "design" | "web" | "mobile" | "backend" | "fintech" | "strategy";

export type Service = {
  icon: ServiceIcon;
  /** Per-card accent colour (icon tile + hover border). */
  color: string;
  title: string;
  desc: string;
  features: string[];
};

export const services: Service[] = [
  {
    icon: "design",
    color: "#16b57f",
    title: "Product Design",
    desc: "Research, UX, and interface design that turns ambiguity into shippable specs.",
    features: [
      "User & product research",
      "End-to-end UX flows",
      "Design systems & components",
      "Web & mobile interfaces",
    ],
  },
  {
    icon: "web",
    color: "#38bdf8",
    title: "Web Engineering",
    desc: "Fast, accessible web apps built on modern, maintainable stacks.",
    features: [
      "Production web applications",
      "Admin portals & dashboards",
      "Marketing & web platforms",
      "Performance & accessibility",
    ],
  },
  {
    icon: "mobile",
    color: "#a78bfa",
    title: "Mobile Apps",
    desc: "Native-quality iOS and Android from one focused codebase.",
    features: [
      "Cross-platform mobile apps",
      "Biometrics & liveness",
      "Push & offline-first",
      "App Store & Play delivery",
    ],
  },
  {
    icon: "backend",
    color: "#6f7bf7",
    title: "Backend & Infrastructure",
    desc: "Reliable, secure services and integrations that scale with you.",
    features: [
      "Secure, scalable APIs",
      "Multi-tenant architecture",
      "Webhooks, queues & jobs",
      "Cloud deploy & CI/CD",
    ],
  },
  {
    icon: "fintech",
    color: "#e8a13a",
    title: "Fintech & Payments",
    desc: "Payment rails, wallets, and reconciliation engineered for trust at scale.",
    features: [
      "Transfers & settlements",
      "Virtual accounts & wallets",
      "Reconciliation & statements",
      "Soft POS & provider integrations",
    ],
  },
  {
    icon: "strategy",
    color: "#ef6e85",
    title: "Product Strategy & Advisory",
    desc: "Pressure-test the idea, scope the build, and de-risk delivery.",
    features: [
      "Product & UX audits",
      "Scoping & roadmaps",
      "Architecture reviews",
      "Technical due diligence",
    ],
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

export type Step = { no: string; title: string; phase: string; desc: string };

export const steps: Step[] = [
  { no: "01", title: "Project Intake", phase: "Kickoff", desc: "We scope the problem, goals, and constraints with you." },
  { no: "02", title: "Team Forming", phase: "Kickoff", desc: "A senior squad is assembled around your product." },
  { no: "03", title: "Discovery", phase: "Discovery", desc: "Research and definition to de-risk the build." },
  { no: "04", title: "Roadmap", phase: "Planning", desc: "A clear, milestone-based plan everyone signs off on." },
  { no: "05", title: "Design & Build", phase: "Build", desc: "Tight design–engineering loops, shipping every week." },
  { no: "06", title: "Deployment", phase: "Build", desc: "Continuous delivery to staging and production." },
  { no: "07", title: "Data Migration", phase: "Migration", desc: "Safe, validated moves from legacy systems." },
  { no: "08", title: "QA & Assessment", phase: "Assurance", desc: "Testing, audits, and a post-launch readiness plan." },
  { no: "09", title: "24/7 Support", phase: "Operate", desc: "Tier-level monitoring and bug fixes around the clock." },
];

export const founder = {
  name: "Mfonobong Ekott",
  photo: "/shots/founder.webp",
  roles: [
    { label: "CEO, MEKT Solutions", accent: true },
    { label: "Full-Stack Engineer", accent: false },
    { label: "7+ Years Experience", accent: false },
  ],
  bio: "Mfonobong John Ekott has spent 7+ years building and leading the engineering behind some of Africa's most demanding fintech and health products, from payment infrastructure to remote healthcare solutions. At MEKT, he brings that same commitment to excellence, practical leadership, and high quality execution to every team the company partners with.",
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

export const heroWords = ["money", "people", "businesses", "markets", "industries"];

export type Diagnostic = { kicker: string; title: string; desc: string; cta: string };

export const diagnostics: Diagnostic[] = [
  {
    kicker: "Free · 30 min",
    title: "Product Audit",
    desc: "Send us your app or codebase. We'll review the UX, architecture, and what's slowing you down — and tell you straight.",
    cta: "Book an audit",
  },
  {
    kicker: "Phase Zero",
    title: "Scoping Session",
    desc: "Not sure what to build first? We'll pressure-test the idea and map the smallest version worth shipping.",
    cta: "Map it with us",
  },
  {
    kicker: "Health Check",
    title: "Tech Review",
    desc: "Engineering delays you can't explain? We'll ask the right questions and surface the real bottlenecks.",
    cta: "Get a review",
  },
];

export type Testimonial = { quote: string; name: string; role: string; initials: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Families relied on our platform to care for aging parents, making every interaction a matter of trust. MEKT built and delivered telemedicine, care planning, and lab result systems with the reliability and attention to detail that users could depend on from day one.",
    name: "Idongesit Udombana",
    role: "CEO, RockBalm Health",
    initials: "IU",
  },
  {
    quote:
      "From day one, MEKT acted as more than a development partner; they became a strategic extension of our team. They built our entire cross-border payments platform, worked directly with banking partners on our behalf, and delivered the robust infrastructure needed to support secure, compliant, and reliable international payments at scale.",
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
