import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TechShowcase from "@/components/TechShowcase";
import UseCases from "@/components/UseCases";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <TechShowcase />
        <UseCases />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
