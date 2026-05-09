import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildPageMetadata, firmContent } from "@/lib/content/siteContent";

export const metadata: Metadata = buildPageMetadata(
  "Estudio SR | Contacto",
  "Contactá a Estudio SR para una consulta legal y recibí asesoramiento personalizado.",
  "/contacto",
);

/** Renders contact details and a simple lead form layout. */
export default function ContactoPage() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            title="Contacto"
            description="Contanos tu consulta y te responderemos a la brevedad para coordinar una primera conversación."
          />
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Datos de contacto</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">{firmContent.address}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{firmContent.phone}</p>
              <a
                href={`mailto:${firmContent.email}`}
                className="mt-2 inline-block text-sm text-slate-700 underline decoration-slate-300 transition-colors hover:text-slate-950"
              >
                {firmContent.email}
              </a>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <form className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Enviá tu consulta</h2>
              <div className="mt-5 grid gap-4">
                <label className="grid gap-2 text-sm font-medium text-slate-700" htmlFor="fullName">
                  Nombre y apellido
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition-shadow focus:border-slate-500 focus:ring-2 focus:ring-slate-300/70"
                    placeholder="Tu nombre"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-700" htmlFor="email">
                  Email
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition-shadow focus:border-slate-500 focus:ring-2 focus:ring-slate-300/70"
                    placeholder="nombre@empresa.com"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-700" htmlFor="message">
                  Mensaje
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-shadow focus:border-slate-500 focus:ring-2 focus:ring-slate-300/70"
                    placeholder="Contanos brevemente tu consulta."
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 h-11 rounded-md bg-slate-900 px-4 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Enviar consulta
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
