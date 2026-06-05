"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactMethods = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+92 310 445 1451",
    href: "https://wa.me/923104451451",
    color: "#25D366",
    bg: "bg-emerald-50 border-emerald-200",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "info@easeecommerce.org",
    href: "mailto:info@easeecommerce.org",
    color: "#2563EB",
    bg: "bg-blue-50 border-blue-200",
  },
];

const businessTypes = [
  "Amazon FBA",
  "Walmart Seller",
  "eBay Store",
  "Shopify Brand",
  "Multi-Channel",
  "Other",
];

export default function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });

  useGSAP(
    () => {
      // Background animation
      gsap.to(".contact-gradient", {
        backgroundPosition: "100% 50%",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Headline
      gsap.from(".contact-headline", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".contact-headline",
          start: "top 88%",
          once: true,
        },
      });

      // Form fields stagger
      gsap.from(".form-field", {
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 85%",
          once: true,
        },
      });

      // Contact methods
      gsap.from(".contact-method", {
        x: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".contact-methods",
          start: "top 88%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with FormSubmit, Resend, or similar
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full py-24 md:py-36 overflow-hidden"
      style={{ background: "#FAFAF8" }}
      aria-label="Contact"
    >
      {/* Background */}
      <div
        className="contact-gradient absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "linear-gradient(135deg, rgba(196,154,60,0.08) 0%, rgba(37,99,235,0.04) 50%, rgba(196,154,60,0.06) 100%)",
          backgroundSize: "200% 200%",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#71717A] uppercase mb-4">
            <span className="w-8 h-px bg-[#C49A3C]" />
            Start Today
            <span className="w-8 h-px bg-[#C49A3C]" />
          </span>
          <h2
            className="contact-headline text-4xl md:text-6xl lg:text-7xl font-black text-[#09090B] tracking-tighter leading-none mb-6"
            style={{ fontFamily: "var(--font-bricolage)" }}
          >
            Ready to Scale
            <br />
            <span className="text-gradient-gold">Your Business?</span>
          </h2>
          <p className="text-base md:text-lg text-[#71717A] max-w-xl mx-auto leading-relaxed">
            Book a free 30-minute strategy call. Tell us about your brand and
            goals — we'll outline a clear path to growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#09090B] mb-2">
                Get In Touch
              </h3>
              <p className="text-sm text-[#71717A] leading-relaxed">
                Prefer a quick message? Reach Najam directly on WhatsApp for a
                same-day response.
              </p>
            </div>

            <div className="contact-methods flex flex-col gap-4">
              {contactMethods.map((method, i) => (
                <a
                  key={i}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`contact-method flex items-center gap-4 p-4 rounded-2xl border ${method.bg} transition-all duration-200 hover:shadow-md hover:-translate-y-0.5`}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                    style={{ background: method.color }}
                  >
                    {method.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#71717A] uppercase tracking-wider">
                      {method.label}
                    </div>
                    <div className="text-sm font-semibold text-[#09090B]">
                      {method.value}
                    </div>
                  </div>
                  <svg
                    className="ml-auto"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#71717A"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Quick CTA */}
            <a
              href="https://wa.me/923104451451?text=Hi%20Najam!%20I'd%20like%20to%20discuss%20growing%20my%20ecommerce%20business%20with%20Ease."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] text-white text-sm font-bold rounded-2xl hover:bg-[#20B858] transition-all duration-200 hover:shadow-lg hover:shadow-emerald-400/20 hover:-translate-y-0.5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Message on WhatsApp Now
            </a>

            {/* Social proof snippet */}
            <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white border border-black/[0.06] shadow-sm">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#C49A3C">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="text-xs font-bold text-[#09090B]">4.9</span>
                <span className="text-xs text-[#71717A]">from 50+ clients</span>
              </div>
              <p className="text-xs text-[#52525B] italic leading-relaxed">
                "Ease responded within an hour and had a full strategy deck ready
                the same day. That's when I knew these guys were different." —
                Sarah K.
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center gap-6 text-center py-20 rounded-3xl bg-white border border-black/[0.06] px-8">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#09090B] mb-2" style={{ fontFamily: "var(--font-bricolage)" }}>
                    Message Received!
                  </h3>
                  <p className="text-base text-[#71717A]">
                    Najam will personally review your message and respond within
                    24 hours. Check your WhatsApp too!
                  </p>
                </div>
                <a
                  href="https://wa.me/923104451451"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#09090B] text-white text-sm font-semibold rounded-full hover:bg-[#18181B] transition-colors"
                >
                  Continue on WhatsApp →
                </a>
              </div>
            ) : (
              <form
                className="contact-form flex flex-col gap-4 p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm"
                onSubmit={handleSubmit}
                noValidate
              >
                <h3 className="text-xl font-bold text-[#09090B] mb-2">
                  Send a Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-field flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#52525B] uppercase tracking-wider">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-black/[0.1] bg-[#FAFAF8] text-[#09090B] placeholder-[#A1A1AA] focus:outline-none focus:border-[#C49A3C] focus:ring-2 focus:ring-[#C49A3C]/10 transition-all"
                    />
                  </div>
                  <div className="form-field flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#52525B] uppercase tracking-wider">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@brand.com"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-black/[0.1] bg-[#FAFAF8] text-[#09090B] placeholder-[#A1A1AA] focus:outline-none focus:border-[#C49A3C] focus:ring-2 focus:ring-[#C49A3C]/10 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-field flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#52525B] uppercase tracking-wider">
                      WhatsApp / Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-black/[0.1] bg-[#FAFAF8] text-[#09090B] placeholder-[#A1A1AA] focus:outline-none focus:border-[#C49A3C] focus:ring-2 focus:ring-[#C49A3C]/10 transition-all"
                    />
                  </div>
                  <div className="form-field flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#52525B] uppercase tracking-wider">
                      Business Type
                    </label>
                    <select
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-black/[0.1] bg-[#FAFAF8] text-[#09090B] focus:outline-none focus:border-[#C49A3C] focus:ring-2 focus:ring-[#C49A3C]/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select type...</option>
                      {businessTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-field flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#52525B] uppercase tracking-wider">
                    Tell us about your goals{" "}
                    <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your brand, current situation, and what growth looks like for you..."
                    className="w-full px-4 py-3 text-sm rounded-xl border border-black/[0.1] bg-[#FAFAF8] text-[#09090B] placeholder-[#A1A1AA] focus:outline-none focus:border-[#C49A3C] focus:ring-2 focus:ring-[#C49A3C]/10 transition-all resize-none"
                  />
                </div>

                <div className="form-field flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-[#09090B] text-white text-sm font-bold rounded-full hover:bg-[#18181B] transition-all duration-200 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-0.5"
                  >
                    Send Message
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
                  <p className="text-xs text-[#71717A]">
                    We respond within 24 hours — usually much sooner.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
