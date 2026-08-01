import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { buttonClasses } from "@/components/ui/Button";

// A few gallery highlights to convey the community feel (Readme.md §3).
export function PhotoSplash() {
  return (
    <Section>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            This is us
          </h2>
          <p className="mt-2 text-muted">Momos, festivals, and a lot of laughing.</p>
        </div>
        <Link href="/gallery" className={buttonClasses({ variant: "outline" })}>
          See the gallery
        </Link>
      </div>

      {/* Simple responsive mosaic — two tiles span two rows for rhythm */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <PhotoTile caption="Tihar" tone="marigold" ratio="portrait" className="row-span-2" />
        <PhotoTile caption="Holi" tone="crimson" ratio="landscape" />
        <PhotoTile caption="New Year" tone="himalaya" ratio="landscape" />
        <PhotoTile caption="Study jam" tone="maroon" ratio="portrait" className="row-span-2" />
        <PhotoTile caption="Welcome dinner" tone="marigold" ratio="landscape" />
        <PhotoTile caption="Game night" tone="himalaya" ratio="landscape" />
      </div>
    </Section>
  );
}
