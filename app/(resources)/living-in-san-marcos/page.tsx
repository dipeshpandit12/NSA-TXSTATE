import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Living in San Marcos" };

export default function LivingInSanMarcosPage() {
  return (
    <>
      <PageHeader
        eyebrow="🧭 Survive & Thrive"
        title="Living in San Marcos"
        lead="Housing, groceries, getting around, health insurance — and what a month actually costs."
      />
      <Section>
        <ComingSoon note="NSA-curated housing list, food on a budget, shuttle/transport, health & insurance (Readme.md §5)." />
      </Section>
    </>
  );
}
