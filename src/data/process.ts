import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "We learn about your business, customers, goals, existing digital presence, and what is currently working — or not working.",
    services: ["All services"],
  },
  {
    number: "02",
    title: "STRATEGIZE",
    description: "We identify the most important opportunities across your website, search visibility, Google Business presence, advertising, and social media.",
    services: ["SEO", "Google Business", "Website", "Meta Ads", "Social Media"],
  },
  {
    number: "03",
    title: "BUILD",
    description: "We design and develop the website, optimize business profiles, prepare content, and set up the digital assets your business needs.",
    services: ["Website Design & Development", "Google Business Profile", "Social Media"],
  },
  {
    number: "04",
    title: "LAUNCH",
    description: "We publish the website, activate campaigns, optimize profiles, and put the agreed strategy into motion.",
    services: ["Website", "SEO", "Google Business", "Meta Ads", "Social Media"],
  },
  {
    number: "05",
    title: "MEASURE",
    description: "We review visibility, engagement, traffic, campaign performance, and other relevant signals to understand what is working and where attention is needed.",
    services: ["Performance Tracking", "Analytics"],
  },
  {
    number: "06",
    title: "GROW",
    description: "Digital growth is ongoing. We refine the website, search visibility, campaigns, content, and social presence based on real performance and business priorities.",
    services: ["Ongoing Digital Growth"],
  },
];
