import { company } from "@/lib/content";
import Reveal from "./Reveal";
import Marquee from "./Marquee";
import StatsCounter from "./StatsCounter";
import Testimonials from "./Testimonials";

export default function StudioSection() {
  return (
    <section id="studio" className="relative bg-graphite py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="eyebrow text-live-accent">{"// 04 Studio"}</span>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl leading-tight text-paper sm:text-4xl lg:text-5xl">
              {company.usp}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col gap-4 text-sm leading-relaxed text-paper/60">
              <p>
                {company.name} wurde {company.founded} in {company.city} gegründet. Seither
                begleiten wir Marken über Sektorgrenzen hinweg: von der Bio-Bäckerei bis zum
                E-Mobility-Startup.
              </p>
              <p>
                Wir glauben nicht an das eine perfekte Logo. Wir glauben an Systeme, die sich
                anpassen können, ohne beliebig zu werden: Facette für Facette.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="my-16">
        <Marquee text="Identität · Verpackung · Digitale Bühne · Raum & Signage · Strategie · Editorial" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <StatsCounter />
        </Reveal>

        <div className="mt-20">
          <Reveal>
            <span className="eyebrow text-live-accent">Stimmen</span>
          </Reveal>
          <div className="mt-6">
            <Testimonials />
          </div>
        </div>
      </div>
    </section>
  );
}
