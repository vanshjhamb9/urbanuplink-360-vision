import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import WhyUrbanUplink from "@/components/WhyUrbanUplink";
import Industries from "@/components/Industries";
import TechShowcase from "@/components/TechShowcase";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingDemo from "@/components/FloatingDemo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhyUrbanUplink />
        <Features />
        <Industries />
        <TechShowcase />
        <Testimonials />
        <CTA />
      </main>
      <FloatingDemo />
      <Footer />
    </div>
  );
};

export default Index;
