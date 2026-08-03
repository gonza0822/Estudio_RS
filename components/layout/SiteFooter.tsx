import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FirmLogo } from "@/components/ui/FirmLogo";
import { firmContent, navItems } from "@/lib/content/siteContent";

/** Renders firm information and quick links in the footer. */
export function SiteFooter() {
  return (
    <footer className="border-t border-border-soft bg-beige/50">
      <Container className="grid gap-8 py-12 md:grid-cols-2">
        <div>
          <FirmLogo />
          <p className="mt-4 max-w-md text-sm leading-7 text-ink-muted">
            {firmContent.shortDescription}
          </p>
          <p className="mt-4 font-serif text-base text-navy">{firmContent.slogan}</p>
          <p className="mt-5 text-sm text-ink-muted">{firmContent.address}</p>
          <p className="mt-1 text-sm text-ink-muted">{firmContent.phone}</p>
          <a
            href={`mailto:${firmContent.email}`}
            className="mt-1 inline-block text-sm text-navy underline decoration-sand transition-colors duration-200 hover:text-ink"
          >
            {firmContent.email}
          </a>
        </div>

        <nav aria-label="Enlaces del pie" className="md:justify-self-end">
          <p className="mb-3 text-sm font-semibold text-ink">Navegá</p>
          <ul className="grid gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-muted transition-colors duration-200 hover:text-navy"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
