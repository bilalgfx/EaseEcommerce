"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export default function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2,
  decimals = 0,
  className = "",
}: AnimatedCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;

    const obj = { value: 0 };

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        gsap.to(obj, {
          value: target,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent =
              prefix +
              obj.value.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
              suffix;
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [target, prefix, suffix, duration, decimals]);

  return (
    <span ref={counterRef} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
