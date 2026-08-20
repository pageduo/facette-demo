import type { Metadata } from "next";
import LegalHero from "@/components/LegalHero";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: `Impressum (Platzhalter) | ${company.name} Demo`,
};

export default function ImpressumPage() {
  return (
    <>
      <LegalHero eyebrow="// Rechtliches" title="Impressum" />
      <div className="bg-walnut-shadow px-[var(--gutter)]">
        <div className="mx-auto max-w-3xl py-[8vh]">
          <div className="flex flex-col gap-10 t-prose text-warm-cream/70">
            <section>
              <h2 className="t-heading-sm mb-4 text-warm-cream">Angaben gemäß § 5 DDG (Platzhalter)</h2>
              <p>
                {company.fullName} (fiktiv)
                <br />
                {company.address.street}
                <br />
                {company.address.zip} {company.address.city}
                <br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="t-heading-sm mb-4 text-warm-cream">Kontakt</h2>
              <p>
                Telefon: {company.phone}
                <br />
                E-Mail: {company.email}
              </p>
            </section>

            <section>
              <h2 className="t-heading-sm mb-4 text-warm-cream">Vertretungsberechtigt</h2>
              <p>Lena Wachowiak (fiktive Geschäftsführung, Platzhaltername)</p>
            </section>

            <section>
              <h2 className="t-heading-sm mb-4 text-warm-cream">Umsatzsteuer-Identifikationsnummer</h2>
              <p>DE 000 000 000 (Platzhalter, keine reale USt-IdNr.)</p>
            </section>

            <section>
              <h2 className="t-heading-sm mb-4 text-warm-cream">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p>Lena Wachowiak, Anschrift wie oben (Platzhalter)</p>
            </section>

            <section>
              <h2 className="t-heading-sm mb-4 text-warm-cream">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
                bereit. Da dieses Unternehmen fiktiv ist, existiert hierzu kein realer Verweis.
                Eine echte Kundenseite würde an dieser Stelle auf ec.europa.eu/consumers/odr
                verlinken.
              </p>
            </section>

            <section>
              <h2 className="t-heading-sm mb-4 text-warm-cream">Bildnachweise</h2>
              <p>
                Die auf dieser Demo-Website verwendeten Fotografien stammen von
                Unsplash-Fotograf:innen und werden im Rahmen der Unsplash-Lizenz zu
                Demonstrationszwecken genutzt. Für eine echte Kundenseite sind eigene oder
                lizenzierte Aufnahmen zu verwenden.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
