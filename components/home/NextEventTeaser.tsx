import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { buttonClasses } from "@/components/ui/Button";

// Pulls the nearest upcoming event once events data lands (Readme.md §3–4).
// Until then, an on-brand empty state.
export function NextEventTeaser() {
  return (
    <Section className="bg-surface-muted">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Next up
          </h2>
          <p className="mt-2 max-w-md text-muted">
            Momos, music, and the occasional study jam. Here&apos;s what&apos;s on
            the calendar.
          </p>
          <Link
            href="/events"
            className={buttonClasses({ variant: "primary", className: "mt-6" })}
          >
            See all events
          </Link>
        </div>
        <Card>
          <p className="text-sm font-semibold text-highlight">No events yet</p>
          <p className="mt-2 font-display text-xl font-semibold text-foreground">
            Quiet for now — but Dashain is coming 👀
          </p>
          <p className="mt-2 text-muted">
            Perfect time to follow us on Insta so you don&apos;t miss the next one.
          </p>
        </Card>
      </div>
    </Section>
  );
}
