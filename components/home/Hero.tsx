import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { buttonClasses } from "@/components/ui/Button";
import { MarigoldGarland } from "./MarigoldGarland";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface-muted">
      {/* Signature garland strung across the top */}
      <MarigoldGarland className="pointer-events-none absolute inset-x-0 top-0" />

      <Container className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Text */}
          <div className="lg:col-span-7">
            <p className="animate-rise text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Nepalese Student Association · Texas State
            </p>

            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              <span
                className="animate-rise block font-nepali text-accent"
                style={{ animationDelay: "80ms" }}
              >
                नमस्ते, Bobcat.
              </span>
              <span
                className="animate-rise mt-2 block"
                style={{ animationDelay: "160ms" }}
              >
                You&apos;ve got a whole community here. 🐾
              </span>
            </h1>

            <p
              className="animate-rise mt-6 max-w-xl text-lg text-muted"
              style={{ animationDelay: "240ms" }}
            >
              {site.tagline} Part survival guide, part community home — from I-20
              paperwork to Dashain dinners, we&apos;ve got you.
            </p>

            <div
              className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "320ms" }}
            >
              <Link
                href="/new-bobcat-guide"
                className={buttonClasses({
                  variant: "accent",
                  size: "lg",
                  className: "w-full sm:w-auto",
                })}
              >
                I just landed, help!
              </Link>
              <Link
                href="/exec-board"
                className={buttonClasses({
                  variant: "outline",
                  size: "lg",
                  className: "w-full sm:w-auto",
                })}
              >
                Meet the humans
              </Link>
            </div>
          </div>

          {/* Scrapbook photo cluster — hidden on small screens */}
          <div
            className="animate-rise relative hidden h-80 lg:col-span-5 lg:block"
            style={{ animationDelay: "200ms" }}
          >
            <PhotoTile
              caption="Dashain 2024"
              tone="marigold"
              ratio="portrait"
              className="absolute left-0 top-2 w-44 -rotate-6 shadow-md"
            />
            <PhotoTile
              caption="Holi on the quad"
              tone="crimson"
              ratio="landscape"
              className="absolute right-2 top-0 w-56 rotate-3 shadow-md"
            />
            <PhotoTile
              caption="Welcome dinner"
              tone="himalaya"
              ratio="square"
              className="absolute bottom-0 left-24 w-40 rotate-2 shadow-md"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
