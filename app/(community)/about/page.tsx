import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { SocialLinks } from "@/components/layout/SocialLinks";

export const metadata: Metadata = { title: "About & Join" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="🏠 Community"
        title="About & Join"
        lead="A short origin story, our mission, and how to become part of it."
      >
        <SocialLinks />
      </PageHeader>
      <Section>
        <ComingSoon note="Origin story, mission, and join buttons land here (Readme.md §4)." />
      </Section>
    </>
  );
}
