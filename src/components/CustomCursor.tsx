"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useAccent } from "@/lib/accent";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 320, mass: 0.5 });
  const springY = useSpring(y, { damping: 30, stiffness: 320, mass: 0.5 });
  const dotX = useSpring(x, { damping: 40, stiffness: 700, mass: 0.2 });
  const dotY = useSpring(y, { damping: 40, stiffness: 700, mass: 0.2 });
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);
  const { setAccent } = useAccent();

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    // Zentrale Quelle für Cursor-Label UND Live-Akzentfarbe: beides hängt am
    // selben mousemove-Handler. So korrigiert sich die Akzentfarbe von selbst
    // bei der nächsten Mausbewegung, auch wenn ein reines Scroll-Event (ohne
    // Mausbewegung) das mouseleave einer Arbeiten-Karte "verschluckt" hätte.
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const cursorTarget = (e.target as HTMLElement).closest("[data-cursor]");
      setLabel(cursorTarget ? cursorTarget.getAttribute("data-cursor") : null);
      const accentTarget = (e.target as HTMLElement).closest("[data-accent]");
      setAccent(accentTarget ? accentTarget.getAttribute("data-accent") : null);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y, setAccent]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-2 w-2 rounded-full bg-live-accent md:block"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:flex"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      >
        <AnimatePresence>
          {label && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="font-label flex h-24 w-24 items-center justify-center rounded-full border border-live-accent bg-ink/80 text-center text-xs font-semibold uppercase tracking-wide text-paper shadow-lg backdrop-blur"
            >
              {label}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
