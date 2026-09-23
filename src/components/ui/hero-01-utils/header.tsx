"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export interface NavigationSection {
  title: string;
  href: string;
  isActive?: boolean;
}

interface HeaderProps {
  navigationData: NavigationSection[];
}

export default function Header({ navigationData }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-white/95 backdrop-blur-xl shadow-sm"
          : "border-b border-transparent bg-white/80 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-[72px] lg:h-[80px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-[24px] text-text hover:text-accent transition-colors logo-text"
          >
            <img src="/logo.png" alt="NAVNA Logo" className="h-8 w-auto" style={{ filter: 'brightness(0)' }} />
            NAVNA
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-0.5">
              {navigationData.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex h-9 items-center justify-center rounded-lg px-4 py-2 text-[15px] font-medium transition-colors",
                        item.isActive
                          ? "text-text"
                          : "text-text-muted hover:text-text hover:bg-surface/60"
                      )}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button href="/contact" size="sm">
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2.5 -mr-2 text-text-muted hover:text-text transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-bg border-border"
            >
              <SheetTitle className="text-text">Menu</SheetTitle>
              <nav className="mt-8 flex flex-col gap-1">
                {navigationData.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "px-4 py-3.5 rounded-lg text-[16px] font-medium transition-colors",
                      item.isActive
                        ? "text-text bg-surface"
                        : "text-text-secondary hover:text-text hover:bg-surface/60"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-border">
                  <Button
                    href="/contact"
                    className="w-full"
                    onClick={() => setOpen(false)}
                  >
                    Start a Project
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
