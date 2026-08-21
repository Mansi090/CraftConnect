import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProviderList, searchProviders } from "@/features/providers";

export const metadata: Metadata = {
  title: "Browse providers",
  description: "Verified artisans and manufacturers taking custom orders.",
};

export default async function ProvidersPage({
  searchParams,
}: PageProps<"/providers">) {
  const { q } = await searchParams;
  const query = typeof q === "string" ? q : undefined;
  const results = searchProviders(query);

  return (
    <main>
      <Container className="py-14">
        <h1 className="text-3xl font-semibold tracking-tight">Providers</h1>

        <form
          action="/providers"
          className="mt-6 flex flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="provider-search" className="sr-only">
            Search providers
          </label>
          <input
            id="provider-search"
            name="q"
            type="search"
            defaultValue={query ?? ""}
            placeholder="Search by name, craft, city or speciality"
            className="border-border bg-card placeholder:text-muted focus-visible:ring-accent flex-1 rounded-lg border px-4 py-2.5 text-sm outline-none focus-visible:ring-2"
          />
          <button
            type="submit"
            className="bg-accent text-accent-foreground rounded-lg px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
          >
            Search
          </button>
        </form>

        <p className="text-muted mt-6 text-sm" aria-live="polite">
          {results.length} {results.length === 1 ? "provider" : "providers"}
          {query ? ` matching “${query}”` : " taking custom orders"}
        </p>

        <div className="mt-6">
          <ProviderList
            providers={results}
            emptyMessage={
              query
                ? `No providers matched “${query}”. Try a craft, city or material.`
                : "No providers yet."
            }
          />
        </div>
      </Container>
    </main>
  );
}
