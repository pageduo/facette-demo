import Chrome from "@/components/Chrome";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Chrome />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieBanner />
    </>
  );
}
