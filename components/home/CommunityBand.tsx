import { Section } from "@/components/ui/Section";
import { SocialLinks } from "@/components/layout/SocialLinks";

export function CommunityBand() {
  return (
    <Section>
      <div className="rounded-3xl bg-primary px-6 py-14 text-center sm:px-12">
        <p className="text-4xl" aria-hidden>
          🙏
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
          There&apos;s a whole Nepali community waiting for you.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
          Come say hi — we remember exactly how the first month feels.
        </p>
        <div className="mt-8 flex justify-center">
          <SocialLinks className="justify-center gap-x-6 [&_a]:text-primary-foreground/80 [&_a:hover]:text-accent" />
        </div>
      </div>
    </Section>
  );
}
