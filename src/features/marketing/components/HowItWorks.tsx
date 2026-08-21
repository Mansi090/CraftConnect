import { Container } from "@/components/ui/Container";
import { STEPS } from "../mock-data";

export function HowItWorks() {
  return (
    <section className="border-border bg-card/40 border-y py-20">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>

        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <li key={step.step}>
              <p className="text-accent font-mono text-sm">{step.step}</p>
              <h3 className="mt-3 text-lg font-medium">{step.title}</h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
