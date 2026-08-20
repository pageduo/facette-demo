"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import FacetteMark from "./FacetteMark";
import { company, contact } from "@/lib/content";

/**
 * Sektion 06 — Kontakt. Die Formularsprache folgt der Zurückhaltung der
 * Geisterbuttons: keine Kästen, nur Grundlinien. Der eine gefüllte Button der
 * Seite steht hier, seine Seltenheit ist das Signal.
 *
 * Demo-Formular: es wird nichts versendet, der Zustand bleibt im Browser.
 */
export default function Contact() {
  const [budget, setBudget] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  return (
    <section id="kontakt" className="relative bg-walnut-shadow px-[var(--gutter)] py-[16vh]">
      <div aria-hidden className="rim-light pointer-events-none absolute inset-0" />

      <div className="relative grid grid-cols-1 gap-[clamp(31px,6vw,68px)] lg:grid-cols-[1fr_1fr]">
        {/* Links: die Aufforderung, dahinter das Objekt ein letztes Mal */}
        <div className="relative isolate">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <FacetteMark
              drawn={false}
              className="absolute -top-[10%] left-1/2 aspect-square w-[min(70vw,440px)] -translate-x-1/2 opacity-20"
            />
          </div>
          <Reveal className="relative">
            <p className="t-label text-driftwood">06 / Kontakt</p>
            <h2 className="mt-4 t-heading">
              {contact.heading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-8 t-body max-w-[30ch] text-warm-cream/85">{contact.body}</p>

            <hr className="rule-dashed my-8 max-w-[30ch]" />

            <address className="not-italic">
              <a href={company.phoneHref} className="t-subheading link-rule block w-fit">
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="t-subheading link-rule mt-4 block w-fit"
              >
                {company.email}
              </a>
              <p className="mt-6 t-label text-driftwood">
                {company.address.street}, {company.address.zip} {company.address.city}
              </p>
            </address>
          </Reveal>
        </div>

        {/* Rechts: das Formular */}
        <Reveal delay={0.1}>
          <form
            className="flex flex-col gap-[clamp(24px,3vw,41px)]"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div>
              <label htmlFor="name" className="t-legal block text-driftwood">
                Name
              </label>
              <input id="name" name="name" required className="field-rule mt-2" placeholder="Ihr Name" />
            </div>

            <div>
              <label htmlFor="email" className="t-legal block text-driftwood">
                E-Mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="field-rule mt-2"
                placeholder="name@unternehmen.de"
              />
            </div>

            <fieldset>
              <legend className="t-legal text-driftwood">Rahmen</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {contact.budgets.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setBudget(option)}
                    aria-pressed={budget === option}
                    className="btn-ghost"
                    style={
                      budget === option
                        ? { background: "var(--color-warm-cream)", color: "var(--color-walnut-shadow)" }
                        : undefined
                    }
                  >
                    {option}
                  </button>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="message" className="t-legal block text-driftwood">
                Worum geht es
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="field-rule mt-2 resize-none"
                placeholder="Zwei Sätze reichen."
              />
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <button type="submit" className="btn-pill">
                Gespräch anfragen
              </button>
              {sent && (
                <span className="t-label text-ember-accent" role="status">
                  Demo — es wurde nichts versendet
                </span>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
