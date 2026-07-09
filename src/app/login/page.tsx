import type { Metadata } from "next";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: `Anmeldung — ${company.fullName} (Demo)`,
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
  const message = error ? errorMessages[error] ?? "Anmeldung fehlgeschlagen." : null;

  const startUrl = `/api/auth/google/start${
    redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""
  }`;

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-5">
      <div className="w-full max-w-sm rounded-3xl bg-graphite p-8 text-center sm:p-10">
        <p className="font-label text-2xl font-semibold text-paper">
          {company.name}
          <span className="text-accent">.</span>
        </p>
        <h1 className="font-display mt-6 text-xl font-medium text-paper">Geschützter Bereich</h1>
        <p className="mt-3 text-sm leading-relaxed text-paper/60">
          Diese Demo-Website ist nicht öffentlich. Bitte melde dich mit einem freigeschalteten
          Google-Konto an.
        </p>

        {message && (
          <p className="mt-5 rounded-xl bg-ink/60 px-4 py-3 text-sm text-accent-soft">{message}</p>
        )}

        <a
          href={startUrl}
          className="mt-8 flex items-center justify-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-ink transition hover:opacity-90"
        >
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

        <p className="mt-6 text-xs text-paper/40">Demo-Vorlage, kein echtes Unternehmen.</p>
      </div>
    </div>
  );
}
