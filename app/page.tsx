import type { Metadata } from "next";
import Link from "next/link";
import { HomeHero } from "@/components/sections/HomeHero";
import { PracticeAreasPreview } from "@/components/sections/PracticeAreasPreview";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { buildPageMetadata, firmContent } from "@/lib/content/siteContent";

export const metadata: Metadata = buildPageMetadata(
  `${firmContent.name} | Inicio`,
  firmContent.longDescription,
  "/",
);

/** Renders the institutional homepage with key trust sections. */
export default function Home() {
  return (
    <>
      <HomeHero />
      <PracticeAreasPreview />
      <TeamPreview />
      <section className="pb-16 md:pb-20">
        <Reveal>
          <Container>
            <div className="rounded-3xl bg-beige/70 px-7 py-10 text-center md:px-12 md:py-14">
              <h2 className="mx-auto max-w-2xl text-balance font-serif text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Contanos tu situación y vemos juntos cómo avanzar
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-ink-muted">
                En {firmContent.nameShort} te escuchamos, te explicamos las opciones con claridad y
                buscamos la solución más concreta para tu caso.
              </p>
              <Link
                href="/contacto"
                className="mt-8 inline-flex rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-navy-soft"
              >
                Hablemos
              </Link>
            </div>
          </Container>
        </Reveal>
      </section>
    </>
  );
}
