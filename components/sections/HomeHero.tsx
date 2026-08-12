"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HeroWaveBackground } from "@/components/sections/HeroWaveBackground";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { firmContent, heroImage } from "@/lib/content/siteContent";

const heroTextParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const heroTextItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/** Home banner with a pinned background that later sections cover on scroll. */
export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[30rem] items-center md:min-h-[34rem] lg:min-h-[38rem]">
      <div
        className={cn(
          "pointer-events-none inset-0 overflow-hidden",
          reduceMotion ? "absolute" : "fixed z-0",
        )}
        aria-hidden="true"
      >
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="scale-110 object-cover object-[75%_center] blur-[6px] md:object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/84 via-cream/72 to-cream/86" />
        <HeroWaveBackground />
      </div>

      <Container className="relative z-10 pt-28 pb-12 text-center md:pt-32 md:pb-16">
        <motion.div
          className="mx-auto max-w-xl md:max-w-2xl"
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "visible"}
          variants={heroTextParent}
        >
          <motion.h1
            variants={heroTextItem}
            className="font-serif text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-[2.6rem] lg:leading-[1.15]"
          >
            {firmContent.name}
          </motion.h1>
          <motion.p
            variants={heroTextItem}
            className="mt-3 font-serif text-lg leading-7 text-navy md:text-xl"
          >
            {firmContent.slogan}
          </motion.p>
          <motion.p
            variants={heroTextItem}
            className="mx-auto mt-3 max-w-xl text-pretty text-base leading-7 text-ink-muted"
          >
            {firmContent.longDescription}
          </motion.p>
          <motion.div
            variants={heroTextItem}
            className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
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
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
