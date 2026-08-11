import type { Metadata } from "next";

export const SITE_URL = "https://estudiocg.com.ar";

export const firmContent = {
  name: "Estudio Ceballos & González",
  nameShort: "Ceballos & González",
  slogan: "Seguridad, comunicación, confianza y soluciones.",
  shortDescription:
    "Somos un estudio jurídico dedicado a ayudar al trabajador. Te asesoramos en cuestiones laborales, previsionales y civiles.",
  longDescription:
    "Somos un estudio jurídico dedicado a ayudar al trabajador. Te asesoramos en cuestiones laborales, previsionales y civiles. Solucionamos tus problemas.",
  phone: "",
  email: "",
  address: "Ciudad Autónoma de Buenos Aires, Argentina",
};

export const aboutContent = {
  intro:
    "Somos un estudio jurídico dedicado al derecho laboral, previsional y civil, comprometido en acompañar a cada persona con seriedad, cercanía y sentido práctico en momentos que suelen ser difíciles de atravesar solos.",
  values: [
    {
      title: "Seguridad",
      description:
        "Analizamos cada caso con el rigor necesario para que tomes decisiones informadas, sabiendo con claridad qué podés esperar en cada etapa del proceso.",
      imageSrc: "/images/about/seguridad.jpg",
      imageAlt: "Documentos legales y asesoramiento que transmiten seguridad",
    },
    {
      title: "Comunicación",
      description:
        "Te explicamos tu situación en términos claros, sin palabras difíciles, y te mantenemos al tanto de cada avance sin que tengas que reclamarlo.",
      imageSrc: "/images/about/comunicacion.jpg",
      imageAlt: "Consulta entre abogado y cliente, enfocada en una comunicación clara",
    },
    {
      title: "Confianza",
      description:
        "Construimos una relación honesta y de largo plazo, donde sabés que tu caso está en manos de quien te lo va a explicar sin rodeos, aciertos y límites incluidos.",
      imageSrc: "/images/about/confianza.jpg",
      imageAlt: "Apretón de manos que representa confianza profesional",
    },
    {
      title: "Solución de problemas",
      description:
        "Buscamos la vía más efectiva para resolver tu situación, priorizando resultados concretos sobre procesos innecesarios.",
      imageSrc: "/images/about/solucion-de-problemas.jpg",
      imageAlt: "Equipo trabajando en la solución de un caso",
    },
  ],
} as const;

export const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/nuestro-equipo", label: "Nuestro equipo" },
  { href: "/areas-de-practica", label: "Áreas de práctica" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const practiceAreasContent = {
  intro:
    "Nuestro estudio ofrece asesoramiento integral y especializado tanto en derecho del trabajo, como derecho previsional y civil. Desde asesoramiento preventivo, hasta despidos, jubilaciones, sucesiones, divorcios y alimentos. También asesoramos impositivamente. Acompañamos al trabajador en cada etapa del proceso.",
  areas: [
    {
      title: "Derecho laboral",
      summary:
        "Asesoramos en conflictos laborales desde la etapa prejudicial hasta el juicio en CABA o PBA: despidos, trabajo en negro, telegramas y reclamos ante el SECLO o en tribunales.",
      imageSrc: "/images/practice/laboral.jpg",
      imageAlt: "Contexto laboral y trabajo cotidiano",
      paragraphs: [
        "Asesoramos a trabajadores en todas las instancias de un conflicto laboral, desde la etapa prejudicial hasta el litigio ante los tribunales de CABA o PBA. Ya sea que estés atravesando un despido, con o sin causa, una situación de trabajo en negro, o necesites enviar un telegrama laboral para reclamar tu situación, te acompañamos para que sepas con claridad qué podés reclamar y cómo hacerlo.",
        "Intervenimos ante el SECLO en la instancia conciliatoria obligatoria, y evaluamos junto a cada cliente si conviene cerrar un acuerdo laboral o avanzar hacia el reclamo judicial por diferencias salariales o indemnizaciones.",
        "Nos ocupamos también de las consecuencias de los accidentes de trabajo y las enfermedades profesionales, incluyendo reclamos contra la ART y la determinación de incapacidades laborales cuando la cobertura resulta insuficiente.",
      ],
    },
    {
      title: "Derecho previsional",
      summary:
        "Te acompañamos en jubilación, retiro y reajuste de haberes ante ANSES o en la vía judicial, con un seguimiento cercano en cada paso del trámite.",
      imageSrc: "/images/practice/previsional.jpg",
      imageAlt: "Consulta previsional con una persona jubilada",
      paragraphs: [
        "Acompañamos a nuestros clientes en todo el proceso de jubilación, retiro y reajuste de haberes, tanto en la gestión administrativa ante ANSES como en la vía judicial cuando es necesario. Si estás por jubilarte y querés saber con anticipación cómo te conviene hacerlo, si tu jubilación fue mal liquidada, te la rechazaron, o necesitás iniciar el trámite y no sabés por dónde empezar, te asesoramos en cada paso con un seguimiento cercano y personalizado.",
        "Trabajamos también los reajustes de haberes para quienes ya están jubilados y consideran que su beneficio no refleja correctamente los aportes realizados a lo largo de su vida laboral.",
      ],
    },
    {
      title: "Derecho civil",
      summary:
        "Sucesiones, divorcios y alimentos: te explicamos tus opciones con claridad y te acompañamos en cada etapa del proceso.",
      imageSrc: "/images/practice/civil.jpg",
      imageAlt: "Asesoramiento en un asunto de derecho civil",
      paragraphs: [
        "Nos encargamos de sucesiones, divorcios y alimentos, acompañando a nuestros clientes en procesos que suelen ser difíciles de atravesar, con un trato cercano y un asesoramiento claro en cada etapa. Analizamos cada situación de manera estratégica, para que sepas con claridad qué opciones tenés y cuál es el camino más conveniente para tu caso.",
      ],
    },
  ],
} as const;

export const practiceAreas = practiceAreasContent.areas;

export const teamMembers = [
  {
    id: "silvana-gonzalez",
    name: "Dra. Silvana Mariel González",
    role: "Abogada",
    bio: "Abogada y Contadora Pública (UBA), con más de 30 años de experiencia en el sector privado.",
    highlights: [
      "Abogada y Contadora Pública (UBA). Diploma de honor en derecho.",
      "Más de 30 años de experiencia en el sector privado.",
      "Especialista en derecho laboral, previsional, civil y registral, además de contabilidad e impuestos.",
      "Perito oficial en distintos fueros judiciales desde hace más de 20 años.",
    ],
    imageSrc: "/images/team/silvana-gonzalez-20260811.png",
    imageAlt: "Retrato profesional de la Dra. Silvana Mariel González",
    imageOnLeft: true,
  },
  {
    id: "rodrigo-ceballos",
    name: "Dr. Rodrigo Daniel Ceballos",
    role: "Abogado",
    bio: "Abogado (UBA) y docente, con experiencia en derecho laboral, previsional y civil.",
    highlights: [
      "Abogado egresado de la Universidad de Buenos Aires y docente, desempeñándose como Ayudante de cátedra en Derecho Internacional Privado en la misma casa de estudios.",
      "Formación internacional, con pasantías en la Comisión Interamericana de Derechos Humanos (OEA, Washington DC) y en la Conferencia de La Haya de Derecho Internacional Privado.",
      "Experiencia en derecho laboral, previsional y civil.",
    ],
    imageSrc: "/images/team/rodrigo-ceballos-20260811.png",
    imageAlt: "Retrato profesional del Dr. Rodrigo Daniel Ceballos",
    imageOnLeft: false,
  },
] as const;

export const heroImage = {
  src: "/images/hero/balanza-derecho.jpg",
  alt: "Balanza de la justicia, símbolo del estudio jurídico",
} as const;

export const contactBackgroundImage = {
  src: "/images/contacto/uba-derecho.jpg",
  alt: "Fachada de la Facultad de Derecho de la Universidad de Buenos Aires",
} as const;

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
