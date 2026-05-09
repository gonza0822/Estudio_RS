import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/HomeHero";
import { PracticeAreasPreview } from "@/components/sections/PracticeAreasPreview";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { buildPageMetadata } from "@/lib/content/siteContent";

export const metadata: Metadata = buildPageMetadata(
  "Estudio SR | Inicio",
  "Conocé Estudio SR: asesoramiento legal personalizado para personas, profesionales y pymes.",
  "/",
);

/** Renders the institutional homepage with key trust sections. */
export default function Home() {
  return (
    <>
      <HomeHero />
      <PracticeAreasPreview />
      <TeamPreview />
      <section className="py-16 md:py-20">
        <Reveal>
          <Container className="rounded-2xl bg-white p-8 shadow-sm md:p-12">
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Compromiso con una atención clara y cercana
            </h2>
            <p className="mt-4 max-w-3xl text-pretty text-base leading-7 text-slate-600">
              En Estudio SR trabajamos cada caso con análisis técnico, comunicación transparente
              y estrategias realistas para que cada cliente entienda su situación legal y tome
              decisiones con confianza.
            </p>
          </Container>
        </Reveal>
      </section>
    </>
  );
}
