import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Glow } from "@/components/surface";
import { Lead, Title } from "@/components/typography";
import { siteConfig } from "@/lib/site";

export function WorkFinalCta() {
  return (
    <Section id="contact" inverse className="py-32 sm:py-44">
      <Glow inverse className="left-1/2 top-0 size-[36rem] -translate-x-1/2" />
      <Container>
        <Reveal>
          <Title as="h2" className="max-w-3xl text-inverse-foreground">
            Building something complicated?
          </Title>
        </Reveal>
        <Reveal delay={0.08}>
          <Lead className="mt-8 max-w-2xl text-inverse-foreground/70">
            Whether you&apos;re starting something new or trying to make an
            existing product work better, let&apos;s talk about the problem.
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
                Let&apos;s build something better
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-11 rounded-full border border-inverse-foreground/25 px-6 text-inverse-foreground hover:bg-inverse-foreground/10 hover:text-inverse-foreground"
            >
              <Link href="/about">
                About me
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
