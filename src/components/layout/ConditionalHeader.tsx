"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";

/**
 * Conditionally renders the site-wide Header.
 * On the homepage ("/"), the hero-01 component provides its own header,
 * so we skip the global one and remove the top padding offset.
 */
export function ConditionalHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) return null;
  return <Header />;
}

export function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main id="main" className={isHome ? "" : "pt-[60px] lg:pt-[68px]"}>
      {children}
    </main>
  );
}
