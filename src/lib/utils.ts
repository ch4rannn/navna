import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE_URL = "https://navna.online";
export const SITE_NAME = "NAVNA";
export const SITE_DESCRIPTION =
  "NAVNA is a digital growth agency that helps businesses build and grow their online presence through Google Business Profile optimization, SEO, website design, Meta Ads, and social media management.";
