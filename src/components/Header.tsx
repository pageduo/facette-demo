"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { company, sections } from "@/lib/content";

const navSections = sections.filter((s) => s.id !== "hero");

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auf Unterseiten (Impressum, Datenschutz) liegt sofort ein heller
  // Seitenhintergrund unter dem Header statt des dunklen Hero — dort muss der
  // Header von Anfang an in seinem soliden, dunklen Zustand starten.
  const solid = scrolled || !isHome;
  const anchor = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid ? "bg-ink/85 shadow-lg shadow-black/20 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href={isHome ? "#hero" : "/"} className="font-label text-lg font-semibold tracking-wide text-paper">
            {company.name}
            <span className="text-live-accent">.</span>
          </Link>

          <nav className="font-label hidden items-center gap-8 lg:flex">
            {navSections.map((section) => (
              <a
                key={section.id}
                href={anchor(section.id)}
                data-cursor={section.label}
                className="link-underline text-sm font-medium tracking-wide text-paper/80 transition-colors hover:text-paper"
              >
                {section.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={anchor("kontakt")}
              data-cursor="Los geht's"
              className="font-label hidden items-center gap-2 rounded-full bg-live-accent px-5 py-2.5 text-sm font-semibold text-ink transition hover:opacity-90 sm:flex"
            >
              Projekt starten
            </a>
            <button
              aria-label="Menü öffnen"
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-paper lg:hidden"
            >
              <span className="h-px w-6 bg-current" />
              <span className="h-px w-6 bg-current" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-graphite text-paper lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <span className="font-label text-lg font-semibold">{company.name}</span>
              <button
                aria-label="Menü schließen"
                onClick={() => setMenuOpen(false)}
                className="relative h-10 w-10"
              >
                <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-paper" />
                <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-paper" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-start justify-center gap-2 overflow-y-auto px-8 py-10">
              {sections.map((section, i) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={anchor(section.id)}
                    onClick={() => setMenuOpen(false)}
                    className="font-display flex items-baseline gap-3 text-3xl text-paper/90 transition hover:text-live-accent"
                  >
                    <span className="font-label text-sm not-italic text-live-accent">
                      {section.number}
                    </span>
                    {section.label}
                  </a>
                </motion.div>
              ))}
            </nav>
            <div className="font-label flex flex-col gap-2 px-8 pb-10 text-sm text-paper/70">
              <a href={company.phoneHref}>{company.phone}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
