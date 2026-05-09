"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { HeroBackgroundCarousel } from "@/components/sections/HeroBackgroundCarousel";
import { Container } from "@/components/ui/Container";
import { firmContent } from "@/lib/content/siteContent";

/** Renders the hero section with a lightweight entrance animation. */
export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[56vh] items-center py-16 text-slate-50 md:min-h-[60vh] md:py-20">
      <HeroBackgroundCarousel />
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative z-10 mx-auto max-w-3xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.18em] text-amber-400">Estudio jurídico boutique</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            {firmContent.name}
          </h1>
          <p className="mt-6 text-pretty text-base leading-7 text-slate-300 md:text-lg">
            {firmContent.longDescription}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contacto"
              className="w-full rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400 sm:w-auto"
            >
              Solicitar asesoramiento
            </Link>
            <Link
              href="/areas-de-practica"
              className="w-full rounded-md border border-slate-600 px-6 py-3 text-sm font-semibold transition-colors hover:border-slate-400 hover:bg-slate-900 sm:w-auto"
            >
              Ver áreas de práctica
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
