import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { buttonClasses } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center py-24 text-center sm:py-32">
      <p className="text-6xl" aria-hidden>
        🐾
      </p>
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        This page wandered off
      </h1>
      <p className="mt-3 max-w-md text-muted">
        Probably out getting momos. Let&apos;s get you back somewhere useful.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className={buttonClasses({ variant: "primary" })}>
          Back home
        </Link>
        <Link href="/resources" className={buttonClasses({ variant: "outline" })}>
          Resources &amp; FAQ
        </Link>
      </div>
    </Container>
  );
}
