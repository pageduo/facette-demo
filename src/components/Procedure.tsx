"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import { procedure } from "@/lib/content";

/**
 * Sektion 04 — das Verfahren als Werkstattprotokoll. Fünf Zeilen, getrennt
 * durch die gestrichelte Haarlinie des Systems. Die Schrittnummer läuft als
 * Skala am linken Rand mit.
 */
export default function Procedure() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={ref}
      id="verfahren"
      className="relative bg-walnut-shadow px-[var(--gutter)] py-[16vh]"
    >
      <p className="t-label text-driftwood">04 / Verfahren</p>
      <h2 className="mt-4 t-heading max-w-[16ch]">Fünf Schritte, kein Umweg</h2>

      <div className="relative mt-[8vh] pl-[clamp(18px,5vw,68px)]">
        {/* Fortschrittsskala: eine Haarlinie, die mitwächst */}
        <div aria-hidden className="absolute bottom-0 left-0 top-0 w-px bg-cork-border">
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="h-full w-px bg-ember-accent"
          />
        </div>

        {procedure.map((item, i) => (
          <Reveal key={item.step} delay={i * 0.04}>
            <div className="grid grid-cols-1 gap-3 border-b border-dashed border-cork-border py-[clamp(24px,4vw,45px)] md:grid-cols-[6ch_1fr_1.2fr] md:items-baseline md:gap-[clamp(18px,4vw,45px)]">
              <span className="t-display text-driftwood">{item.step}</span>
              <h3 className="t-heading-sm">{item.title}</h3>
              <p className="t-body max-w-[42ch] text-warm-cream/75">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
