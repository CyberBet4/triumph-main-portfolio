import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AboutPreview } from "@/components/sections/about-preview";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { HowIThink } from "@/components/sections/how-i-think";
import { InsightsPreview } from "@/components/sections/insights-preview";
import { Philosophy } from "@/components/sections/philosophy";
import { PlaygroundPreview } from "@/components/sections/playground-preview";
import { SelectedWork } from "@/components/sections/selected-work";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SelectedWork />
        <HowIThink />
        <Philosophy />
        <AboutPreview />
        <PlaygroundPreview />
        <InsightsPreview />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
