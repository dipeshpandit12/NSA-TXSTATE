import Link from "next/link";
import { nav, site, emergencyContacts } from "@/lib/site";
import { SocialLinks } from "./SocialLinks";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface-muted">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="flex items-center gap-2 text-lg font-bold text-primary">
              <span aria-hidden>🐾</span> {site.shortName} @ Texas State
            </p>
            <p className="mt-2 max-w-xs text-sm text-muted">{site.tagline}</p>
            <SocialLinks className="mt-4" />
          </div>

          {/* Community links */}
          <nav aria-label="Community">
            <p className="text-sm font-semibold text-foreground">🏠 Community</p>
            <ul className="mt-3 space-y-2">
              {nav.community.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded text-sm text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resource links */}
          <nav aria-label="Survive & Thrive">
            <p className="text-sm font-semibold text-foreground">🧭 Survive & Thrive</p>
            <ul className="mt-3 space-y-2">
              {nav.resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded text-sm text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Emergency + contact */}
          <div>
            <p className="text-sm font-semibold text-foreground">📌 Emergency contacts</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {emergencyContacts.map((c) => (
                <li key={c.label}>
                  {c.label}:{" "}
                  <a
                    href={c.href}
                    className="rounded font-medium text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {c.value}
                  </a>
                </li>
              ))}
              <li>
                NSA email:{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="rounded font-medium text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-sm text-muted">
          Go Bobcats! 🐾 — {site.name}. We&apos;re students, not advisors — for
          official matters we point you to the right campus office.
        </p>
      </Container>
    </footer>
  );
}
