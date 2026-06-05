"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  {
    title: "Marketplace-Specific Expertise",
    ease: "Deep specialist knowledge per platform — not generic advice",
    others: "Generic agency strategies that miss platform nuances",
  },
  {
    title: "Data-Driven Decision Making",
    ease: "Every move backed by analytics, A/B tests, and real-time data",
    others: "Gut-feel decisions without measurable accountability",
  },
  {
    title: "Transparent Reporting",
    ease: "Live dashboard access + weekly performance reports",
    others: "Monthly PDF reports that hide the real numbers",
  },
  {
    title: "Revenue-Focused KPIs",
    ease: "We measure success by your bottom line, not vanity metrics",
    others: "Optimizing for impressions and clicks — not profit",
  },
  {
    title: "Direct Access to Najam Ali",
    ease: "Strategy calls directly with the founder, not an account manager",
    others: "Junior teams with little to no decision-making authority",
  },
  {
    title: "Multi-Marketplace Coordination",
    ease: "Unified strategy across all channels for compounding growth",
    others: "Siloed platform management with no cross-channel synergy",
  },
  {
    title: "Speed of Execution",
    ease: "Live within 72 hours, campaigns running within a week",
    others: "6–8 week onboarding before anything actually happens",
  },
];

const CheckIcon = () => (
  <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  </div>
);

const XIcon = () => (
  <div className="w-6 h-6 rounded-full bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="3">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  </div>
);

export default function WhyChoose() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".why-headline", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".why-headline",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".why-row", {
        x: -30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".why-table",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".why-badge", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.5)",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".why-badge",
          start: "top 88%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="why-ease"
      className="w-full py-24 md:py-36 bg-white"
      aria-label="Why Choose Ease"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
          <div className="lg:w-2/5">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#71717A] uppercase mb-4">
              <span className="w-8 h-px bg-[#C49A3C]" />
              The Difference
            </span>
            <h2
              className="why-headline text-4xl md:text-5xl lg:text-6xl font-black text-[#09090B] tracking-tighter leading-none mb-6"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              Why Brands
              <br />
              Choose Ease.
            </h2>
            <p className="text-base md:text-lg text-[#71717A] leading-relaxed mb-8">
              The eCommerce consulting landscape is crowded. Most agencies
              promise growth but deliver reports. We're different — and the
              results prove it.
            </p>

            {/* Trust badge */}
            <div className="why-badge inline-flex flex-col gap-3 p-6 rounded-2xl bg-[#FAFAF8] border border-black/[0.06] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center text-white font-black text-sm">
                  N
                </div>
                <div>
                  <div className="font-bold text-sm text-[#09090B]">
                    Najam Ali
                  </div>
                  <div className="text-xs text-[#71717A]">
                    Founder & Lead Strategist
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#52525B] leading-relaxed italic">
                "I don't take clients I can't grow. Every engagement is a
                partnership, not a transaction."
              </p>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#C49A3C">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="text-xs font-semibold text-[#09090B] ml-1">
                  4.9 / 5.0
                </span>
              </div>
            </div>
          </div>

          {/* Comparison table */}
          <div className="why-table lg:w-3/5">
            {/* Table header */}
            <div className="grid grid-cols-[1fr_auto_auto] gap-4 mb-4 pb-4 border-b border-black/[0.08]">
              <div className="text-sm font-semibold text-[#71717A] uppercase tracking-wider">
                What Matters
              </div>
              <div className="text-sm font-bold text-emerald-600 uppercase tracking-wider w-28 text-center">
                With Ease
              </div>
              <div className="text-sm font-bold text-red-400 uppercase tracking-wider w-28 text-center">
                Others
              </div>
            </div>

            {/* Rows */}
            <div className="flex flex-col gap-0">
              {advantages.map((adv, i) => (
                <div
                  key={i}
                  className="why-row grid grid-cols-[1fr_auto_auto] gap-4 py-4 border-b border-black/[0.05] items-start hover:bg-[#FAFAF8] transition-colors px-3 -mx-3 rounded-xl"
                >
                  {/* Feature description */}
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-[#09090B]">
                      {adv.title}
                    </span>
                    <span className="text-xs text-[#71717A] leading-relaxed hidden sm:block">
                      {adv.ease}
                    </span>
                  </div>

                  {/* Ease check */}
                  <div className="w-28 flex justify-center">
                    <CheckIcon />
                  </div>

                  {/* Others X */}
                  <div className="w-28 flex justify-center">
                    <XIcon />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 p-6 rounded-2xl bg-[#09090B] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="font-bold text-base mb-1">
                  Ready to experience the Ease difference?
                </div>
                <div className="text-sm text-zinc-400">
                  Book a free 30-minute strategy call. No commitment.
                </div>
              </div>
              <a
                href="https://wa.me/923104451451"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-6 py-3 bg-white text-[#09090B] text-sm font-bold rounded-full hover:bg-zinc-100 transition-colors"
              >
                Start Free →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
