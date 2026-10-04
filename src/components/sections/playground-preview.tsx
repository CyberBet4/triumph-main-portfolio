import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Caption, Meta, Text, Title } from "@/components/typography";
import { playgroundItems } from "@/lib/content";

export function PlaygroundPreview() {
  return (
    <Section className="py-28 sm:py-36">
      <Container>
        <Reveal>
          <Title as="h2">Thinking beyond client work.</Title>
        </Reveal>
        <Reveal delay={0.08}>
          <Text className="mt-6 max-w-2xl">
            Experiments, product teardowns, interaction studies, prototypes,
            and ideas I explore outside shipped products.
          </Text>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {playgroundItems.map((item, i) => (
            <Reveal key={item.index} delay={i * 0.06}>
              <Link
                href="/playground"
                className="group flex h-full flex-col rounded-2xl border bg-card p-7 transition-[border-color,transform] duration-300 ease-out hover:border-foreground/20 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <Meta>{item.index}</Meta>
                  <Caption className="uppercase tracking-[0.14em]">
                    {item.type}
                  </Caption>
                </div>
                <Text className="mt-12 flex-1 font-heading text-subheading font-medium tracking-tight text-foreground">
                  {item.title}
                </Text>
                <span className="mt-8 inline-flex items-center gap-1.5 font-mono text-meta text-muted-foreground transition-colors group-hover:text-foreground">
                  Explore
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 rounded-full px-6"
            >
              <Link href="/playground">
                Explore the Playground
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
