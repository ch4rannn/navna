import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="text-center">
          <p className="text-7xl font-bold text-surface-2 sm:text-8xl">404</p>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-md mx-auto">
            Looks like this page took a wrong turn. Let&apos;s get you back on track.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button href="/" size="lg">
              Back Home
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
