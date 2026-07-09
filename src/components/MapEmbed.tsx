"use client";

import { useState } from "react";

export default function MapEmbed({ query, title }: { query: string; title: string }) {
  const [consent, setConsent] = useState(false);

  if (!consent) {
    return (
      <div className="relative flex aspect-[4/3] w-full flex-col items-center justify-center gap-4 rounded-3xl border border-paper/10 bg-graphite-light p-8 text-center">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-paper/50">
          <path
            d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <p className="max-w-xs text-sm leading-relaxed text-paper/50">
          Beim Laden der Karte wird eine Verbindung zu Google Maps hergestellt und Ihre IP-Adresse
          übertragen.
        </p>
        <button
          onClick={() => setConsent(true)}
          className="rounded-full bg-live-accent px-6 py-3 text-sm font-semibold text-ink transition hover:opacity-90"
        >
          Karte laden & zustimmen
        </button>
      </div>
    );
  }

  return (
    <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl grayscale-[0.3]">
      <iframe
        title={title}
        src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
