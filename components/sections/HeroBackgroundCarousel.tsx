"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { heroCarouselSlides } from "@/lib/content/siteContent";

/** Rotates hero background images with subtle crossfade transitions. */
export function HeroBackgroundCarousel() {
  const reduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);

  /** Moves the carousel one step forward, looping after the last slide. */
  const handleNextSlide = () => {
    setCurrentIndex((current) => (current + 1) % heroCarouselSlides.length);
  };

  /** Jumps directly to the selected slide index. */
  const handleSelectSlide = (targetIndex: number) => {
    setCurrentIndex(targetIndex);
  };

  useEffect(() => {
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      handleNextSlide();
    }, 6000);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroCarouselSlides[0].imageUrl})` }}
      />
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={heroCarouselSlides[currentIndex].id}
          initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroCarouselSlides[currentIndex].imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(1.1) saturate(1.05)",
          }}
          role="img"
          aria-label={heroCarouselSlides[currentIndex].alt}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-slate-950/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/45 to-slate-950/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-5 z-20 flex justify-center">
        <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-slate-950/35 px-3 py-2 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            {heroCarouselSlides.map((slide, index) => {
              const isActive = index === currentIndex;

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => handleSelectSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    isActive ? "w-10 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                  aria-current={isActive}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
