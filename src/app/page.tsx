import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { projects } from "@/data/projects";
import { ProjectImagePlaceholder } from "@/components/ui/ProjectImagePlaceholder";
import { processSteps } from "@/data/process";
import { founders } from "@/data/founders";
import { generateWebSiteSchema, generateFAQSchema, generateItemListSchema, generateWebPageSchema } from "@/lib/schema";

/* Hero components */
import HeroSection from "@/components/ui/hero-01-utils/hero";
import HeroHeader from "@/components/ui/hero-01-utils/header";
import type { NavigationSection } from "@/components/ui/hero-01-utils/header";

const navigationData: NavigationSection[] = [
  { title: "Services", href: "/services" },
  { title: "Work", href: "/work" },
  { title: "Process", href: "/process" },
  { title: "About", href: "/about" },
];

const homeFAQs = [
  {
    question: "What is NAVNA?",
    answer: "NAVNA is a digital growth agency that helps businesses build and grow their online presence. NAVNA provides website design & development, Google Business Profile optimization, SEO, Meta Ads management, and social media management services. Visit navna.online to learn more."
  },
  {
    question: "What services does NAVNA offer?",
    answer: "NAVNA offers five core services: (1) Website Design & Development — custom, responsive business websites, (2) Google Business Profile Optimization — local search visibility on Google Maps, (3) SEO & Search Visibility — technical SEO and search engine indexing, (4) Meta Ads Management — Facebook and Instagram advertising campaigns, and (5) Social Media Management — content planning and profile management."
  },
  {
    question: "Who founded NAVNA?",
    answer: "NAVNA was co-founded by Chiranjivi Sah and Taha. Chiranjivi focuses on full-stack web development and design, while Taha specializes in SEO, Meta Ads, and social media management. Together they help businesses build stronger digital presence."
  },
  {
    question: "Is NAVNA a freelance agency?",
    answer: "NAVNA operates as a digital growth agency founded by experienced freelancers. Unlike traditional freelancers, NAVNA provides end-to-end digital solutions — from website design to ongoing search visibility and social media management — as a long-term growth partner for businesses."
  },
  {
    question: "How can I contact NAVNA?",
    answer: "You can contact NAVNA by visiting navna.online/contact and filling out the project enquiry form. You can also reach the founders directly via WhatsApp or LinkedIn. NAVNA responds to all enquiries within 24 hours."
  },
  {
    question: "Does NAVNA build websites for small businesses?",
    answer: "Yes. NAVNA specializes in building fast, responsive, professional websites for small and medium businesses. Every website NAVNA builds is SEO-ready, mobile-optimized, and designed to clearly present your business and convert visitors into customers."
  },
  {
    question: "Can NAVNA help my business appear on Google?",
    answer: "Yes. NAVNA offers Google Business Profile optimization and SEO services to help your business appear in Google Search results and on Google Maps. NAVNA sets up, optimizes, and manages your Google presence to improve local visibility."
  },
  {
    question: "Where is NAVNA located?",
    answer: "NAVNA is a remote-first digital agency based in India that serves clients worldwide. All services are delivered digitally, so NAVNA can work with businesses in any location."
  },
];

export default function HomePage() {
  return (
    <>
      {/* Structured Data: WebSite schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebSiteSchema()) }} />

      {/* Structured Data: WebPage schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebPageSchema(
        "NAVNA — Digital Growth Agency",
        "NAVNA helps businesses build and grow their online presence through website design, SEO, Google Business Profile optimization, Meta Ads, and social media management.",
        "/"
      )) }} />

      {/* Structured Data: Service ItemList for rich results */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateItemListSchema([
        { name: "Website Design & Development", url: "/services/web-design-development", description: "Custom, responsive business websites built to convert." },
        { name: "Google Business Profile Optimization", url: "/services/google-business-profile", description: "Local search visibility on Google Maps." },
        { name: "SEO & Search Visibility", url: "/services/seo", description: "Technical SEO and search engine indexing." },
        { name: "Meta Ads Management", url: "/services/meta-ads", description: "Facebook and Instagram ad campaigns." },
        { name: "Social Media Management", url: "/services/social-media-management", description: "Content planning and profile management." },
      ], "NAVNA Digital Services")) }} />

      {/* Structured Data: FAQ schema for AEO featured snippets */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(homeFAQs)) }} />

      {/* ===== HEADER & HERO ===== */}
      <HeroHeader navigationData={navigationData} />
      <HeroSection />

      {/* ===== SERVICE STRIP ===== */}
      <section className="border-b border-border bg-white" aria-label="Quick Services">
        <Container>
          <div className="flex flex-col sm:flex-row sm:flex-wrap lg:grid lg:grid-cols-4 items-center justify-between py-6 gap-6">
            <div className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
              <span className="text-sm font-semibold text-text">Web Design & Development</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <span className="text-sm font-semibold text-text">Local SEO & Google Business</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              <span className="text-sm font-semibold text-text">SEO & Search Visibility</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
              <span className="text-sm font-semibold text-text">Meta Ads & Social Media</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== TRUST / APPROACH ===== */}
      <section className="relative py-16 bg-slate-50 border-t border-border overflow-hidden">
        {/* Subtle colorful background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full pointer-events-none opacity-[0.03]">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>
        
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <AnimateIn delay={0}>
              <div className="group flex flex-col h-full bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none" />
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-black text-lg mb-6 shadow-sm border border-blue-100 relative z-10">
                  01
                </div>
                <h3 className="text-base font-bold text-text tracking-wide mb-3 relative z-10">Strategy First</h3>
                <p className="text-sm text-text-secondary leading-relaxed relative z-10">We take time to understand your business and goals.</p>
              </div>
            </AnimateIn>
            
            <AnimateIn delay={100}>
              <div className="group flex flex-col h-full bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none" />
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-lg mb-6 shadow-sm border border-emerald-100 relative z-10">
                  02
                </div>
                <h3 className="text-base font-bold text-text tracking-wide mb-3 relative z-10">Practical Solutions</h3>
                <p className="text-sm text-text-secondary leading-relaxed relative z-10">We focus on work that serves a real business purpose.</p>
              </div>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="group flex flex-col h-full bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none" />
                <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center font-black text-lg mb-6 shadow-sm border border-purple-100 relative z-10">
                  03
                </div>
                <h3 className="text-base font-bold text-text tracking-wide mb-3 relative z-10">Clear Communication</h3>
                <p className="text-sm text-text-secondary leading-relaxed relative z-10">You always know what we&apos;re working on.</p>
              </div>
            </AnimateIn>

            <AnimateIn delay={300}>
              <div className="group flex flex-col h-full bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md hover:border-rose-200 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none" />
                <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center font-black text-lg mb-6 shadow-sm border border-rose-100 relative z-10">
                  04
                </div>
                <h3 className="text-base font-bold text-text tracking-wide mb-3 relative z-10">Long-Term Partner</h3>
                <p className="text-sm text-text-secondary leading-relaxed relative z-10">We aim to support your growth beyond the initial project.</p>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-12 lg:py-16 bg-white border-y border-border" aria-labelledby="services-heading">
        <Container>
          <AnimateIn>
            <div className="max-w-2xl mb-16">
              <SectionHeading
                overline="Our Services"
                title="Everything you need to grow online."
                description="From websites to search visibility, advertising, and social media — NAVNA helps businesses build a stronger online presence and reach the right customers."
              />
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {/* BUILD */}
            <AnimateIn delay={50}>
              <div>
                <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-6 border-b border-border pb-2">Build</h3>
                <Link href="/services/web-design-development" className="group block p-6 sm:p-8 rounded-[16px] border border-border bg-white shadow-card hover:border-accent hover:shadow-md transform hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center text-accent">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                    </div>
                    <h4 className="text-lg font-bold text-text group-hover:text-accent transition-colors">Web Design & Development</h4>
                  </div>
                  <p className="text-text-secondary leading-relaxed mb-6 flex-grow">Build a fast, responsive website that gives your business a strong digital foundation.</p>
                  <span className="inline-flex items-center text-sm font-bold text-accent mt-auto group-hover:text-error transition-colors">Learn more <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </div>
            </AnimateIn>

            {/* GET FOUND */}
            <AnimateIn delay={100}>
              <div>
                <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-6 border-b border-border pb-2">Get Found</h3>
                <Link href="/services/seo" className="group block p-6 sm:p-8 rounded-[16px] border border-border bg-white shadow-card hover:border-accent hover:shadow-md transform hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center text-accent">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                    </div>
                    <h4 className="text-lg font-bold text-text group-hover:text-accent transition-colors">SEO & Google Business</h4>
                  </div>
                  <p className="text-text-secondary leading-relaxed mb-6 flex-grow">Optimize your Google presence and improve website ranking to capture local search traffic.</p>
                  <span className="inline-flex items-center text-sm font-bold text-accent mt-auto group-hover:text-error transition-colors">Learn more <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </div>
            </AnimateIn>

            {/* REACH */}
            <AnimateIn delay={150}>
              <div>
                <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-6 border-b border-border pb-2">Reach</h3>
                <Link href="/services/meta-ads" className="group block p-6 sm:p-8 rounded-[16px] border border-border bg-white shadow-card hover:border-accent hover:shadow-md transform hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center text-accent">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                    </div>
                    <h4 className="text-lg font-bold text-text group-hover:text-accent transition-colors">Meta Ads Management</h4>
                  </div>
                  <p className="text-text-secondary leading-relaxed mb-6 flex-grow">Target and acquire new customers directly through Facebook and Instagram advertising.</p>
                  <span className="inline-flex items-center text-sm font-bold text-accent mt-auto group-hover:text-error transition-colors">Learn more <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </div>
            </AnimateIn>

            {/* STAY VISIBLE */}
            <AnimateIn delay={200}>
              <div>
                <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-6 border-b border-border pb-2">Stay Visible</h3>
                <Link href="/services/social-media-management" className="group block p-6 sm:p-8 rounded-[16px] border border-border bg-white shadow-card hover:border-accent hover:shadow-md transform hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center text-accent">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                    </div>
                    <h4 className="text-lg font-bold text-text group-hover:text-accent transition-colors">Social Media Management</h4>
                  </div>
                  <p className="text-text-secondary leading-relaxed mb-6 flex-grow">Keep your brand active and engaged with your audience across key social platforms.</p>
                  <span className="inline-flex items-center text-sm font-bold text-accent mt-auto group-hover:text-error transition-colors">Learn more <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* ===== SELECTED WORK ===== */}
      <section className="py-12 lg:py-16 bg-bg" aria-labelledby="work-heading">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <AnimateIn>
              <div className="max-w-2xl">
                <SectionHeading
                  overline="Selected Work"
                  title="Built for real businesses."
                  description="A selection of websites and digital projects we've built."
                />
              </div>
            </AnimateIn>
            <AnimateIn delay={100}>
              <Button href="/work" variant="secondary" className="shrink-0">
                View Our Work <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => ["structzone", "mamta-tapri-udyog", "zoviq"].includes(p.slug))
              .map((project, i) => (
                <AnimateIn key={project.slug} delay={i * 100}>
                  <Link
                    href={`/work/${project.slug}`}
                    className="group flex flex-col h-full bg-white rounded-xl border border-border overflow-hidden shadow-card hover:border-accent hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-[4/3] w-full bg-surface-2 overflow-hidden border-b border-border">
                      {project.coverImage ? (
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <ProjectImagePlaceholder project={project} />
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-accent">
                          {project.category}
                        </span>
                        <span className="text-xs font-medium text-text-muted"></span>
                      </div>
                      <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm text-text-secondary leading-relaxed line-clamp-2">
                        {project.shortDescription}
                      </p>
                    </div>
                  </Link>
                </AnimateIn>
              ))}
          </div>
        </Container>
      </section>

      {/* ===== PROCESS PREVIEW ===== */}
      <section className="py-12 lg:py-16 border-t border-border bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <AnimateIn>
                <SectionHeading
                  overline="How We Work"
                  title="From first conversation to ongoing growth."
                  description="We don't just build a website and disappear. We work with you to plan, build, and continuously optimize your online presence."
                />
                <div className="mt-8">
                  <Button href="/process" variant="secondary">
                    See Our Process <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </AnimateIn>
            </div>
            
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="grid grid-cols-2 gap-4">
                {processSteps.map((step, i) => (
                  <AnimateIn key={step.number} delay={i * 50}>
                    <div className="p-5 border border-border rounded-xl bg-bg flex flex-col h-full hover:border-accent transition-colors">
                      <span className="text-xs font-bold text-text-muted mb-2">{step.number}</span>
                      <h3 className="font-bold text-text text-base">{step.title}</h3>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== FOUNDERS PREVIEW ===== */}
      <section className="py-12 lg:py-16 border-t border-border bg-surface-2">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <AnimateIn>
                <SectionHeading
                  overline="The Team"
                  title="Built by people who build."
                  description="NAVNA is founded by builders who work directly with businesses to create practical digital solutions."
                />
                <div className="mt-8">
                  <Button href="/about" variant="secondary">
                    About NAVNA <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </AnimateIn>
            </div>
            
            <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              {founders.map((founder, i) => (
                <AnimateIn key={founder.name} delay={i * 100}>
                  <div className="p-6 bg-white border border-border rounded-[16px] shadow-card hover:shadow-md transform hover:-translate-y-1 transition-all duration-300">
                    {founder.image ? (
                      <img 
                        src={founder.image} 
                        alt={founder.name} 
                        className="w-12 h-12 rounded-full object-cover shadow-md mb-4 border border-border"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-accent text-white shadow-md flex items-center justify-center font-black text-lg mb-4">
                        {founder.initials}
                      </div>
                    )}
                    <h3 className="font-bold text-text text-lg">{founder.name}</h3>
                    <p className="text-sm font-medium text-text-secondary mt-1">{founder.role}</p>
                    <div className="flex gap-2 mt-4">
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-surface-2 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all"
                        aria-label={`${founder.name} on LinkedIn`}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      {founder.whatsapp && (
                        <a
                          href={founder.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all"
                          aria-label={`Chat with ${founder.name} on WhatsApp`}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== FAQ SECTION (AEO — Answer Engine Optimization) ===== */}
      <section className="py-12 lg:py-16 border-t border-border bg-white" aria-labelledby="faq-heading">
        <Container>
          <AnimateIn>
            <div className="max-w-2xl mb-12">
              <SectionHeading
                overline="FAQ"
                title="Questions about NAVNA"
                description="Common questions about our agency, services, and how we work with businesses."
              />
            </div>
          </AnimateIn>

          <div className="max-w-3xl space-y-6">
            {homeFAQs.map((faq, i) => (
              <AnimateIn key={i} delay={i * 50}>
                <details className="group border border-border rounded-xl bg-bg overflow-hidden hover:border-accent/40 transition-colors">
                  <summary className="flex items-center justify-between cursor-pointer p-6 text-left font-semibold text-text hover:text-accent transition-colors [&::-webkit-details-marker]:hidden list-none">
                    <span className="pr-4">{faq.question}</span>
                    <svg
                      className="w-5 h-5 shrink-0 text-text-muted group-open:rotate-180 transition-transform duration-200"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative py-12 lg:py-16 border-t border-border bg-bg overflow-hidden">
        <Container className="relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
                Ready to grow your business online?
              </h2>
            </AnimateIn>
            <AnimateIn delay={50}>
              <p className="mt-6 text-lg text-text-secondary leading-relaxed">
                Tell us about your business and goals. NAVNA will help you choose the right digital priorities and build a stronger online presence.
              </p>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
                <Button href="/contact" size="lg">Start a Project</Button>
                <Button href="/services" variant="secondary" size="lg">Our Services</Button>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

    </>
  );
}
