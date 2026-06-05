"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    number: "01",
    platform: "Amazon",
    platformColor: "#FF9900",
    niche: "Home & Kitchen",
    headline: "From $8K to $120K Monthly Revenue",
    description:
      "Transformed an underperforming home products brand into a dominant category player through aggressive PPC restructuring and A+ content overhaul.",
    metrics: [
      { label: "Revenue Growth", value: "1,400%" },
      { label: "ACoS Reduction", value: "62%" },
      { label: "BSR Rank", value: "Top 50" },
    ],
    duration: "14 months",
    bg: "bg-[#FFF8F0]",
    accent: "#FF9900",
  },
  {
    number: "02",
    platform: "Walmart",
    platformColor: "#0071CE",
    niche: "Baby Products",
    headline: "$0 to $45K in First 90 Days",
    description:
      "Launched a premium baby care brand on Walmart Marketplace with a structured listing strategy, WFS enrollment, and competitor keyword hijacking.",
    metrics: [
      { label: "Launch Revenue", value: "$45K" },
      { label: "Conversion Rate", value: "8.4%" },
      { label: "Search Ranking", value: "#1 Page" },
    ],
    duration: "90 days",
    bg: "bg-[#F0F6FF]",
    accent: "#0071CE",
  },
  {
    number: "03",
    platform: "Shopify",
    platformColor: "#96BF48",
    niche: "Fashion Accessories",
    headline: "Built a $200K+ Brand from Scratch",
    description:
      "Developed a full DTC Shopify store with branded email flows, influencer partnerships, and paid social — reaching $200K ARR within 12 months.",
    metrics: [
      { label: "ARR Achieved", value: "$200K+" },
      { label: "Email Open Rate", value: "42%" },
      { label: "ROAS (Meta Ads)", value: "4.8×" },
    ],
    duration: "12 months",
    bg: "bg-[#F4F9EE]",
    accent: "#96BF48",
  },
  {
    number: "04",
    platform: "eBay",
    platformColor: "#E53238",
    niche: "Electronics",
    headline: "250% Store Revenue Growth",
    description:
      "Revitalized a stagnating eBay electronics store with SEO optimization, promoted listings strategy, and automated repricing to dominate competitors.",
    metrics: [
      { label: "Revenue Growth", value: "250%" },
      { label: "Feedback Score", value: "99.8%" },
      { label: "Sell-Through Rate", value: "94%" },
    ],
    duration: "8 months",
    bg: "bg-[#FFF5F5]",
    accent: "#E53238",
  },
  {
    number: "05",
    platform: "Amazon + Shopify",
    platformColor: "#8B5CF6",
    niche: "Health & Wellness",
    headline: "Multi-Channel Scale to $500K",
    description:
      "Built a synchronized multi-channel strategy across Amazon and Shopify for a wellness brand — unified inventory, cross-platform retargeting, and brand cohesion.",
    metrics: [
      { label: "Combined Revenue", value: "$500K" },
      { label: "LTV Increase", value: "3.2×" },
      { label: "Channels Active", value: "4" },
    ],
    duration: "18 months",
    bg: "bg-[#F5F3FF]",
    accent: "#8B5CF6",
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      const container = containerRef.current;
      const progress = progressRef.current;
      if (!track || !container) return;

      // Wait for layout to settle before calculating width
      const setupHorizontalScroll = () => {
        const totalScrollDistance = track.scrollWidth - window.innerWidth;

        const tl = gsap.to(track, {
          x: -totalScrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${totalScrollDistance}`,
            pin: true,
            anticipatePin: 1,
            scrub: 1.2,
            onUpdate: (self) => {
              if (progress) {
                gsap.to(progress, {
                  scaleX: self.progress,
                  duration: 0.1,
                  ease: "none",
                });
              }
            },
          },
        });

        return tl;
      };

      // Cards reveal
      gsap.from(".portfolio-card", {
        opacity: 0,
        scale: 0.95,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
        },
      });

      setupHorizontalScroll();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="w-full"
      aria-label="Case Studies"
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 md:pt-36 pb-12">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#71717A] uppercase mb-4">
          <span className="w-8 h-px bg-[#C49A3C]" />
          Proven Results
        </span>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-black text-[#09090B] tracking-tighter leading-none"
            style={{ fontFamily: "var(--font-bricolage)" }}
          >
            Case Studies.
          </h2>
          <p className="text-base text-[#71717A] max-w-xs leading-relaxed">
            Real brands. Real numbers. Scroll to explore our work.
            <span className="inline-flex items-center gap-1 ml-2 text-[#C49A3C]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
        <div className="h-px bg-black/[0.06] rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-[#C49A3C] rounded-full origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden"
        aria-label="Scroll horizontally to see case studies"
      >
        <div
          ref={trackRef}
          className="horizontal-scroll-track h-full"
          style={{ width: `${caseStudies.length * 480}px` }}
        >
          {caseStudies.map((study, i) => (
            <div
              key={i}
              className={`portfolio-card h-full w-[440px] flex-shrink-0 flex items-center px-6 ml-6 ${i === 0 ? "ml-[calc(50vw-220px)]" : ""} ${i === caseStudies.length - 1 ? "mr-[calc(50vw-220px)]" : ""}`}
            >
              <div
                className={`w-full rounded-3xl ${study.bg} border border-black/[0.06] p-8 flex flex-col gap-6 h-[520px] relative overflow-hidden hover:shadow-xl hover:shadow-black/[0.08] transition-shadow duration-300`}
              >
                {/* Number + Platform */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-black/[0.06]" style={{ fontFamily: "var(--font-bricolage)" }}>
                    {study.number}
                  </span>
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{
                      color: study.accent,
                      background: `${study.accent}15`,
                    }}
                  >
                    {study.platform}
                  </span>
                </div>

                {/* Niche */}
                <div>
                  <span className="text-xs font-semibold tracking-wider text-[#71717A] uppercase">
                    {study.niche}
                  </span>
                </div>

                {/* Headline */}
                <h3
                  className="text-2xl md:text-3xl font-black text-[#09090B] leading-tight"
                  style={{ fontFamily: "var(--font-bricolage)" }}
                >
                  {study.headline}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#52525B] leading-relaxed flex-1">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  {study.metrics.map((m, j) => (
                    <div
                      key={j}
                      className="flex flex-col gap-1 p-3 rounded-xl bg-white border border-black/[0.06] text-center"
                    >
                      <span
                        className="text-lg font-black"
                        style={{
                          fontFamily: "var(--font-bricolage)",
                          color: study.accent,
                        }}
                      >
                        {m.value}
                      </span>
                      <span className="text-[9px] font-semibold text-[#71717A] uppercase tracking-wider leading-tight">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Duration badge */}
                <div className="flex items-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#71717A" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span className="text-xs font-medium text-[#71717A]">
                    Delivered in {study.duration}
                  </span>
                </div>

                {/* Decorative gradient */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 pointer-events-none"
                  style={{ background: study.accent }}
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
