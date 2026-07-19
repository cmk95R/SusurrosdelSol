import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GaleriaSection from "@/components/GaleriaSection";
import DetallesSection from "@/components/DetallesSection";
import LugaresSection from "@/components/LugaresSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <GaleriaSection />
      <DetallesSection />
      <LugaresSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
