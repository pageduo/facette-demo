"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { company } from "@/lib/content";
import { img } from "@/lib/images";
import AmbientField from "./AmbientField";
import KineticHeadline from "./KineticHeadline";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      <Image
        src={img.hero}
        alt=""
        fill
        priority
        className="object-cover opacity-70"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink" />
      <AmbientField />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="eyebrow text-live-accent"
        >
          {"// Markendesign-Studio, "}
          {company.city}
        </motion.p>

        <h1 className="font-display mt-6 max-w-4xl text-[13vw] leading-[0.98] text-paper sm:text-[8vw] lg:text-[6vw]">
          <KineticHeadline text={company.claim} />
          <br />
          <KineticHeadline text={company.claimSecondLine} italic delayOffset={0.3} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-8 max-w-md text-base leading-relaxed text-paper/70 sm:text-lg"
        >
          {company.subline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <MagneticButton>
            <a
              href="#kontakt"
              data-cursor="Los geht's"
              className="font-label flex items-center gap-2 rounded-full bg-live-accent px-7 py-4 text-sm font-semibold text-ink transition"
            >
              Projekt besprechen
            </a>
          </MagneticButton>
          <a
            href="#arbeiten"
            data-cursor="Ansehen"
            className="font-label link-underline text-sm font-medium text-paper/80 hover:text-paper"
          >
            Arbeiten ansehen ↓
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-label text-[10px] uppercase tracking-[0.3em] text-paper/50">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-paper/40"
          />
        </div>
      </motion.div>
    </section>
  );
}
