import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  buildPageMetadata,
  contactBackgroundImage,
  firmContent,
} from "@/lib/content/siteContent";

const contactIntro =
  "Agenda tu consulta inicial. Completa el siguiente formulario para que podamos contactarte.";

export const metadata: Metadata = buildPageMetadata(
  `${firmContent.name} | Contacto`,
  contactIntro,
  "/contacto",
);

/** Renders contact details and a simple lead form layout. */
export default function ContactoPage() {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-20">
      <Image
        src={contactBackgroundImage.src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-cream/90 via-cream/78 to-cream/70"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2xl bg-navy px-6 py-6 md:px-8 md:py-7">
            <SectionHeading
              title="Contacto"
              description={contactIntro}
              titleClassName="text-cream"
              descriptionClassName="text-cream/85"
            />
          </div>
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-5xl items-stretch gap-8 lg:grid-cols-2">
          <div className="flex h-full min-h-0 flex-col gap-8">
            <Reveal>
              <article className="rounded-2xl border border-border-soft bg-surface/95 p-7 backdrop-blur-[2px]">
                <h2 className="font-serif text-xl font-semibold text-ink">Datos de contacto</h2>
                <p className="mt-4 text-sm font-medium leading-6 text-navy">{firmContent.visitNote}</p>
                <p className="mt-3 text-sm leading-6 text-ink-muted">{firmContent.address}</p>
                <p className="mt-2 text-sm leading-6 text-ink-muted">
                  {firmContent.phone || "Teléfono: a confirmar"}
                </p>
                <p className="mt-2 text-sm leading-6 text-ink-muted">
                  {firmContent.email || "Email: a confirmar"}
                </p>
              </article>
            </Reveal>
            <div className="relative min-h-[16rem] flex-1 overflow-hidden rounded-2xl border border-border-soft bg-surface/95">
              <iframe
                title="Mapa del estudio en Jerónimo Salguero 2310, CABA"
                src={firmContent.mapsEmbedSrc}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <Reveal className="h-full" delay={0.08}>
            <form className="flex h-full flex-col rounded-2xl border border-border-soft bg-surface/95 p-7 backdrop-blur-[2px]">
              <h2 className="font-serif text-xl font-semibold text-ink">Escribinos</h2>
              <div className="mt-5 grid gap-4">
                <label className="grid gap-2 text-sm font-medium text-ink" htmlFor="fullName">
                  Nombre y apellido
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className="h-11 rounded-xl border border-border-soft bg-cream/40 px-3 text-sm text-ink outline-none transition-shadow duration-200 focus:border-navy focus:ring-2 focus:ring-navy/15"
                    placeholder="Tu nombre"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-ink" htmlFor="email">
                  Email
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="h-11 rounded-xl border border-border-soft bg-cream/40 px-3 text-sm text-ink outline-none transition-shadow duration-200 focus:border-navy focus:ring-2 focus:ring-navy/15"
                    placeholder="tu@email.com"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-ink" htmlFor="message">
                  Mensaje
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="rounded-xl border border-border-soft bg-cream/40 px-3 py-2 text-sm text-ink outline-none transition-shadow duration-200 focus:border-navy focus:ring-2 focus:ring-navy/15"
                    placeholder="Contanos brevemente tu consulta."
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 h-11 rounded-full bg-navy px-4 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-navy-soft"
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
