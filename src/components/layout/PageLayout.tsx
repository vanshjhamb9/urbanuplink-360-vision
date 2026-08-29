import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-brand-black font-sans text-white ${className}`}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-lime focus:px-4 focus:py-2 focus:text-brand-black"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="pt-16 lg:pt-[4.25rem]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
