"use client";

/**
 * Das Objekt der Seite. Ein geschliffener Körper aus sechs Flächen, gezeichnet
 * wie eine Vektor-Konstruktion: gestrichelte Hilfskreise, orange Bézier-Griffe,
 * Ankerpunkte. Jede Fläche entspricht einer Facette aus `content.facets` —
 * `active` hebt die zugehörige Fläche hervor.
 *
 * Zwei Modi:
 *   "blueprint" — nur Konstruktion, keine Füllung (Intro auf der Schneidematte)
 *   "solid"     — geschliffener Körper mit warmer Ausleuchtung (Void-Sektionen)
 */

const SIZE = 400;
const C = SIZE / 2;
const R_OUTER = 156;
const R_INNER = 66;
const FACES = 6;

function pt(angleDeg: number, radius: number) {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  return [C + Math.cos(a) * radius, C + Math.sin(a) * radius] as const;
}

// Eine Fläche ist das Trapez zwischen Innen- und Außenkante eines 60°-Segments.
function facePath(i: number) {
  const from = (360 / FACES) * i;
  const to = from + 360 / FACES;
  const [ax, ay] = pt(from, R_INNER);
  const [bx, by] = pt(from, R_OUTER);
  const [cx, cy] = pt(to, R_OUTER);
  const [dx, dy] = pt(to, R_INNER);
  return `M${ax} ${ay} L${bx} ${by} L${cx} ${cy} L${dx} ${dy} Z`;
}

// Die Ausleuchtung kommt von oben rechts, deshalb sind die Flächen dort heller.
const FACE_LUMA = [0.15, 0.1, 0.055, 0.035, 0.06, 0.11];

/** Orangefarbener Bézier-Griff: Ankerquadrat plus zwei runde Endpunkte. */
function Handle({
  x,
  y,
  length,
  vertical,
  delay,
}: {
  x: number;
  y: number;
  length: number;
  vertical?: boolean;
  delay: number;
}) {
  const half = length / 2;
  const x1 = vertical ? x : x - half;
  const y1 = vertical ? y - half : y;
  const x2 = vertical ? x : x + half;
  const y2 = vertical ? y + half : y;
  return (
    <g className="handle" style={{ animationDelay: `${delay}ms` }}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-ember-accent)" strokeWidth="1.5" />
      <circle cx={x1} cy={y1} r="3" fill="var(--color-ember-accent)" />
      <circle cx={x2} cy={y2} r="3" fill="var(--color-ember-accent)" />
      <rect x={x - 3} y={y - 3} width="6" height="6" fill="var(--color-ember-accent)" />
    </g>
  );
}

export default function FacetteMark({
  mode = "solid",
  active = null,
  className,
  drawn = true,
}: {
  mode?: "blueprint" | "solid";
  active?: number | null;
  className?: string;
  drawn?: boolean;
}) {
  const blueprint = mode === "blueprint";

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <radialGradient id="fm-core" cx="62%" cy="30%" r="72%">
          <stop offset="0%" stopColor="#6b4527" />
          <stop offset="58%" stopColor="#3a2415" />
          <stop offset="100%" stopColor="#1a1009" />
        </radialGradient>
      </defs>

      {/* Hilfsgeometrie: gestrichelte Kreise und Achsen.
          Auf der grünen Matte trägt Driftwood zu wenig Kontrast, dort zeichnet
          die Konstruktion in Creme. */}
      <g
        stroke={blueprint ? "rgba(255, 237, 215, 0.65)" : "var(--color-driftwood)"}
        strokeWidth="1"
        fill="none"
        opacity={blueprint ? 1 : 0.4}
      >
        <circle
          cx={C}
          cy={C}
          r={R_OUTER}
          strokeDasharray="5 6"
          className={drawn ? "draw" : undefined}
          style={{ ["--len" as string]: 2 * Math.PI * R_OUTER }}
        />
        <circle
          cx={C}
          cy={C}
          r={R_INNER}
          strokeDasharray="5 6"
          className={drawn ? "draw" : undefined}
          style={{ ["--len" as string]: 2 * Math.PI * R_INNER, animationDelay: "300ms" }}
        />
        <line x1={C} y1={20} x2={C} y2={SIZE - 20} strokeDasharray="2 8" opacity="0.5" />
        <line x1={20} y1={C} x2={SIZE - 20} y2={C} strokeDasharray="2 8" opacity="0.5" />
      </g>

      {/* Der geschliffene Körper */}
      <g>
        {Array.from({ length: FACES }, (_, i) => {
          const isActive = active === i;
          return (
            <path
              key={i}
              d={facePath(i)}
              fill={
                blueprint
                  ? "transparent"
                  : isActive
                    ? "rgba(255, 237, 215, 0.22)"
                    : `rgba(255, 237, 215, ${FACE_LUMA[i]})`
              }
              stroke={
                blueprint
                  ? "rgba(255, 237, 215, 0.5)"
                  : isActive
                    ? "var(--color-warm-cream)"
                    : "var(--color-cork-border)"
              }
              strokeWidth={isActive ? 1.5 : 1}
              style={{ transition: "fill 700ms cubic-bezier(0.16,1,0.3,1), stroke 700ms ease" }}
            />
          );
        })}

        {/* Der Kern: die eine Ansicht, die alle Flächen teilen */}
        <circle
          cx={C}
          cy={C}
          r={R_INNER}
          fill={blueprint ? "transparent" : "url(#fm-core)"}
          stroke={blueprint ? "rgba(255, 237, 215, 0.5)" : "var(--color-cork-border)"}
          strokeWidth="1"
        />
      </g>

      {/* Konstruktionsgriffe an den vier Himmelsrichtungen */}
      <Handle x={C} y={C - R_OUTER} length={104} delay={900} />
      <Handle x={C} y={C + R_OUTER} length={104} delay={1100} />
      <Handle x={C - R_OUTER} y={C} length={104} vertical delay={1000} />
      <Handle x={C + R_OUTER} y={C} length={104} vertical delay={1200} />
      <Handle x={C} y={C - R_INNER} length={62} delay={1400} />
      <Handle x={C} y={C + R_INNER} length={62} delay={1500} />
    </svg>
  );
}
