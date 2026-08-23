import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPointsSection from "@/components/PainPointsSection";
import ListingComparisonSection from "@/components/ListingComparisonSection";
import TransformationSection from "@/components/TransformationSection";
import ProductWorkflowSection from "@/components/ProductWorkflowSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import CoreProductSection from "@/components/CoreProductSection";
import BackgroundRemovalShowcase from "@/components/BackgroundRemovalShowcase";
import ThreeSixtyShowcase from "@/components/ThreeSixtyShowcase";
import PlatformShowcaseSection from "@/components/PlatformShowcaseSection";
import IndustryTeaserGrid from "@/components/IndustryTeaserGrid";
import BusinessImpactSection from "@/components/BusinessImpactSection";
import ScaleSection from "@/components/ScaleSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-black font-sans text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-lime focus:px-4 focus:py-2 focus:text-brand-black"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        {/* 01 — Hero */}
        <Hero />
        {/* 02 — Problem */}
        <PainPointsSection />
        {/* 03 — Kia Seltos before / after background removal */}
        <BackgroundRemovalShowcase />
        {/* 04 — Listing comparison */}
        <ListingComparisonSection />
        {/* 05 — Transformation */}
        <TransformationSection />
        {/* 06 — How It Works */}
        <ProductWorkflowSection />
        {/* 07 — Value */}
        <ValuePropositionSection />
        {/* 08 — Core Product */}
        <CoreProductSection />
        {/* 09 — 360° Experience */}
        <ThreeSixtyShowcase />
        {/* 10 — Social Media */}
        <PlatformShowcaseSection />
        {/* 11 — Use Cases */}
        <IndustryTeaserGrid />
        {/* 12 — Business Impact */}
        <BusinessImpactSection />
        {/* 13 — Scale */}
        <ScaleSection />
        {/* 14 — Final CTA */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
