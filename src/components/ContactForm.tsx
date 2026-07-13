"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 rounded-3xl border border-paper/10 bg-graphite-light p-10 text-center">
        <p className="font-display text-2xl text-paper">Vielen Dank!</p>
        <p className="max-w-sm text-sm leading-relaxed text-paper/60">
          Dies ist eine Demo-Website ohne echten Formularversand. In der echten Umsetzung würde
          Ihre Anfrage jetzt bei uns eingehen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 rounded-3xl border border-paper/10 bg-graphite-light p-8 sm:p-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          required
          type="text"
          placeholder="Name"
          className="rounded-xl border border-paper/15 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/40 focus:border-live-accent focus:outline-none"
        />
        <input
          required
          type="email"
          placeholder="E-Mail"
          className="rounded-xl border border-paper/15 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/40 focus:border-live-accent focus:outline-none"
        />
      </div>
      <input
        type="text"
        placeholder="Marke / Unternehmen (optional)"
        className="rounded-xl border border-paper/15 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/40 focus:border-live-accent focus:outline-none"
      />
      <textarea
        required
        placeholder="Worum geht es? (z. B. Rebranding, Verpackung, neue Marke)"
        rows={4}
        className="resize-none rounded-xl border border-paper/15 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/40 focus:border-live-accent focus:outline-none"
      />
      <label className="flex items-start gap-3 text-xs leading-relaxed text-paper/50">
        <input required type="checkbox" className="mt-0.5 h-4 w-4 accent-live-accent" />
        <span>
          Ich habe die{" "}
          <Link href="/datenschutz" className="underline underline-offset-2">
            Datenschutzerklärung
          </Link>{" "}
          gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage
          einverstanden.
        </span>
      </label>
      <button
        type="submit"
        className="mt-2 rounded-full bg-live-accent px-6 py-3.5 text-sm font-semibold text-ink transition hover:opacity-90"
      >
        Nachricht senden
      </button>
      <p className="text-[11px] text-paper/40">
        Demo-Formular ohne echten Versand. Es werden keine Daten übertragen oder gespeichert.
      </p>
    </form>
  );
}
