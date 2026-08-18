import type { Provider } from "../mock-data";
import { ProviderCard } from "./ProviderCard";

type ProviderListProps = {
  providers: Provider[];
};

export function ProviderList({ providers }: ProviderListProps) {
  if (providers.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-black/60 dark:text-white/60">
        No providers found.
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {providers.map((provider) => (
        <li key={provider.id}>
          <ProviderCard provider={provider} />
        </li>
      ))}
    </ul>
  );
}
