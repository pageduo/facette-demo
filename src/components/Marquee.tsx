// Läuft als schmales Schriftband über die volle Viewport-Breite (via
// left-1/2 + w-screen aus dem begrenzten Elternlayout "ausgebrochen"); der
// Textstreifen wird dupliziert und per CSS-Keyframe (.animate-marquee)
// endlos nach links verschoben, sodass keine Lücke entsteht.
export default function Marquee({ text, repeat = 6 }: { text: string; repeat?: number }) {
  const items = Array.from({ length: repeat });

  return (
    <div className="pointer-events-none relative left-1/2 z-10 w-screen -translate-x-1/2 overflow-hidden border-y border-paper/15 py-3">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <div key={dup} className="font-label flex shrink-0 items-center">
            {items.map((_, i) => (
              <span
                key={i}
                className="mx-4 flex shrink-0 items-center gap-4 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.3em] text-paper/80"
              >
                {text}
                <span aria-hidden className="text-live-accent">
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
