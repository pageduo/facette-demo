"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, sections, legalNote } from "@/lib/content";
import ResetConsentButton from "./ResetConsentButton";

/**
 * Abbinder. Kein Footer-Chrome, kein zweites Menü in Kartenform — eine
 * gestrichelte Linie, vier Spalten Mikrotypografie, fertig.
 */
export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const anchor = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <footer className="border-t border-dashed border-cork-border bg-walnut-shadow px-[var(--gutter)] pb-8 pt-[10vh]">
      <div className="grid grid-cols-2 gap-[clamp(24px,4vw,45px)] lg:grid-cols-4">
        <div className="col-span-2 lg:col-span-1">
          <Link href={isHome ? "#intro" : "/"} className="t-heading-sm">
            {company.name}
          </Link>
          <p className="mt-4 max-w-[30ch] t-caption text-driftwood">{company.serial}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            {company.social.map((item) => (
              <a key={item.label} href={item.href} className="t-label link-rule text-driftwood">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <nav className="flex flex-col gap-3">
          <span className="t-legal text-driftwood">Sektionen</span>
          {sections.map((section) => (
            <a key={section.id} href={anchor(section.id)} className="t-label link-rule w-fit">
              {section.number} {section.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <span className="t-legal text-driftwood">Kontakt</span>
          <a href={`mailto:${company.email}`} className="t-label link-rule w-fit">
            {company.email}
          </a>
          <a href={company.phoneHref} className="t-label link-rule w-fit">
            {company.phone}
          </a>
          <p className="t-label text-driftwood">
            {company.address.street}
            <br />
            {company.address.zip} {company.address.city}
          </p>
          {company.hours.map((entry) => (
            <p key={entry.day} className="t-label text-driftwood">
              {entry.day} — {entry.time}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="t-legal text-driftwood">Rechtliches</span>
          <Link href="/impressum" className="t-label link-rule w-fit">
            Impressum
          </Link>
          <Link href="/datenschutz" className="t-label link-rule w-fit">
            Datenschutz
          </Link>
          <ResetConsentButton className="t-label link-rule w-fit uppercase" />
        </div>
      </div>

      <hr className="rule-dashed my-8" />

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="t-legal text-driftwood">
          © {new Date().getFullYear()} {company.fullName}
        </p>
        <p className="t-legal text-driftwood">{legalNote}</p>
      </div>
    </footer>
  );
}
