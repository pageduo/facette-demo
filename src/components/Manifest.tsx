"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FacetteMark from "./FacetteMark";
import Reveal from "./Reveal";
import { manifest } from "@/lib/content";

/**
 * Sektion 01 — das Signatur-Layout des Systems: Überschrift links, Objekt
 * mittig, Fließtext rechts. Der einzige Ort auf der Seite mit gemischter
 * Schreibweise, deshalb trägt er die eigentliche Erklärung.
 */
export default function Manifest() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [-18, 18]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.86, 1, 0.86]);

  return (
    <section
      ref={ref}
      id="manifest"
      className="relative flex min-h-screen items-center bg-walnut-shadow py-[18vh]"
    >
      <div aria-hidden className="rim-light pointer-events-none absolute inset-0" />

      <div className="relative grid w-full grid-cols-1 items-center gap-[clamp(31px,6vw,68px)] px-[var(--gutter)] lg:grid-cols-[1fr_minmax(280px,38%)_1fr]">
        {/* Links: die Behauptung */}
        <Reveal>
          <h2 className="t-heading">
            {manifest.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        {/* Mitte: das Objekt */}
        <motion.div style={{ rotate, scale }} className="order-first lg:order-none">
          <FacetteMark className="mx-auto aspect-square w-full max-w-[420px]" drawn={false} />
        </motion.div>

        {/* Rechts: die einzige gemischtgeschriebene Stimme */}
        <Reveal delay={0.15}>
          <p className="t-body max-w-[34ch] text-warm-cream/85">{manifest.body}</p>
          <hr className="rule-dashed my-6 max-w-[34ch]" />
          <p className="t-label text-ember-accent">{manifest.credit}</p>
        </Reveal>
      </div>
    </section>
  );
}
