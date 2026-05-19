import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { buildPageMetadata, teamMembers } from "@/lib/content/siteContent";

export const metadata: Metadata = buildPageMetadata(
  "Estudio SR | Nuestro equipo",
  "Conocé a los profesionales de Estudio SR y su experiencia en asesoramiento legal para personas y empresas.",
  "/nuestro-equipo",
);

/** Lists the two founding professionals and their expertise. */
export default function NuestroEquipoPage() {
  const orderedMembers = [...teamMembers].sort((current, next) =>
    current.id === "rodrigo-ceballos" ? -1 : next.id === "rodrigo-ceballos" ? 1 : 0,
  );

  return (
    <section className="py-4 md:py-6">
      <Container>
        <Reveal>
          <SectionHeading
            title="Nuestro equipo"
            description="Dos profesionales con experiencia complementaria y compromiso con una atención personalizada."
          />
        </Reveal>
      </Container>
      <div className="mt-8 flex flex-col gap-10 md:gap-14">
        {orderedMembers.map((member, index) => (
          <Reveal key={member.name} delay={index * 0.08}>
            <article className="relative w-full overflow-hidden">
              <div className="relative md:min-h-[28rem]">
                <div
                  className={cn(
                    "relative min-h-[20rem] md:absolute md:inset-y-0 md:w-[58%]",
                    index % 2 === 0
                      ? "md:left-0 md:[clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]"
                      : "md:right-0 md:[clip-path:polygon(0_0,100%_0,100%_100%,12%_100%)]",
                  )}
                >
                  <Image
                    src={member.imageSrc}
                    alt={member.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="object-cover object-top"
                  />
                </div>

                <div
                  className={cn(
                    "relative bg-slate-50 p-6 text-slate-900 md:absolute md:inset-y-0 md:flex md:w-[58%] md:items-center md:p-10 lg:p-12",
                    index % 2 === 0
                      ? "md:right-0 md:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)] md:pl-20 lg:pl-24"
                      : "md:left-0 md:[clip-path:polygon(0_0,88%_0,100%_100%,0_100%)] md:pr-20 lg:pr-24",
                  )}
                >
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">{member.name}</h2>
                    <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-amber-700">
                      {member.role}
                    </p>
                    <p className="mt-5 text-sm leading-7 text-slate-700">{member.bio}</p>

                    <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
                      <p>
                        <span className="font-semibold text-slate-900">Formación:</span>{" "}
                        {member.formation}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-900">Experiencia:</span>{" "}
                        {member.experience}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-900">Historia profesional:</span>{" "}
                        {member.history}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
