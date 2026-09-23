import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateIn } from "@/components/ui/AnimateIn";

import { services, getServiceBySlug } from "@/data/services";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,

} from "@/lib/schema";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metadata.title,
    description: service.metadata.description,
    alternates: {
      canonical: `https://navna.online/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema(
              service.title,
              service.metadata.description,
              `/services/${service.slug}`
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Services", url: "/services" },
              { name: service.title, url: `/services/${service.slug}` },
            ])
          ),
        }}
      />


      {/* Breadcrumb */}
      <section className="pt-8">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-text-muted">
              <li><Link href="/services" className="hover:text-text transition-colors">Services</Link></li>
              <li aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg></li>
              <li className="text-text">{service.title}</li>
            </ol>
          </nav>
        </Container>
      </section>

      {/* Hero */}
      <section className="py-12 lg:py-16">
        <Container>
          <AnimateIn>
            <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl max-w-3xl">
              {service.title}
            </h1>
          </AnimateIn>
          <AnimateIn delay={100}>
            <p className="mt-6 text-xl text-text-secondary max-w-2xl leading-relaxed">
              {service.longDescription}
            </p>
          </AnimateIn>
          <AnimateIn delay={200}>
            <div className="mt-8">
              <Button href="/contact" size="lg">Start a Project</Button>
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* Problem */}
      <section className="py-12 lg:py-16 border-t border-border">
        <Container>
          <div className="max-w-3xl">
            <AnimateIn>
              <SectionHeading overline="The Problem" title="What businesses face" />
            </AnimateIn>
            <AnimateIn delay={100}>
              <p className="mt-6 text-text-secondary leading-relaxed text-lg">
                {service.problem}
              </p>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* Solution */}
      <section className="py-12 lg:py-16 border-t border-border">
        <Container>
          <div className="max-w-3xl">
            <AnimateIn>
              <SectionHeading overline="Our Approach" title="How we solve it" />
            </AnimateIn>
            <AnimateIn delay={100}>
              <p className="mt-6 text-text-secondary leading-relaxed text-lg">
                {service.solution}
              </p>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* Deliverables */}
      <section className="py-12 lg:py-16 border-t border-border">
        <Container>
          <AnimateIn>
            <SectionHeading overline="Deliverables" title="What you get" />
          </AnimateIn>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            {service.deliverables.map((item, i) => (
              <AnimateIn key={i} delay={i * 60}>
                <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-surface/30">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0 mt-0.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-text">{item}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Technologies */}
      {service.technologies && service.technologies.length > 0 && (
        <section className="py-12 lg:py-16 border-t border-border">
          <Container>
            <AnimateIn>
              <SectionHeading overline="Technology" title="Tools we use" />
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className="mt-8 flex flex-wrap gap-3">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium text-accent bg-accent/10 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimateIn>
          </Container>
        </section>
      )}



      {/* CTA */}
      <section className="py-16 lg:py-20 border-t border-border">
        <Container>
          <div className="text-center">
            <AnimateIn>
              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Ready to start?
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                Tell us about your project and we&apos;ll help you build it right.
              </p>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className="mt-8">
                <Button href="/contact" size="lg">Start a Project</Button>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>
    </>
  );
}
