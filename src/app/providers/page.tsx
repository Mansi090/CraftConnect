import type { Metadata } from "next";
import { ProviderList } from "@/features/providers/components/ProviderList";
import { providers } from "@/features/providers/mock-data";

export const metadata: Metadata = {
  title: "Providers | CraftConnect",
  description: "Browse artisans and manufacturers taking custom orders.",
};

export default function ProvidersPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Providers</h1>

      <p className="mt-1 text-sm text-black/60 dark:text-white/60">
        {providers.length} artisans taking custom orders
      </p>

      <div className="mt-8">
        <ProviderList providers={providers} />
      </div>
    </main>
  );
}
