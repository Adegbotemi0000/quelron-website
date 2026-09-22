import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { TaglineMarquee } from "@/components/home/TaglineMarquee";
import { SubsidiaryGridSection } from "@/components/home/SubsidiaryGridSection";
import { WhyQuelron } from "@/components/home/WhyQuelron";
import { NewsSection } from "@/components/home/NewsSection";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Quelron Group — One Vision. Six Possibilities. Infinite Potential.",
  description:
    "A unified holding company spanning technology, cards & identity, automotive, agriculture, fashion, and artisan craft.",
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <TaglineMarquee />
      <SubsidiaryGridSection />
      <WhyQuelron />
      <NewsSection />
      <CtaSection />
    </>
  );
}
