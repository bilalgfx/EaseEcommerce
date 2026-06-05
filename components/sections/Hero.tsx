"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const platforms = [
  { name: "Amazon", color: "#FF9900", bg: "#FFF8F0" },
  { name: "Walmart", color: "#0071CE", bg: "#F0F6FF" },
  { name: "eBay", color: "#E53238", bg: "#FFF0F0" },
  { name: "Shopify", color: "#96BF48", bg: "#F4F9EE" },
  { name: "Digital Marketing", color: "#8B5CF6", bg: "#F5F3FF" },
];

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "50+", label: "Clients Served" },
  { value: "$10M+", label: "Revenue Generated" },
];

const letters = ["E", "A", "S", "E"];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Founder badge
      tl.from(".hero-badge", { y: -30, opacity: 0, duration: 0.9 }, 0.3);

      // EASE letters: clip from bottom
      tl.from(
        ".hero-char",
        {
          yPercent: 110,
          opacity: 0,
          duration: 1.3,
          stagger: { amount: 0.35 },
        },
        0.55
      );

      // Subtitle line
      tl.from(".hero-subtitle", { y: 36, opacity: 0, duration: 1 }, 1.0);

      // Tagline
      tl.from(".hero-tagline", { y: 24, opacity: 0, duration: 0.9 }, 1.25);

      // Platform pills
      tl.from(
        ".hero-platform",
        {
          y: 20,
          opacity: 0,
          scale: 0.9,
          stagger: 0.08,
          duration: 0.7,
        },
        1.4
      );

      // Stats
      tl.from(
        ".hero-stat",
        {
          y: 20,
          opacity: 0,
          stagger: 0.12,
          duration: 0.7,
        },
        1.6
      );

      // CTA buttons
      tl.from(
        ".hero-cta",
        {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.7,
        },
        1.8
      );

      // Scroll indicator
      tl.from(".hero-scroll", { opacity: 0, duration: 1 }, 2.1);

      // Parallax on scroll — hero content moves up
      gsap.to(contentRef.current, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Background dot grid parallax (slower)
      gsap.to(bgRef.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Floating animation for platform pills
      gsap.utils.toArray<HTMLElement>(".hero-platform").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -8 : 8,
          duration: 2.5 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });

      // Scroll-triggered fade out
      gsap.to(".hero-fade-out", {
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "60% top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white"
      aria-label="Hero"
    >
      {/* Background layers */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none">
        {/* Dot grid */}
        <div
          className="absolute inset-0 dot-grid opacity-60"
          aria-hidden="true"
        />
        {/* Radial gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(196,154,60,0.06) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        {/* Top gradient */}
        <div
          className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent"
          aria-hidden="true"
        />
        {/* Bottom gradient */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Main content */}
      <div
        ref={contentRef}
        className="hero-fade-out relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-20 w-full max-w-6xl mx-auto"
      >
        {/* Founder badge */}
        <div className="hero-badge mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-black/[0.08] bg-white/90 backdrop-blur-sm shadow-sm">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center text-xs font-bold text-white shadow-sm">
            N
          </div>
          <span className="text-sm font-semibold text-[#09090B]">
            Najam Ali
          </span>
          <span className="w-px h-4 bg-black/10" aria-hidden="true" />
          <span className="text-xs font-medium text-[#71717A] tracking-wide">
            Founder & CEO
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-600 font-medium">
              Available
            </span>
          </span>
        </div>

        {/* EASE — massive kinetic typography */}
        <div
          className="overflow-hidden mb-2 w-full"
          aria-label="EASE — E-Commerce Consultants"
        >
          <h1
            className="flex items-center justify-center tracking-tighter leading-none font-black text-[#09090B]"
            style={{
              fontFamily: "var(--font-bricolage)",
              fontSize: "clamp(5rem, 20vw, 18rem)",
              lineHeight: 0.9,
            }}
            aria-hidden="true"
          >
            {letters.map((char, i) => (
              <span
                key={i}
                className="hero-char inline-block"
                style={{
                  display: "inline-block",
                  marginLeft: i > 0 ? "-0.02em" : undefined,
                }}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>

        {/* Subtitle */}
        <div className="overflow-hidden mb-6">
          <p
            className="hero-subtitle text-base sm:text-xl md:text-2xl font-medium text-[#52525B] tracking-[0.12em] uppercase"
            style={{ letterSpacing: "0.18em" }}
          >
            E-Commerce &amp; Business Consultants
          </p>
        </div>

        {/* Tagline */}
        <p className="hero-tagline text-base md:text-lg text-[#71717A] mb-10 max-w-lg leading-relaxed">
          Turning brands into marketplace giants through expert strategy,
          data-driven execution, and relentless growth focus.
        </p>

        {/* Platform pills */}
        <div
          className="flex flex-wrap justify-center gap-2.5 mb-12"
          aria-label="Platforms we specialize in"
        >
          {platforms.map((p) => (
            <div
              key={p.name}
              className="hero-platform flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm cursor-default select-none"
              style={{
                background: p.bg,
                borderColor: `${p.color}25`,
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: p.color }}
                aria-hidden="true"
              />
              <span
                className="text-sm font-semibold"
                style={{ color: p.color }}
              >
                {p.name}
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="hero-stat flex flex-col items-center gap-1">
              <span
                className="text-3xl md:text-4xl font-black text-[#09090B] counter-value"
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-medium text-[#71717A] tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#services"
            className="hero-cta magnetic-btn px-8 py-4 bg-[#09090B] text-white text-sm font-semibold rounded-full hover:bg-[#18181B] transition-all duration-200 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-0.5"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#services")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Services
          </a>
          <a
            href="https://wa.me/923104451451"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta magnetic-btn flex items-center gap-2.5 px-8 py-4 border border-black/[0.12] text-[#09090B] text-sm font-semibold rounded-full hover:bg-black/[0.03] transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="#25D366"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book Free Consultation
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="text-[10px] font-medium tracking-[0.25em] text-[#A1A1AA] uppercase">
          Scroll
        </span>
        <div className="w-px h-14 bg-black/10 relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#C49A3C]"
            style={{ animation: "scroll-indicator 2s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
