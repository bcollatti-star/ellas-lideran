import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrophySection from "@/components/TrophySection";
import SobreSection from "@/components/SobreSection";
import AmbitosSection from "@/components/AmbitosSection";
import FasesSection from "@/components/FasesSection";
import Edicion2026Section from "@/components/Edicion2026Section";
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
        <TrophySection />
        <SobreSection />
        <AmbitosSection />
        <FasesSection />
        <Edicion2026Section />
        <OrganizadorasSection />
        <AgendaSection />
        <SponsorsSection />
        <InscripcionSection />
      </main>
      <FooterSection />
    </>
  );
}
