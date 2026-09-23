"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/types";

interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={cn(
            "rounded-xl border transition-colors duration-200",
            openIndex === index
              ? "border-border-hover bg-surface/50"
              : "border-border bg-transparent hover:bg-surface/30"
          )}
        >
          <button
            className="flex w-full items-center justify-between p-5 text-left cursor-pointer group"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
            id={`faq-question-${index}`}
          >
            <span className="text-[15px] font-medium text-text pr-4 group-hover:text-accent transition-colors">
              {faq.question}
            </span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn(
                "shrink-0 text-text-muted transition-transform duration-200",
                openIndex === index && "rotate-45 text-accent"
              )}
              aria-hidden="true"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            className={cn(
              "overflow-hidden transition-all duration-300 ease-out",
              openIndex === index ? "max-h-96" : "max-h-0"
            )}
          >
            <p className="px-5 pb-5 text-[15px] text-text-secondary leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
