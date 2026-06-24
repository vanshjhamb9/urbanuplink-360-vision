import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BackgroundRemovalShowcase from "@/components/BackgroundRemovalShowcase";
import { UseCaseBanner } from "@/components/UseCaseBanner";
import { solutions } from "@/lib/solutions";
import UseCaseCards from "@/components/UseCaseCards";
import ProcessSection from "@/components/ProcessSection";
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
        <Hero />
        <BackgroundRemovalShowcase />
        <UseCaseCards />
        {solutions.map((solution) => (
          <UseCaseBanner key={solution.id} {...solution} />
        ))}
        <ProcessSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
