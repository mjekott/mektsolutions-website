"use client";

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/* Data                                                               */
/* ------------------------------------------------------------------ */

type Project = {
  slotId: string;
  src: string;
  brand: string;
  year: string;
  shot: string;
  headline: string;
  overview: string;
  bullets: string[];
  tags: string[];
};

const projects: Project[] = [
  {
    slotId: "mekt-shot-transferpay",
    src: "/shots/tranzypay.png",
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
  },
  {
    slotId: "mekt-shot-tradeline",
    src: "/shots/betaling.png",
    brand: "Betaling",
    year: "2024",
    shot: "product shot — cross-border trade dashboard",
    headline: "Cross-border infrastructure for African trade",
    overview:
      "A cross-border payments platform connecting Africa to global markets.",
    bullets: [
      "Multi-step money transfer flows with validations and success handling",
      "Payment requests & approval systems — workflows, audit logs, real-time notifications",
      "NGN virtual accounts & deposits with reconciliation systems",
      "Automated PDF account statements with scheduled email delivery",
    ],
    tags: ["Fintech", "FX", "Remittance"],
  },
  {
    slotId: "mekt-shot-maple",
    src: "/shots/nearpays.png",
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
  },
  {
    slotId: "mekt-shot-goodlife",
    src: "/shots/rockbalm.png",
    brand: "RockBalm Health",
    year: "2023",
    shot: "product shot — elderly care platform",
    headline: "Better health for your parents, made simple",
    overview:
      "An integrated healthcare platform for elderly care and remote monitoring.",
    bullets: [
      "Telemedicine & Care Access — doctors, pharmacists, and specialists from anywhere",
      "Personalized Care Plans for long-term elderly wellness",
      "Lab Testing & Results — easy booking with digital result tracking",
      "Health Monitoring & Insights — track vitals and progress in one place",
    ],
    tags: ["HealthTech", "Telemedicine", "Elderly Care"],
  },
];

type UiDesign = {
  id: string;
  src: string;
  brand: string;
  caption: string;
  tags: string[];
  width: number;
  placeholder: string;
};

const uiDesigns: UiDesign[] = [
  {
    id: "mekt-shot-jacko",
    src: "/shots/jacko.png",
    brand: "Jacko",
    caption: "An AI study assistant for students preparing for JAMB",
    tags: ["EdTech", "Dashboard"],
    width: 900,
    placeholder: "dashboard screenshot — analytics & reporting",
  },
  {
    id: "mekt-shot-bonivo",
    src: "/shots/bonivo.png",
    brand: "Bonivo",
    caption: "Invoicing, contracts, and project management in one place",
    tags: ["SaaS", "Dashboard"],
    width: 900,
    placeholder: "dashboard screenshot — business management",
  },
  {
    id: "mekt-shot-fresh2cart",
    src: "/shots/fresh2cart.png",
    brand: "Fresh2Cart",
    caption: "Grocery marketplace for fresh local produce",
    tags: ["Mobile"],
    width: 620,
    placeholder: "app screens — grocery marketplace",
  },
];

const services = [
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

const industries = [
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

const steps = [
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

/* ------------------------------------------------------------------ */
/* Image slot — renders the screenshot, falls back to a placeholder   */
/* ------------------------------------------------------------------ */

function Shot({
  src,
  placeholder,
  fit = "cover",
  bg = "#121e17",
  radius = 16,
  style,
}: {
  src: string;
  placeholder: string;
  fit?: "cover" | "contain";
  bg?: string;
  radius?: number;
  style?: React.CSSProperties;
}) {
  const [failed, setFailed] = useState(false);
  const dark = bg === "#121e17";
  return (
    <div
      style={{
        position: "relative",
        background: bg,
        borderRadius: radius,
        overflow: "hidden",
        ...style,
      }}
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={placeholder}
          onError={() => setFailed(true)}
          style={{ width: "100%", height: "100%", objectFit: fit, display: "block" }}
        />
      ) : (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            padding: 24,
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: dark ? "rgba(255,255,255,0.4)" : "rgba(7,17,12,0.45)",
            }}
          >
            Preview
          </span>
          <span
            style={{
              fontSize: 14,
              lineHeight: 1.5,
              maxWidth: 280,
              color: dark ? "rgba(255,255,255,0.55)" : "rgba(7,17,12,0.6)",
            }}
          >
            {placeholder}
          </span>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Shared inline-style fragments                                      */
/* ------------------------------------------------------------------ */

const pill: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  background: "#121e17",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: 999,
  padding: "7px 16px",
  fontSize: 13,
  fontWeight: 500,
  color: "rgba(255,255,255,0.7)",
};

const dot: React.CSSProperties = {
  width: 5,
  height: 5,
  borderRadius: "50%",
  background: "#f4f4f3",
  display: "inline-block",
};

const tag: React.CSSProperties = {
  fontSize: 12.5,
  color: "rgba(255,255,255,0.6)",
  background: "#142018",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 999,
  padding: "5px 13px",
};

/* ------------------------------------------------------------------ */
/* Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    /* ---- hero entrance ---- */
    const nav = root.querySelector<HTMLElement>('[data-hero="nav"]');
    if (nav) {
      nav.style.opacity = "0";
      nav.style.transform = "translateY(-14px)";
      nav.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    }
    const heroItems = [...root.querySelectorAll<HTMLElement>("header [data-hero]")];
    heroItems.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition =
        "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)";
    });
    requestAnimationFrame(() => {
      if (nav) {
        nav.style.opacity = "1";
        nav.style.transform = "none";
      }
      heroItems.forEach((el, i) => {
        el.style.transitionDelay = 140 + i * 120 + "ms";
        el.style.opacity = "1";
        el.style.transform = "none";
      });
    });

    /* ---- scroll reveal ---- */
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const delay = parseFloat(el.getAttribute("data-reveal-delay") || "0");
            el.style.transitionDelay = delay + "ms";
            el.style.opacity = "1";
            el.style.transform = "none";
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    const groups: Record<string, number> = {};
    root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(26px)";
      el.style.transition =
        "opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)";
      const parent = el.parentElement as HTMLElement | null;
      const key = parent
        ? parent.dataset._gk || (parent.dataset._gk = String(parent.offsetTop) + parent.children.length)
        : "x";
      groups[key] = groups[key] || 0;
      const idx = groups[key]++;
      el.setAttribute("data-reveal-delay", String(Math.min(idx, 8) * 70));
      io.observe(el);
    });

    /* ---- pinned horizontal galleries ---- */
    const wraps = [...root.querySelectorAll<HTMLElement>("[data-hwrap]")]
      .map((wrap) => ({
        wrap,
        track: wrap.querySelector<HTMLElement>("[data-htrack]"),
        bar: wrap.querySelector<HTMLElement>("[data-hprogress]"),
        count: wrap.querySelector<HTMLElement>("[data-hcount]"),
        maxX: 0,
      }))
      .filter((g): g is typeof g & { track: HTMLElement } => !!g.track);

    const measure = () => {
      wraps.forEach((g) => {
        g.maxX = Math.max(0, g.track.scrollWidth - g.track.clientWidth);
        g.wrap.style.height = window.innerHeight + g.maxX + "px";
      });
    };

    const updateOne = (g: (typeof wraps)[number]) => {
      const rect = g.wrap.getBoundingClientRect();
      const total = g.wrap.offsetHeight - window.innerHeight;
      let p = total > 0 ? -rect.top / total : 0;
      p = Math.max(0, Math.min(1, p));
      g.track.style.transform = "translate3d(" + -p * g.maxX + "px,0,0)";
      const cards = g.track.querySelectorAll<HTMLElement>("[data-hcard]");
      const vw = window.innerWidth;
      cards.forEach((c) => {
        const x = c.getBoundingClientRect().left;
        let vis = 1;
        if (x > vw * 0.6) vis = Math.max(0, 1 - (x - vw * 0.6) / (vw * 0.45));
        c.style.opacity = (0.25 + 0.75 * vis).toFixed(3);
        c.style.transform = "scale(" + (0.94 + 0.06 * vis).toFixed(3) + ")";
        c.style.transformOrigin = "left center";
        c.style.transition = "opacity 0.15s linear, transform 0.15s linear";
      });
      const n = cards.length || 1;
      const idx = Math.min(n, Math.round(p * (n - 1)) + 1);
      if (g.count) g.count.textContent = String(idx).padStart(2, "0") + " / " + String(n).padStart(2, "0");
      if (g.bar) g.bar.style.width = (100 / n + p * (100 - 100 / n)).toFixed(1) + "%";
    };
    const update = () => wraps.forEach(updateOne);

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
      }
    };
    const onResize = () => {
      measure();
      update();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    const timer = setTimeout(() => {
      measure();
      update();
    }, 60);
    requestAnimationFrame(() => {
      measure();
      update();
    });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      style={{
        background: "#07110c",
        color: "#f4f4f3",
        minHeight: "100vh",
        overflowX: "clip",
        letterSpacing: "-0.01em",
        position: "relative",
      }}
    >
      {/* hero ambient light */}
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -160,
          width: "60vw",
          maxWidth: 1100,
          height: 780,
          background:
            "radial-gradient(115% 90% at 80% 0%,color-mix(in srgb,var(--accent) 36%,transparent),color-mix(in srgb,var(--accent) 9%,transparent) 42%,transparent 66%)",
          pointerEvents: "none",
          filter: "blur(8px)",
          zIndex: 0,
          animation: "meDrift 14s ease-in-out infinite",
        }}
      />

      {/* ===== NAV ===== */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backdropFilter: "blur(14px)",
          background: "rgba(8,8,8,0.72)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          data-hero="nav"
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "16px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontWeight: 700, fontSize: 22, letterSpacing: "-0.04em", fontStyle: "italic" }}>MEKT</div>
          <div style={{ display: "flex", alignItems: "center", gap: 38 }}>
            {(
              [
                ["#works", "Work"],
                ["#services", "Services"],
                ["#process", "Process"],
                ["#industries", "Industries"],
              ] as const
            ).map(([href, label]) => (
              <a key={href} href={href} style={{ color: "rgba(255,255,255,0.62)", textDecoration: "none", fontSize: 14.5, fontWeight: 500 }}>
                {label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            style={{
              background: "var(--accent)",
              color: "#07110c",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
              padding: "10px 22px",
              borderRadius: 10,
            }}
          >
            Contact Us
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <header style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "120px 40px 130px" }}>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 760 }}>
          <div
            data-hero
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#121e17",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: 999,
              padding: "6px 14px 6px 6px",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            <span
              style={{
                background: "var(--accent)",
                color: "#07110c",
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.04em",
                padding: "3px 9px",
                borderRadius: 999,
              }}
            >
              BEST
            </span>
            <span style={{ color: "rgba(255,255,255,0.78)" }}>Product Design &amp; Engineering Agency</span>
          </div>
          <h1 data-hero style={{ fontSize: 74, lineHeight: 1.02, letterSpacing: "-0.045em", fontWeight: 600, marginTop: 30 }}>
            Products that move money, people, and businesses
          </h1>
          <p data-hero style={{ fontSize: 18, lineHeight: 1.55, color: "rgba(255,255,255,0.55)", maxWidth: 520, marginTop: 28, fontWeight: 400 }}>
            We partner with founders and teams across Africa to design, build, and ship digital products people actually use.
          </p>
          <div data-hero style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 40 }}>
            <a
              href="#contact"
              style={{
                background: "#142018",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#f4f4f3",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 600,
                padding: "14px 30px",
                borderRadius: 12,
              }}
            >
              Contact Us
            </a>
            <a
              href="#works"
              style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: 15, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              View Projects <span style={{ fontSize: 16 }}>&rarr;</span>
            </a>
          </div>
        </div>
      </header>

      {/* ===== WHO ARE WE ===== */}
      <section
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "40px 40px 110px",
          display: "grid",
          gridTemplateColumns: "0.85fr 1.15fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        <div>
          <div style={pill}>
            <span style={dot} />
            Who Are We
          </div>
          <h2 style={{ fontSize: 40, lineHeight: 1.12, letterSpacing: "-0.035em", fontWeight: 600, marginTop: 26 }}>
            A product studio <span style={{ color: "rgba(255,255,255,0.4)" }}>for ambitious teams</span>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.52)", marginTop: 22, maxWidth: 420 }}>
            MEKT is a multidisciplinary studio of designers and engineers. We turn complex problems into clean, dependable products — from first concept through launch and beyond.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.52)", marginTop: 16, maxWidth: 420 }}>
            Lean teams, senior people, and zero hand-offs. The people who scope your product are the ones who ship it.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: 22,
            padding: 16,
            background: "#0b140e",
          }}
        >
          {[
            { v: "15", s: "+", label: "products shipped", solid: true },
            { v: "7", s: "+", label: "industries served", solid: false },
            { v: "3", s: "", label: "countries delivered in", solid: false },
            { v: "100", s: "%", label: "in-house team", solid: true },
          ].map((st, i) => (
            <div
              key={i}
              style={{
                background: st.solid ? "#142018" : "#0d1610",
                border: st.solid ? "none" : "1px solid rgba(255,255,255,0.04)",
                borderRadius: 16,
                padding: "40px 36px",
                minHeight: 200,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 56, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1 }}>
                {st.v}
                <span style={{ color: "rgba(255,255,255,0.45)" }}>{st.s}</span>
              </div>
              <div style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", marginTop: 12 }}>{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SELECTED WORKS — pinned horizontal gallery ===== */}
      <div id="works" data-hwrap style={{ position: "relative" }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              maxWidth: 1240,
              width: "100%",
              margin: "0 auto",
              padding: "0 40px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 24,
              marginBottom: 34,
            }}
          >
            <div>
              <div style={pill}>
                <span style={dot} />
                Projects
              </div>
              <h2 style={{ fontSize: 46, letterSpacing: "-0.04em", fontWeight: 600, marginTop: 22 }}>Selected Works</h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 18, paddingBottom: 6 }}>
              <span data-hcount style={{ fontSize: 13, fontVariantNumeric: "tabular-nums", color: "rgba(255,255,255,0.45)", letterSpacing: "0.04em" }}>
                01 / 04
              </span>
              <div style={{ width: 160, height: 3, background: "rgba(255,255,255,0.12)", borderRadius: 999, overflow: "hidden" }}>
                <div data-hprogress style={{ width: "25%", height: "100%", background: "#f4f4f3", borderRadius: 999, transition: "width 0.1s linear" }} />
              </div>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                scroll <span style={{ fontSize: 14 }}>&darr;</span>
              </span>
            </div>
          </div>
          <div style={{ maxWidth: 1240, width: "100%", margin: "0 auto", padding: "0 40px", overflow: "hidden" }}>
            <div data-htrack style={{ display: "flex", gap: 24, willChange: "transform" }}>
              {projects.map((p) => (
                <div
                  key={p.slotId}
                  data-hcard
                  style={{
                    flex: "none",
                    width: 760,
                    background: "#0c150f",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 24,
                    padding: 22,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 28,
                    alignItems: "stretch",
                  }}
                >
                  <Shot src={p.src} placeholder={p.shot} fit="cover" bg="#121e17" radius={16} style={{ width: "100%", minHeight: 360 }} />
                  <div style={{ padding: "14px 18px 14px 6px", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>{p.brand}</span>
                      <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 999, padding: "3px 10px" }}>
                        {p.year}
                      </span>
                    </div>
                    <h3 style={{ fontSize: 25, lineHeight: 1.18, letterSpacing: "-0.025em", fontWeight: 600, marginTop: 14, color: "#f4f4f3" }}>
                      {p.headline}
                    </h3>
                    <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(255,255,255,0.5)", marginTop: 14 }}>{p.overview}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 11, marginTop: 20 }}>
                      {p.bullets.map((b, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 11 }}>
                          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", marginTop: 7, flex: "none" }} />
                          <span style={{ fontSize: 14, lineHeight: 1.45, color: "rgba(255,255,255,0.66)" }}>{b}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto", paddingTop: 22 }}>
                      {p.tags.map((t) => (
                        <span key={t} style={tag}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#contact"
                      style={{
                        marginTop: 22,
                        alignSelf: "flex-start",
                        background: "#142018",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "#f4f4f3",
                        textDecoration: "none",
                        fontSize: 13.5,
                        fontWeight: 600,
                        padding: "11px 22px",
                        borderRadius: 10,
                      }}
                    >
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== UI DESIGNS — pinned horizontal gallery ===== */}
      <div data-hwrap style={{ position: "relative" }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              maxWidth: 1240,
              width: "100%",
              margin: "0 auto",
              padding: "0 40px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 24,
              marginBottom: 34,
            }}
          >
            <div>
              <div style={pill}>
                <span style={dot} />
                UI Designs
              </div>
              <h2 style={{ fontSize: 46, letterSpacing: "-0.04em", fontWeight: 600, marginTop: 22 }}>
                Interface &amp; <span style={{ color: "rgba(255,255,255,0.4)" }}>visual design</span>
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 18, paddingBottom: 6 }}>
              <span data-hcount style={{ fontSize: 13, fontVariantNumeric: "tabular-nums", color: "rgba(255,255,255,0.45)", letterSpacing: "0.04em" }}>
                01 / 03
              </span>
              <div style={{ width: 160, height: 3, background: "rgba(255,255,255,0.12)", borderRadius: 999, overflow: "hidden" }}>
                <div data-hprogress style={{ width: "33%", height: "100%", background: "#f4f4f3", borderRadius: 999, transition: "width 0.1s linear" }} />
              </div>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                scroll <span style={{ fontSize: 14 }}>&darr;</span>
              </span>
            </div>
          </div>
          <div style={{ maxWidth: 1240, width: "100%", margin: "0 auto", padding: "0 40px", overflow: "hidden" }}>
            <div data-htrack style={{ display: "flex", gap: 24, willChange: "transform", alignItems: "stretch" }}>
              {uiDesigns.map((u) => (
                <div
                  key={u.id}
                  data-hcard
                  style={{
                    flex: "none",
                    width: u.width,
                    background: "#0c150f",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 24,
                    padding: 26,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
                    <div>
                      <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>{u.brand}</span>
                      <span style={{ fontSize: 14.5, color: "rgba(255,255,255,0.5)", marginLeft: 12 }}>{u.caption}</span>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      {u.tags.map((t) => (
                        <span key={t} style={tag}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Shot src={u.src} placeholder={u.placeholder} fit="contain" bg="#f4f4f3" radius={14} style={{ width: "100%", flex: 1, minHeight: 480 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== SERVICES ===== */}
      <section id="services" style={{ maxWidth: 1240, margin: "0 auto", padding: "90px 40px 60px" }}>
        <div style={{ textAlign: "center" }}>
          <div style={pill}>
            <span style={dot} />
            Services
          </div>
          <h2 style={{ fontSize: 44, lineHeight: 1.1, letterSpacing: "-0.04em", fontWeight: 600, marginTop: 22 }}>
            Four practices,
            <br />
            <span style={{ color: "rgba(255,255,255,0.4)" }}>one delivery team</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", marginTop: 18, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
            We cover the full lifecycle — from user research and design systems to production infrastructure.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 48 }}>
          {services.map((s) => (
            <div key={s.no} data-reveal style={{ background: "#0c150f", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: 32 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em" }}>{s.title}</h3>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.32)", fontVariantNumeric: "tabular-nums" }}>{s.no}</span>
              </div>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(255,255,255,0.5)", marginTop: 14, maxWidth: 440 }}>{s.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 22 }}>
                {s.skills.map((sk) => (
                  <span key={sk} style={{ ...tag, color: "rgba(255,255,255,0.62)" }}>
                    {sk}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                style={{
                  display: "inline-block",
                  marginTop: 26,
                  color: "rgba(255,255,255,0.72)",
                  textDecoration: "none",
                  fontSize: 13.5,
                  fontWeight: 600,
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 10,
                  padding: "10px 20px",
                }}
              >
                Get in touch
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section id="industries" style={{ maxWidth: 1240, margin: "0 auto", padding: "90px 40px 60px", textAlign: "center" }}>
        <div style={pill}>
          <span style={dot} />
          Industries
        </div>
        <h2 style={{ fontSize: 44, lineHeight: 1.1, letterSpacing: "-0.04em", fontWeight: 600, marginTop: 22 }}>
          Industries we serve <span style={{ color: "rgba(255,255,255,0.4)" }}>across Africa</span>
        </h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", marginTop: 18, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
          We deliver across sectors and across regions — from fintech to government, Lagos to London.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", maxWidth: 760, margin: "40px auto 0" }}>
          {industries.map((ind) => (
            <span
              key={ind}
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: "rgba(255,255,255,0.78)",
                background: "#0e1710",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: 999,
                padding: "11px 22px",
              }}
            >
              {ind}
            </span>
          ))}
        </div>
        <a
          href="#contact"
          style={{
            display: "inline-block",
            marginTop: 36,
            background: "#142018",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "#f4f4f3",
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 600,
            padding: "12px 28px",
            borderRadius: 12,
          }}
        >
          View all
        </a>
      </section>

      {/* ===== HOW WE DELIVER ===== */}
      <section
        id="process"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "90px 40px 70px",
          display: "grid",
          gridTemplateColumns: "0.82fr 1.18fr",
          gap: 80,
          alignItems: "start",
        }}
      >
        <div style={{ position: "sticky", top: 96 }}>
          <div style={pill}>
            <span style={dot} />
            Process
          </div>
          <h2 style={{ fontSize: 46, lineHeight: 1.08, letterSpacing: "-0.04em", fontWeight: 600, marginTop: 24 }}>
            How We
            <br />
            Deliver
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.52)", marginTop: 22, maxWidth: 340 }}>
            From first call to launch — a clear, repeatable path. You always know what&apos;s shipping and what&apos;s next.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 30 }}>
            <span style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1 }}>~10</span>
            <span style={{ fontSize: 14, lineHeight: 1.4, color: "rgba(255,255,255,0.5)" }}>
              weeks, typical
              <br />
              concept to go-live
            </span>
          </div>
          <a
            href="#contact"
            style={{
              display: "inline-block",
              marginTop: 34,
              background: "#f4f4f3",
              color: "#07110c",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
              padding: "13px 28px",
              borderRadius: 12,
            }}
          >
            Start a project
          </a>
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: 21,
              top: 24,
              bottom: 36,
              width: 2,
              background: "linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))",
              borderRadius: 2,
            }}
          />
          {steps.map((st) => (
            <div key={st.no} data-reveal style={{ display: "flex", gap: 24, paddingBottom: 30, position: "relative" }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "#0c150f",
                  border: "1px solid rgba(255,255,255,0.14)",
                  flex: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.7)",
                  fontVariantNumeric: "tabular-nums",
                  zIndex: 1,
                }}
              >
                {st.no}
              </div>
              <div style={{ paddingTop: 2 }}>
                <h3 style={{ fontSize: 19, fontWeight: 600, letterSpacing: "-0.02em" }}>{st.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(255,255,255,0.5)", marginTop: 7, maxWidth: 520 }}>{st.desc}</p>
              </div>
            </div>
          ))}
          <div data-reveal style={{ display: "flex", gap: 24, position: "relative" }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "var(--accent)",
                flex: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 700,
                color: "#07110c",
                fontVariantNumeric: "tabular-nums",
                zIndex: 1,
              }}
            >
              10
            </div>
            <div style={{ background: "#0c150f", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "22px 26px", flex: 1 }}>
              <h3 style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.03em" }}>
                Go-Live <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.5)" }}>&amp; iterate</span>
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(255,255,255,0.5)", marginTop: 8, maxWidth: 520 }}>
                Ship to production, monitor in the wild, and keep improving with you — long after launch day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="contact" style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "130px 40px 140px", textAlign: "center" }}>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 720,
            height: 460,
            background: "radial-gradient(80% 100% at 50% 100%,color-mix(in srgb,var(--accent) 32%,transparent),transparent 66%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={pill}>
            <span style={dot} />
            Let&apos;s talk
          </div>
          <h2 style={{ fontSize: 64, lineHeight: 1.05, letterSpacing: "-0.045em", fontWeight: 600, marginTop: 26 }}>
            Have a product in mind?
            <br />
            <span style={{ color: "rgba(255,255,255,0.4)" }}>Let&apos;s ship it.</span>
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", marginTop: 24, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
            Tell us what you&apos;re building. We&apos;ll come back within two business days with a plan.
          </p>
          <a
            href="mailto:hello@mekt.studio"
            style={{
              display: "inline-block",
              marginTop: 36,
              background: "var(--accent)",
              color: "#07110c",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 600,
              padding: "15px 36px",
              borderRadius: 12,
            }}
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "60px 40px", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 40 }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 24, letterSpacing: "-0.04em", fontStyle: "italic" }}>MEKT</div>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: "rgba(255,255,255,0.45)", marginTop: 18, maxWidth: 280 }}>
              Product design &amp; engineering studio building for ambitious teams across Africa.
            </p>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 22 }}>hello@mekt.studio</div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 6 }}>+234 800 000 0000</div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Company</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 18 }}>
              {(
                [
                  ["#works", "Work"],
                  ["#services", "Services"],
                  ["#process", "Process"],
                  ["#industries", "Industries"],
                ] as const
              ).map(([href, label]) => (
                <a key={href} href={href} style={{ fontSize: 14.5, color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Social</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 18 }}>
              {["LinkedIn", "X / Twitter", "Dribbble", "Instagram"].map((s) => (
                <a key={s} href="#" style={{ fontSize: 14.5, color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px 40px", display: "flex", justifyContent: "space-between", color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
          <span>&copy; 2026 MEKT Solutions</span>
          <span>All rights reserved</span>
        </div>
      </footer>
    </div>
  );
}
