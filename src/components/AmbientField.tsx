// Rein dekorative, unscharfe Verlaufsflächen im Hintergrund. Sie referenzieren
// die CSS-Variable --live-accent direkt per inline style (nicht über eine
// Tailwind-Klasse), damit sie sich ohne React-Re-Render sofort mitfärben,
// sobald AccentProvider die Variable beim Hover auf ein Arbeiten-Projekt ändert.
export default function AmbientField({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="animate-float-a absolute -left-1/4 top-[-10%] h-[70vh] w-[70vh] rounded-full opacity-40 blur-[110px] transition-colors duration-700"
        style={{ backgroundColor: "var(--live-accent)" }}
      />
      <div
        className="animate-float-b absolute -right-1/4 bottom-[-15%] h-[60vh] w-[60vh] rounded-full opacity-30 blur-[110px] transition-colors duration-700"
        style={{ backgroundColor: "var(--live-accent-soft)" }}
      />
    </div>
  );
}
