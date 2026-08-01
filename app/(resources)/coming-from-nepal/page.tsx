import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Coming from Nepal" };

export default function ComingFromNepalPage() {
  return (
    <>
      <PageHeader
        eyebrow="🧭 Survive & Thrive"
        title="Coming from Nepal"
        lead="Admitted but still back home? Here's what to sort before you fly — and who to message when you land."
      />
      <Section>
        <ComingSoon note="Status, I-20/visa prep (link to ISSS), packing, budget, and a big reassurance block (Readme.md §5)." />
      </Section>
    </>
  );
}
