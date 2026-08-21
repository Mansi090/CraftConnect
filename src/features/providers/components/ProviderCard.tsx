import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { StarRating } from "@/components/ui/StarRating";
import type { Provider } from "../mock-data";

type ProviderCardProps = {
  provider: Provider;
};

export function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <article className="border-border bg-card hover:border-accent/40 flex h-full flex-col rounded-xl border p-5 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-medium">
            <Link
              href={`/providers/${provider.id}`}
              className="hover:text-accent outline-none focus-visible:underline"
            >
              {provider.name}
            </Link>
          </h3>
          <p className="text-muted mt-0.5 text-sm">
            {provider.craft} · {provider.city}
          </p>
        </div>

        {provider.verified && <Badge tone="accent">Verified</Badge>}
      </div>

      <p className="text-muted mt-3 line-clamp-2 text-sm leading-relaxed">
        {provider.tagline}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {provider.specialities.slice(0, 3).map((speciality) => (
          <li key={speciality}>
            <Badge>{speciality}</Badge>
          </li>
        ))}
      </ul>

      <div className="border-border mt-5 flex items-center justify-between border-t pt-4">
        <StarRating
          rating={provider.rating}
          reviewCount={provider.reviewCount}
        />
        <p className="text-muted text-xs">
          Replies in ~{provider.respondsInHours}h
        </p>
      </div>
    </article>
  );
}
