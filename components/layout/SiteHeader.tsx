"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { FirmLogo } from "@/components/ui/FirmLogo";
import { cn } from "@/lib/cn";
import { firmContent, navItems } from "@/lib/content/siteContent";

/** Floating full-width nav that hides on scroll down and returns on scroll up. */
export function SiteHeader() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const isHome = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    /** Hides the bar while scrolling down; shows it again near the top or on scroll up. */
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (isMenuOpen) {
        setIsHidden(false);
        lastScrollY.current = currentY;
        return;
      }

      if (currentY < 48) {
        setIsHidden(false);
      } else if (delta > 6) {
        setIsHidden(true);
      } else if (delta < -6) {
        setIsHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "pointer-events-none fixed inset-x-0 top-0 z-50 pt-3 md:pt-4",
          reduceMotion ? "" : "transition-transform duration-300 ease-out",
          isHidden && !isMenuOpen ? "-translate-y-[120%]" : "translate-y-0",
        )}
      >
        <div className="pointer-events-auto w-full border-y border-navy/10 bg-cream/95 shadow-[0_8px_30px_rgba(6,64,138,0.16)] backdrop-blur-md">
          <Container className="flex h-16 items-center justify-between md:h-[4.5rem]">
            <Link href="/" aria-label={`Ir al inicio — ${firmContent.name}`}>
              <FirmLogo priority />
            </Link>

            <nav className="hidden items-center gap-6 md:flex" aria-label="Navegación principal">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium text-ink-muted transition-colors duration-200 hover:text-ink",
                      isActive && "text-navy",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <button
              type="button"
              className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-soft text-ink transition-colors duration-200 hover:bg-beige md:hidden"
              onClick={() => setIsMenuOpen((current) => !current)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <span className="pointer-events-none flex h-5 w-5 flex-col items-center justify-center gap-1">
                <span className="h-0.5 w-5 bg-current transition-all duration-300 ease-in-out group-aria-expanded:translate-y-[6px] group-aria-expanded:rotate-45" />
                <span className="h-0.5 w-5 bg-current transition-all duration-300 ease-in-out group-aria-expanded:opacity-0" />
                <span className="h-0.5 w-5 bg-current transition-all duration-300 ease-in-out group-aria-expanded:-translate-y-[6px] group-aria-expanded:-rotate-45" />
              </span>
            </button>
          </Container>
        </div>
      </header>

      {/* Reserves space under the floating bar on non-home pages. */}
      {!isHome ? <div className="h-20 md:h-[5.5rem]" aria-hidden="true" /> : null}

      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-[60] bg-ink/25 backdrop-blur-[1px] md:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Cerrar menú lateral"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              id="mobile-menu"
              aria-label="Navegación móvil"
              className="fixed inset-y-0 left-0 z-[70] w-[84%] max-w-xs border-r border-border-soft bg-cream p-6 shadow-lg md:hidden"
              initial={reduceMotion ? false : { x: "-100%" }}
              animate={{ x: 0 }}
              exit={reduceMotion ? undefined : { x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <FirmLogo />
              </Link>
              <nav className="mt-8 flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "rounded-xl px-3 py-3 text-base font-medium text-ink",
                        "transition-colors duration-200 hover:bg-beige",
                        isActive && "bg-beige text-navy",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
