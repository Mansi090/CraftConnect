import type { Provider } from "../mock-data";

type ProviderCardProps = {
  provider: Provider;
};

export function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <article className="rounded-lg border border-black/10 p-4 transition hover:shadow-md dark:border-white/15">
      <h3 className="font-semibold">{provider.name}</h3>

      <p className="mt-1 text-sm text-black/60 dark:text-white/60">
        {provider.craft} · {provider.city}
      </p>

      <p className="mt-3 text-sm">
        <span aria-hidden="true">★</span> {provider.rating.toFixed(1)}
        <span className="sr-only">out of 5 stars</span>
      </p>
    </article>
  );
}
