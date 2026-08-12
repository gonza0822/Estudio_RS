import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent, teamMembers } from "@/lib/content/siteContent";

/** Highlights both professionals with the same card language as Quiénes somos. */
export function TeamPreview() {
  return (
    <section className="relative bg-surface py-16 md:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            level="h2"
            title="Quiénes te acompañan"
            description={aboutContent.intro}
            descriptionClassName="text-justify"
          />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2">
          {teamMembers.map((member, index) => (
            <Reveal key={member.id} delay={(index % 2) * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-2xl bg-cream p-6 md:p-7">
                <h3 className="font-serif text-xl font-semibold text-ink">{member.name}</h3>
                <p className="mt-2 text-sm font-medium text-navy">{member.role}</p>
                <p className="mt-3 flex-1 text-justify text-sm leading-7 text-ink-muted">
                  {member.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center" delay={0.12}>
          <div>
            <Link
              href="/nuestro-equipo"
              className="inline-flex rounded-full border border-border-soft bg-cream px-5 py-2.5 text-sm font-semibold text-navy transition-colors duration-200 hover:border-navy/30 hover:bg-beige"
            >
              Conocernos mejor
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
