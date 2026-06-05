"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2020",
    title: "Founded Ease E-Commerce",
    desc: "Started with a mission to democratize marketplace success for growing brands.",
  },
  {
    year: "2021",
    title: "First $1M Revenue Client",
    desc: "Scaled a niche brand from zero to $1M ARR on Amazon within 14 months.",
  },
  {
    year: "2022",
    title: "Multi-Marketplace Expansion",
    desc: "Expanded into Walmart, eBay, and Shopify consulting as client demand grew.",
  },
  {
    year: "2023",
    title: "25+ Active Clients",
    desc: "Built a team of marketplace specialists managing 25+ brand accounts simultaneously.",
  },
  {
    year: "2024",
    title: "$10M+ Revenue Generated",
    desc: "Crossed the milestone of $10M+ in combined client revenue generated.",
  },
];

const achievements = [
  { value: 4, suffix: "+", label: "Years of Expertise", color: "#C49A3C" },
  { value: 50, suffix: "+", label: "Clients Served", color: "#09090B" },
  { value: 10, prefix: "$", suffix: "M+", label: "Revenue Generated", color: "#C49A3C" },
  { value: 98, suffix: "%", label: "Client Satisfaction", color: "#09090B" },
];

export default function AboutNajam() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Section heading reveal
      gsap.from(".about-headline", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".about-headline",
          start: "top 88%",
          once: true,
        },
      });

      // Image reveal
      gsap.fromTo(
        imageRef.current,
        { scale: 1.06, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Subtle parallax on image while scrolling
      gsap.to(imageRef.current, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Bio lines reveal
      gsap.from(".about-line", {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".about-bio",
          start: "top 85%",
          once: true,
        },
      });

      // Timeline items stagger
      gsap.from(".timeline-item", {
        x: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 85%",
          once: true,
        },
      });

      // Achievement cards stagger
      gsap.from(".achievement-card", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".achievements-grid",
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
      id="about"
      className="w-full py-24 md:py-36 bg-[#FAFAF8] overflow-hidden"
      aria-label="About Najam Ali"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#C49A3C]" />
          <span className="text-xs font-semibold tracking-[0.2em] text-[#71717A] uppercase">
            The Founder
          </span>
        </div>

        {/* Main headline */}
        <h2
          className="about-headline text-5xl md:text-7xl lg:text-8xl font-black text-[#09090B] tracking-tighter leading-none mb-16"
          style={{ fontFamily: "var(--font-bricolage)" }}
        >
          Meet<br />
          <span className="text-gradient-gold">Najam Ali.</span>
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Left: Photo */}
          <div className="relative">
            <div
              ref={imageRef}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-zinc-100 shadow-2xl shadow-black/10"
            >
              <Image
                src="/najam.jpg"
                alt="Najam Ali — Founder of Ease E-Commerce & Business Consultants"
                fill
                className="object-cover img-premium"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center text-white font-black text-sm">
                    N
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#09090B]">
                      Najam Ali
                    </div>
                    <div className="text-xs text-[#52525B]">
                      Founder & Lead Consultant
                    </div>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-medium text-emerald-600">
                      Open to clients
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div
              className="absolute -right-6 -bottom-6 w-48 h-48 rounded-3xl border-2 border-[#C49A3C]/20 -z-10"
              aria-hidden="true"
            />
          </div>

          {/* Right: Bio + Timeline */}
          <div className="flex flex-col gap-10">
            {/* Bio */}
            <div className="about-bio flex flex-col gap-4">
              <p className="about-line text-lg md:text-xl text-[#09090B] font-medium leading-relaxed">
                I built Ease E-Commerce from the ground up — not with shortcuts,
                but with deep marketplace knowledge, client-first thinking, and
                an obsession with measurable results.
              </p>
              <p className="about-line text-base text-[#52525B] leading-relaxed">
                With 4+ years navigating Amazon, Walmart, eBay, and Shopify, I've
                seen what separates brands that plateau from brands that scale.
                It's not luck — it's strategy, execution, and the right partner.
              </p>
              <p className="about-line text-base text-[#52525B] leading-relaxed">
                Every client engagement is personal. I treat your brand like my
                own — because a partnership built on trust is what drives
                long-term growth.
              </p>
            </div>

            {/* Timeline */}
            <div className="timeline-container">
              <h3 className="text-sm font-semibold tracking-[0.15em] text-[#71717A] uppercase mb-6">
                Journey & Milestones
              </h3>
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[11px] top-2 bottom-0 w-px bg-gradient-to-b from-[#C49A3C] via-[#C49A3C]/30 to-transparent" />

                <div className="flex flex-col gap-6">
                  {milestones.map((item, i) => (
                    <div key={i} className="timeline-item flex gap-5">
                      <div className="flex flex-col items-center pt-1">
                        <div
                          className="w-6 h-6 rounded-full border-2 border-[#C49A3C] bg-white flex items-center justify-center flex-shrink-0"
                          aria-hidden="true"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#C49A3C]" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 pb-2">
                        <span className="text-xs font-bold tracking-wider text-[#C49A3C] uppercase">
                          {item.year}
                        </span>
                        <span className="text-sm font-semibold text-[#09090B]">
                          {item.title}
                        </span>
                        <span className="text-sm text-[#71717A] leading-relaxed">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement cards */}
        <div className="achievements-grid grid grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="achievement-card flex flex-col items-center gap-2 p-6 rounded-2xl bg-white border border-black/[0.06] shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <span
                className="text-4xl md:text-5xl font-black counter-value"
                style={{
                  fontFamily: "var(--font-bricolage)",
                  color: a.color,
                }}
              >
                <AnimatedCounter
                  target={a.value}
                  prefix={a.prefix}
                  suffix={a.suffix}
                  duration={2.2}
                />
              </span>
              <span className="text-xs font-semibold text-[#71717A] uppercase tracking-wider text-center">
                {a.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
