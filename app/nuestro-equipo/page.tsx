import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { buildPageMetadata, firmContent, teamMembers } from "@/lib/content/siteContent";

export const metadata: Metadata = buildPageMetadata(
  `${firmContent.name} | Nuestro equipo`,
  `Conocé a ${teamMembers.map((member) => member.name).join(" y ")}, abogados de ${firmContent.name}.`,
  "/nuestro-equipo",
);

/** Lists the two founding professionals with photo and bio panels. */
export default function NuestroEquipoPage() {
  return (
    <section className="bg-surface py-10 md:py-14">
      <Container>
        <Reveal>
          <h1 className="text-center font-serif text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Nuestro equipo
          </h1>
        </Reveal>
      </Container>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-10 md:mt-12 md:gap-14 md:px-6 lg:px-8">
        {teamMembers.map((member, index) => {
          const imageOnLeft = member.imageOnLeft;

          return (
            <Reveal key={member.id} delay={index * 0.08}>
              <article className="overflow-hidden bg-cream md:rounded-2xl">
                <div className="relative flex flex-col md:min-h-[36rem] lg:min-h-[40rem] xl:min-h-[44rem]">
                  {/* Wider photo panel + softer diagonal so portraits keep more breathing room */}
                  <div
                    className={cn(
                      "relative z-0 min-h-[24rem] w-full overflow-hidden md:absolute md:inset-y-0 md:w-[64%]",
                      imageOnLeft
                        ? "md:left-0 md:[clip-path:polygon(0_0,100%_0,96%_100%,0_100%)]"
                        : "md:right-0 md:[clip-path:polygon(4%_0,100%_0,100%_100%,0_100%)]",
                    )}
                  >
                    <Image
                      src={member.imageSrc}
                      alt={member.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 64vw"
                      className={cn(
                        "object-cover",
                        imageOnLeft
                          ? "object-[center_18%] md:object-[center_12%]"
                          : "object-[center_20%] md:object-[center_15%]",
                      )}
                      priority={index === 0}
                    />
                  </div>

                  <div
                    className={cn(
                      "relative z-10 flex w-full items-center justify-center bg-cream px-7 py-10 text-ink md:absolute md:inset-y-0 md:w-[52%] md:px-10 lg:px-12",
                      imageOnLeft
                        ? "md:right-0 md:[clip-path:polygon(4%_0,100%_0,100%_100%,0_100%)]"
                        : "md:left-0 md:[clip-path:polygon(0_0,96%_0,100%_100%,0_100%)]",
                    )}
                  >
                    <div className="mx-auto w-full max-w-md text-center">
                      <h2 className="font-serif text-2xl font-semibold tracking-tight md:text-3xl">
                        {member.name}
                      </h2>
                      <p className="mt-2 text-sm font-medium text-navy">{member.role}</p>
                      <ul className="mt-6 space-y-3 text-left text-sm leading-7 text-ink-muted">
                        {member.highlights.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span
                              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
