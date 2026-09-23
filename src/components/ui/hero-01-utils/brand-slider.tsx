"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface BrandList {
  image: string;
  lightimg?: string;
  name: string;
}

interface BrandSliderProps {
  brandList: BrandList[];
}

export default function BrandSlider({ brandList }: BrandSliderProps) {
  /* Double the list for seamless infinite scroll */
  const doubled = [...brandList, ...brandList];

  return (
    <section className="relative py-12 lg:py-16 border-t border-border overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-text-muted text-center">
          Built with modern technology
        </p>
      </div>

      {/* Marquee */}
      <div className="flex">
        <div
          className={cn(
            "flex items-center gap-16 animate-marquee",
            "hover:[animation-play-state:paused]"
          )}
        >
          {doubled.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex items-center gap-3 shrink-0 opacity-40 hover:opacity-70 transition-opacity duration-300"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-6 w-auto dark:block hidden"
                loading="lazy"
              />
              <img
                src={brand.lightimg || brand.image}
                alt={brand.name}
                className="h-6 w-auto dark:hidden block"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

export { BrandSlider };
