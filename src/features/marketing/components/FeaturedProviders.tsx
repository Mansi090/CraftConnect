import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ProviderList, providers } from "@/features/providers";

export function FeaturedProviders() {
  const featured = [...providers]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="py-20">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Featured makers
            </h2>
            <p className="text-muted mt-2 text-sm">
              Highest rated across all categories.
            </p>
          </div>
          <Link
            href="/providers"
            className="text-accent shrink-0 text-sm font-medium hover:underline"
          >
            See all →
          </Link>
        </div>

        <div className="mt-8">
          <ProviderList providers={featured} />
        </div>
      </Container>
    </section>
  );
}
