import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { projects } from "@/data/projects";
import { ProjectImagePlaceholder } from "@/components/ui/ProjectImagePlaceholder";

export const metadata: Metadata = {
  title: "Our Work | NAVNA — Digital Growth Agency",
  description:
    "Real client projects, digital experiments, and websites we've built at NAVNA.",
  alternates: { canonical: "https://navna.online/work" },
};

export default function WorkPage() {
  const clientProjects = projects.filter(p => p.type === "client");
  const featuredClientProject = clientProjects[0];
  const otherClientProjects = clientProjects.slice(1);
  const demoProjects = projects.filter(p => p.type !== "client");

  return (
    <>
      {/* HEADER SECTION */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <Container className="relative z-10">
          <AnimateIn>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-text leading-[1.05]">
              Our Work
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed">
              Real client projects, digital experiments, and websites we&apos;ve built to help businesses grow.
            </p>
          </AnimateIn>
        </Container>
      </section>

      {/* CLIENT PROJECTS */}
      <section className="pb-20 lg:pb-32 relative">
        <Container>
          <AnimateIn>
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-text">Client Projects</h2>
              <div className="h-px flex-1 bg-border/60"></div>
            </div>
          </AnimateIn>
          
          <div className="space-y-12 lg:space-y-16">
            {/* Featured Project (StructZone) */}
            {featuredClientProject && (
              <AnimateIn>
                <a
                  href={featuredClientProject.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-2xl border border-border bg-surface hover:border-accent transition-colors duration-300"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/3 aspect-[4/3] lg:aspect-auto relative border-b lg:border-b-0 lg:border-r border-border bg-bg overflow-hidden flex flex-col">
                      {/* Browser mock top bar */}
                      <div className="h-10 border-b border-border bg-surface flex items-center px-4 gap-2 shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-border" />
                        <div className="w-2.5 h-2.5 rounded-full bg-border" />
                        <div className="w-2.5 h-2.5 rounded-full bg-border" />
                        <div className="ml-4 flex-1 h-6 rounded bg-bg border border-border/50 max-w-[200px]" />
                      </div>
                      
                      <div className="flex-1 relative overflow-hidden">
                        {featuredClientProject.coverImage ? (
                          <img 
                            src={featuredClientProject.coverImage}
                            alt={`${featuredClientProject.title} preview`} 
                            className="w-full h-full object-cover object-top opacity-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                            loading="lazy"
                          />
                        ) : (
                          <ProjectImagePlaceholder project={featuredClientProject} />
                        )}
                      </div>
                    </div>
                    
                    <div className="lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-xs mb-6">
                        <span className="font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">Client Project</span>
                        <span className="text-text-muted uppercase tracking-wider font-medium">{featuredClientProject.category}</span>
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-text mb-4 group-hover:text-accent transition-colors duration-300">
                        {featuredClientProject.title}
                      </h3>
                      <p className="text-lg text-text-secondary leading-relaxed mb-8">
                        {featuredClientProject.shortDescription}
                      </p>
                      
                      <div className="inline-flex items-center gap-2 text-accent font-semibold tracking-wide uppercase text-sm">
                        View Live Site
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                      </div>
                    </div>
                  </div>
                </a>
              </AnimateIn>
            )}

            {/* Other Client Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherClientProjects.map((project, i) => (
                <AnimateIn key={project.slug} delay={(i + 1) * 100}>
                  <a
                    href={project.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col h-full rounded-2xl border border-border bg-surface hover:border-accent transition-colors duration-300 overflow-hidden"
                  >
                    <div className="aspect-[16/10] bg-bg relative overflow-hidden border-b border-border flex flex-col">
                      <div className="h-8 border-b border-border bg-surface flex items-center px-4 gap-1.5 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-border" />
                        <div className="w-2 h-2 rounded-full bg-border" />
                        <div className="w-2 h-2 rounded-full bg-border" />
                      </div>
                      <div className="flex-1 relative overflow-hidden">
                        {project.coverImage ? (
                          <img 
                            src={project.coverImage}
                            alt={`${project.title} preview`} 
                            className="w-full h-full object-cover object-top opacity-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                            loading="lazy"
                          />
                        ) : (
                          <ProjectImagePlaceholder project={project} />
                        )}
                      </div>
                    </div>
                    
                    <div className="p-6 sm:p-8 flex-1 flex flex-col">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs mb-4">
                        <span className="font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-0.5 rounded">Client Project</span>
                        <span className="text-text-muted uppercase tracking-wider font-medium">{project.category}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                      <p className="text-text-secondary leading-relaxed mb-6 flex-1">{project.shortDescription}</p>
                      
                      <div className="inline-flex items-center gap-2 text-accent font-semibold tracking-wide uppercase text-sm mt-auto">
                        View Live Site
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                      </div>
                    </div>
                  </a>
                </AnimateIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* DEMOS & EXPERIMENTS */}
      <section className="py-12 lg:py-16 border-t border-border bg-surface-2/20 relative">
        <Container>
          <AnimateIn>
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-text mb-4">Demos & Experiments</h2>
              <p className="text-lg text-text-secondary">
                Independent concepts and digital experiments built to explore ideas, interfaces, and products.
              </p>
            </div>
          </AnimateIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {demoProjects.map((project, i) => (
              <AnimateIn key={project.slug} delay={i * 50}>
                <a
                  href={project.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full rounded-xl border border-border bg-surface hover:border-border-hover transition-colors duration-300 overflow-hidden"
                >
                  <div className="aspect-[4/3] bg-bg relative overflow-hidden border-b border-border">
                    {project.coverImage ? (
                      <img 
                        src={project.coverImage}
                        alt={`${project.title} preview`} 
                        className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    ) : (
                      <ProjectImagePlaceholder project={project} />
                    )}
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] mb-3">
                      <span className="font-bold uppercase tracking-widest text-text-muted bg-surface-2 px-2 py-0.5 rounded border border-border">
                        {project.type === "demo" ? "Demo" : "Experiment"}
                      </span>
                      <span className="text-text-muted font-medium uppercase tracking-wider">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">{project.shortDescription}</p>
                    
                    <div className="inline-flex items-center gap-1.5 text-text-muted font-medium text-sm mt-auto group-hover:text-text transition-colors">
                      View Project
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </div>
                  </div>
                </a>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-12 lg:py-16 border-t border-border bg-bg">
        <Container className="relative z-10">
          <div className="text-center">
            <AnimateIn>
              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
                Have a project in mind?
              </h2>
            </AnimateIn>
            <AnimateIn delay={50}>
              <p className="mt-6 text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
                Tell us what you&apos;re working on and we&apos;ll help you figure out the right next step.
              </p>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className="mt-10">
                <Button href="/contact" size="lg">Start a Project</Button>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>
    </>
  );
}
