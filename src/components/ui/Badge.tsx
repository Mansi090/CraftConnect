import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "neutral" | "accent";
};

export function Badge({ children, tone = "neutral" }: BadgeProps) {
  const tones = {
    neutral: "border-border text-muted",
    accent: "border-accent/30 bg-accent/10 text-accent",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
