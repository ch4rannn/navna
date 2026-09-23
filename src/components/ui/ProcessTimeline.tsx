"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import type { ProcessStep } from "@/types";

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find the index of the intersecting step
            const index = stepRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setActiveStep(index);
            }
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px", // Trigger when element hits the middle of the screen
        threshold: 0,
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row gap-12 lg:gap-24">
      
      {/* Mobile Timeline (Hidden on Desktop) */}
      <div className="md:hidden flex flex-col space-y-12 relative before:absolute before:inset-y-0 before:left-[19px] before:w-px before:bg-border">
        {steps.map((step, i) => (
          <div key={step.number} className="relative pl-12">
            <div className={cn(
              "absolute left-0 top-0 w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold z-10 transition-colors",
              i === 0 ? "bg-accent border-accent text-bg" : "bg-bg border-border text-text" // Highlight the first one statically for mobile, or could use full scroll logic
            )}>
              {step.number}
            </div>
            <h2 className="text-xl font-bold text-text uppercase tracking-wider">{step.title}</h2>
            <p className="mt-3 text-[15px] text-text-secondary leading-relaxed">{step.description}</p>
            {step.services && (
              <div className="mt-4 flex flex-wrap gap-2">
                {step.services.map(service => (
                  <span key={service} className="text-[11px] uppercase tracking-wider px-2 py-1 bg-surface-2 text-text-muted rounded-sm border border-border">
                    {service}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Layout (Hidden on Mobile) */}
      
      {/* Left Column: Sticky Numbers */}
      <div className="hidden md:block w-1/3 lg:w-1/4 relative">
        <div className="sticky top-32 flex flex-col space-y-8">
          {steps.map((step, i) => {
            const isActive = activeStep === i;
            return (
              <div 
                key={`nav-${step.number}`} 
                className={cn(
                  "flex items-center gap-6 transition-all duration-500",
                  isActive ? "opacity-100 translate-x-4" : "opacity-30 hover:opacity-60 cursor-pointer"
                )}
                onClick={() => {
                  stepRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                <span className={cn(
                  "text-5xl lg:text-6xl font-bold transition-colors duration-500",
                  isActive ? "text-accent" : "text-text"
                )}>
                  {step.number}
                </span>
                <span className={cn(
                  "text-lg font-medium uppercase tracking-widest transition-all duration-500",
                  isActive ? "text-text opacity-100" : "opacity-0 -translate-x-4"
                )}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: Scrollable Content */}
      <div className="hidden md:block w-2/3 lg:w-3/4">
        {steps.map((step, i) => (
          <div 
            key={`content-${step.number}`}
            ref={(el) => { stepRefs.current[i] = el; }}
            className="min-h-[70vh] flex flex-col justify-center py-20"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text uppercase tracking-tight">
              {step.title}
            </h2>
            <div className="mt-6 w-16 h-1 bg-accent opacity-50"></div>
            <p className="mt-8 text-xl lg:text-2xl text-text-secondary leading-[1.6] max-w-2xl">
              {step.description}
            </p>
            
            {step.services && (
              <div className="mt-12">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">Relevant Services</p>
                <div className="flex flex-wrap gap-2">
                  {step.services.map(service => (
                    <span key={service} className="text-sm font-medium px-4 py-2 bg-surface-2 text-text rounded-full border border-border">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        {/* Spacer to allow the last item to scroll up */}
        <div className="h-[20vh]"></div>
      </div>

    </div>
  );
}
