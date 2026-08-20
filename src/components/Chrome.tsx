"use client";

import { useEffect, useState } from "react";
import { company, nav, sections } from "@/lib/content";

/**
 * Die gesamte persistente Oberfläche: vier Navigationspunkte, das Wortzeichen,
 * die Seriennummer am rechten Rand und der Sektionszähler unten links.
 * Transparent über allem, nie mehr als Mikrotypografie.
 */
export default function Chrome() {
  const [active, setActive] = useState<string>("intro");
  // Seriennummer und Sektionszähler gehören zur Ein-Seiten-Erfahrung. Auf
  // Impressum und Datenschutz gibt es keine Sektionen, dort bleiben sie weg.
  const [onePager, setOnePager] = useState(false);

  // Bewusst gerechnet statt per IntersectionObserver: die Sektionen sind sehr
  // unterschiedlich hoch, dadurch sind die Schnittverhältnisse nicht
  // vergleichbar und der Zähler blieb auf der längsten Sektion hängen.
  // Maßgeblich ist, welche Sektion die Bildschirmmitte belegt.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setOnePager(Boolean(document.getElementById("intro")));
      const line = window.scrollY + window.innerHeight / 2;
      let found: string = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= line) found = id;
      }
      setActive(found);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  const current = sections.find((s) => s.id === active) ?? sections[0];
  // Sieben Sektionen, vier Navigationspunkte: die Zwischensektionen zählen zum
  // vorangehenden Punkt, damit die Kopfzeile nie ohne Markierung dasteht.
  const navGroup: Record<string, string> = {
    intro: "intro",
    manifest: "intro",
    facetten: "facetten",
    archiv: "archiv",
    verfahren: "archiv",
    studio: "kontakt",
    kontakt: "kontakt",
  };
  const activeNav = navGroup[active] ?? "intro";

  return (
    <>
      {/* Kopfzeile */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[var(--gutter)] py-6 mix-blend-difference">
        <a href="#intro" className="t-caption tracking-[0.14em]">
          {company.name}
        </a>
        <nav className="flex items-center gap-[clamp(14px,2.4vw,31px)]">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`t-label link-rule ${activeNav === item.id ? "nav-active" : ""}`}
              aria-current={activeNav === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Seriennummer, senkrecht am rechten Rand.
          writing-mode statt rotate: nur so ist die Layoutbox tatsächlich schmal
          und läuft nicht quer durch den Fließtext der Sektionen. */}
      {onePager && (
        <div
          aria-hidden
          className="pointer-events-none fixed right-2 top-1/2 z-40 hidden -translate-y-1/2 md:block"
        >
          <span className="t-micro whitespace-nowrap text-driftwood tracking-[0.3em] [writing-mode:vertical-rl]">
            {company.serial}
          </span>
        </div>
      )}

      {/* Sektionszähler unten links */}
      {onePager && (
        <div
          aria-hidden
          className="pointer-events-none fixed bottom-6 left-[var(--gutter)] z-40 hidden items-center gap-3 md:flex"
        >
          <span className="t-label text-ember-accent">{current.number}</span>
          <span className="block h-px w-8 bg-cork-border" />
          <span className="t-label text-driftwood">{current.label}</span>
        </div>
      )}
    </>
  );
}
