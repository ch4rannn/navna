import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "NAVNA's privacy policy — how we handle your data.",
  alternates: { canonical: "https://navna.online/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="py-10 lg:py-12">
      <Container>
        <div className="max-w-3xl mx-auto prose-invert">
          <h1 className="text-4xl font-bold tracking-tight text-text">Privacy Policy</h1>
          <p className="mt-2 text-sm text-text-muted">Last updated: September 2026</p>

          <div className="mt-10 space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-text mb-3">Overview</h2>
              <p>NAVNA (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website at navna.online.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text mb-3">Information We Collect</h2>
              <p>We collect information you voluntarily provide through our contact form, including:</p>
              <ul className="mt-3 list-disc list-inside space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Company name (optional)</li>
                <li>Project details and message content</li>
              </ul>
              <p className="mt-3">We use privacy-focused analytics that do not use cookies and do not collect personally identifiable information.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text mb-3">How We Use Information</h2>
              <p>We use the information you provide solely to:</p>
              <ul className="mt-3 list-disc list-inside space-y-1">
                <li>Respond to your project inquiry</li>
                <li>Communicate about potential projects</li>
                <li>Improve our website and services</li>
              </ul>
              <p className="mt-3">We do not sell, trade, or share your personal information with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text mb-3">Data Security</h2>
              <p>We implement reasonable security measures to protect your information. Our website is served over HTTPS, and we follow industry best practices for data handling.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text mb-3">Cookies</h2>
              <p>Our website does not use tracking cookies. We may use essential cookies for basic website functionality.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text mb-3">Third-Party Services</h2>
              <p>Our website may use the following third-party services:</p>
              <ul className="mt-3 list-disc list-inside space-y-1">
                <li>Cloudflare — for hosting and CDN delivery</li>
                <li>Privacy-focused analytics — for anonymous website usage statistics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text mb-3">Your Rights</h2>
              <p>You have the right to request access to, correction of, or deletion of any personal information we hold about you. Contact us to exercise these rights.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text mb-3">Changes</h2>
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text mb-3">Contact</h2>
              <p>If you have questions about this Privacy Policy, please <a href="/contact" className="text-accent hover:underline">contact us</a>.</p>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}
