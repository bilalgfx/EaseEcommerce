"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    type: "text",
    name: "Marcus T.",
    role: "Amazon Seller — Home & Kitchen",
    avatar: "M",
    avatarColor: "#FF9900",
    rating: 5,
    quote:
      "Najam and the Ease team completely transformed our Amazon business. In 14 months, we went from barely breaking even to $120K/month. Their PPC expertise is unmatched — they cut our ACoS from 48% to 18% without sacrificing volume. If you're serious about Amazon, there's no better partner.",
  },
  {
    type: "text",
    name: "Sarah K.",
    role: "Shopify Brand Owner — Fashion",
    avatar: "S",
    avatarColor: "#96BF48",
    rating: 5,
    quote:
      "I was skeptical at first — every 'consultant' promises the world. But Ease delivered. Our Shopify store went from $0 to $200K ARR in 12 months. The email automation alone generated $60K in revenue. Najam is genuinely invested in your success. He responds fast, thinks strategically, and executes flawlessly.",
  },
  {
    type: "text",
    name: "David L.",
    role: "Walmart Seller — Baby Products",
    avatar: "D",
    avatarColor: "#0071CE",
    rating: 5,
    quote:
      "We hired Ease to launch our brand on Walmart Marketplace from scratch. $45K in revenue in the first 90 days. That's not a typo. Najam knows Walmart's algorithm better than anyone I've worked with. He helped us hit Page 1 for our primary keywords within 3 weeks. Absolutely exceptional.",
  },
  {
    type: "text",
    name: "Aisha R.",
    role: "eBay Seller — Electronics",
    avatar: "A",
    avatarColor: "#E53238",
    rating: 5,
    quote:
      "Our eBay store was stagnating for 2 years. We couldn't figure out why. Ease came in, diagnosed the issues in week 1, and implemented a full turnaround strategy. Our revenue grew 250% in 8 months. Najam is the real deal — knowledgeable, responsive, and results-driven.",
  },
  {
    type: "text",
    name: "Kevin M.",
    role: "Multi-Channel Seller — Health & Wellness",
    avatar: "K",
    avatarColor: "#8B5CF6",
    rating: 5,
    quote:
      "Managing Amazon and Shopify simultaneously felt impossible before Ease. Najam built us a unified multi-channel system that synced inventory, retargeting, and branding across both platforms. We hit $500K combined revenue and it runs like clockwork. The ROI on hiring Ease is off the charts.",
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C49A3C">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".testimonials-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".testimonials-header",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".testimonial-card-wrap", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  const goTo = (index: number) => {
    if (!sliderRef.current) return;
    setActive(index);
    gsap.to(sliderRef.current, {
      x: -index * (sliderRef.current.offsetWidth / 1),
      duration: 0,
    });
  };

  const next = () => goTo((active + 1) % testimonials.length);
  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="w-full py-24 md:py-36 bg-[#FAFAF8] overflow-hidden"
      aria-label="Client Testimonials"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="testimonials-header flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#71717A] uppercase mb-4">
              <span className="w-8 h-px bg-[#C49A3C]" />
              Client Stories
            </span>
            <h2
              className="text-4xl md:text-6xl lg:text-7xl font-black text-[#09090B] tracking-tighter leading-none"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              What Clients
              <br />
              Are Saying.
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-black/[0.12] flex items-center justify-center hover:bg-black hover:text-white transition-all duration-200 hover:border-black"
              aria-label="Previous testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-sm font-medium text-[#71717A]">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-black/[0.12] flex items-center justify-center hover:bg-black hover:text-white transition-all duration-200 hover:border-black"
              aria-label="Next testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Active testimonial — large featured card */}
        <div className="testimonial-card-wrap mb-8">
          <div
            className="relative rounded-3xl bg-white border border-black/[0.06] p-8 md:p-12 shadow-sm overflow-hidden transition-all duration-500"
            key={active}
          >
            {/* Large quote mark */}
            <span
              className="absolute top-6 right-10 text-9xl font-black leading-none text-black/[0.04] select-none pointer-events-none"
              style={{ fontFamily: "var(--font-bricolage)" }}
              aria-hidden="true"
            >
              "
            </span>

            <div className="relative z-10 flex flex-col gap-6 max-w-3xl">
              <StarRating count={testimonials[active].rating} />
              <blockquote className="text-xl md:text-2xl font-medium text-[#09090B] leading-relaxed">
                "{testimonials[active].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm"
                  style={{
                    background: testimonials[active].avatarColor,
                  }}
                >
                  {testimonials[active].avatar}
                </div>
                <div>
                  <div className="font-bold text-[#09090B]">
                    {testimonials[active].name}
                  </div>
                  <div className="text-sm text-[#71717A]">
                    {testimonials[active].role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail row */}
        <div ref={sliderRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`text-left p-4 rounded-2xl border transition-all duration-200 ${
                active === i
                  ? "border-[#C49A3C] bg-white shadow-sm"
                  : "border-black/[0.06] bg-white/50 hover:bg-white hover:border-black/[0.12]"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: t.avatarColor }}
                >
                  {t.avatar}
                </div>
                <span className="text-xs font-semibold text-[#09090B] truncate">
                  {t.name}
                </span>
              </div>
              <p className="text-[10px] text-[#71717A] leading-relaxed line-clamp-2">
                {t.quote.slice(0, 60)}...
              </p>
            </button>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          {[
            { value: "50+", label: "Happy Clients" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "100%", label: "Would Refer Us" },
          ].map((t, i) => (
            <div key={i} className="flex flex-col items-center gap-1 text-center">
              <span
                className="text-3xl font-black text-[#09090B]"
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                {t.value}
              </span>
              <span className="text-xs font-medium text-[#71717A] uppercase tracking-wider">
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
