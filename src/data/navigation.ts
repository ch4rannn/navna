import type { NavLink } from "@/types";

export const mainNavLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "Google Business Profile", href: "/services/google-business-profile" },
  { label: "SEO & Search Visibility", href: "/services/seo" },
  { label: "Website Design", href: "/services/web-design-development" },
  { label: "Meta Ads", href: "/services/meta-ads" },
  { label: "Social Media", href: "/services/social-media-management" },
];

export const footerCompanyLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];
