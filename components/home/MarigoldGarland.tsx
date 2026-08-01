import { cn } from "@/lib/cn";

// Signature element: a गेंदा (marigold) welcome garland strung across the hero.
// Deterministic geometry (no randomness). Colors use semantic tokens, so it
// recolors with the palette and adapts to dark mode.

const WIDTH = 1200;
const COUNT = 15;
const PETALS = 8;

// Gentle droop: y peaks at the center of the string.
function threadY(x: number) {
  const t = (x - WIDTH / 2) / (WIDTH / 2); // -1 … 1
  return 12 + 22 * (1 - t * t);
}

function Flower({ x }: { x: number }) {
  const y = threadY(x);
  const petals = Array.from({ length: PETALS }, (_, i) => {
    const a = (i / PETALS) * Math.PI * 2;
    return { cx: Math.cos(a) * 7, cy: Math.sin(a) * 7 };
  });
  return (
    <g transform={`translate(${x} ${y})`}>
      {petals.map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r={4} fill="var(--accent-hover)" />
      ))}
      <circle r={6} fill="var(--accent)" />
      <circle r={2} fill="var(--primary)" />
    </g>
  );
}

export function MarigoldGarland({ className }: { className?: string }) {
  const flowers = Array.from({ length: COUNT }, (_, i) => {
    const x = 30 + (i * (WIDTH - 60)) / (COUNT - 1);
    return x;
  });
  return (
    <svg
      viewBox={`0 0 ${WIDTH} 56`}
      className={cn("h-auto w-full", className)}
      role="presentation"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      {/* green thread the flowers hang from */}
      <path
        d={`M0 ${threadY(0)} Q ${WIDTH / 2} ${threadY(WIDTH / 2)} ${WIDTH} ${threadY(WIDTH)}`}
        fill="none"
        stroke="var(--success)"
        strokeWidth={2}
        strokeLinecap="round"
      />
      {flowers.map((x, i) => (
        <Flower key={i} x={x} />
      ))}
    </svg>
  );
}
