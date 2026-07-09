"use client";

import { motion } from "framer-motion";

const word = {
  hidden: { y: "110%", rotate: 3 },
  visible: {
    y: "0%",
    rotate: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function KineticHeadline({
  text,
  className,
  italic = false,
  delayOffset = 0,
}: {
  text: string;
  className?: string;
  italic?: boolean;
  delayOffset?: number;
}) {
  const words = text.split(" ");
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.09, delayChildren: 0.15 + delayOffset },
    },
  };
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={container}
      className={`${className ?? ""} inline-block`}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 pr-[0.28em] align-bottom">
          <motion.span
            variants={word}
            className={`inline-block ${italic ? "font-display-italic" : ""}`}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
