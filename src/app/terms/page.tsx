import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "NAVNA's terms of service for website usage.",
  alternates: { canonical: "https://navna.online/terms" },
};

export default function TermsPage() {
  return (
    <section className="py-10 lg:py-12">
      <Container>
        <div className="max-w-3xl mx-auto prose-invert">
          <h1 className="text-4xl font-bold tracking-tight text-text">Terms of Service</h1>
          <p className="mt-2 text-sm text-text-muted">Last updated: September 2026</p>

          <div className="mt-10 space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-text mb-3">Agreement</h2>
              <p>By accessing and using navna.online, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text mb-3">Services</h2>
              <p>NAVNA provides digital design and development services. The specific scope, deliverables, timeline, and pricing for any project will be agreed upon separately before work begins.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text mb-3">Intellectual Property</h2>
              <p>All content on this website — including text, design, code, logos, and images — is the property of NAVNA unless otherwise stated. You may not reproduce, distribute, or use our content without prior written permission.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text mb-3">Website Use</h2>
              <p>You agree to use this website for lawful purposes only. You may not attempt to:</p>
              <ul className="mt-3 list-disc list-inside space-y-1">
                <li>Interfere with or disrupt the website</li>
                <li>Submit false or misleading information</li>
                <li>Attempt unauthorized access to any part of the website</li>
                <li>Use automated tools to scrape or extract content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text mb-3">Limitation of Liability</h2>
              <p>NAVNA provides this website &quot;as is&quot; without warranties of any kind. We are not liable for any damages arising from the use of this website.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text mb-3">External Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the content or practices of these external sites.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text mb-3">Changes</h2>
              <p>We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated date.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text mb-3">Contact</h2>
              <p>For questions about these terms, please <a href="/contact" className="text-accent hover:underline">contact us</a>.</p>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}
