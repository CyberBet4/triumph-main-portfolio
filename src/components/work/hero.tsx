import { Container } from "@/components/container";
import { BlurReveal, Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Glow } from "@/components/surface";
import { Display, Eyebrow, Lead } from "@/components/typography";

export function WorkHero() {
  return (
    <Section className="pt-36 pb-20 sm:pt-48 sm:pb-28">
      <Glow strong className="left-1/2 top-0 size-[38rem] -translate-x-1/2" />
      <Container>
        <BlurReveal>
          <Eyebrow>Selected work</Eyebrow>
        </BlurReveal>

        <BlurReveal delay={0.08}>
          <Display className="mt-8 max-w-5xl">
            Products built around real problems.
          </Display>
        </BlurReveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4" />
          <div className="lg:col-span-8">
            <Reveal delay={0.16}>
              <Lead className="max-w-xl">
                A selection of products I&apos;ve designed across event
                technology, customer experience, fintech, health, and complex
                operational workflows.
              </Lead>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
