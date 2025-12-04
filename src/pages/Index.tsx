import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BackgroundRemovalShowcase from "@/components/BackgroundRemovalShowcase";
import BGReplacementTool from "@/components/BGReplacementTool";
import ThreeSixtyShowcase from "@/components/ThreeSixtyShowcase";
import CarScrollBanner from "@/components/CarScrollBanner";
import MarketplaceShowcase from "@/components/MarketplaceShowcase";
import UseCaseScenarios from "@/components/UseCaseScenarios";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <BackgroundRemovalShowcase />
        <BGReplacementTool />
        <ThreeSixtyShowcase />
        <CarScrollBanner />
        <MarketplaceShowcase />
        <UseCaseScenarios />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
