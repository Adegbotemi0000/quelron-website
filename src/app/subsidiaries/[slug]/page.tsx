import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSubsidiaries, getSubsidiaryBySlug } from "@/data/subsidiaries";
import { SubsidiaryHero } from "@/components/SubsidiaryHero";
import { AboutSection } from "@/components/subsidiary/AboutSection";
import { ServicesGrid } from "@/components/subsidiary/ServicesGrid";
import { WhyChooseUsSection } from "@/components/subsidiary/WhyChooseUsSection";
import { PortfolioSection } from "@/components/subsidiary/PortfolioSection";
import { TestimonialsSection } from "@/components/subsidiary/TestimonialsSection";
import { ContactCtaSection } from "@/components/subsidiary/ContactCtaSection";

export function generateStaticParams() {
  return getAllSubsidiaries().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getSubsidiaryBySlug(slug);
  if (!s) return {};
  return {
    title: s.name,
    description: s.longDescription,
    openGraph: { title: s.name, description: s.tagline, images: [s.imagery.hero] },
  };
}

export default async function SubsidiaryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getSubsidiaryBySlug(slug);
  if (!s) notFound();

  return (
    <div style={{ ["--sub-primary" as string]: s.colors.primary, ["--sub-accent" as string]: s.colors.accent }}>
      <SubsidiaryHero s={s} />
      <AboutSection s={s} />
      <ServicesGrid s={s} />
      <WhyChooseUsSection s={s} />
      <PortfolioSection s={s} />
      <TestimonialsSection s={s} />
      <ContactCtaSection s={s} />
    </div>
  );
}
