import { providers, type Provider } from "./mock-data";

export function searchProviders(query: string | undefined): Provider[] {
  const q = query?.trim().toLowerCase();

  if (!q) return providers;

  return providers.filter(
    (provider) =>
      provider.name.toLowerCase().includes(q) ||
      provider.craft.toLowerCase().includes(q) ||
      provider.city.toLowerCase().includes(q) ||
      provider.state.toLowerCase().includes(q) ||
      provider.specialities.some((s) => s.toLowerCase().includes(q)),
  );
}
