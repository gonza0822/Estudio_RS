import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent, buildPageMetadata, firmContent } from "@/lib/content/siteContent";

export const metadata: Metadata = buildPageMetadata(
  `${firmContent.name} | Quiénes somos`,
  aboutContent.intro,
  "/quienes-somos",
);

/** Presents the firm's identity, values, and way of working. */
export default function QuienesSomosPage() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <Reveal>
          <SectionHeading title="Quiénes somos" description={aboutContent.intro} />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2">
          {aboutContent.values.map((value, index) => (
            <Reveal key={value.title} delay={(index % 2) * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-2xl bg-surface p-6 md:p-7">
                <h2 className="font-serif text-xl font-semibold text-ink">{value.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-ink-muted">{value.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
