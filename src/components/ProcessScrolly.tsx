"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Reveal from "./Reveal";
import { process } from "@/lib/content";
import { img } from "@/lib/images";

// Apple-artiges Scrollytelling: das Hintergrundbild bleibt gepinnt (sticky),
// während beim Weiterscrollen für jeden Prozessschritt ein neuer Textblock
// federnd ins Bild hineinrutscht.
export default function ProcessScrolly() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const index = Math.min(process.length - 1, Math.max(0, Math.floor(value * process.length)));
    setActive(index);
  });

  const step = process[active];

  return (
    <section id="prozess" className="bg-ink">
      <div className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 sm:pt-32">
        <Reveal>
          <span className="eyebrow text-live-accent">{"// 03 Prozess"}</span>
          <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight text-paper sm:text-5xl">
            Fünf Schritte von der Frage zur fertigen Marke.
          </h2>
        </Reveal>
      </div>

      <div ref={containerRef} style={{ height: `${process.length * 100}vh` }} className="relative mt-16">
        <div className="sticky top-0 h-screen overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image src={img.process[active]} alt={step.title} fill sizes="100vw" className="object-cover" />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/60" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-8 px-5 pb-16 sm:px-8 sm:pb-24">
            <div className="font-label flex gap-3">
              {process.map((s, i) => (
                <span
                  key={s.number}
                  className="h-1.5 max-w-16 flex-1 rounded-full transition-colors duration-500"
                  style={{ backgroundColor: i <= active ? "var(--live-accent)" : "rgba(246,241,231,0.2)" }}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 48, rotate: -3 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  transition: { type: "spring", stiffness: 190, damping: 18 },
                }}
                exit={{ opacity: 0, y: -16, transition: { duration: 0.25 } }}
                className="max-w-2xl"
              >
                <span className="font-label eyebrow text-live-accent">
                  Schritt {step.number} / 0{process.length}
                </span>
                <h3 className="font-display mt-3 text-3xl text-paper sm:text-5xl">{step.title}</h3>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-paper/75 sm:text-lg">
                  {step.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
