"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const footerLinks = {
  Services: [
    "Amazon Management",
    "Walmart Automation",
    "eBay Growth",
    "Shopify Consulting",
    "PPC Advertising",
    "Product Research",
  ],
  Company: [
    { label: "About Najam Ali", href: "#about" },
    { label: "Case Studies", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  Contact: [
    { label: "WhatsApp", href: "https://wa.me/923104451451" },
    { label: "Email", href: "mailto:info@easeecommerce.org" },
    { label: "LinkedIn", href: "#" },
  ],
};

const platforms = [
  { name: "Amazon", color: "#FF9900" },
  { name: "Walmart", color: "#0071CE" },
  { name: "eBay", color: "#E53238" },
  { name: "Shopify", color: "#96BF48" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".footer-col", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 92%",
          once: true,
        },
      });
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="bg-[#09090B] text-white pt-20 pb-10 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="footer-col lg:col-span-1">
            <div className="mb-6">
              <div
                className="text-3xl font-black tracking-tight mb-1"
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                EASE
              </div>
              <div className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
                E-Commerce Consultants
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-xs">
              Turning brands into marketplace giants through expert strategy,
              execution, and relentless growth focus.
            </p>
            <div className="flex flex-wrap gap-2">
              {platforms.map((p) => (
                <span
                  key={p.name}
                  className="text-xs px-3 py-1 rounded-full border border-zinc-700 text-zinc-400"
                  style={{ borderColor: `${p.color}30` }}
                >
                  <span style={{ color: p.color }}>{p.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.Services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-zinc-400 hover:text-white transition-colors hover-underline"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.Company.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(c.href);
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-zinc-400 hover:text-white transition-colors hover-underline cursor-pointer"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.Contact.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 hover:text-white transition-colors hover-underline"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/923104451451"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#09090B] text-sm font-semibold rounded-full hover:bg-zinc-100 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book Free Call
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Ease E-Commerce & Business
            Consultants. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Founded by{" "}
            <span className="text-zinc-400 font-medium">Najam Ali</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
