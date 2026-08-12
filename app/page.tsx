import type { Metadata } from "next";
import Link from "next/link";
import { BackgroundReveal } from "@/components/sections/BackgroundReveal";
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
      <div className="relative z-10">
        <PracticeAreasPreview />
        <BackgroundReveal line={firmContent.slogan} />
        <TeamPreview />
        <section className="py-16 md:py-20">
          <Reveal>
            <Container>
              <div className="rounded-3xl bg-navy px-7 py-10 text-center shadow-[0_12px_40px_rgba(6,64,138,0.22)] md:px-12 md:py-14">
                <h2 className="mx-auto max-w-2xl text-balance font-serif text-2xl font-semibold tracking-tight text-cream md:text-3xl">
                  Contanos tu situación y vemos juntos cómo avanzar
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-cream/90">
                  En {firmContent.nameShort} te escuchamos, te explicamos las opciones con claridad y
                  buscamos la solución más concreta para tu caso.
                </p>
                <Link
                  href="/contacto"
                  className="mt-8 inline-flex rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-surface"
                >
                  Hablemos
                </Link>
              </div>
            </Container>
          </Reveal>
        </section>
      </div>
    </>
  );
}
