import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildPageMetadata, teamMembers } from "@/lib/content/siteContent";

export const metadata: Metadata = buildPageMetadata(
  "Estudio SR | Nuestro equipo",
  "Conocé a los profesionales de Estudio SR y su experiencia en asesoramiento legal para personas y empresas.",
  "/nuestro-equipo",
);

/** Lists the two founding professionals and their expertise. */
export default function NuestroEquipoPage() {
  return (
    <section className="py-4 md:py-6">
      <Container>
        <Reveal>
          <SectionHeading
            title="Nuestro equipo"
            description="Dos profesionales con experiencia complementaria y compromiso con una atención personalizada."
          />
        </Reveal>
        <div className="mx-auto mt-6 grid max-w-4xl gap-5 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08}>
              <article className="relative h-[26rem] overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                <Image
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/55 to-slate-950/20" />
                <div className="absolute inset-x-0 bottom-0 z-10 p-7 text-white">
                  <h2 className="text-xl font-semibold">{member.name}</h2>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wide text-slate-200">
                    {member.role}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-slate-100">{member.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
