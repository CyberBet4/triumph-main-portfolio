import { Container } from "@/components/container";
import { Reveal, ScrollRevealText } from "@/components/reveal";
import { Section } from "@/components/section";
import { Heading, Lead, Meta, Text, Title } from "@/components/typography";
import { principles } from "@/lib/content";

export function HowIThink() {
  return (
    <Section className="py-28 sm:py-36">
      <Container>
        <Reveal>
          <Title as="h2">I design for complexity.</Title>
        </Reveal>

        <Reveal delay={0.08}>
          <Lead className="mt-8 max-w-2xl">
            Products often involve multiple users, workflows, rules, business
            requirements, and technical dependencies.
          </Lead>
        </Reveal>

        <div className="mt-8 max-w-3xl">
          <Heading as="p" className="font-medium text-foreground">
            <ScrollRevealText text="My job is to make that complexity work without making users feel it." />
          </Heading>
        </div>

        <div className="mt-20 border-t">
          {principles.map((principle, i) => (
            <Reveal key={principle.index} delay={i * 0.04}>
              <div className="grid grid-cols-1 gap-3 border-b py-8 sm:grid-cols-[4rem_1fr] sm:gap-8 lg:grid-cols-[6rem_1fr_1.4fr] lg:py-10">
                <Meta>{principle.index}</Meta>
                <Heading as="h3" className="max-w-sm">
                  {principle.title}
                </Heading>
                <Text className="max-w-lg text-foreground/70">
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
