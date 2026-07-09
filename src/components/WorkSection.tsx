"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { work } from "@/lib/content";
import WorkCard from "./WorkCard";
import Reveal from "./Reveal";

// Pflicht-Interaktionselement + Referenzen-Galerie in einem: Die Karten liegen
// in einem breiten Track, der per vertikalem Scroll horizontal durchfährt
// (gepinnt via sticky), während Hover/Fokus auf einer Karte die komplette
// Seite (Verlaufsflächen, Cursor, Fortschrittsleiste) in die Akzentfarbe
// dieses Projekts taucht — die zentrale visuelle Idee des Studios.
export default function WorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxTranslate, setMaxTranslate] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewport = window.innerWidth;
      setMaxTranslate(Math.max(trackWidth - viewport, 0));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);

  return (
    <section id="arbeiten" ref={sectionRef} className="relative bg-ink" style={{ height: "320vh" }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-24">
        <div className="mx-auto mb-10 w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="eyebrow text-live-accent">{"// 01 Arbeiten"}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-4 max-w-2xl text-4xl text-paper sm:text-5xl">
              Sechs Marken, sechs Farben —{" "}
              <span className="font-display-italic text-live-accent">ein Studio.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 max-w-lg text-sm text-paper/50">
              Bewege den Cursor über ein Projekt — die Seite nimmt die Farbe der Marke an.
            </p>
          </Reveal>
        </div>

        <motion.div ref={trackRef} style={{ x }} className="flex gap-6 pl-5 sm:gap-8 sm:pl-8">
          {work.map((item, i) => (
            <WorkCard key={item.slug} item={item} index={i} total={work.length} />
          ))}
          <div className="w-[4vw] shrink-0" aria-hidden />
        </motion.div>
      </div>
    </section>
  );
}
