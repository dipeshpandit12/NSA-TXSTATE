import { type ReactNode } from "react";
import { Container } from "./Container";

// Consistent page hero band used by every interior page. Responsive type scale.
export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <div className="border-b border-border bg-surface-muted">
      <Container className="py-10 sm:py-14 lg:py-16">
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-secondary">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">{lead}</p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </Container>
    </div>
  );
}
