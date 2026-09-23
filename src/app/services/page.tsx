import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | NAVNA — Digital Growth Agency",
  description:
    "Explore NAVNA's services: Google Business Profile Optimization, SEO, Web Design, Meta Ads, and Social Media Management.",
  alternates: { canonical: "https://navna.online/services" },
};

// SVG Icons with consistent #315C4B accent color (applied via text-accent class)
const IconBrowser = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
);
const IconMapPin = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const IconSearch = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);
const IconTarget = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
);
const IconShare = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
);

export default function ServicesPage() {
  const webDesign = services.find(s => s.slug === "web-design-development");
  const gbp = services.find(s => s.slug === "google-business-profile");
  const seo = services.find(s => s.slug === "seo");
  const metaAds = services.find(s => s.slug === "meta-ads");
  const socialMedia = services.find(s => s.slug === "social-media-management");

  return (
    <div className="relative">
      
      {/* ===== HERO ===== */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden relative">
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <AnimateIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-2 border border-border mb-6">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">Our Services</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-text leading-[1.05]">
                Everything your business needs to <span className="text-accent">show up online.</span>
              </h1>
            </AnimateIn>
            <AnimateIn delay={100}>
              <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl">
                We help businesses establish strong foundations with custom websites, get discovered through SEO and Google Maps, reach customers with Meta Ads, and stay visible on social media.
              </p>
            </AnimateIn>
            <AnimateIn delay={200}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">Start a Project</Button>
                <Button href="/work" variant="secondary" size="lg">View Our Work</Button>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* ===== CORE SERVICES ===== */}
      <section className="py-12 lg:py-16 border-t border-border bg-bg">
        <Container>
          <div className="max-w-6xl mx-auto space-y-24">
            
            {/* BUILD */}
            {webDesign && (
              <AnimateIn>
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-4">
                    <h2 className="text-sm font-bold tracking-widest uppercase text-text-muted">BUILD</h2>
                    <div className="h-px bg-border flex-1"></div>
                  </div>
                  <Link href={`/services/${webDesign.slug}`} className="group block p-8 lg:p-12 rounded-xl bg-surface-2 border border-border hover:border-accent transition-colors duration-300">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                      <div className="flex-1">
                        <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center border border-border mb-8 text-accent group-hover:scale-110 transition-transform duration-300">
                          <IconBrowser />
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-text mb-4 group-hover:text-accent transition-colors duration-300">
                          {webDesign.title}
                        </h3>
                        <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
                          {webDesign.longDescription}
                        </p>
                      </div>
                      <div className="lg:w-1/3 flex flex-col justify-between">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">Core Deliverables</p>
                          <ul className="space-y-3">
                            {webDesign.deliverables.slice(0, 4).map(d => (
                              <li key={d} className="flex items-start gap-3">
                                <span className="text-accent mt-1">•</span>
                                <span className="text-text-secondary">{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-8 flex items-center gap-2 text-accent font-medium">
                          Learn more 
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </AnimateIn>
            )}

            {/* GET FOUND */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <h2 className="text-sm font-bold tracking-widest uppercase text-text-muted">GET FOUND</h2>
                <div className="h-px bg-border flex-1"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {gbp && (
                  <AnimateIn delay={50}>
                    <Link href={`/services/${gbp.slug}`} className="group block p-8 rounded-xl bg-surface-2 border border-border hover:border-accent transition-colors duration-300 h-full flex flex-col">
                      <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-border mb-6 text-accent">
                        <IconMapPin />
                      </div>
                      <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-accent transition-colors">
                        {gbp.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed mb-8 flex-1">
                        {gbp.shortDescription}
                      </p>
                      <div className="flex items-center gap-2 text-accent font-medium text-sm">
                        Learn more 
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                      </div>
                    </Link>
                  </AnimateIn>
                )}
                {seo && (
                  <AnimateIn delay={100}>
                    <Link href={`/services/${seo.slug}`} className="group block p-8 rounded-xl bg-surface-2 border border-border hover:border-accent transition-colors duration-300 h-full flex flex-col">
                      <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-border mb-6 text-accent">
                        <IconSearch />
                      </div>
                      <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-accent transition-colors">
                        {seo.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed mb-8 flex-1">
                        {seo.shortDescription}
                      </p>
                      <div className="flex items-center gap-2 text-accent font-medium text-sm">
                        Learn more 
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                      </div>
                    </Link>
                  </AnimateIn>
                )}
              </div>
            </div>

            {/* REACH & STAY VISIBLE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16">
              
              {/* REACH */}
              {metaAds && (
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-4">
                    <h2 className="text-sm font-bold tracking-widest uppercase text-text-muted">REACH</h2>
                    <div className="h-px bg-border flex-1"></div>
                  </div>
                  <AnimateIn delay={50}>
                    <Link href={`/services/${metaAds.slug}`} className="group block p-8 rounded-xl bg-surface-2 border border-border hover:border-accent transition-colors duration-300 h-full flex flex-col">
                      <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-border mb-6 text-accent">
                        <IconTarget />
                      </div>
                      <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-accent transition-colors">
                        {metaAds.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed mb-8 flex-1">
                        {metaAds.shortDescription}
                      </p>
                      <div className="flex items-center gap-2 text-accent font-medium text-sm">
                        Learn more 
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                      </div>
                    </Link>
                  </AnimateIn>
                </div>
              )}

              {/* STAY VISIBLE */}
              {socialMedia && (
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-4">
                    <h2 className="text-sm font-bold tracking-widest uppercase text-text-muted">STAY VISIBLE</h2>
                    <div className="h-px bg-border flex-1"></div>
                  </div>
                  <AnimateIn delay={100}>
                    <Link href={`/services/${socialMedia.slug}`} className="group block p-8 rounded-xl bg-surface-2 border border-border hover:border-accent transition-colors duration-300 h-full flex flex-col">
                      <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-border mb-6 text-accent">
                        <IconShare />
                      </div>
                      <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-accent transition-colors">
                        {socialMedia.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed mb-8 flex-1">
                        {socialMedia.shortDescription}
                      </p>
                      <div className="flex items-center gap-2 text-accent font-medium text-sm">
                        Learn more 
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                      </div>
                    </Link>
                  </AnimateIn>
                </div>
              )}
            </div>

          </div>
        </Container>
      </section>

      {/* ===== ONE DIGITAL PRESENCE ===== */}
      <section className="py-12 lg:py-16 border-t border-border bg-surface-2/20">
        <Container>
          <AnimateIn>
            <SectionHeading 
              overline="Ecosystem" 
              title="One digital presence. Multiple growth channels." 
            />
          </AnimateIn>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimateIn delay={50}>
              <div className="h-full border-l-2 border-accent pl-6 py-2">
                <h3 className="text-xl font-bold text-text mb-3">Website</h3>
                <p className="text-text-secondary">Gives your business a strong, professional foundation that turns visitors into enquiries.</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className="h-full border-l-2 border-border pl-6 py-2">
                <h3 className="text-xl font-bold text-text mb-3">Google + SEO</h3>
                <p className="text-text-secondary">Helps active customers discover your business when they are searching for your services.</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={150}>
              <div className="h-full border-l-2 border-border pl-6 py-2">
                <h3 className="text-xl font-bold text-text mb-3">Meta Ads</h3>
                <p className="text-text-secondary">Reaches targeted, relevant audiences on Facebook and Instagram to generate new demand.</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={200}>
              <div className="h-full border-l-2 border-border pl-6 py-2">
                <h3 className="text-xl font-bold text-text mb-3">Social Media</h3>
                <p className="text-text-secondary">Keeps your business visible, engaged, and top-of-mind with your existing audience.</p>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* ===== PROCESS TEASER ===== */}
      <section className="py-12 lg:py-16 border-t border-border">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 lg:items-center justify-between">
            <div className="lg:w-1/3">
              <AnimateIn>
                <h2 className="text-3xl font-bold tracking-tight text-text mb-4">Every project starts with the right problem.</h2>
                <p className="text-lg text-text-secondary mb-8">We don&apos;t push every service on every business. We first understand where you are, identify what needs attention, and focus on the services that actually fit.</p>
                <Button href="/process" variant="secondary">See How We Work</Button>
              </AnimateIn>
            </div>
            
            <div className="lg:w-3/5 flex flex-wrap gap-x-4 gap-y-6 items-center">
              <AnimateIn delay={100} className="flex items-center gap-4">
                <span className="text-sm font-bold bg-surface-2 border border-border px-4 py-2 rounded-full">01 Understand</span>
                <span className="text-border">→</span>
              </AnimateIn>
              <AnimateIn delay={150} className="flex items-center gap-4">
                <span className="text-sm font-bold bg-surface-2 border border-border px-4 py-2 rounded-full">02 Priorities</span>
                <span className="text-border">→</span>
              </AnimateIn>
              <AnimateIn delay={200} className="flex items-center gap-4">
                <span className="text-sm font-bold bg-surface-2 border border-border px-4 py-2 rounded-full">03 Execute</span>
                <span className="text-border">→</span>
              </AnimateIn>
              <AnimateIn delay={250} className="flex items-center gap-4">
                <span className="text-sm font-bold bg-surface-2 border border-border px-4 py-2 rounded-full">04 Measure</span>
                <span className="text-border">→</span>
              </AnimateIn>
              <AnimateIn delay={300} className="flex items-center gap-4">
                <span className="text-sm font-bold bg-accent text-bg px-4 py-2 rounded-full">05 Improve</span>
              </AnimateIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== SEE THE WORK ===== */}
      <section className="py-12 lg:py-16 border-t border-border bg-surface-2/20">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <AnimateIn>
              <SectionHeading overline="Portfolio" title="See the work" description="Explore websites and digital projects we've built for our clients." />
            </AnimateIn>
            <AnimateIn delay={100}>
              <Button href="/work" variant="secondary">View Our Work</Button>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimateIn delay={50}>
              <Link href="/work/structzone" className="group block overflow-hidden rounded-xl border border-border bg-surface">
                <div className="aspect-[4/3] bg-bg overflow-hidden border-b border-border p-8">
                  {/* Mock image placeholder or real image if available */}
                  <div className="w-full h-full bg-surface-2 border border-border rounded shadow-sm flex items-center justify-center">
                    <span className="text-text-muted font-medium">StructZone Preview</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors">StructZone</h3>
                  <p className="mt-2 text-text-secondary">Engineering & Construction Firm</p>
                </div>
              </Link>
            </AnimateIn>
            <AnimateIn delay={100}>
              <Link href="/work/mamta-tapri-udyog" className="group block overflow-hidden rounded-xl border border-border bg-surface">
                <div className="aspect-[4/3] bg-bg overflow-hidden border-b border-border p-8">
                  <div className="w-full h-full bg-surface-2 border border-border rounded shadow-sm flex items-center justify-center">
                    <span className="text-text-muted font-medium">Mamta Tapri Udyog Preview</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors">Mamta Tapri Udyog</h3>
                  <p className="mt-2 text-text-secondary">Manufacturing & B2B</p>
                </div>
              </Link>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-12 lg:py-16 border-t border-border">
        <Container className="relative z-10">
          <div className="text-center">
            <AnimateIn>
              <div className="flex justify-center mb-8">
                <hr className="accent-line w-16" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
                Not sure where to start?
              </h2>
            </AnimateIn>
            <AnimateIn delay={80}>
              <p className="mt-6 text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
                Tell us what you&apos;re trying to achieve and we&apos;ll help identify the right digital priorities for your business.
              </p>
            </AnimateIn>
            <AnimateIn delay={150}>
              <div className="mt-10">
                <Button href="/contact" size="lg">Start a Project</Button>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

    </div>
  );
}
