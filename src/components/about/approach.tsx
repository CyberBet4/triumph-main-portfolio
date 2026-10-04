import { Container } from "@/components/container";
import { Reveal, ScrollRevealText } from "@/components/reveal";
import { Section } from "@/components/section";
import { Glow } from "@/components/surface";
import { Heading, Lead, Meta, Text, Title } from "@/components/typography";
import { approachPrinciples } from "@/lib/about";

export function Approach() {
  return (
    <Section inverse className="py-32 sm:py-44">
      <Glow inverse className="left-1/2 top-0 size-[40rem] -translate-x-1/2" />
      <Container>
        <Reveal>
          <Title as="h2" className="max-w-3xl text-inverse-foreground">
            I design for efficiency.
          </Title>
        </Reveal>

        <Reveal delay={0.08}>
          <Lead className="mt-8 max-w-2xl text-inverse-foreground/70">
            Efficiency doesn&apos;t mean removing every step. Sometimes an
            additional step is necessary.
          </Lead>
        </Reveal>

        <div className="mt-8 max-w-3xl">
          <Heading as="p" className="font-medium text-inverse-foreground">
            <ScrollRevealText text="The question is: what work can we remove without removing necessary understanding?" />
          </Heading>
        </div>

        <div className="mt-20 border-t border-inverse-foreground/15">
          {approachPrinciples.map((principle, i) => (
            <Reveal key={principle.index} delay={i * 0.04}>
              <div className="grid grid-cols-1 gap-3 border-b border-inverse-foreground/15 py-8 sm:grid-cols-[4rem_1fr] sm:gap-8 lg:grid-cols-[6rem_1fr_1.4fr] lg:py-10">
                <Meta className="text-inverse-foreground/40">
                  {principle.index}
                </Meta>
                <Heading as="h3" className="max-w-sm text-inverse-foreground">
                  {principle.title}
                </Heading>
                <Text className="max-w-lg text-inverse-foreground/60">
                  {principle.body}
                </Text>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
