import { type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

// Vertical rhythm wrapper for page sections. Responsive vertical padding.
export function Section({
  children,
  className,
  bleed = false,
}: {
  children: ReactNode;
  className?: string;
  // bleed = full-width background (children still get a Container); default constrains width.
  bleed?: boolean;
}) {
  const inner = <Container>{children}</Container>;
  return (
    <section className={cn("py-12 sm:py-16 lg:py-20", className)}>
      {bleed ? children : inner}
    </section>
  );
}
