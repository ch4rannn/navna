import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { processSteps } from "@/data/process";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";

export const metadata: Metadata = {
  title: "How NAVNA Works | Our Process — From Strategy to Ongoing Growth",
  description:
    "Learn how NAVNA works with businesses — from understanding your goals, to building your website, optimizing your Google presence, running ads, and managing ongoing growth. See NAVNA's step-by-step process.",
  keywords: [
    "NAVNA process",
    "how NAVNA works",
    "navna workflow",
    "digital agency process",
    "how to work with NAVNA",
    "navna project process",
  ],
  alternates: { canonical: "https://navna.online/process" },
  openGraph: {
    title: "How NAVNA Works — Our Process",
    description: "From first conversation to ongoing growth. See how NAVNA helps businesses build a stronger digital presence.",
    url: "https://navna.online/process",
    type: "website",
  },
};

export default function ProcessPage() {
  return (
    <div className="relative">
      
      {/* ===== HERO ===== */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden relative">
        <Container>
          <div className="max-w-4xl">
            <AnimateIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-2 border border-border mb-6">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">Our Process</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-text leading-[1.05]">
                How we grow your <span className="text-accent">digital presence.</span>
              </h1>
            </AnimateIn>
            <AnimateIn delay={100}>
              <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl">
                We start by understanding your business, identify where your digital presence needs work, then build, optimize, launch, and improve the right pieces.
              </p>
            </AnimateIn>
            <AnimateIn delay={200}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">Start a Project</Button>
                <Button href="/services" variant="secondary" size="lg">Explore Our Services</Button>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* ===== PROCESS TIMELINE ===== */}
      <section className="py-12 lg:py-16 border-t border-border bg-bg/50 relative z-10" aria-labelledby="timeline-heading">
        <Container>
          <div className="hidden">
            <h2 id="timeline-heading">Detailed Process Steps</h2>
          </div>
          <ProcessTimeline steps={processSteps} />
        </Container>
      </section>

      {/* ===== ONE PROCESS. DIFFERENT NEEDS. ===== */}
      <section className="py-12 lg:py-16 border-t border-border bg-surface-2/20">
        <Container>
          <div className="max-w-3xl mb-16">
            <AnimateIn>
              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
                One process. Different needs.
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                Not every business needs the same combination of services. We adapt the process around the problems that matter most to your business.
              </p>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimateIn delay={50}>
              <div className="p-8 rounded-xl bg-surface/50 border border-border h-full">
                <h3 className="text-xs font-bold text-accent uppercase tracking-widest mb-4">Build</h3>
                <p className="text-lg font-medium text-text">Website Design &amp; Development</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className="p-8 rounded-xl bg-surface/50 border border-border h-full">
                <h3 className="text-xs font-bold text-accent uppercase tracking-widest mb-4">Get Found</h3>
                <ul className="space-y-2">
                  <li className="text-lg font-medium text-text">Google Business Profile</li>
                  <li className="text-lg font-medium text-text">SEO &amp; Search Visibility</li>
                </ul>
              </div>
            </AnimateIn>
            <AnimateIn delay={150}>
              <div className="p-8 rounded-xl bg-surface/50 border border-border h-full">
                <h3 className="text-xs font-bold text-accent uppercase tracking-widest mb-4">Get Customers</h3>
                <p className="text-lg font-medium text-text">Meta Ads Management</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={200}>
              <div className="p-8 rounded-xl bg-surface/50 border border-border h-full">
                <h3 className="text-xs font-bold text-accent uppercase tracking-widest mb-4">Stay Visible</h3>
                <p className="text-lg font-medium text-text">Social Media Management</p>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* ===== HOW WE WORK PRINCIPLES ===== */}
      <section className="py-12 lg:py-16 border-t border-border">
        <Container>
          <AnimateIn>
            <SectionHeading title="How we work" />
          </AnimateIn>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            <AnimateIn delay={50}>
              <div>
                <h3 className="text-xl font-semibold text-text">Understand first</h3>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  We don&apos;t recommend services blindly. Every decision is based on what your business actually needs right now.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div>
                <h3 className="text-xl font-semibold text-text">Keep it practical</h3>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  We focus on work that has a clear purpose. No vanity metrics, no unnecessary complexity.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={150}>
              <div>
                <h3 className="text-xl font-semibold text-text">Build for people</h3>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  Design, content, and strategy should make sense to your real customers, not just search engines.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={200}>
              <div>
                <h3 className="text-xl font-semibold text-text">Improve continuously</h3>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  Digital growth is not a one-off project. We use what we learn to make your digital presence better over time.
                </p>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* ===== WHAT HAPPENS AFTER ===== */}
      <section className="py-12 lg:py-16 border-t border-border bg-surface-2/20">
        <Container>
          <AnimateIn>
            <SectionHeading title="What happens after you get in touch?" />
          </AnimateIn>
          
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 relative before:absolute before:inset-0 before:top-4 before:h-px before:bg-border before:hidden lg:before:block">
            <AnimateIn delay={50}>
              <div className="relative pt-6 lg:pt-0">
                <div className="absolute top-0 left-0 w-8 h-8 bg-bg border-2 border-border rounded-full flex items-center justify-center text-xs font-bold z-10 hidden lg:flex">01</div>
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-accent font-bold mb-6 lg:hidden">01</div>
                <h3 className="text-xl font-semibold text-text mt-4 lg:mt-16">Tell us about your business</h3>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  Share what you do, what you&apos;re trying to achieve, and where you think you need help.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className="relative pt-6 lg:pt-0">
                <div className="absolute top-0 left-0 w-8 h-8 bg-bg border-2 border-border rounded-full flex items-center justify-center text-xs font-bold z-10 hidden lg:flex">02</div>
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-accent font-bold mb-6 lg:hidden">02</div>
                <h3 className="text-xl font-semibold text-text mt-4 lg:mt-16">We review your needs</h3>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  We identify the relevant priorities, explore the current state of your digital presence, and discuss the right approach.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={150}>
              <div className="relative pt-6 lg:pt-0">
                <div className="absolute top-0 left-0 w-8 h-8 bg-bg border-2 border-border rounded-full flex items-center justify-center text-xs font-bold z-10 hidden lg:flex">03</div>
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-accent font-bold mb-6 lg:hidden">03</div>
                <h3 className="text-xl font-semibold text-text mt-4 lg:mt-16">We get started</h3>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  Once the scope, timeline, and strategy are clear and agreed upon, we move straight into execution.
                </p>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative py-12 lg:py-16 border-t border-border">
        <Container className="relative z-10">
          <div className="text-center">
            <AnimateIn>
              <div className="flex justify-center mb-8">
                <hr className="accent-line w-16" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
                Ready to build something that works?
              </h2>
            </AnimateIn>
            <AnimateIn delay={80}>
              <p className="mt-6 text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
                Tell us about your business and what you&apos;re trying to achieve. We&apos;ll take it from there.
              </p>
            </AnimateIn>
            <AnimateIn delay={150}>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button href="/contact" size="lg">Start a Project</Button>
                <Button href="/services" variant="secondary" size="lg">View Our Services</Button>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

    </div>
  );
}
