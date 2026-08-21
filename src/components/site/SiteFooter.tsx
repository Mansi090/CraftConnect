import Link from "next/link";
import { Container } from "@/components/ui/Container";

const FOOTER_SECTIONS = [
  {
    title: "Marketplace",
    links: [
      { href: "/providers", label: "Browse providers" },
      { href: "/requests/new", label: "Request a design" },
      { href: "/categories", label: "Categories" },
    ],
  },
  {
    title: "For makers",
    links: [
      { href: "/become-a-provider", label: "Start selling" },
      { href: "/verification", label: "Get verified" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-border mt-24 border-t">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-semibold tracking-tight">
              Craft<span className="text-accent">Connect</span>
            </p>
            <p className="text-muted mt-3 max-w-xs text-sm leading-relaxed">
              Custom-made goods, direct from the makers who build them.
            </p>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="text-sm font-medium">{section.title}</h2>
              <ul className="mt-3 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted hover:text-foreground text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="border-border text-muted mt-12 border-t pt-6 text-xs">
          © {new Date().getFullYear()} CraftConnect. A learning project.
        </p>
      </Container>
    </footer>
  );
}
