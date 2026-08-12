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
          quality={85}
          sizes="100vw"
          className="-scale-x-100 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/35 to-transparent" />
        <HeroWaveBackground />
      </div>

      <Container className="relative z-10 pt-28 pb-12 text-left md:pt-32 md:pb-16">
        <motion.div
          className="max-w-4xl"
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "visible"}
          variants={heroTextParent}
        >
          <motion.h1
            variants={heroTextItem}
            className="whitespace-nowrap font-display text-[clamp(0.72rem,3.5vw,1.7rem)] font-semibold uppercase tracking-[0.07em] text-white"
          >
            {firmContent.name}
          </motion.h1>
          <motion.p
            variants={heroTextItem}
            className="mt-3 font-serif text-lg leading-7 text-white md:text-xl"
          >
            {firmContent.slogan}
          </motion.p>
          <motion.p
            variants={heroTextItem}
            className="mt-3 max-w-xl text-pretty text-base leading-7 text-white/90"
          >
            {firmContent.longDescription}
          </motion.p>
          <motion.div
            variants={heroTextItem}
            className="mt-6 flex flex-col items-start gap-3 sm:flex-row"
          >
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-navy-soft"
            >
              Escribinos
            </Link>
            <Link
              href="/areas-de-practica"
              className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/20"
            >
              Cómo podemos ayudarte
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
