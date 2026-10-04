import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AboutFinalCta } from "@/components/about/final-cta";
import { Approach } from "@/components/about/approach";
import { AboutHero } from "@/components/about/hero";
import { BeyondDesign } from "@/components/about/beyond-design";
import { Exploring } from "@/components/about/exploring";
import { FromCode } from "@/components/about/from-code";
import { HowIWork } from "@/components/about/how-i-work";
import { OutsideWork } from "@/components/about/outside-work";
import { Philosophy } from "@/components/about/philosophy";
import { Timeline } from "@/components/about/timeline";
import { WorkingWithTeams } from "@/components/about/working-with-teams";

export const metadata: Metadata = {
  title: { absolute: "About Triumph Anazia — Product Designer" },
  description:
    "Learn about Triumph Anazia's approach to product design, systems thinking, efficiency, and his background in software development.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <AboutHero />
        <Philosophy />
        <FromCode />
        <Timeline />
        <HowIWork />
        <Approach />
        <WorkingWithTeams />
        <BeyondDesign />
        <Exploring />
        <OutsideWork />
        <AboutFinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
