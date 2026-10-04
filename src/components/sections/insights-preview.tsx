import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Heading, Meta, Text, Title } from "@/components/typography";
import { featuredInsight } from "@/lib/content";

export function InsightsPreview() {
  return (
    <Section className="py-28 sm:py-36">
      <Container>
        <Reveal>
          <Title as="h2">Thinking about product design.</Title>
        </Reveal>
        <Reveal delay={0.08}>
          <Text className="mt-6 max-w-2xl">
            Notes on product strategy, UX, systems thinking, behavioral design,
            and the decisions behind digital products.
          </Text>
        </Reveal>

        <Reveal delay={0.12} className="mt-14">
          <Link
            href={featuredInsight.href}
            className="group block rounded-2xl border bg-card transition-[border-color] duration-300 ease-out hover:border-foreground/20"
          >
            <div className="flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <Meta>{featuredInsight.category}</Meta>
                  <span className="size-1 rounded-full bg-muted-foreground/40" />
                  <Meta>{featuredInsight.readingTime}</Meta>
                </div>
                <Heading as="h3" className="mt-6 transition-opacity group-hover:opacity-70">
                  {featuredInsight.title}
                </Heading>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-meta text-foreground">
                Read the insight
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
