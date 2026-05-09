import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { firmContent, navItems } from "@/lib/content/siteContent";

/** Renders firm information and quick links in the footer. */
export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50">
      <Container className="grid gap-8 py-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-slate-900">{firmContent.name}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
            {firmContent.shortDescription}
          </p>
          <p className="mt-3 text-sm text-slate-600">{firmContent.address}</p>
          <p className="mt-1 text-sm text-slate-600">{firmContent.phone}</p>
          <a
            href={`mailto:${firmContent.email}`}
            className="mt-1 inline-block text-sm text-slate-700 underline decoration-slate-300 transition-colors hover:text-slate-950"
          >
            {firmContent.email}
          </a>
        </div>

        <nav aria-label="Enlaces del pie" className="md:justify-self-end">
          <ul className="grid gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-slate-700 transition-colors hover:text-slate-950"
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
