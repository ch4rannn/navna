"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimateIn({ children, className, delay = 0 }: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setIsVisible(true);
      return;
    }

    // Fallback: if observer never fires (mobile edge cases), reveal after timeout
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1500 + delay);

    let timeoutId: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(fallbackTimer);
          timeoutId = setTimeout(() => setIsVisible(true), delay);
        } else {
          clearTimeout(timeoutId);
          setIsVisible(false);
        }
      },
      { threshold: 0.05, rootMargin: "50px 0px -20px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform,filter]",
        isVisible
          ? "opacity-100 translate-y-0 scale-100 blur-none"
          : "opacity-0 translate-y-12 scale-[0.97] blur-[4px]",
        className
      )}
    >
      {children}
    </div>
  );
}

