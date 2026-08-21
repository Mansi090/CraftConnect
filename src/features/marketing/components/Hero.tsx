import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="border-border relative overflow-hidden border-b">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(60%_100%_at_50%_100%,var(--accent)_0%,transparent_70%)] opacity-15"
      />

      <Container className="relative py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-accent text-sm font-medium">
            Made to order, not mass produced
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Get anything custom made by the people who actually make it.
          </h1>

          <p className="text-muted mt-5 text-lg leading-relaxed">
            Describe what you want. Verified artisans and small manufacturers
            send you quotations with real timelines. Compare, choose, and follow
            it through production.
          </p>

          <form
            action="/providers"
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="hero-search" className="sr-only">
              Search makers by craft, city or name
            </label>
            <input
              id="hero-search"
              name="q"
              type="search"
              placeholder="Try “handloom”, “leather bags”, “Jaipur”…"
              className="border-border bg-card placeholder:text-muted focus-visible:ring-accent flex-1 rounded-lg border px-4 py-3 text-sm outline-none focus-visible:ring-2"
            />
            <button
              type="submit"
              className="bg-accent text-accent-foreground rounded-lg px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90"
            >
              Find makers
            </button>
          </form>

          <p className="text-muted mt-4 text-sm">
            Or{" "}
            <Link
              href="/requests/new"
              className="text-foreground decoration-accent font-medium underline decoration-2 underline-offset-4"
            >
              post a design request
            </Link>{" "}
            and let makers come to you.
          </p>
        </div>
      </Container>
    </section>
  );
}
