import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrophySection from "@/components/TrophySection";
import SobreSection from "@/components/SobreSection";
import AmbitosSection from "@/components/AmbitosSection";
import FasesSection from "@/components/FasesSection";
import Edicion2026Section from "@/components/Edicion2026Section";
import OrganizadorasSection from "@/components/OrganizadorasSection";
import AgendaSection from "@/components/AgendaSection";
import MapSection from "@/components/MapSection";
import GaleriaSection from "@/components/GaleriaSection";
import PrensaSection from "@/components/PrensaSection";
import SponsorsSection from "@/components/SponsorsSection";
import FooterSection from "@/components/FooterSection";
import ScrollToTop from "@/components/ScrollToTop";

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
        <GaleriaSection />
        <PrensaSection />
        <OrganizadorasSection />
        <AgendaSection />
        <MapSection />
        <SponsorsSection />
      </main>
      <FooterSection />
      <ScrollToTop />
    </>
  );
}
