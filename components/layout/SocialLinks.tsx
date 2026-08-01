import { social } from "@/lib/site";
import { cn } from "@/lib/cn";

// Reused in Header, Footer, About, and event cards (Readme.md §6).
// TODO: swap text labels for real icons once brand assets land.
export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-x-4 gap-y-2", className)}>
      {social.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded text-sm font-medium text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {s.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
