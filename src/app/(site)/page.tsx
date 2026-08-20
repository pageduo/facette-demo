import Intro from "@/components/Intro";
import Manifest from "@/components/Manifest";
import Facets from "@/components/Facets";
import Archive from "@/components/Archive";
import Procedure from "@/components/Procedure";
import Studio from "@/components/Studio";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Intro />
      <Manifest />
      <Facets />
      <Archive />
      <Procedure />
      <Studio />
      <Contact />
    </>
  );
}
