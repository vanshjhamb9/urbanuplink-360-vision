import { PageLayout } from "@/components/layout/PageLayout";

interface LegalDocumentLayoutProps {
  title: string;
  updated: string;
  children: React.ReactNode;
}

export function LegalDocumentLayout({
  title,
  updated,
  children,
}: LegalDocumentLayoutProps) {
  return (
    <PageLayout>
      <article className="section-shell">
        <div className="page-container-narrow page-container">
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted-brand">Last updated: {updated}</p>
          <div className="prose prose-invert mt-10 max-w-none space-y-8 text-white/75 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:text-white [&_li]:text-white/75 [&_p]:leading-relaxed">
            {children}
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
