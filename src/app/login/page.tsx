import type { Metadata } from "next";
import { company } from "@/lib/content";
import FacetteMark from "@/components/FacetteMark";

export const metadata: Metadata = {
  title: `Anmeldung: ${company.fullName} (Demo)`,
  robots: { index: false, follow: false },
};

const errorMessages: Record<string, string> = {
  forbidden: "Dieses Google-Konto hat keinen Zugriff auf diese Demo.",
  state: "Die Anmeldung ist abgelaufen. Bitte versuche es erneut.",
  token: "Die Anmeldung bei Google ist fehlgeschlagen. Bitte versuche es erneut.",
  userinfo: "Die Kontodaten konnten nicht geladen werden. Bitte versuche es erneut.",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; redirectTo?: string }>;
}) {
  const { error, redirectTo } = await searchParams;
  const message = error ? (errorMessages[error] ?? "Anmeldung fehlgeschlagen.") : null;

  const startUrl = `/api/auth/google/start${
    redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""
  }`;

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-walnut-shadow px-5">
      <div aria-hidden className="rim-light absolute inset-0" />
      <FacetteMark
        drawn={false}
        className="pointer-events-none absolute aspect-square w-[min(90vw,620px)] opacity-30"
      />

      <div className="relative w-full max-w-sm rounded-[var(--radius-cards)] border border-cork-border bg-walnut-shadow/70 p-8 text-center backdrop-blur-sm sm:p-10">
        <p className="t-heading-sm tracking-[0.14em]">{company.name}</p>
        <hr className="rule-dashed my-6" />
        <h1 className="t-subheading">Geschützter Bereich</h1>
        <p className="mt-4 t-caption text-warm-cream/60">
          Diese Demo ist nicht öffentlich. Bitte mit einem freigeschalteten Google-Konto anmelden.
        </p>

        {message && (
          <p className="mt-5 rounded-[var(--radius-cards)] border border-ember-accent/40 px-4 py-3 t-caption text-ember-accent">
            {message}
          </p>
        )}

        <a href={startUrl} className="btn-pill mt-8 w-full justify-center">
          <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
            <path
              fill="#4285F4"
              d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
            />
            <path
              fill="#34A853"
              d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
            />
            <path
              fill="#FBBC05"
              d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
            />
            <path
              fill="#EA4335"
              d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
            />
          </svg>
          Mit Google anmelden
        </a>

        <p className="mt-6 t-legal text-driftwood">Demo-Vorlage, kein echtes Unternehmen.</p>
      </div>
    </div>
  );
}
