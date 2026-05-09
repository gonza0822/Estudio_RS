import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildPageMetadata, practiceAreas } from "@/lib/content/siteContent";

export const metadata: Metadata = buildPageMetadata(
  "Estudio SR | Áreas de práctica",
  "Explorá las áreas de práctica de Estudio SR para asesoramiento legal integral en temas laborales, contractuales y societarios.",
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
            description="Servicios legales diseñados para acompañar decisiones personales, patrimoniales y empresariales."
          />
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
          {practiceAreas.map((area, index) => (
            <Reveal key={area.title} delay={(index % 2) * 0.08}>
              <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">{area.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{area.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
