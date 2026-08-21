import { Container } from "@/components/ui/Container";
import { STATS } from "../mock-data";

export function Stats() {
  return (
    <section className="py-20">
      <Container>
        <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="text-muted text-sm">{stat.label}</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
