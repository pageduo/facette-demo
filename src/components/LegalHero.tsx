import { company } from "@/lib/content";

export default function LegalHero({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="relative bg-walnut-shadow px-[var(--gutter)] pb-12 pt-[22vh]">
      <div aria-hidden className="rim-light pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-3xl">
        <p className="t-label text-ember-accent">{eyebrow}</p>
        <h1 className="mt-4 t-heading">{title}</h1>
        <hr className="rule-dashed my-8" />
        <p className="t-body text-warm-cream/70">
          Diese Seite gehört zu einer Demo-Website. {company.fullName} ist kein reales Unternehmen,
          alle Angaben sind Platzhalter. Für eine echte Kundenseite müssen diese Inhalte durch
          geprüfte, individuelle Angaben ersetzt werden.
        </p>
      </div>
    </div>
  );
}
