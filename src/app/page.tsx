import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SobreSection from "@/components/SobreSection";
import AmbitosSection from "@/components/AmbitosSection";
import FasesSection from "@/components/FasesSection";
import OrganizadorasSection from "@/components/OrganizadorasSection";
import AgendaSection from "@/components/AgendaSection";
import SponsorsSection from "@/components/SponsorsSection";
import InscripcionSection from "@/components/InscripcionSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SobreSection />
        <AmbitosSection />
        <FasesSection />
        <OrganizadorasSection />
        <AgendaSection />
        <SponsorsSection />
        <InscripcionSection />
      </main>
      <FooterSection />
    </>
  );
}
