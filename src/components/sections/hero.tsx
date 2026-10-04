import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { Media } from "@/components/media";
import { BlurReveal, Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Glow } from "@/components/surface";
import { Display, Eyebrow, Lead } from "@/components/typography";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <Section className="pt-36 pb-20 sm:pt-48 sm:pb-28">
      <Glow strong className="left-1/2 top-0 size-[38rem] -translate-x-1/2" />
      <Container>
        <BlurReveal>
          <Eyebrow>{siteConfig.role}</Eyebrow>
        </BlurReveal>

        <BlurReveal delay={0.08}>
          <Display className="mt-8 max-w-5xl">
            Simplifying complex business workflows into intuitive digital
            products.
          </Display>
        </BlurReveal>

        <Reveal delay={0.16}>
          <Lead className="mt-8 max-w-2xl">
            I help growth-stage startups build efficient digital products by
            combining systems thinking, product strategy, and thoughtful
            UX—creating experiences that are intuitive for users and valuable
            for businesses.
          </Lead>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-11 rounded-full px-6">
              <Link href={siteConfig.links.mail}>
                Let&apos;s build something better
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 rounded-full px-6"
            >
              <Link href="#work">
                View my work
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.32} y={24}>
          <Media
            label="Musicade"
            meta="EventTech · Product Design"
            alt="Musicade — connected ecosystem for the people behind live events"
            aspectClassName="aspect-[16/10] sm:aspect-[16/9]"
            className="mt-16 sm:mt-24"
          />
        </Reveal>
      </Container>
    </Section>
  );
}
