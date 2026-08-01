import Link from "next/link";
import { Section } from "@/components/ui/Section";

// Audience self-routing (Readme.md §3).
const startHere = [
  {
    emoji: "✈️",
    label: "I just got admitted",
    sub: "…and I'm still in Nepal",
    href: "/coming-from-nepal",
  },
  {
    emoji: "🐾",
    label: "I just landed, help!",
    sub: "First 30 days checklist",
    href: "/new-bobcat-guide",
  },
  {
    emoji: "🎉",
    label: "I'm a current student",
    sub: "Events & community",
    href: "/events",
  },
  {
    emoji: "👋",
    label: "Meet the humans",
    sub: "The exec board",
    href: "/exec-board",
  },
];

export function StartHere() {
  return (
    <Section>
      <div className="mb-8">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Start here
        </h2>
        <p className="mt-2 text-muted">Pick the one that sounds like you.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {startHere.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span aria-hidden className="text-3xl">
              {item.emoji}
            </span>
            <p className="mt-4 font-display text-lg font-semibold text-foreground group-hover:text-primary">
              {item.label}
            </p>
            <p className="mt-1 text-sm text-muted">{item.sub}</p>
            <span
              aria-hidden
              className="mt-4 text-accent opacity-0 transition-opacity group-hover:opacity-100"
            >
              →
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
