import { Container } from "@/components/container";
import { Reveal, ScrollRevealText } from "@/components/reveal";
import { Section } from "@/components/section";
import { Glow } from "@/components/surface";
import { Heading, Lead, Text, Title } from "@/components/typography";

const pillars = ["Systems thinking.", "Product thinking.", "Design for efficiency."];

export function WorkApproach() {
  return (
    <Section inverse className="py-32 sm:py-44">
      <Glow inverse className="left-1/2 top-0 size-[40rem] -translate-x-1/2" />
      <Container>
        <Reveal>
          <Title as="h2" className="max-w-3xl text-inverse-foreground">
            Different products. Same approach.
          </Title>
        </Reveal>

        <Reveal delay={0.08}>
          <Lead className="mt-8 max-w-2xl text-inverse-foreground/70">
            Different products come with different users, constraints, and
            business models.
          </Lead>
        </Reveal>

        <Text className="mt-6 text-inverse-foreground/60">
          The underlying approach stays consistent:
        </Text>

        <div className="mt-10 max-w-3xl">
          <Heading as="p" className="font-medium text-inverse-foreground">
            <ScrollRevealText text="Understand the workflow. Identify the friction. Simplify the system. Design for efficiency." />
          </Heading>
        </div>

        <div className="mt-20 border-t border-inverse-foreground/15">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar} delay={i * 0.06}>
              <div className="border-b border-inverse-foreground/15 py-8 sm:py-9">
                <Heading as="p" className="font-medium text-inverse-foreground">
                  {pillar}
                </Heading>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
