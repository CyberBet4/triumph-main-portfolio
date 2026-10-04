import { Container } from "@/components/container";
import { BlurReveal, Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Glow } from "@/components/surface";
import { Display, Eyebrow, Lead } from "@/components/typography";

export function AboutHero() {
  return (
    <Section className="pt-36 pb-20 sm:pt-48 sm:pb-28">
      <Glow strong className="left-1/2 top-0 size-[38rem] -translate-x-1/2" />
      <Container>
        <BlurReveal>
          <Eyebrow>About</Eyebrow>
        </BlurReveal>

        <BlurReveal delay={0.08}>
          <Display className="mt-8 max-w-5xl">
            I design products by understanding how they work.
          </Display>
        </BlurReveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4" />
          <div className="lg:col-span-8">
            <Reveal delay={0.16}>
              <Lead className="max-w-xl">
                I&apos;m a Product Designer with 5+ years of experience
                designing digital products across HealthTech, FinTech, B2B
                SaaS, and EventTech.
              </Lead>
            </Reveal>
            <Reveal delay={0.24}>
              <Lead className="mt-6 max-w-xl">
                I specialize in simplifying complex workflows into intuitive
                products through systems thinking, product strategy, and
                thoughtful UX.
              </Lead>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
