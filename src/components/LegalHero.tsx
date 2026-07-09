import { company } from "@/lib/content";

export default function LegalHero({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="bg-paper pb-16 pt-32 text-ink sm:pt-40">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="eyebrow text-accent-dark">{eyebrow}</p>
        <h1 className="font-display mt-4 text-3xl text-ink sm:text-5xl">{title}</h1>
        <div className="mt-6 rounded-2xl border border-accent/25 bg-accent/10 px-5 py-4 text-sm leading-relaxed text-ink/80">
          Diese Seite ist Teil einer <strong>Demo-Website</strong> zu Präsentationszwecken.{" "}
          {company.fullName} ist kein reales Unternehmen, alle Angaben sind Platzhalter. Für eine
          echte Kundenseite müssen diese Inhalte durch geprüfte, individuelle Angaben ersetzt
          werden.
        </div>
      </div>
    </div>
  );
}
