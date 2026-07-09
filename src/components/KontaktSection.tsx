import { company } from "@/lib/content";
import Reveal from "./Reveal";
import MapEmbed from "./MapEmbed";
import ContactForm from "./ContactForm";
import FAQAccordion from "./FAQAccordion";

export default function KontaktSection() {
  const fullAddress = `${company.address.street}, ${company.address.zip} ${company.address.city}`;

  return (
    <section id="kontakt" className="bg-paper py-28 text-ink sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="eyebrow text-accent-dark">{"// 05 Über uns & Kontakt"}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-4 max-w-2xl text-4xl text-ink sm:text-5xl">
            {company.name} — seit {company.founded} in {company.city}.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/60">{company.subline}</p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal delay={0.1} className="flex flex-col gap-10">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="eyebrow text-ink/40">Adresse</span>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {company.address.street}
                  <br />
                  {company.address.zip} {company.address.city}
                </p>
              </div>
              <div>
                <span className="eyebrow text-ink/40">Öffnungszeiten</span>
                <ul className="mt-3 flex flex-col gap-1 text-sm text-ink/70">
                  {company.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4">
                      <span>{h.day}</span>
                      <span className="text-ink/50">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="eyebrow text-ink/40">E-Mail</span>
                <p className="mt-3 text-sm">
                  <a href={`mailto:${company.email}`} className="link-underline text-ink/70 hover:text-ink">
                    {company.email}
                  </a>
                </p>
              </div>
              <div>
                <span className="eyebrow text-ink/40">Telefon</span>
                <p className="mt-3 text-sm">
                  <a href={company.phoneHref} className="link-underline text-ink/70 hover:text-ink">
                    {company.phone}
                  </a>
                </p>
              </div>
            </div>

            <MapEmbed query={fullAddress} title={`${company.name} auf der Karte`} />
          </Reveal>

          <Reveal delay={0.2}>
            <ContactForm />
          </Reveal>
        </div>

        <div className="mt-24">
          <Reveal>
            <span className="eyebrow text-accent-dark">Häufige Fragen</span>
          </Reveal>
          <div className="mt-6">
            <FAQAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}
