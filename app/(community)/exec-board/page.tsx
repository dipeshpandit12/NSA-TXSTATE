import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Exec Board" };

export default function ExecBoardPage() {
  return (
    <>
      <PageHeader
        eyebrow="🏠 Community"
        title="Meet the humans"
        lead="The people keeping this thing running — ask us anything."
      />
      <Section>
        <ComingSoon note="One card per member (photo, role, fun fact) + past boards (Readme.md §4). Contact is always NSA email — never personal numbers." />
      </Section>
    </>
  );
}
