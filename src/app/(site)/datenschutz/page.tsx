import type { Metadata } from "next";
import LegalHero from "@/components/LegalHero";
import ResetConsentButton from "@/components/ResetConsentButton";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: `Datenschutzerklärung (Platzhalter) | ${company.name} Demo`,
};

export default function DatenschutzPage() {
  return (
    <>
      <LegalHero eyebrow="// Rechtliches" title="Datenschutzerklärung" />
      <div className="bg-walnut-shadow px-[var(--gutter)]">
        <div className="mx-auto max-w-3xl py-[8vh]">
          <div className="flex flex-col gap-10 t-prose text-warm-cream/70">
            <section>
              <h2 className="t-heading-sm mb-4 text-warm-cream">1. Verantwortlicher</h2>
              <p>
                {company.fullName} (fiktiv), {company.address.street}, {company.address.zip}{" "}
                {company.address.city}. E-Mail: {company.email}. Diese Angaben sind Platzhalter
                für eine Demo-Website und beziehen sich auf kein reales Unternehmen.
              </p>
            </section>

            <section>
              <h2 className="t-heading-sm mb-4 text-warm-cream">2. Hosting & Server-Logfiles</h2>
              <p>
                Diese Demo wird auf einer Vercel-Subdomain gehostet. Beim Aufruf der Seite werden
                technisch notwendige Zugriffsdaten (u. a. IP-Adresse, Datum, aufgerufene Seite)
                temporär verarbeitet, um die Auslieferung der Seite zu ermöglichen.
              </p>
            </section>

            <section>
              <h2 className="t-heading-sm mb-4 text-warm-cream">3. Zugangsschutz per Google-Anmeldung</h2>
              <p>
                Diese Demo ist nicht öffentlich zugänglich. Der Zugriff erfolgt über eine Anmeldung
                mit einem freigeschalteten Google-Konto. Dabei wird von Google Ihre E-Mail-Adresse
                zur Prüfung der Zugriffsberechtigung abgerufen; anschließend wird ein technisch
                notwendiges, verschlüsseltes Sitzungs-Cookie gesetzt, um Sie während des Besuchs
                angemeldet zu halten. Es werden keine weiteren Profildaten gespeichert.
              </p>
            </section>

            <section>
              <h2 className="t-heading-sm mb-4 text-warm-cream">4. Schriftarten</h2>
              <p>
                Die verwendete Schriftart (Inter) wird über{" "}
                <code>next/font</code> lokal ausgeliefert. Es findet keine Verbindung zu
                Google-Servern statt, es werden keine Daten an Google übertragen.
              </p>
            </section>

            <section id="cookies">
              <h2 className="t-heading-sm mb-4 text-warm-cream">5. Cookies & Einwilligung</h2>
              <p>
                Diese Website verwendet ausschließlich technisch notwendige Cookies (u. a. für die
                Anmeldung) sowie einen lokalen Speichereintrag (Local Storage), um Ihre
                Cookie-Auswahl zu merken. Analyse- oder Marketing-Cookies werden nicht gesetzt.
              </p>
              <div className="mt-4">
                <ResetConsentButton className="btn-ghost" />
              </div>
            </section>

            <section>
              <h2 className="t-heading-sm mb-4 text-warm-cream">6. Externe Inhalte</h2>
              <p>
                Diese Demo bindet keine Karten, Videos oder sonstigen Inhalte Dritter ein. Die
                Projektbilder werden über ein Bild-CDN ausgeliefert; dabei wird Ihre IP-Adresse
                technisch bedingt an den Bildanbieter übertragen.
              </p>
            </section>

            <section>
              <h2 className="t-heading-sm mb-4 text-warm-cream">7. Kontaktformular</h2>
              <p>
                Das Kontaktformular auf dieser Demo-Website versendet keine echten Daten. Es ist
                rein zu Demonstrationszwecken funktionsfähig gestaltet. In einer echten Umsetzung
                würden hier eingegebene Daten (Name, E-Mail, Nachricht) ausschließlich zur
                Bearbeitung Ihrer Anfrage verarbeitet und nach Erledigung gelöscht.
              </p>
            </section>

            <section>
              <h2 className="t-heading-sm mb-4 text-warm-cream">8. Ihre Rechte</h2>
              <p>
                Ihnen stehen die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der
                Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer
                personenbezogenen Daten nach Art. 15–21 DSGVO zu.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
