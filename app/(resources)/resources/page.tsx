import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { emergencyContacts, site } from "@/lib/site";

export const metadata: Metadata = { title: "Resources & FAQ" };

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="🧭 Survive & Thrive"
        title="Resources & FAQ"
        lead="Playful headers, serious answers. Search the FAQ and jump to official links."
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ComingSoon note="Searchable FAQ + official-links table (Readme.md §5–6)." />
          </div>
          <Card>
            <p className="text-sm font-semibold text-highlight">📌 Emergency contacts</p>
            <ul className="mt-3 space-y-2 text-sm">
              {emergencyContacts.map((c) => (
                <li key={c.label} className="text-muted">
                  {c.label}:{" "}
                  <a href={c.href} className="font-medium text-foreground hover:text-primary">
                    {c.value}
                  </a>
                </li>
              ))}
              <li className="text-muted">
                NSA email:{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-foreground hover:text-primary"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </Card>
        </div>
      </Section>
    </>
  );
}
