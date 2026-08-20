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
      <div className="mx-auto flex max-w-3xl flex-col gap-5 rounded-[var(--radius-cards)] border border-cork-border bg-walnut-shadow/95 p-6 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <p className="t-caption max-w-[52ch] text-warm-cream/75">
          Diese Demo verwendet nur technisch notwendige Cookies.{" "}
          <Link href="/datenschutz" className="link-rule">
            Datenschutz
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button onClick={() => decide("declined")} className="btn-ghost">
            Ablehnen
          </button>
          <button onClick={() => decide("accepted")} className="btn-ghost">
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
