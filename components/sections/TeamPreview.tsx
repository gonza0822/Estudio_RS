import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { teamMembers } from "@/lib/content/siteContent";

/** Highlights both professionals with concise profile cards. */
export function TeamPreview() {
  return (
    <section className="bg-slate-50 py-2 md:py-4">
      <Container>
        <Reveal>
          <SectionHeading
            title="Nuestro equipo"
            description="Un estudio conformado por dos profesionales con experiencia complementaria y trato personalizado."
          />
        </Reveal>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08}>
              <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900">{member.name}</h2>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-slate-500">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-600">{member.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center" delay={0.12}>
          <div>
            <Link
              href="/nuestro-equipo"
              className="text-sm font-semibold text-slate-800 underline decoration-slate-300 transition-colors hover:text-slate-950"
            >
              Conocer al equipo
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
