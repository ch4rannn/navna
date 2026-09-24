import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ContactForm } from "@/components/contact/ContactForm";
import { founders } from "@/data/founders";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Start a Project | Contact NAVNA — Digital Growth Agency",
  description:
    "Ready to grow your business online? Contact NAVNA to start your project. Tell us about your business and goals — we'll help you build the right digital solution. Reach NAVNA via form, WhatsApp, or LinkedIn.",
  keywords: [
    "contact NAVNA",
    "navna contact",
    "start a project NAVNA",
    "hire NAVNA",
    "navna freelance",
    "navna freelances",
    "digital agency contact",
  ],
  alternates: { canonical: "https://navna.online/contact" },
  openGraph: {
    title: "Contact NAVNA — Start Your Project",
    description: "Tell us about your business. NAVNA will help you build the right digital solution.",
    url: "https://navna.online/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-slate-50 min-h-[calc(100vh-80px)]">
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <Container className="relative z-10 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start max-w-6xl mx-auto w-full">
          {/* Left Column: Text & WhatsApp */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <AnimateIn>
              <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl mb-6">
                Let&apos;s build something great.
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-10">
                Tell us about your project and we&apos;ll get back to you with how we can help. Need a faster response? Reach out directly via WhatsApp.
              </p>
            </AnimateIn>

            <AnimateIn delay={100}>
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-2">Direct Contact</h3>
                {founders.map((founder) => (
                  <a
                    key={founder.name}
                    href={founder.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white border border-border rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      {founder.image ? (
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm relative">
                          <Image
                            src={founder.image}
                            alt={founder.name}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-surface-2 flex items-center justify-center text-sm font-bold text-text-secondary">
                          {founder.initials}
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-text group-hover:text-emerald-600 transition-colors">Chat with {founder.name}</p>
                        <p className="text-sm text-text-secondary">{founder.role}</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <AnimateIn delay={200}>
              <div className="bg-white p-6 sm:p-10 rounded-3xl border border-border shadow-card">
                <ContactForm />
              </div>
            </AnimateIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
