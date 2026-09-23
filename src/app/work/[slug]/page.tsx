import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { projects, getProjectBySlug } from "@/data/projects";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { ProjectImagePlaceholder } from "@/components/ui/ProjectImagePlaceholder";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.metadata?.title || project.title,
    description: project.metadata?.description || project.shortDescription,
    alternates: { canonical: `https://navna.online/work/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Work", url: "/work" },
              { name: project.title, url: `/work/${project.slug}` },
            ])
          ),
        }}
      />

      <section className="pt-8">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-text-muted">
              <li><Link href="/work" className="hover:text-text transition-colors">Work</Link></li>
              <li aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg></li>
              <li className="text-text">{project.title}</li>
            </ol>
          </nav>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <AnimateIn>
            <span className="text-sm font-medium uppercase tracking-wider text-accent">
              {project.category}{project.isConcept && " · Concept Project"}
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-6 text-xl text-text-secondary max-w-2xl leading-relaxed">
              {project.shortDescription}
            </p>
          </AnimateIn>
        </Container>
      </section>

      {/* Cover */}
      <section className="pb-16">
        <Container>
          <AnimateIn>
            <div className="aspect-[16/9] rounded-lg border border-border flex items-center justify-center overflow-hidden relative">
              {project.coverImage ? (
                <img 
                  src={project.coverImage}
                  alt={`${project.title} cover`} 
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              ) : (
                <ProjectImagePlaceholder project={project} />
              )}
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* Details */}
      <section className="py-16 border-t border-border">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {project.challenge && (
              <AnimateIn>
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">Challenge</h2>
                  <p className="text-text-secondary leading-relaxed text-lg">{project.challenge}</p>
                </div>
              </AnimateIn>
            )}
            {project.solution && (
              <AnimateIn delay={100}>
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">Solution</h2>
                  <p className="text-text-secondary leading-relaxed text-lg">{project.solution}</p>
                </div>
              </AnimateIn>
            )}
            {project.outcome && (
              <AnimateIn delay={200}>
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">Outcome</h2>
                  <p className="text-text-secondary leading-relaxed text-lg">{project.outcome}</p>
                </div>
              </AnimateIn>
            )}
            
            {project.isConcept && (
              <AnimateIn delay={300}>
                <div className="mt-8 p-6 rounded-xl border border-border bg-surface/50 text-center">
                  <p className="text-sm text-text-muted leading-relaxed">
                    This is a concept project created to demonstrate our design and development approach. It does not represent actual client work.
                  </p>
                </div>
              </AnimateIn>
            )}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 border-t border-border">
        <Container>
          <div className="text-center">
            <AnimateIn>
              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Like what you see?
              </h2>
              <p className="mt-4 text-lg text-text-secondary">Let&apos;s build something great together.</p>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className="mt-8 flex justify-center gap-4">
                <Button href="/contact" size="lg">Start a Project</Button>
                <Button href="/work" variant="secondary">More Work</Button>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>
    </>
  );
}
