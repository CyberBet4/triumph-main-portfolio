import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Glow } from "@/components/surface";
import { Lead, Title } from "@/components/typography";
import { siteConfig } from "@/lib/site";

export function AboutFinalCta() {
  return (
    <Section id="contact" inverse className="py-32 sm:py-44">
      <Glow inverse className="left-1/2 top-0 size-[36rem] -translate-x-1/2" />
      <Container>
        <Reveal>
          <Title as="h2" className="max-w-3xl text-inverse-foreground">
            Let&apos;s build something better.
          </Title>
        </Reveal>
        <Reveal delay={0.08}>
          <Lead className="mt-8 max-w-2xl text-inverse-foreground/70">
            If you&apos;re working on a complex product, I&apos;d like to
            understand the problem.
          </Lead>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-11 rounded-full bg-inverse-foreground px-6 text-inverse hover:bg-inverse-foreground/90 hover:text-inverse"
            >
              <Link href={siteConfig.links.mail}>
                Let&apos;s work together
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-11 rounded-full border border-inverse-foreground/25 px-6 text-inverse-foreground hover:bg-inverse-foreground/10 hover:text-inverse-foreground"
            >
              <Link href="/work">
                View my work
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
