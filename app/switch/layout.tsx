import { BreadcrumbSchema } from "@/components/seo/structured-data";

export default function SwitchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://relius.ai/" },
        { name: "Switch to Relius", url: "https://relius.ai/switch/" },
      ]} />
      {children}
    </>
  );
}
