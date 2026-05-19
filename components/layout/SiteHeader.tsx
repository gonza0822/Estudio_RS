"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { navItems } from "@/lib/content/siteContent";

/** Shows desktop navigation and a collapsible mobile menu. */
export function SiteHeader() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-base font-semibold tracking-tight text-slate-950"
            aria-label="Ir al inicio"
          >
            Estudio SR
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegación principal">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium text-slate-700 transition-colors hover:text-slate-950",
                    isActive && "text-slate-950",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="group relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
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
      </header>

      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-[60] bg-slate-950/45 backdrop-blur-[1px] md:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Cerrar menú lateral"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              id="mobile-menu"
              aria-label="Navegación móvil"
              className="fixed inset-y-0 left-0 z-[70] w-[84%] max-w-xs border-r border-slate-700/70 bg-slate-950/92 p-6 md:hidden"
              initial={reduceMotion ? false : { x: "-100%" }}
              animate={{ x: 0 }}
              exit={reduceMotion ? undefined : { x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-semibold tracking-tight text-slate-100"
              >
                Estudio SR
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
                        "rounded-md px-3 py-3 text-base font-medium text-slate-100",
                        "transition-colors hover:bg-white/10 hover:text-white",
                        isActive && "bg-white/15 text-white",
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
