import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  buildPageMetadata,
  firmContent,
  practiceAreasContent,
} from "@/lib/content/siteContent";

export const metadata: Metadata = buildPageMetadata(
  `${firmContent.name} | Áreas de práctica`,
  practiceAreasContent.intro,
  "/areas-de-practica",
);

/** Shows the full set of legal services offered by the firm. */
export default function AreasDePracticaPage() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <Reveal>
          <SectionHeading title="Áreas de práctica" description={practiceAreasContent.intro} />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-5xl gap-5">
          {practiceAreasContent.areas.map((area, index) => (
            <Reveal key={area.title} delay={(index % 2) * 0.08}>
              <article className="rounded-2xl bg-surface p-6 md:p-7">
                <h2 className="font-serif text-xl font-semibold text-ink">{area.title}</h2>
                <div className="mt-3 space-y-4 text-sm leading-7 text-ink-muted">
                  {area.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={`${area.title}-${paragraphIndex}`}>{paragraph}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
