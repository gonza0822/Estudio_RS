import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  buildPageMetadata,
  firmContent,
  practiceAreasContent,
} from "@/lib/content/siteContent";
import { cn } from "@/lib/cn";

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
          <SectionHeading
            title="Áreas de práctica"
            description={practiceAreasContent.intro}
            descriptionClassName="text-justify md:text-center"
          />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6">
          {practiceAreasContent.areas.map((area, index) => {
            const imageOnLeft = index % 2 === 0;

            return (
              <Reveal key={area.title} delay={(index % 2) * 0.08}>
                <article className="overflow-hidden rounded-2xl bg-surface md:grid md:min-h-[18rem] md:grid-cols-2">
                  <div
                    className={cn(
                      "relative min-h-[12rem] md:min-h-full",
                      imageOnLeft ? "md:order-1" : "md:order-2",
                    )}
                  >
                    <Image
                      src={area.imageSrc}
                      alt={area.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div
                      className={cn(
                        "absolute inset-0",
                        imageOnLeft
                          ? "bg-gradient-to-r from-transparent via-surface/30 to-surface"
                          : "bg-gradient-to-l from-transparent via-surface/30 to-surface",
                      )}
                      aria-hidden="true"
                    />
                  </div>
                  <div
                    className={cn(
                      "flex flex-col justify-center p-6 md:p-8",
                      imageOnLeft ? "md:order-2" : "md:order-1",
                    )}
                  >
                    <h2 className="font-serif text-xl font-semibold text-ink">{area.title}</h2>
                    <div className="mt-3 space-y-4 text-justify text-sm leading-7 text-ink-muted">
                      {area.paragraphs.map((paragraph, paragraphIndex) => (
                        <p key={`${area.title}-${paragraphIndex}`}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
