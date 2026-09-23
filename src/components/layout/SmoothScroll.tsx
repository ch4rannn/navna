"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.25,          // Much faster interpolation (less delay)
      wheelMultiplier: 1.3, // Scroll travels further per tick
      smoothWheel: true,
      syncTouch: true      // Better touch/trackpad response
    }}>
      {/* @ts-expect-error - React 19 type mismatch with ReactLenis */}
      {children}
    </ReactLenis>
  );
}
