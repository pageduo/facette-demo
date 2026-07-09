"use client";

import { COOKIE_CONSENT_KEY } from "./CookieBanner";

export default function ResetConsentButton({ className }: { className?: string }) {
  return (
    <button
      onClick={() => {
        window.localStorage.removeItem(COOKIE_CONSENT_KEY);
        window.location.reload();
      }}
      className={className}
    >
      Cookie-Einstellungen
    </button>
  );
}
