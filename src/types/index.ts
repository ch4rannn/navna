// Types for NAVNA website

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  problem: string;
  solution: string;
  deliverables: string[];
  technologies?: string[];
  faqs: FAQ[];
  metadata: PageMetadata;
}

export interface Project {
  slug: string;
  title: string;
  url?: string;
  type: "client" | "demo" | "experiment";
  category: string;
  shortDescription: string;
  challenge?: string;
  solution?: string;
  technologies?: string[];
  outcome?: string;
  coverImage: string;
  gallery?: string[];
  isConcept?: boolean;
  metadata?: PageMetadata;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  linkedin: string;
  whatsapp?: string;
  initials: string;
  image?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  services?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface PageMetadata {
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceSelection: string;
  message: string;
  website: string; // honeypot
}

export type FormStatus = "idle" | "submitting" | "success" | "error";
