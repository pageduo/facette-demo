import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/**
 * Eine Schrift, zwei Gewichte. Halyard Display Variable ist Adobe-lizenziert;
 * DESIGN.md nennt Inter als strukturellen Ersatz, inklusive der geforderten
 * ss01-Alternativen.
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const title = "FACETTE: Studio für Markenidentität, Berlin | Demo-Website";
const description =
  "Demo-Website für ein Berliner Studio für Markenidentität: Strategie, Identität, Verpackung, Digital, Editorial und Raum. Diese Seite ist eine Agentur-Demo und kein echtes Unternehmen.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: false },
  openGraph: { title, description, locale: "de_DE", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="flex min-h-screen flex-col antialiased">
        <div aria-hidden className="grain" />
        {children}
      </body>
    </html>
  );
}
