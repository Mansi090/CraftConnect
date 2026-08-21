import type { Provider } from "../mock-data";
import { ProviderCard } from "./ProviderCard";

type ProviderListProps = {
  providers: Provider[];
  emptyMessage?: string;
};

export function ProviderList({
  providers,
  emptyMessage = "No providers matched your search.",
}: ProviderListProps) {
  if (providers.length === 0) {
    return (
      <div className="border-border rounded-xl border border-dashed py-16 text-center">
        <p className="text-muted text-sm">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {providers.map((provider) => (
        <li key={provider.id}>
          <ProviderCard provider={provider} />
        </li>
      ))}
    </ul>
  );
}
