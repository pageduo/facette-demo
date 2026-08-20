"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import Reveal from "./Reveal";
import { stats, studio, testimonials } from "@/lib/content";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="t-display">
      {display}
      {suffix}
    </span>
  );
}

/**
 * Sektion 05 — das Studio. Erst die Haltung im Signatur-Layout, dann die
 * Zahlen als nüchterne Werkstattangaben, dann drei Stimmen.
 */
export default function Studio() {
  return (
    <section id="studio" className="relative bg-walnut-shadow px-[var(--gutter)] py-[16vh]">
      <div aria-hidden className="rim-light pointer-events-none absolute inset-0" />

      <div className="relative grid grid-cols-1 gap-[clamp(31px,6vw,68px)] lg:grid-cols-2">
        <Reveal>
          <p className="t-label text-driftwood">05 / Studio</p>
          <h2 className="mt-4 t-heading">
            {studio.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="t-body max-w-[38ch] text-warm-cream/85">{studio.body}</p>
          <dl className="mt-8">
            {studio.credits.map((credit) => (
              <div
                key={credit.role}
                className="flex items-baseline justify-between border-b border-dashed border-cork-border py-3"
              >
                <dt className="t-label text-driftwood">{credit.role}</dt>
                <dd className="t-caption">{credit.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Werkstattangaben */}
      <div className="relative mt-[10vh] grid grid-cols-2 gap-[clamp(18px,3vw,41px)] border-t border-dashed border-cork-border pt-[clamp(31px,5vw,68px)] lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.06}>
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="mt-3 t-label text-driftwood">{stat.label}</p>
          </Reveal>
        ))}
      </div>

      {/* Stimmen */}
      <div className="relative mt-[10vh] grid grid-cols-1 gap-[clamp(24px,4vw,45px)] md:grid-cols-3">
        {testimonials.map((item, i) => (
          <Reveal key={item.author} delay={i * 0.08}>
            <figure className="h-full rounded-[var(--radius-cards)] border border-cork-border p-6">
              <blockquote className="t-body text-warm-cream/85">{item.quote}</blockquote>
              <hr className="rule-dashed my-5" />
              <figcaption>
                <span className="t-caption block">{item.author}</span>
                <span className="t-label mt-1 block text-driftwood">{item.role}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
