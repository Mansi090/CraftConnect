import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CATEGORIES } from "../mock-data";

export function CategoryGrid() {
  return (
    <section className="py-20">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Browse by craft
            </h2>
            <p className="text-muted mt-2 text-sm">
              Every category is made to order.
            </p>
          </div>
          <Link
            href="/categories"
            className="text-accent shrink-0 text-sm font-medium hover:underline"
          >
            All categories →
          </Link>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {CATEGORIES.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/providers?category=${category.slug}`}
                className="group border-border bg-card hover:border-accent/40 block rounded-xl border p-5 transition-colors"
              >
                <p className="group-hover:text-accent font-medium">
                  {category.name}
                </p>
                <p className="text-muted mt-1 text-xs">{category.blurb}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
