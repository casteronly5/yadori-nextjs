import HeroSection from "@/components/HeroSection";
import BrandIntroSection from "@/components/BrandIntroSection";
import ProductConceptSection from "@/components/ProductConceptSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import EmotionalResponseSection from "@/components/EmotionalResponseSection";
import DailyLifeSection from "@/components/DailyLifeSection";
import PersonalitySection from "@/components/PersonalitySection";
import ColorSelectionSection from "@/components/ColorSelectionSection";
import PhilosophySection from "@/components/PhilosophySection";
import ShowcaseSection from "@/components/ShowcaseSection";
import ClosingCtaSection from "@/components/ClosingCtaSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
          <main>
          <HeroSection />
          <BrandIntroSection />
          <ProductConceptSection />
          <HowItWorksSection />
          <EmotionalResponseSection />
          <DailyLifeSection />
          <PersonalitySection />
          <ColorSelectionSection />
          <PhilosophySection />
          <ShowcaseSection />
          <ClosingCtaSection />
          <Footer /></main>
        );
}
