import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="🏠 Community"
        title="Gallery"
        lead="Albums by event and year. Proof that we actually do stuff."
      />
      <Section>
        <ComingSoon note="Albums + lightbox land here (Readme.md §4). Photo-removal requests will be one click away." />
      </Section>
    </>
  );
}
