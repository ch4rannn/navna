import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { founders } from "@/data/founders";
import { generatePersonSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About NAVNA | Digital Growth Agency — Team, Mission & Story",
  description:
    "Learn about NAVNA — a digital growth agency founded by Chiranjivi Sah and Taha. NAVNA helps businesses build stronger digital presence through web design, SEO, Google Business Profile optimization, and social media management.",
  keywords: [
    "about NAVNA",
    "NAVNA agency",
    "NAVNA team",
    "NAVNA founders",
    "Chiranjivi Sah",
    "Taha",
    "digital growth agency team",
    "navna digital agency",
    "who is NAVNA",
  ],
  alternates: { canonical: "https://navna.online/about" },
  openGraph: {
    title: "About NAVNA — Digital Growth Agency",
    description: "Meet the NAVNA team. A digital growth agency founded by Chiranjivi Sah and Taha, helping businesses build and grow their online presence.",
    url: "https://navna.online/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {founders.map((founder) => (
        <script
          key={founder.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generatePersonSchema(
                founder.name,
                founder.role,
                founder.linkedin,
                founder.skills
              )
            ),
          }}
        />
      ))}

      {/* HERO & STORY */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <Container className="relative z-10">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
              About NAVNA
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-text leading-[1.05] max-w-4xl">
              A digital growth agency built for businesses.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed">
              We help businesses build, grow, and manage their digital presence through practical strategy, design, and continuous optimization.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/contact" size="lg">Start a Project</Button>
              <Button href="/work" variant="secondary" size="lg">View Our Work</Button>
            </div>
          </AnimateIn>
          
          {/* Who We Are / Story */}
          <div className="mt-20 lg:mt-32 max-w-[65ch]">
            <AnimateIn delay={100}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-6">Why We Exist</h2>
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>
                  NAVNA was started with a straightforward belief: businesses deserve an online presence that is well-designed, easy to find, and actually drives results.
                </p>
                <p>
                  Too many websites are built with outdated tools and no strategic thinking. Too many agencies overpromise, underdeliver, and overcomplicate the process. We wanted to offer a practical, honest alternative.
                </p>
                <p>
                  We focus on the things that matter—building a solid foundation, ensuring you get found on Google, reaching relevant audiences, and managing your ongoing digital presence so you can focus on your business.
                </p>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* MISSION & VISION */}
      <section className="py-12 lg:py-16 border-t border-border bg-surface/30">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <AnimateIn>
              <div className="flex flex-col h-full">
                <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">Our Mission</h2>
                <p className="text-2xl sm:text-3xl font-semibold text-text leading-tight">
                  Help businesses build a stronger digital presence through practical strategy, design, search visibility, and consistent online management.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className="flex flex-col h-full">
                <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">Our Vision</h2>
                <p className="text-2xl sm:text-3xl font-semibold text-text leading-tight text-text-secondary">
                  Become the digital growth partner businesses trust to build, improve, and scale their online presence long-term.
                </p>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* VALUES */}
      <section className="py-12 lg:py-16 border-t border-border">
        <Container>
          <AnimateIn>
            <div className="max-w-2xl mb-16">
              <SectionHeading overline="Our Values" title="What we believe" />
            </div>
          </AnimateIn>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            {/* Featured Value */}
            <AnimateIn className="md:col-span-12 lg:col-span-6" delay={50}>
              <div className="group h-full p-8 sm:p-12 rounded-3xl border border-border bg-white shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 relative overflow-hidden flex flex-col justify-end min-h-[380px]">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl translate-x-1/4 -translate-y-1/4" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl -translate-x-1/4 translate-y-1/4" />
                </div>
                
                <div className="mb-auto relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 shadow-sm border border-blue-100">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-text mb-4">Clarity</h3>
                  <p className="text-lg text-text-secondary leading-relaxed max-w-md">
                    We keep recommendations and communication straightforward. No jargon, no smoke and mirrors—just clear strategies that make sense for your business.
                  </p>
                </div>
              </div>
            </AnimateIn>

            <div className="md:col-span-12 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              <AnimateIn delay={100}>
                <div className="group h-full p-6 sm:p-8 rounded-2xl border border-border bg-white shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none" />
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 shadow-sm border border-emerald-100 relative z-10">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-text mb-2 relative z-10">Practicality</h3>
                  <p className="text-sm text-text-secondary leading-relaxed relative z-10">
                    We focus on work that serves a real business purpose and drives measurable outcomes.
                  </p>
                </div>
              </AnimateIn>
              
              <AnimateIn delay={150}>
                <div className="group h-full p-6 sm:p-8 rounded-2xl border border-border bg-white shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none" />
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5 shadow-sm border border-purple-100 relative z-10">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-text mb-2 relative z-10">Craft</h3>
                  <p className="text-sm text-text-secondary leading-relaxed relative z-10">
                    We care about the details—design, performance, and copy—that shape how a business is experienced online.
                  </p>
                </div>
              </AnimateIn>

              <AnimateIn delay={200}>
                <div className="group h-full p-6 sm:p-8 rounded-2xl border border-border bg-white shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none" />
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 shadow-sm border border-amber-100 relative z-10">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-text mb-2 relative z-10">Honesty</h3>
                  <p className="text-sm text-text-secondary leading-relaxed relative z-10">
                    We don&apos;t use inflated claims or promise metrics we cannot control. We tell you what works.
                  </p>
                </div>
              </AnimateIn>

              <AnimateIn delay={250}>
                <div className="group h-full p-6 sm:p-8 rounded-2xl border border-border bg-white shadow-sm hover:shadow-md hover:border-rose-200 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none" />
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-5 shadow-sm border border-rose-100 relative z-10">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-text mb-2 relative z-10">Partnership</h3>
                  <p className="text-sm text-text-secondary leading-relaxed relative z-10">
                    We work with clients directly, keeping communication simple and relationships long-term.
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICE CONNECTION */}
      <section className="py-12 lg:py-16 border-y border-border bg-surface-2/40">
        <Container>
          <AnimateIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-text-muted mb-4">What We Help With</h2>
                <p className="text-2xl font-bold text-text">Good digital work should make business easier to find, understand, and choose.</p>
              </div>
              <Button href="/services" variant="secondary" className="shrink-0">View All Services</Button>
            </div>
          </AnimateIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimateIn delay={50}>
              <div className="p-6 border-l-2 border-border hover:border-accent transition-colors">
                <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">Build</span>
                <h3 className="text-lg font-bold text-text">Web Design & Development</h3>
              </div>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className="p-6 border-l-2 border-border hover:border-accent transition-colors">
                <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">Get Found</span>
                <h3 className="text-lg font-bold text-text">Local SEO & Search Visibility</h3>
              </div>
            </AnimateIn>
            <AnimateIn delay={150}>
              <div className="p-6 border-l-2 border-border hover:border-accent transition-colors">
                <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">Reach</span>
                <h3 className="text-lg font-bold text-text">Meta Ads Management</h3>
              </div>
            </AnimateIn>
            <AnimateIn delay={200}>
              <div className="p-6 border-l-2 border-border hover:border-accent transition-colors">
                <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">Stay Visible</span>
                <h3 className="text-lg font-bold text-text">Social Media Management</h3>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* FOUNDERS */}
      <section className="py-12 lg:py-16">
        <Container>
          <AnimateIn>
            <div className="max-w-2xl mb-16">
              <SectionHeading 
                overline="The Team" 
                title="The people behind NAVNA" 
                description="Two builders focused on helping businesses make better use of the web."
              />
            </div>
          </AnimateIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {founders.map((founder, i) => (
              <AnimateIn key={founder.name} delay={i * 100}>
                <div className="p-8 sm:p-10 rounded-2xl border border-border bg-surface flex flex-col h-full hover:border-border-hover transition-colors">
                  <div className="flex items-center gap-6 mb-8">
                    {founder.image ? (
                      <img 
                        src={founder.image} 
                        alt={founder.name} 
                        className="w-20 h-20 shrink-0 rounded-full object-cover border border-border shadow-sm"
                      />
                    ) : (
                      <div className="w-20 h-20 shrink-0 rounded-full bg-surface-2 flex items-center justify-center text-2xl font-bold text-text-secondary border border-border shadow-sm">
                        {founder.initials}
                      </div>
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-text">{founder.name}</h3>
                      <p className="text-accent font-medium mt-1">{founder.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-text-secondary leading-relaxed flex-1 mb-8">
                    {founder.bio}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-border/50">
                    <div className="mb-6">
                      <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-3">Core Focus</p>
                      <div className="flex flex-wrap gap-2">
                        {founder.skills.map((skill) => (
                          <span key={skill} className="text-xs px-3 py-1.5 rounded-full bg-surface-2 text-text-secondary border border-border/60 font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4">
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-text-muted hover:text-accent transition-colors"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                      
                      {founder.whatsapp && (
                        <a
                          href={founder.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-text-muted hover:text-emerald-600 transition-colors"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          WhatsApp
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* TECHNOLOGY (Muted/Secondary) */}
      <section className="py-16 border-t border-border">
        <Container>
          <AnimateIn>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted shrink-0">Technology we use</h2>
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Figma", "Cloudflare"].map((tech) => (
                  <span key={tech} className="text-xs lg:text-sm text-text-muted">{tech}</span>
                ))}
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-12 lg:py-16 border-t border-border bg-bg overflow-hidden">
        <Container className="relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
                Ready to improve your digital presence?
              </h2>
            </AnimateIn>
            <AnimateIn delay={50}>
              <p className="mt-6 text-lg text-text-secondary leading-relaxed">
                Tell us where your business is today and what you&apos;re trying to achieve. Let&apos;s map out the right next step.
              </p>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
                <Button href="/contact" size="lg">Start a Project</Button>
                <Button href="/work" variant="secondary" size="lg">View Our Work</Button>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>
    </>
  );
}
