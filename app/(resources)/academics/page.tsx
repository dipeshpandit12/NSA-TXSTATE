import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Academics 101" };

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="🧭 Survive & Thrive"
        title="Academics 101"
        lead="Registration, advising, staying full-time as F-1 — and the academic honesty rules that quietly trip good students up."
      />
      <Section>
        <ComingSoon note="CatsWeb, registration, advising, F-1 full-time rules, and a plain-language Academic Honesty block (Readme.md §5). Legal/standing questions always route to the right office." />
      </Section>
    </>
  );
}
