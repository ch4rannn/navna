"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { mainNavLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-white/95 backdrop-blur-xl shadow-sm"
          : "border-b border-transparent bg-white/80 backdrop-blur-sm"
      )}
    >
      <Container>
        <nav
          className="flex items-center justify-between h-[72px] lg:h-[80px]"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-[22px] text-text hover:text-accent transition-colors logo-text"
            aria-label="NAVNA — Home"
          >
            <img src="/logo.png" alt="NAVNA Logo" className="h-7 w-auto" style={{ filter: 'brightness(0)' }} />
            NAVNA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-[15px] font-medium rounded-lg transition-colors",
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "text-text"
                    : "text-text-muted hover:text-text"
                )}
                aria-current={
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "page"
                    : undefined
                }
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-3">
              <Button href="/contact" size="sm">
                Start a Project
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 -mr-2.5 text-text-muted hover:text-text transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="transition-transform duration-200"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-out bg-bg/98 backdrop-blur-xl",
          mobileMenuOpen
            ? "max-h-[400px] opacity-100 border-t border-border/50"
            : "max-h-0 opacity-0"
        )}
        role="menu"
      >
        <Container className="py-3 pb-5">
          <div className="flex flex-col gap-0.5">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-3.5 text-[16px] font-medium rounded-lg transition-colors",
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "text-text bg-surface"
                    : "text-text-secondary hover:text-text hover:bg-surface/60"
                )}
                role="menuitem"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-border">
              <Button href="/contact" className="w-full" size="default">
                Start a Project
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
