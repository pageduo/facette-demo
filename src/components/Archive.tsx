"use client";

import Image from "next/image";
import { work } from "@/lib/content";
import { img } from "@/lib/images";

/**
 * Sektion 03 — das Archiv. Jede Arbeit bekommt ein eigenes Vollbild und legt
 * sich beim Scrollen über die vorige: sechs Blätter auf einem Stapel. Innerhalb
 * jedes Blatts gilt wieder das Signatur-Layout (Überschrift links, Objekt
 * mittig, Beschreibung rechts).
 *
 * Die Bilder sind warm gradiert und hart beschnitten, keine runden Masken.
 */
export default function Archive() {
  return (
    <section id="archiv" className="relative bg-walnut-shadow">
      <div className="px-[var(--gutter)] pt-[14vh]">
        <p className="t-label text-driftwood">03 / Archiv</p>
        <h2 className="mt-4 t-heading">Sechs Marken, aus jedem Winkel</h2>
        <hr className="rule-dashed mt-8" />
      </div>

      {work.map((item, i) => (
        <article
          key={item.slug}
          className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden border-t border-dashed border-cork-border bg-walnut-shadow"
          style={{ zIndex: i + 1 }}
        >
          <div aria-hidden className="rim-light pointer-events-none absolute inset-0" />

          {/* Kopfzeile des Blatts: Katalognummer und Jahr.
              Der Abstand nach oben hält die Zeile unter der festen Kopfzeile. */}
          <div className="relative flex items-baseline justify-between px-[var(--gutter)] pt-24">
            <span className="t-label text-ember-accent">
              {String(i + 1).padStart(2, "0")} / {String(work.length).padStart(2, "0")}
            </span>
            <span className="t-label text-driftwood">{item.year}</span>
          </div>

          <div className="relative grid flex-1 grid-cols-1 items-center gap-[clamp(18px,4vw,45px)] px-[var(--gutter)] py-6 lg:grid-cols-[1fr_minmax(240px,34%)_1fr]">
            {/* Links: die Behauptung */}
            <div className="order-2 lg:order-none">
              <h3 className="t-heading">{item.heading}</h3>
              <p className="mt-5 t-label text-driftwood">{item.brand}</p>
            </div>

            {/* Mitte: das Artefakt */}
            <div className="order-1 lg:order-none">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px] overflow-hidden">
                <Image
                  src={img.work[item.slug]}
                  alt={`${item.brand}: ${item.discipline}`}
                  fill
                  sizes="(max-width: 1024px) 70vw, 34vw"
                  className="object-cover"
                  style={{ filter: "saturate(0.72) contrast(1.12) brightness(0.82) sepia(0.16)" }}
                />
                {/* Warmes Streiflicht statt Schlagschatten */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(70% 55% at 70% 18%, rgba(255,237,215,0.14), transparent 65%), linear-gradient(to top, rgba(16,9,4,0.75), transparent 55%)",
                  }}
                />
              </div>
            </div>

            {/* Rechts: die Erklärung */}
            <div className="order-3 lg:order-none">
              <p className="t-body max-w-[32ch] text-warm-cream/85">{item.description}</p>
              <hr className="rule-dashed my-5 max-w-[32ch]" />
              <dl className="flex flex-wrap gap-x-8 gap-y-2">
                <div>
                  <dt className="t-legal text-driftwood">Disziplin</dt>
                  <dd className="t-label mt-1">{item.discipline}</dd>
                </div>
                <div>
                  <dt className="t-legal text-driftwood">Material</dt>
                  <dd className="t-label mt-1">{item.material}</dd>
                </div>
              </dl>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
