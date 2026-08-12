import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FirmLogo } from "@/components/ui/FirmLogo";
import { firmContent, navItems } from "@/lib/content/siteContent";

/** Renders a balanced footer, kept compact on mobile. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border-soft bg-beige">
      <Container className="py-8 md:py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-6">
            <FirmLogo />
            <p className="mt-3 max-w-md text-sm leading-6 text-ink-muted md:mt-4 md:leading-7">
              {firmContent.shortDescription}
            </p>
            <p className="mt-3 font-serif text-base text-navy">{firmContent.slogan}</p>
          </div>

          <nav aria-label="Enlaces del pie" className="lg:col-span-3">
            <p className="mb-2 text-sm font-semibold text-ink md:mb-3">Navegá</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-8 items-center text-sm text-ink-muted transition-colors duration-200 hover:text-navy md:min-h-9"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="mb-2 text-sm font-semibold text-ink md:mb-3">Contacto</p>
            <div className="space-y-1.5 text-sm leading-6 text-ink-muted">
              <p>{firmContent.address}</p>
              {firmContent.phone ? <p>{firmContent.phone}</p> : null}
              {firmContent.email ? (
                <a
                  href={`mailto:${firmContent.email}`}
                  className="inline-block text-navy underline decoration-sand transition-colors duration-200 hover:text-ink"
                >
                  {firmContent.email}
                </a>
              ) : null}
              {!firmContent.phone && !firmContent.email ? (
                <p>Datos de contacto a confirmar</p>
              ) : null}
            </div>
            <Link
              href="/contacto"
              className="mt-4 inline-flex rounded-full border border-border-soft bg-surface px-5 py-2.5 text-sm font-semibold text-navy transition-colors duration-200 hover:border-navy/30 hover:bg-beige"
            >
              Escribinos
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-border-soft/80 pt-5 md:mt-10 md:pt-6">
          <p className="text-xs text-ink-muted">
            © {year} {firmContent.name}. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
