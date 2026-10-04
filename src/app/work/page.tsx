import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkApproach } from "@/components/work/approach";
import { FeaturedWork } from "@/components/work/featured-work";
import { WorkFinalCta } from "@/components/work/final-cta";
import { WorkHero } from "@/components/work/hero";
import { MoreWork } from "@/components/work/more-work";

export const metadata: Metadata = {
  title: { absolute: "Work — Triumph Anazia, Product Designer" },
  description:
    "Selected product design work by Triumph Anazia across EventTech, B2B SaaS, FinTech, HealthTech, and complex digital workflows.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <WorkHero />
        <FeaturedWork />
        <MoreWork />
        <WorkApproach />
        <WorkFinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
