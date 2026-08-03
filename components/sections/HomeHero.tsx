"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { firmContent, heroImage } from "@/lib/content/siteContent";

/** Renders a full-bleed hero using the justice-scale photograph. */
export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[480px] items-center overflow-hidden md:min-h-[540px] lg:min-h-[580px]">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-[75%_center] md:object-right"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative z-10 py-12 md:py-14">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="max-w-xl md:max-w-2xl"
        >
          <p className="text-sm font-medium text-navy">Hola, estamos para ayudarte</p>
          <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            {firmContent.name}
          </h1>
          <p className="mt-4 font-serif text-lg leading-7 text-ink md:text-xl">
            {firmContent.slogan}
          </p>
          <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-ink-muted">
            {firmContent.longDescription}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-navy-soft"
            >
              Escribinos
            </Link>
            <Link
              href="/areas-de-practica"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-surface/85 px-6 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:border-navy/40 hover:bg-surface"
            >
              Cómo podemos ayudarte
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
