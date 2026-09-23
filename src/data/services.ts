import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "web-design-development",
    title: "Website Design & Development",
    shortDescription: "Design and develop fast, responsive, professional websites that clearly present your business and turn visitors into customers.",
    longDescription: "We build professional, responsive websites that serve as the foundation of your digital presence. From landing pages to full business sites, we ensure your online home is fast, accessible, and ready for search engines.",
    icon: "browser",
    problem: "Outdated, slow, or poorly structured websites damage your credibility and cause potential customers to leave before they even contact you.",
    solution: "We design and develop fast, responsive websites that clearly present your business offerings and are built with basic SEO readiness from day one.",
    deliverables: [
      "Business websites",
      "Landing pages",
      "Portfolio websites",
      "Responsive design",
      "Contact forms",
      "Basic SEO-ready implementation"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS"],
    faqs: [
      {
        question: "Can NAVNA create a website for my business?",
        answer: "Yes, we design and develop custom, responsive websites tailored to clearly present your business and turn visitors into customers."
      },
      {
        question: "Will my website work well on mobile phones?",
        answer: "Absolutely. All our websites are built with responsive design to ensure they look and function perfectly across all devices."
      }
    ],
    metadata: {
      title: "Website Design & Development — NAVNA",
      description: "Build your digital presence with fast, responsive, professional websites designed and developed by NAVNA."
    }
  },
  {
    slug: "google-business-profile",
    title: "Google Business Profile Optimization",
    shortDescription: "Help businesses improve their Google Business Profile, local presence, and visibility when customers search nearby.",
    longDescription: "We optimize your Google Business Profile to ensure your business appears accurately and prominently in local searches and on Google Maps. We manage your information, categories, and setup to maximize local visibility.",
    icon: "mapPin",
    problem: "Many local businesses struggle to be found by customers searching nearby because their Google Business Profile is unclaimed, incomplete, or poorly optimized.",
    solution: "We fully set up and optimize your profile with accurate business information, strategic category selection, and ongoing management to improve your local presence.",
    deliverables: [
      "Google Business Profile setup",
      "Profile optimization",
      "Business information management",
      "Category optimization",
      "Local visibility improvements"
    ],
    technologies: ["Google Maps", "Google Business Profile"],
    faqs: [
      {
        question: "Can you help my business appear on Google Maps?",
        answer: "Yes. We set up and optimize your Google Business Profile, which is the primary driver for appearing on Google Maps and in local search results."
      },
      {
        question: "Do you guarantee I will rank #1?",
        answer: "No. We do not promise rankings or guaranteed results, as Google's algorithm changes constantly. We focus on best practices to maximize your visibility."
      }
    ],
    metadata: {
      title: "Google Business Profile Optimization — NAVNA",
      description: "Improve your local presence and visibility on Google Maps with NAVNA's Google Business Profile optimization services."
    }
  },
  {
    slug: "seo",
    title: "SEO & Search Visibility",
    shortDescription: "Improve how your business is discovered through search engines with technically sound SEO, indexing, and on-page optimization.",
    longDescription: "We improve your website's search engine discoverability through proper indexing, technical SEO fundamentals, and on-page optimization so customers can actually find you.",
    icon: "search",
    problem: "A beautiful website is useless if no one can find it. Many sites lack basic indexing and technical SEO, making them invisible to search engines.",
    solution: "We implement technical SEO basics, optimize metadata, and ensure proper search engine indexing to improve your baseline search visibility.",
    deliverables: [
      "Search engine indexing",
      "Technical SEO basics",
      "On-page SEO",
      "Metadata optimization",
      "Search visibility improvements",
      "Google Search Console setup"
    ],
    technologies: ["Google Search Console", "Technical SEO", "On-Page Optimization"],
    faqs: [
      {
        question: "What does SEO indexing mean?",
        answer: "Indexing is the process where search engines like Google discover and store your website's pages in their database. If a page isn't indexed, it cannot appear in search results."
      },
      {
        question: "Does indexing guarantee a first-page ranking?",
        answer: "No. Indexing simply means your site is eligible to show up in search results. It does not automatically guarantee high rankings."
      }
    ],
    metadata: {
      title: "SEO & Search Visibility — NAVNA",
      description: "Improve how your business is discovered through search engines with NAVNA's SEO, indexing, and on-page optimization services."
    }
  },
  {
    slug: "meta-ads",
    title: "Meta Ads Management",
    shortDescription: "Create and manage Facebook and Instagram advertising campaigns designed to help businesses reach relevant audiences.",
    longDescription: "We set up, create, and manage targeted advertising campaigns across Facebook and Instagram, aimed at helping your business reach the right audiences and generate enquiries.",
    icon: "target",
    problem: "Running ads without a clear strategy often results in wasted budget, poor targeting, and low-quality enquiries.",
    solution: "We handle campaign creation, audience targeting, and ongoing optimization focused on reaching relevant customers effectively.",
    deliverables: [
      "Meta Ads setup",
      "Campaign creation",
      "Audience targeting",
      "Creative coordination",
      "Campaign monitoring",
      "Performance optimization"
    ],
    technologies: ["Facebook Ads Manager", "Instagram Ads", "Meta Pixel"],
    faqs: [
      {
        question: "Do you manage Facebook and Instagram ads?",
        answer: "Yes. We create, manage, and optimize Meta Ads campaigns designed to help your business reach relevant audiences."
      },
      {
        question: "Do you guarantee a specific number of leads or sales?",
        answer: "No. While our campaigns are aimed at generating enquiries and reaching the right customers, we do not promise guaranteed leads, sales, or ROI."
      }
    ],
    metadata: {
      title: "Meta Ads Management — NAVNA",
      description: "Reach the right customers with Facebook and Instagram advertising campaigns managed by NAVNA."
    }
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    shortDescription: "Help businesses maintain a consistent and professional presence across their social media platforms.",
    longDescription: "We help you stay consistent and visible online by managing your social media profiles, planning content, and handling basic creative coordination and posting schedules.",
    icon: "share",
    problem: "Business owners rarely have the time to consistently plan, create, and post content, leading to abandoned social media profiles that look unprofessional.",
    solution: "We take over the day-to-day management of your social presence, ensuring a consistent posting schedule and professional profile management.",
    deliverables: [
      "Content planning",
      "Posting schedules",
      "Caption writing",
      "Basic creative coordination",
      "Profile management",
      "Audience engagement"
    ],
    technologies: ["Instagram", "Facebook", "LinkedIn"],
    faqs: [
      {
        question: "Do you manage social media accounts?",
        answer: "Yes. We handle content planning, posting schedules, caption writing, and profile management to keep your business consistently visible."
      },
      {
        question: "How do I start working with NAVNA?",
        answer: "Simply reach out through our contact form. We'll schedule a call to understand your business goals and determine how we can help grow your digital presence."
      }
    ],
    metadata: {
      title: "Social Media Management — NAVNA",
      description: "Maintain a consistent and professional presence across social platforms with NAVNA's social media management services."
    }
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
