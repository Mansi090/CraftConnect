import Link from "next/link";
import { Container } from "@/components/ui/Container";

const NAV_LINKS = [
  { href: "/providers", label: "Browse providers" },
  { href: "/requests/new", label: "Request a design" },
  { href: "/become-a-provider", label: "Sell on CraftConnect" },
];

export function SiteHeader() {
  return (
    <header className="border-border bg-background/85 sticky top-0 z-40 border-b backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Craft<span className="text-accent">Connect</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted hover:text-foreground text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="text-muted hover:text-foreground rounded-lg px-3 py-2 text-sm font-medium transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="bg-accent text-accent-foreground rounded-lg px-3.5 py-2 text-sm font-medium transition-opacity hover:opacity-90"
          >
            Sign up
          </Link>
        </div>
      </Container>
    </header>
  );
}
