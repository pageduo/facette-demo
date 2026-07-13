import type { Metadata } from "next";
import { Fraunces, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { AccentProvider } from "@/lib/accent";
import CustomCursor from "@/components/CustomCursor";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "FACETTE: Studio für Markendesign & Brand Identity | Demo-Website";
const description =
  "Demo-Website für ein Berliner Markendesign-Studio: Identität, Verpackung, digitale Bühnen und Räume für Marken mit vielen Facetten. Diese Seite ist eine Agentur-Demo und kein echtes Unternehmen.";

export const metadata: Metadata = {
  title,
  description,
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title,
    description,
    locale: "de_DE",
    type: "website",
    images: ["https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${fraunces.variable} ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-ink text-paper antialiased">
        <AccentProvider>
          <div aria-hidden className="grain-overlay" />
          <CustomCursor />
          {children}
        </AccentProvider>
      </body>
    </html>
  );
}
