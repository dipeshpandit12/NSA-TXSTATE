import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "New Bobcat Guide" };

export default function NewBobcatGuidePage() {
  return (
    <>
      <PageHeader
        eyebrow="🧭 Survive & Thrive"
        title="New Bobcat Guide — First 30 Days"
        lead="The highest-value page: an interactive checklist you can tick off. Immigration check-in first — it's mandatory."
      />
      <Section>
        <ComingSoon note="Interactive, saveable checklist + printable version (Readme.md §5). This is the flagship page." />
      </Section>
    </>
  );
}
