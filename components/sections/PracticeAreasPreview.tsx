import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { practiceAreasContent } from "@/lib/content/siteContent";

/** Displays a concise practice-areas preview for the homepage. */
export function PracticeAreasPreview() {
  return (
    <section className="relative bg-surface py-16 md:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            level="h2"
            title="En qué te ayudamos"
            description="Asuntos laborales, previsionales y civiles, explicados con claridad y trato cercano."
            descriptionClassName="text-justify"
          />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
          {practiceAreasContent.areas.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-2xl bg-cream p-6 md:p-7">
                <h3 className="font-serif text-xl font-semibold text-ink">{area.title}</h3>
                <p className="mt-3 flex-1 text-justify text-sm leading-7 text-ink-muted">
                  {area.summary}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center" delay={0.15}>
          <div>
            <Link
              href="/areas-de-practica"
              className="inline-flex rounded-full border border-border-soft bg-cream px-5 py-2.5 text-sm font-semibold text-navy transition-colors duration-200 hover:border-navy/30 hover:bg-beige"
            >
              Ver todas las áreas
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
