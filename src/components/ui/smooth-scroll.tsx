"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, // Higher lerp = more responsive, less lag
        duration: 0.8, // Shorter duration = faster scroll
        smoothWheel: true,
        wheelMultiplier: 1, // Keep standard wheel speed
        touchMultiplier: 2, // Make touch scrolling faster
      }}
    >
      {/* @ts-expect-error - React 19 type mismatch with ReactLenis */}
      {children}
    </ReactLenis>
  );
}
