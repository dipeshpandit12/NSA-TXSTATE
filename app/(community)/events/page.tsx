import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="🏠 Community"
        title="Events"
        lead="Upcoming momos, music, and study jams — plus an archive of everything we've done."
      />
      <Section>
        <ComingSoon note="Upcoming + Past events with RSVP and calendar links land here (Readme.md §4)." />
      </Section>
    </>
  );
}
