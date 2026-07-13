"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, sections } from "@/lib/content";
import ResetConsentButton from "./ResetConsentButton";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const anchor = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <footer className="bg-void px-5 pb-8 pt-16 text-paper sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 border-b border-paper/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href={isHome ? "#hero" : "/"} className="font-label text-2xl font-semibold">
              {company.name}
              <span className="text-live-accent">.</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-paper/55">{company.subline}</p>
            <div className="flex gap-4 pt-2">
              {company.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="font-label link-underline text-xs uppercase tracking-[0.2em] text-paper/60 hover:text-paper"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="eyebrow text-paper/40">Sitemap</span>
            {sections.map((section) => (
              <a
                key={section.id}
                href={anchor(section.id)}
                className="link-underline text-sm text-paper/70 hover:text-paper"
              >
                {section.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="eyebrow text-paper/40">Kontakt</span>
            <a href={`mailto:${company.email}`} className="link-underline text-sm text-paper/70 hover:text-paper">
              {company.email}
            </a>
            <a href={company.phoneHref} className="link-underline text-sm text-paper/70 hover:text-paper">
              {company.phone}
            </a>
            <p className="text-sm text-paper/70">
              {company.address.street}
              <br />
              {company.address.zip} {company.address.city}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="eyebrow text-paper/40">Rechtliches</span>
            <Link href="/impressum" className="link-underline text-sm text-paper/70 hover:text-paper">
              Impressum
            </Link>
            <Link href="/datenschutz" className="link-underline text-sm text-paper/70 hover:text-paper">
              Datenschutz
            </Link>
            <ResetConsentButton className="link-underline w-fit text-left text-sm text-paper/70 hover:text-paper" />
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 pt-6 text-xs text-paper/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {company.fullName}.</p>
          <p>Demo-Vorlage für ein Akquise-Gespräch, kein echtes Unternehmen.</p>
        </div>
      </div>
    </footer>
  );
}
