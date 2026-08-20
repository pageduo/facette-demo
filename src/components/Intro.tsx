"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, MotionValue } from "framer-motion";
import FacetteMark from "./FacetteMark";
import { company, overture, legalNote } from "@/lib/content";

/**
 * Sektion 00. Der Vorhang: Die Marke liegt zuerst als Vektor-Konstruktion auf
 * der Schneidematte des Studios. Beim Scrollen wird die Matte weggezogen, das
 * Objekt bekommt Material und steht am Ende allein im warmen Dunkeln.
 *
 * Die Sektion ist 240vh hoch, damit für diesen Übergang Scrollweg da ist; das
 * sichtbare Fenster bleibt per sticky bei 100vh.
 *
 * Der Fortschritt wird bewusst selbst gerechnet statt über useScroll: dessen
 * target/offset-Messung lief in dieser Verschachtelung (sticky-Kind in hoher
 * Sektion) wieder auf 0 zurück, sobald die Sektion den Viewport verließ — die
 * Matte blendete dadurch am Ende wieder ein.
 */
function useSectionProgress(ref: React.RefObject<HTMLElement | null>): MotionValue<number> {
  const progress = useMotionValue(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      // Scrollweg, über den das sticky-Kind stehen bleibt.
      const travel = Math.max(1, el.offsetHeight - window.innerHeight);
      const raw = (window.scrollY - top) / travel;
      progress.set(Math.min(1, Math.max(0, raw)));
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
  }, [ref, progress]);

  return progress;
}

export default function Intro() {
  const ref = useRef<HTMLElement>(null);
  const p = useSectionProgress(ref);

  // Die Matte verschwindet in der ersten Hälfte.
  const matOpacity = useTransform(p, [0, 0.42], [1, 0]);
  // Konstruktion wird zu Material.
  const blueprintOpacity = useTransform(p, [0.12, 0.48], [1, 0]);
  const solidOpacity = useTransform(p, [0.3, 0.62], [0, 1]);
  // Das Objekt rückt näher und dreht sich minimal aus der Achse.
  const markScale = useTransform(p, [0, 1], [0.82, 1.12]);
  const markRotate = useTransform(p, [0, 1], [-8, 6]);
  // Das Wortzeichen taucht erst auf, wenn das Objekt Material hat.
  const wordOpacity = useTransform(p, [0.44, 0.74], [0, 1]);
  const wordY = useTransform(p, [0.44, 1], [40, 0]);
  // Die Werkstattnotizen weichen der Bühne.
  const notesOpacity = useTransform(p, [0, 0.3], [1, 0]);
  const cardOpacity = useTransform(p, [0.62, 0.88], [0, 1]);

  return (
    <section ref={ref} id="intro" className="relative h-[240vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Schneidematte: Untergrund der Werkstatt, nur hier erlaubt */}
        <motion.div
          aria-hidden
          style={{ opacity: matOpacity }}
          className="absolute inset-0 bg-cutting-mat"
        >
          <div
            className="absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,237,215,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,237,215,0.5) 1px, transparent 1px)",
              backgroundSize: "68px 68px",
            }}
          />
        </motion.div>

        <div aria-hidden className="rim-light absolute inset-0" />

        {/* Das Objekt */}
        <motion.div
          style={{ scale: markScale, rotate: markRotate }}
          className="absolute inset-0 grid place-items-center"
        >
          <div className="relative aspect-square w-[min(74vw,520px)] drift">
            <motion.div style={{ opacity: blueprintOpacity }} className="absolute inset-0">
              <FacetteMark mode="blueprint" className="h-full w-full" />
            </motion.div>
            <motion.div style={{ opacity: solidOpacity }} className="absolute inset-0">
              <FacetteMark mode="solid" drawn={false} className="h-full w-full" />
            </motion.div>
          </div>
        </motion.div>

        {/* Werkstattnotizen — liegen zu Beginn wie Bleistiftvermerke auf der Matte */}
        <motion.div style={{ opacity: notesOpacity }} className="absolute inset-0">
          <div className="absolute left-[var(--gutter)] top-[18vh] max-w-[min(70vw,320px)]">
            <p className="t-label text-warm-cream/70">{overture.eyebrow}</p>
            <hr className="rule-dashed-soft my-4" />
            <p className="t-subheading">{overture.tagline}</p>
          </div>
          <p className="t-legal absolute right-[var(--gutter)] top-[18vh] max-w-[240px] text-right text-warm-cream/50">
            {legalNote}
          </p>
          <div className="absolute bottom-[12vh] left-[var(--gutter)] flex items-center gap-3">
            <span className="t-label text-warm-cream/60">Konstruktion</span>
            <span aria-hidden className="block h-px w-16 bg-warm-cream/30" />
            <span className="t-label text-warm-cream/60">6 Flächen</span>
          </div>
        </motion.div>

        {/* Wortzeichen — der einzige Mega-Moment der Seite */}
        <motion.div
          style={{ opacity: wordOpacity, y: wordY }}
          className="pointer-events-none absolute inset-x-0 bottom-[7vh] flex justify-center"
        >
          <span className="t-mega text-warm-cream/90">{company.name}</span>
        </motion.div>

        {/* Infokarte, sobald die Bühne dunkel ist */}
        <motion.div
          style={{ opacity: cardOpacity }}
          className="absolute left-[var(--gutter)] top-[20vh] hidden max-w-[300px] rounded-[var(--radius-cards)] border border-cork-border bg-walnut-shadow/70 p-6 backdrop-blur-sm lg:block"
        >
          <p className="t-caption">Gestaltet in Berlin, seit {company.founded}</p>
          <hr className="rule-dashed my-3" />
          <p className="t-body text-warm-cream/70">{overture.note}</p>
        </motion.div>

        {/* Scrollhinweis */}
        <motion.div
          style={{ opacity: cardOpacity }}
          className="absolute bottom-6 right-[var(--gutter)] flex items-center gap-3"
        >
          <span className="t-label text-driftwood">Scrollen</span>
          <span aria-hidden className="block h-px w-10 bg-driftwood" />
        </motion.div>
      </div>
    </section>
  );
}
