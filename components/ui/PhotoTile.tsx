import { cn } from "@/lib/cn";

// Placeholder sized at real photo aspect ratios. Drop a <next/image> in later
// with no layout change. Warm gradient + faint icon so empty ≠ broken.
type Tone = "marigold" | "maroon" | "himalaya" | "crimson";

const tones: Record<Tone, string> = {
  marigold: "from-accent/40 to-primary/20",
  maroon: "from-primary/30 to-accent/20",
  himalaya: "from-secondary/25 to-accent/25",
  crimson: "from-highlight/25 to-primary/25",
};

const ratios = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/10]",
};

export function PhotoTile({
  caption,
  tone = "marigold",
  ratio = "landscape",
  className,
}: {
  caption?: string;
  tone?: Tone;
  ratio?: keyof typeof ratios;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br",
        tones[tone],
        ratios[ratio],
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-0 flex items-center justify-center text-4xl opacity-30"
      >
        📸
      </span>
      {caption && (
        <span className="absolute bottom-2 left-3 rounded-md bg-background/70 px-2 py-0.5 text-xs font-medium text-foreground backdrop-blur">
          {caption}
        </span>
      )}
    </div>
  );
}
