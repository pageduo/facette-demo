"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export const COOKIE_CONSENT_KEY = "facette-demo-cookie-consent";
export const COOKIE_CONSENT_EVENT = "facette-demo-cookie-consent-change";

export function getStoredConsent() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(COOKIE_CONSENT_KEY);
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(!getStoredConsent());
  }, []);

  const decide = (value: "accepted" | "declined") => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-4 sm:px-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-paper/10 bg-graphite/95 p-5 shadow-2xl backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-paper/70">
          Diese Demo-Website verwendet nur technisch notwendige Cookies. Für die Kartenanzeige
          (Google Maps) fragen wir separat Ihre Zustimmung ab.{" "}
          <Link href="/datenschutz" className="underline underline-offset-2 hover:text-paper">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => decide("declined")}
            className="rounded-full border border-paper/20 px-4 py-2 text-sm font-medium text-paper transition hover:bg-paper/10"
          >
            Ablehnen
          </button>
          <button
            onClick={() => decide("accepted")}
            className="rounded-full bg-live-accent px-4 py-2 text-sm font-medium text-ink transition hover:opacity-90"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
