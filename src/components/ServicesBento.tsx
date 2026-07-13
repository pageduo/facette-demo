"use client";

import { services, work } from "@/lib/content";
import { useAccent } from "@/lib/accent";
import Reveal from "./Reveal";

const layout: Record<string, string> = {
  strategie: "md:col-span-2 md:row-span-2",
  identitaet: "md:col-span-2 md:row-span-1 md:col-start-3 md:row-start-1",
  verpackung: "md:col-span-2 md:row-span-1 md:col-start-3 md:row-start-2",
  digital: "md:col-span-2 md:row-span-1 md:col-start-1 md:row-start-3",
  editorial: "md:col-span-1 md:row-span-1 md:col-start-3 md:row-start-3",
  raum: "md:col-span-1 md:row-span-1 md:col-start-4 md:row-start-3",
};

export default function ServicesBento() {
  const { setAccent } = useAccent();

  return (
    <section id="leistungen" className="relative bg-graphite py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="eyebrow text-live-accent">{"// 02 Leistungen"}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-4 max-w-2xl text-4xl text-paper sm:text-5xl">
            Alles, was eine Marke <span className="font-display-italic">braucht</span>, und ein
            paar Dinge, die sie überrascht.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-4 md:grid-rows-3">
          {services.map((service, i) => {
            const accent = work[i % work.length].color;
            return (
              <Reveal key={service.key} delay={0.05 * i} className={layout[service.key]}>
                <div
                  onMouseEnter={() => setAccent(accent)}
                  onMouseLeave={() => setAccent(null)}
                  onFocus={() => setAccent(accent)}
                  onBlur={() => setAccent(null)}
                  tabIndex={0}
                  data-accent={accent}
                  className="group relative flex h-full min-h-[180px] flex-col justify-between overflow-hidden rounded-3xl border border-paper/10 bg-graphite-light p-7 transition-colors duration-500 hover:border-transparent"
                >
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                    style={{ backgroundColor: accent }}
                  />
                  <span
                    className="font-label text-xs font-semibold tracking-[0.2em]"
                    style={{ color: accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative z-10">
                    <h3 className="font-display text-2xl text-paper">{service.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-paper/60">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
