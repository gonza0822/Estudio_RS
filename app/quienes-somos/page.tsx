import type { Metadata } from "next";
import Image from "next/image";
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
              <article className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-surface">
                <div className="relative h-36 w-full md:h-40">
                  <Image
                    src={value.imageSrc}
                    alt={value.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-surface/20"
                    aria-hidden="true"
                  />
                </div>
                <div className="relative z-10 flex flex-1 flex-col px-6 pb-6 md:px-7 md:pb-7">
                  <h2 className="font-serif text-xl font-semibold text-ink">{value.title}</h2>
                  <p className="mt-3 flex-1 text-justify text-sm leading-7 text-ink-muted">
                    {value.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
