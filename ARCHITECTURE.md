# Arquitectura del proyecto

Este documento describe la arquitectura acordada para el sitio del estudio. **Cursor aplica las reglas de forma automática** mediante `.cursor/rules/next-architecture.mdc`, `.cursor/rules/code-conventions.mdc`, `.cursor/rules/performance-responsive.mdc`, `.cursor/rules/comments-minimal.mdc`, `.cursor/rules/design-references.mdc` y `.cursor/rules/seo.mdc` (`alwaysApply: true`). Lo que sigue es la referencia legible en el repositorio.

## Stack

| Área | Herramienta |
|------|-------------|
| Framework | Next.js (App Router) |
| UI | React |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Animación | Framer Motion (solo en Client Components) |
| Imágenes | `next/image` + archivos en `public/` |
| Deploy | Vercel · código en GitHub |

**Fuera de alcance del MVP salvo decisión explícita:** Redux, base de datos, backend Node independiente del propio Next.

## Referencias de diseño

Sitios de inspiración (tono y calidad visual, **no** copia de textos ni estructura): [Marval](https://www.marval.com/lang=es), [Bomchil](https://bomchil.com), [Bruchou & Funes de Rioja](https://bruchoufunes.com), [Nicholson y Cano](https://nicholsonycano.com.ar), [PAGBAM](https://pagbam.com), [Beccar Varela](https://beccarvarela.com). Objetivo: sobriedad y claridad a escala de estudio pequeño. Detalle: `.cursor/rules/design-references.mdc`.

## Árbol de carpetas (convención)

```
app/                    # Rutas, layouts, loading; API en app/api/**/route.ts
components/
  layout/               # Header, Footer, shells
  sections/             # Bloques grandes de página (Hero, listados, CTA)
  ui/                   # Primitivas reutilizables (botón, contenedor, headings)
lib/                    # Utilidades (cn, validación), constantes, datos tipados
public/                 # Estáticos servidos tal cual (imágenes del equipo, logo)
```

Si el proyecto adopta la carpeta `src/`, mantener **todo** bajo `src/` de forma consistente (no mezclar `app/` en raíz con `src/components` sin acordarlo).

## Server Components vs Client Components

1. Por defecto: **Server Components** (sin `"use client"`).
2. Usar **`"use client"`** cuando haga falta:
   - Framer Motion
   - Estado local y efectos del navegador
   - Formularios muy interactivos o menú móvil con estado

Colocar la menor superficie posible como cliente; si hace falta, dividir en `HeroSection.tsx` (servidor) + `HeroSectionMotion.tsx` (cliente).

## Datos y contacto

- Textos y metadatos del estudio: centralizados en **`lib/`** (o `lib/content/`), tipados.
- Formulario de contacto: **Route Handler** en `app/api/.../route.ts`; secretos solo en variables de entorno del servidor (nunca exponer API keys con `NEXT_PUBLIC_`).

## Estilos

- Preferir **Tailwind** para todo lo posible.
- CSS adicional solo cuando sea necesario (p. ej. scrollbar), en `app/globals.css` o CSS modular junto al componente.

## Imágenes

- Rutas bajo `public/` y referencia en código con **`next/image`** (nunca `<img>` para contenido optimizado).
- Incluir `alt` descriptivo en imágenes de contenido.
- Dimensiones explícitas o `fill` + contenedor con tamaño fijo para evitar CLS; `priority` solo above the fold; `sizes` según breakpoints; preferir WebP/AVIF.

## Rendimiento y responsive

- Objetivo: buen **LCP, CLS, INP**. UI **mobile-first** y responsive con Tailwind (`sm:`, `md:`, `lg:`, `xl:`).
- Server Components por defecto; `fetch` cacheable en servidor cuando aplique; `loading.tsx` / `Suspense` con datos async; layouts anidados; `dynamic(..., { ssr: false })` solo para piezas pesadas que no requieran SSR.
- Framer Motion: solo cliente; animar `transform`/`opacity`; `useReducedMotion`; no cargar el LCP con animaciones.
- TypeScript estricto: sin `any`; props tipadas; respuestas externas tipadas.
- Producción: sin logs de debug ruidosos; env bien configuradas; valorar bundle analyzer en cambios grandes; nuevas dependencias justificadas.

Detalle: `.cursor/rules/performance-responsive.mdc`.

## SEO

- Metadatos por ruta (`metadata` / `generateMetadata`): título y descripción únicos; Open Graph / Twitter cuando aplique; `robots` y canonical donde corresponda.
- `sitemap` y `robots` alineados con las rutas públicas.
- HTML semántico (`h1` único, jerarquía de headings), `lang="es"` en raíz, textos de enlace claros, `alt` en imágenes.

Detalle: `.cursor/rules/seo.mdc`.

## Idioma y nomenclatura del código

- **Código** (identificadores, comentarios, docs técnicas): **inglés**.
- **Contenido del sitio** (titulares, párrafos legales): **español**, preferentemente en datos centralizados (`lib/content/`) con **claves en inglés** (`heroTitle`, `contactEmailLabel`).
- **PascalCase**: componentes React y tipos/interfaces exportados (`SiteHeader`, `PracticeArea`).
- **camelCase**: variables, funciones, hooks, props (`isOpen`, `submitContactForm`, `useScrollLock`).
- **kebab-case**: carpetas de rutas en `app/` que forman la URL (`quienes-somos`, `practice-areas`).
- **UPPER_SNAKE_CASE**: constantes de configuración y variables de entorno en servidor.
- **snake_case**: no usar en código propio; solo al adaptar JSON externos si no hay mapeo inmediato.

Detalle: `.cursor/rules/code-conventions.mdc`.

## Comentarios en código

- Sin comentarios verbosos ni línea a línea.
- Una **frase breve** encima de cada función/método (y handlers no triviales): qué hace; sin repetir el nombre del símbolo.
- Detalle: `.cursor/rules/comments-minimal.mdc`.

## Cambios de arquitectura

Cualquier desviación (nueva capa, nueva carpeta raíz, BD, otro router) debe ser **explícita** y documentarse en el commit o PR para no romper la convención del equipo.
