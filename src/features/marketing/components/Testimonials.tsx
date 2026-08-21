import { Container } from "@/components/ui/Container";
import { TESTIMONIALS } from "../mock-data";

export function Testimonials() {
  return (
    <section className="border-border border-t py-20">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight">
          What people are making
        </h2>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <li
              key={testimonial.name}
              className="border-border bg-card rounded-xl border p-6"
            >
              <blockquote className="text-sm leading-relaxed">
                “{testimonial.quote}”
              </blockquote>
              <footer className="mt-4 text-sm">
                <span className="font-medium">{testimonial.name}</span>
                <span className="text-muted"> · {testimonial.role}</span>
              </footer>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
