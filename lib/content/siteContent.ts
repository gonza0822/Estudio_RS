import type { Metadata } from "next";

export const SITE_URL = "https://estudiosr.com";

export const firmContent = {
  name: "Estudio SR",
  shortDescription:
    "Asesoramiento legal estratégico para empresas y personas con foco en cercanía, claridad y resultados.",
  longDescription:
    "Somos un estudio jurídico boutique que combina experiencia técnica y atención personalizada para acompañar decisiones importantes con criterio legal y visión práctica.",
  phone: "+54 11 1234 5678",
  email: "contacto@estudiosr.com",
  address: "Ciudad Autónoma de Buenos Aires, Argentina",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/nuestro-equipo", label: "Nuestro equipo" },
  { href: "/areas-de-practica", label: "Áreas de práctica" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const practiceAreas = [
  {
    title: "Derecho laboral",
    description:
      "Asesoramiento preventivo y resolución de conflictos laborales para empleadores y profesionales independientes.",
  },
  {
    title: "Contratos civiles y comerciales",
    description:
      "Redacción, revisión y negociación de contratos con foco en reducir riesgos y dar seguridad jurídica.",
  },
  {
    title: "Derecho societario",
    description:
      "Acompañamiento legal para constitución de sociedades, reorganizaciones y cumplimiento corporativo básico.",
  },
  {
    title: "Sucesiones y planificación patrimonial",
    description:
      "Asistencia integral en procesos sucesorios y organización patrimonial familiar con trato cercano.",
  },
  {
    title: "Asesoría para pymes",
    description:
      "Soporte legal continuo para pequeñas y medianas empresas en su operación diaria y crecimiento.",
  },
  {
    title: "Mediación y resolución de conflictos",
    description:
      "Estrategias de negociación y abordaje de disputas para lograr soluciones eficientes sin perder tiempo ni recursos.",
  },
] as const;

export const teamMembers = [
  {
    name: "Dra. Silvana Gonzalez",
    role: "Socia fundadora",
    bio: "Abogada con más de 12 años de experiencia en derecho laboral y asesoría corporativa para pymes.",
    imageSrc: "/images/team/silvana-gonzalez.png",
    imageAlt: "Retrato profesional de la Dra. Silvana Gonzalez",
  },
  {
    name: "Dr. Rodrigo Ceballos",
    role: "Socio fundador",
    bio: "Especialista en contratos, derecho societario y estrategia legal para personas y empresas familiares.",
    imageSrc: "/images/team/rodrigo-ceballos.png",
    imageAlt: "Retrato profesional del Dr. Rodrigo Ceballos",
  },
] as const;

export const heroCarouselSlides = [
  {
    id: "legal-office-meeting",
    imageUrl:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1920&auto=format&fit=crop",
    alt: "Sala de reuniones en estudio jurídico",
  },
  {
    id: "law-books-desk",
    imageUrl:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1920&auto=format&fit=crop",
    alt: "Biblioteca jurídica y escritorio profesional",
  },
  {
    id: "courthouse-columns",
    imageUrl:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1920&auto=format&fit=crop",
    alt: "Columnas de un edificio judicial",
  },
  {
    id: "legal-document-signature",
    imageUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920&auto=format&fit=crop",
    alt: "Firma de documentos legales en despacho",
  },
  {
    id: "city-court-building",
    imageUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1920&auto=format&fit=crop",
    alt: "Edificio institucional en zona financiera",
  },
  {
    id: "meeting-room-documents",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1920&auto=format&fit=crop",
    alt: "Mesa de reunión con documentación legal",
  },
  {
    id: "corporate-law-office",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop",
    alt: "Oficina corporativa moderna vinculada al ámbito legal",
  },
] as const;

/** Builds default metadata objects for page-level SEO. */
export function buildPageMetadata(
  title: string,
  description: string,
  path = "/",
): Metadata {
  const canonicalUrl = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: firmContent.name,
      locale: "es_AR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}