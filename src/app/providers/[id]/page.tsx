import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { StarRating } from "@/components/ui/StarRating";
import { findProviderById } from "@/features/providers";

export async function generateMetadata({
  params,
}: PageProps<"/providers/[id]">): Promise<Metadata> {
  const { id } = await params;
  const provider = findProviderById(id);

  if (!provider) return { title: "Provider not found" };

  return {
    title: provider.name,
    description: provider.tagline,
  };
}

export default async function ProviderPage({
  params,
}: PageProps<"/providers/[id]">) {
  const { id } = await params;
  const provider = findProviderById(id);

  if (!provider) notFound();

  return (
    <main>
      <div className="border-border bg-card/40 border-b">
        <Container className="py-12">
          <Link
            href="/providers"
            className="text-muted hover:text-foreground text-sm transition-colors"
          >
            ← All providers
          </Link>

          <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-semibold tracking-tight">
                  {provider.name}
                </h1>
                {provider.verified && <Badge tone="accent">Verified</Badge>}
              </div>

              <p className="text-muted mt-2">
                {provider.craft} · {provider.city}, {provider.state}
              </p>

              <div className="mt-4 flex items-center gap-4">
                <StarRating
                  rating={provider.rating}
                  reviewCount={provider.reviewCount}
                />
                <span className="text-muted text-sm">
                  {provider.yearsActive} years making
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <Link
                href={`/requests/new?provider=${provider.id}`}
                className="bg-accent text-accent-foreground rounded-lg px-4 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
              >
                Request a design
              </Link>
              <Link
                href={`/messages/new?provider=${provider.id}`}
                className="border-border hover:border-accent/40 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors"
              >
                Message
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Container className="grid gap-10 py-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-lg font-medium">About</h2>
          <p className="text-muted mt-3 leading-relaxed">{provider.tagline}</p>

          <h2 className="mt-10 text-lg font-medium">Specialities</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {provider.specialities.map((speciality) => (
              <li key={speciality}>
                <Badge>{speciality}</Badge>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-lg font-medium">Portfolio</h2>
          <div className="border-border mt-3 rounded-xl border border-dashed py-16 text-center">
            <p className="text-muted text-sm">
              Portfolio uploads arrive with provider dashboards.
            </p>
          </div>
        </div>

        <aside className="border-border bg-card rounded-xl border p-6">
          <h2 className="text-sm font-medium">At a glance</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Typical reply</dt>
              <dd>~{provider.respondsInHours} hours</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Based in</dt>
              <dd className="text-right">
                {provider.city}, {provider.state}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Experience</dt>
              <dd>{provider.yearsActive} years</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Reviews</dt>
              <dd>{provider.reviewCount}</dd>
            </div>
          </dl>
        </aside>
      </Container>
    </main>
  );
}
