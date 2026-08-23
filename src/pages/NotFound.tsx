import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { GlowButton } from "@/components/ui-custom/GlowButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      <section className="section-shell flex min-h-[50vh] items-center justify-center">
        <div className="page-container-narrow page-container text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-lime">
            404
          </p>
          <h1 className="mt-3 font-heading text-3xl font-extrabold text-white md:text-4xl">
            Page not found
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-brand md:text-base">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <GlowButton href="/" variant="filled">
              Back to Home
            </GlowButton>
            <GlowButton href="/contact">Contact Us</GlowButton>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;
