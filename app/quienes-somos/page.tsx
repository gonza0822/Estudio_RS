import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildPageMetadata } from "@/lib/content/siteContent";

export const metadata: Metadata = buildPageMetadata(
  "Estudio SR | Quiénes somos",
  "Conocé la visión y valores de Estudio SR, un estudio jurídico boutique centrado en la cercanía y la excelencia técnica.",
  "/quienes-somos",
);

/** Presents the firm's identity, values, and way of working. */
export default function QuienesSomosPage() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            title="Quiénes somos"
            description="Somos un estudio jurídico independiente orientado a brindar asesoramiento serio, práctico y humano."
          />
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
          <Reveal>
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Cercanía</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Acompañamos cada caso con trato directo, seguimiento real y disponibilidad para
                resolver dudas en cada etapa.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Rigor técnico</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Combinamos análisis jurídico sólido con estrategia para proteger intereses y
                minimizar riesgos.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.16}>
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Enfoque práctico</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Buscamos soluciones claras y ejecutables, evitando complejidad innecesaria y
                priorizando resultados.
              </p>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
