import type { Metadata } from "next";
import LegalHero from "@/components/LegalHero";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: `Impressum (Platzhalter) — ${company.name} Demo`,
};

export default function ImpressumPage() {
  return (
    <>
      <LegalHero eyebrow="// Rechtliches" title="Impressum" />
      <div className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <div className="flex flex-col gap-10 text-sm leading-relaxed text-ink/60">
            <section>
              <h2 className="font-display mb-3 text-xl text-ink">Angaben gemäß § 5 DDG (Platzhalter)</h2>
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
              <h2 className="font-display mb-3 text-xl text-ink">Kontakt</h2>
              <p>
                Telefon: {company.phone}
                <br />
                E-Mail: {company.email}
              </p>
            </section>

            <section>
              <h2 className="font-display mb-3 text-xl text-ink">Vertretungsberechtigt</h2>
              <p>Lena Wachowiak (fiktive Geschäftsführung, Platzhaltername)</p>
            </section>

            <section>
              <h2 className="font-display mb-3 text-xl text-ink">Umsatzsteuer-Identifikationsnummer</h2>
              <p>DE 000 000 000 (Platzhalter, keine reale USt-IdNr.)</p>
            </section>

            <section>
              <h2 className="font-display mb-3 text-xl text-ink">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p>Lena Wachowiak, Anschrift wie oben (Platzhalter)</p>
            </section>

            <section>
              <h2 className="font-display mb-3 text-xl text-ink">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
                bereit. Da dieses Unternehmen fiktiv ist, existiert hierzu kein realer Verweis.
                Eine echte Kundenseite würde an dieser Stelle auf ec.europa.eu/consumers/odr
                verlinken.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-3 text-xl text-ink">Bildnachweise</h2>
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
