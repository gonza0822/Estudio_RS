import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { practiceAreas } from "@/lib/content/siteContent";

/** Displays a subset of services on the homepage. */
export function PracticeAreasPreview() {
  const highlightedAreas = practiceAreas.slice(0, 3);

  return (
    <section className="pt-5 pb-16 md:pt-7 md:pb-20">
      <Container>
        <Reveal>
          <SectionHeading
            title="Áreas de práctica"
            description="Brindamos asesoramiento integral en materias clave para personas, profesionales y empresas familiares."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {highlightedAreas.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.08}>
              <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">{area.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{area.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center" delay={0.15}>
          <div>
            <Link
              href="/areas-de-practica"
              className="text-sm font-semibold text-slate-800 underline decoration-slate-300 transition-colors hover:text-slate-950"
            >
              Ver todas las áreas
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
