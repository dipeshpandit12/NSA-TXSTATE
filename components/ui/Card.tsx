import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

// Surface card — tokens only, so it re-themes for free.
export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-5 sm:p-6 shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
