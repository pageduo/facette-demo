"use client";

import { useEffect, useRef, useState } from "react";
import FacetteMark from "./FacetteMark";
import { facets } from "@/lib/content";

/**
 * Sektion 02 — die sechs Leistungen als die sechs Flächen des Objekts. Das
 * Objekt bleibt beim Scrollen stehen; die jeweils angesteuerte Fläche leuchtet
 * auf. Am Zeigegerät steuert der Hover, ohne Zeigegerät die Sichtbarkeit der
 * Zeile.
 */
export default function Facets() {
  const [active, setActive] = useState<number | null>(null);
  const rowsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (fine) return; // Am Desktop übernimmt der Hover.

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(Number((visible.target as HTMLElement).dataset.index));
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 },
    );
    rowsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="facetten" className="relative bg-walnut-shadow py-[14vh]">
      <div className="grid grid-cols-1 gap-[clamp(31px,5vw,68px)] px-[var(--gutter)] lg:grid-cols-[minmax(280px,40%)_1fr]">
        {/* Das Objekt bleibt stehen */}
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center">
          <div className="w-full">
            <FacetteMark
              active={active}
              drawn={false}
              className="mx-auto aspect-square w-full max-w-[440px]"
            />
            <p className="mt-8 text-center t-label text-driftwood">
              {active === null ? "Sechs Flächen, ein Kern" : facets[active].lead}
            </p>
          </div>
        </div>

        {/* Die Facetten */}
        <div className="lg:py-[26vh]">
          <p className="t-label text-driftwood">02 / Facetten</p>
          <h2 className="mt-4 t-heading">Was wir schleifen</h2>
          <hr className="rule-dashed mt-8" />

          <ul onMouseLeave={() => setActive(null)}>
            {facets.map((facet, i) => (
              <li
                key={facet.index}
                data-index={i}
                ref={(el) => {
                  rowsRef.current[i] = el;
                }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                tabIndex={0}
                className="group cursor-default border-b border-dashed border-cork-border py-[clamp(18px,3vw,31px)] outline-none transition-colors duration-500 focus-visible:border-warm-cream"
              >
                <div className="flex items-baseline gap-[clamp(12px,2vw,24px)]">
                  <span
                    className={`t-label shrink-0 transition-colors duration-500 ${
                      active === i ? "text-ember-accent" : "text-driftwood"
                    }`}
                  >
                    {facet.index}
                  </span>
                  <h3
                    className={`t-display transition-opacity duration-500 ${
                      active === null || active === i ? "opacity-100" : "opacity-35"
                    }`}
                  >
                    {facet.title}
                  </h3>
                </div>
                <div
                  className={`grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    active === i ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden pl-[clamp(36px,6vw,74px)] t-body max-w-[46ch] text-warm-cream/75">
                    {facet.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
