import { DocsLayout } from '@/components/docs/DocsLayout';
import { BreadcrumbSchema } from '@/components/seo/structured-data';

export default function DocsRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://relius.ai/" },
        { name: "Documentation", url: "https://relius.ai/resources/docs/" },
      ]} />
      <DocsLayout>{children}</DocsLayout>
    </>
  );
}
