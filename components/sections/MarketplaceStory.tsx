"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Scroll helper — works even inside GSAP pinned sections
const scrollToContact = () => {
  const el = document.getElementById("contact");
  if (!el) return;
  let top = 0;
  let curr: HTMLElement | null = el;
  while (curr) {
    top += curr.offsetTop;
    curr = curr.offsetParent as HTMLElement | null;
  }
  window.scrollTo({ top, behavior: "smooth" });
};

const platforms = [
  {
    id: "amazon",
    name: "Amazon",
    color: "#FF9900",
    bg: "from-[#FFF8F0] to-white",
    tagline: "Dominate the World's Largest Marketplace",
    description:
      "From product listing optimization to PPC campaigns and brand registry — we engineer Amazon success at every layer of the funnel.",
    stats: [
      { value: "300%", label: "Avg. Sales Lift" },
      { value: "40%", label: "ACoS Reduction" },
      { value: "2.4×", label: "ROI Multiplier" },
    ],
    services: [
      "FBA Setup & Management",
      "A+ Content & Storefront",
      "PPC Optimization",
      "Brand Registry",
      "Inventory Planning",
    ],
    // HTML logo — more reliable than SVG <text> elements
    icon: (
      <div className="flex flex-col items-center gap-3 py-4 px-6 w-full">
        <div
          style={{
            fontFamily: "'Arial Black', 'Arial', sans-serif",
            fontSize: "3.2rem",
            fontWeight: 900,
            color: "#232F3E",
            letterSpacing: "-2px",
            lineHeight: 1,
          }}
        >
          amazon
        </div>
        <svg width="140" height="22" viewBox="0 0 140 22" fill="none">
          <path
            d="M12 8 Q70 22 128 8"
            stroke="#FF9900"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path d="M122 3 L134 9 L122 15 Z" fill="#FF9900" />
        </svg>
      </div>
    ),
  },
  {
    id: "walmart",
    name: "Walmart",
    color: "#0071CE",
    bg: "from-[#F0F6FF] to-white",
    tagline: "Scale on America's Most Trusted Retailer",
    description:
      "Walmart's marketplace is a goldmine for the prepared seller. We help you get listed, stay compliant, and grow consistently.",
    stats: [
      { value: "180%", label: "Revenue Growth" },
      { value: "95%", label: "Account Health" },
      { value: "60+", label: "SKUs Managed" },
    ],
    services: [
      "Walmart Seller Setup",
      "WFS Fulfillment",
      "Listing Optimization",
      "Pricing Strategy",
      "Review Management",
    ],
    icon: (
      <div className="flex items-center gap-4 py-4 px-6">
        {/* Walmart 6-petal spark icon */}
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <ellipse
              key={deg}
              cx="22"
              cy="11"
              rx="3.5"
              ry="9"
              fill="#FFC220"
              transform={`rotate(${deg} 22 22)`}
            />
          ))}
        </svg>
        <span
          style={{
            fontFamily: "'Arial', sans-serif",
            fontSize: "2.8rem",
            fontWeight: 700,
            color: "#0071CE",
            letterSpacing: "-1px",
            lineHeight: 1,
          }}
        >
          Walmart
        </span>
      </div>
    ),
  },
  {
    id: "ebay",
    name: "eBay",
    color: "#E53238",
    bg: "from-[#FFF5F5] to-white",
    tagline: "Turn Inventory into Income on eBay",
    description:
      "eBay rewards expertise. Our proven strategies maximize sell-through rates, build buyer trust, and compound growth across your store.",
    stats: [
      { value: "250%", label: "Store Growth" },
      { value: "98%", label: "Feedback Score" },
      { value: "45%", label: "Return Rate Drop" },
    ],
    services: [
      "Store Setup & Design",
      "SEO Optimization",
      "Promoted Listings",
      "Dropshipping Systems",
      "Bulk Listing Tools",
    ],
    icon: (
      <div className="py-4 px-6">
        <div
          style={{
            fontFamily: "'Arial Black', 'Arial', sans-serif",
            fontWeight: 900,
            fontSize: "4rem",
            letterSpacing: "-3px",
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#E53238" }}>e</span>
          <span style={{ color: "#0064D2" }}>B</span>
          <span style={{ color: "#F5AF02" }}>a</span>
          <span style={{ color: "#86B817" }}>y</span>
        </div>
      </div>
    ),
  },
  {
    id: "shopify",
    name: "Shopify",
    color: "#96BF48",
    bg: "from-[#F4F9EE] to-white",
    tagline: "Build a Brand Beyond the Marketplaces",
    description:
      "Your own store. Your own brand. Shopify is the platform for long-term eCommerce sovereignty — and we build it right.",
    stats: [
      { value: "4×", label: "Conversion Rate" },
      { value: "65%", label: "Repeat Buyers" },
      { value: "$200K+", label: "Launch Revenue" },
    ],
    services: [
      "Store Development",
      "Theme Customization",
      "Shopify Apps Setup",
      "Email & SMS Marketing",
      "Paid Traffic Strategy",
    ],
    icon: (
      <div className="flex items-center gap-4 py-4 px-6">
        {/* Shopify bag mark */}
        <div
          style={{
            width: 44,
            height: 44,
            background: "#96BF48",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              color: "#fff",
              fontSize: "1.6rem",
              fontWeight: 900,
              fontFamily: "Arial, sans-serif",
              lineHeight: 1,
            }}
          >
            S
          </span>
        </div>
        <span
          style={{
            fontFamily: "'Arial', sans-serif",
            fontSize: "2.8rem",
            fontWeight: 700,
            color: "#5A8A2E",
            letterSpacing: "-1px",
            lineHeight: 1,
          }}
        >
          shopify
        </span>
      </div>
    ),
  },
];

export default function MarketplaceStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const panels = panelRefs.current.filter(Boolean) as HTMLDivElement[];
      if (panels.length === 0) return;

      const totalScroll = window.innerHeight * (panels.length - 1);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalScroll}`,
          pin: true,
          anticipatePin: 1,
          scrub: 1.2,
          // Update pointer-events on each panel as progress changes
          // so hidden panels never block clicks on the visible panel
          onUpdate: (self) => {
            const activeIndex = Math.min(
              Math.floor(self.progress * panels.length),
              panels.length - 1
            );
            panels.forEach((panel, i) => {
              panel.style.pointerEvents = i === activeIndex ? "auto" : "none";
            });
          },
        },
      });

      // Panel transitions
      panels.forEach((panel, i) => {
        if (i === 0) return;
        const prev = panels[i - 1];

        tl.to(
          prev,
          { yPercent: -5, opacity: 0, scale: 0.97, duration: 1 },
          i - 1
        );

        tl.fromTo(
          panel,
          { yPercent: 6, opacity: 0, scale: 1.02 },
          { yPercent: 0, opacity: 1, scale: 1, duration: 1 },
          i - 1
        );

        const items = panel.querySelectorAll(".story-item");
        tl.from(
          items,
          { y: 20, opacity: 0, stagger: 0.08, duration: 0.7 },
          i - 0.6
        );
      });

      // First panel items animate on section enter
      const firstItems = panels[0]?.querySelectorAll(".story-item") ?? [];
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.from(firstItems, {
            y: 24,
            opacity: 0,
            stagger: 0.08,
            duration: 0.8,
            ease: "power3.out",
            immediateRender: false,
          });
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="platforms"
      className="w-full"
      aria-label="Marketplace Expertise"
    >
      {/* Section header */}
      <div className="text-center py-16 px-6">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#71717A] uppercase mb-4">
          <span className="w-8 h-px bg-[#C49A3C]" />
          Marketplace Mastery
          <span className="w-8 h-px bg-[#C49A3C]" />
        </span>
        <h2
          className="text-4xl md:text-6xl font-black text-[#09090B] tracking-tight mb-4"
          style={{ fontFamily: "var(--font-bricolage)" }}
        >
          Platforms We Master
        </h2>
        <p className="text-base md:text-lg text-[#71717A] max-w-xl mx-auto">
          One ecosystem. Four marketplaces. Unlimited growth potential.
        </p>
      </div>

      {/* Pinned scroll container */}
      <div
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden"
      >
        {platforms.map((platform, i) => (
          <div
            key={platform.id}
            ref={(el) => {
              panelRefs.current[i] = el;
            }}
            className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${platform.bg}`}
            style={{
              opacity: i === 0 ? 1 : 0,
              // Hidden panels must NOT intercept clicks — the onUpdate fixes this dynamically
              pointerEvents: i === 0 ? "auto" : "none",
            }}
          >
            <div className="max-w-6xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Platform info */}
              <div className="flex flex-col gap-6">
                {/* Platform badge */}
                <div className="story-item">
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase border"
                    style={{
                      color: platform.color,
                      borderColor: `${platform.color}30`,
                      background: `${platform.color}10`,
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: platform.color }}
                    />
                    {platform.name} Specialist
                  </div>
                </div>

                {/* Tagline */}
                <h3
                  className="story-item text-3xl md:text-4xl lg:text-5xl font-black text-[#09090B] leading-tight tracking-tight"
                  style={{ fontFamily: "var(--font-bricolage)" }}
                >
                  {platform.tagline}
                </h3>

                {/* Description */}
                <p className="story-item text-base md:text-lg text-[#52525B] leading-relaxed">
                  {platform.description}
                </p>

                {/* Services chips */}
                <ul className="story-item flex flex-wrap gap-2">
                  {platform.services.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-black/[0.08] text-[#52525B] bg-white"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: platform.color }}
                      />
                      {s}
                    </li>
                  ))}
                </ul>

                {/* CTA button → contact section */}
                <div className="story-item">
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ background: platform.color }}
                  >
                    Get Started with {platform.name}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right: Logo card + stats */}
              <div className="flex flex-col gap-8">
                {/* Logo card */}
                <div className="story-item glass rounded-3xl shadow-sm flex items-center justify-center min-h-32 overflow-hidden">
                  {platform.icon}
                </div>

                {/* Stats */}
                <div className="story-item grid grid-cols-3 gap-4">
                  {platform.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center gap-1 p-4 rounded-2xl bg-white border border-black/[0.06] shadow-sm"
                    >
                      <span
                        className="text-2xl md:text-3xl font-black"
                        style={{
                          fontFamily: "var(--font-bricolage)",
                          color: platform.color,
                        }}
                      >
                        {stat.value}
                      </span>
                      <span className="text-[10px] font-medium text-[#71717A] text-center leading-tight uppercase tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Progress dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {platforms.map((_, j) => (
                <div
                  key={j}
                  className="h-1 rounded-full transition-all duration-300"
                  style={{
                    background:
                      j === i ? platform.color : "rgba(0,0,0,0.12)",
                    width: j === i ? 24 : 6,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
