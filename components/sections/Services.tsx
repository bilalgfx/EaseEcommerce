"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Amazon Management",
    description: "End-to-end Amazon store management — listings, PPC, inventory, and brand registry handled by experts.",
    color: "#FF9900",
    tag: "Most Popular",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: "Walmart Automation",
    description: "Full-service Walmart marketplace automation — from WFS setup to listing optimization and growth.",
    color: "#0071CE",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "eBay Growth",
    description: "Strategic eBay store management with promoted listings, dropshipping systems, and review building.",
    color: "#E53238",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
    title: "Shopify Consulting",
    description: "Custom Shopify store development, theme optimization, and conversion rate engineering.",
    color: "#96BF48",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Digital Marketing",
    description: "Full-funnel digital marketing — social ads, email sequences, influencer partnerships, and SEO.",
    color: "#8B5CF6",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "PPC Advertising",
    description: "Data-driven PPC campaigns across Amazon, Walmart, and Google. Maximum ROI, minimum waste.",
    color: "#F59E0B",
    tag: "High ROI",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    title: "Product Research",
    description: "In-depth product research and niche validation to find winning products before you invest.",
    color: "#14B8A6",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Full Store Management",
    description: "Completely hands-off store management — we run everything while you focus on your vision.",
    color: "#EC4899",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Heading reveal
      gsap.from(".services-heading", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".services-heading",
          start: "top 88%",
          once: true,
        },
      });

      // Cards stagger — immediateRender:false prevents cards going opacity:0 before trigger fires
      gsap.from(".service-card", {
        y: 40,
        opacity: 0,
        stagger: {
          amount: 0.5,
          from: "start",
        },
        duration: 0.7,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 88%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  // 3D card tilt on hover
  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    card: HTMLDivElement
  ) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(card, {
      rotateY: x * 8,
      rotateX: -y * 8,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = (card: HTMLDivElement) => {
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="w-full py-24 md:py-36 bg-white"
      aria-label="Services"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#71717A] uppercase mb-4">
              <span className="w-8 h-px bg-[#C49A3C]" />
              What We Do
            </span>
            <h2
              className="services-heading text-4xl md:text-6xl lg:text-7xl font-black text-[#09090B] tracking-tighter leading-none"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              Services Built
              <br />
              for Growth.
            </h2>
          </div>
          <p className="text-base md:text-lg text-[#71717A] max-w-sm lg:max-w-xs leading-relaxed lg:text-right">
            Every service is engineered to compound results — not just deliver
            outputs, but build lasting business value.
          </p>
        </div>

        {/* Grid */}
        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card group relative flex flex-col gap-4 p-6 rounded-2xl border border-black/[0.07] bg-white cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-black/[0.06] hover:-translate-y-1 hover:border-black/[0.12]"
              onMouseMove={(e) =>
                handleMouseMove(e, e.currentTarget as HTMLDivElement)
              }
              onMouseLeave={(e) =>
                handleMouseLeave(e.currentTarget as HTMLDivElement)
              }
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Tag badge */}
              {service.tag && (
                <span
                  className="absolute -top-3 right-4 text-[10px] font-bold px-3 py-1 rounded-full text-white tracking-wider uppercase shadow-sm"
                  style={{ background: service.color }}
                >
                  {service.tag}
                </span>
              )}

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-200"
                style={{
                  background: `${service.color}15`,
                  color: service.color,
                }}
              >
                {service.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-base font-bold text-[#09090B] leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-[#71717A] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (!el) return;
                  let top = 0;
                  let curr: HTMLElement | null = el;
                  while (curr) {
                    top += curr.offsetTop;
                    curr = curr.offsetParent as HTMLElement | null;
                  }
                  window.scrollTo({ top, behavior: "smooth" });
                }}
                className="flex items-center gap-1 text-xs font-semibold transition-all duration-200 group-hover:gap-2 mt-2 cursor-pointer"
                style={{ color: service.color }}
              >
                Contact Now
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${service.color}08 0%, transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-base text-[#71717A] mb-6">
            Not sure which service fits your needs?
          </p>
          <a
            href="https://wa.me/923104451451"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#09090B] text-white text-sm font-semibold rounded-full hover:bg-[#18181B] transition-all duration-200 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-0.5"
          >
            Get a Free Strategy Call
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
          </a>
        </div>
      </div>
    </section>
  );
}
