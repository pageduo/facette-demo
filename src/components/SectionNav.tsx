"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { sections } from "@/lib/content";

// Fixierte, nummerierte Sektionsnavigation am rechten Bildschirmrand. Ein
// IntersectionObserver bestimmt die aktuell sichtbare Sektion; ein Klick auf
// eine Ziffer scrollt sanft dorthin. Nur auf großen Bildschirmen sichtbar —
// mobil übernimmt das Vollbild-Menü diese Aufgabe. Existiert nur auf der
// Ein-Seiten-Startseite, da Rechtsseiten keine dieser Sektionen enthalten.
export default function SectionNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  if (!isHome) return null;

  return (
    <nav
      aria-label="Sektionen"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 xl:flex"
    >
      {sections.map((section) => {
        const isActive = active === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            data-cursor={section.label}
            className="group flex items-center gap-3"
          >
            <span
              className={`font-label text-[11px] tracking-[0.2em] transition-all duration-300 ${
                isActive ? "text-live-accent opacity-100" : "text-paper/40 opacity-0 group-hover:opacity-100"
              }`}
            >
              {section.number}
            </span>
            <span
              className={`h-2 rounded-full transition-all duration-300 ${
                isActive ? "w-6 bg-live-accent" : "w-2 bg-paper/30 group-hover:bg-paper/60"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
