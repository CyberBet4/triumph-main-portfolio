import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Heading, Lead, Meta, Text, Title } from "@/components/typography";
import { explorationAreas } from "@/lib/about";

export function Exploring() {
  return (
    <Section className="py-28 sm:py-36">
      <Container>
        <Reveal>
          <Title as="h2">What I&apos;m exploring</Title>
        </Reveal>
        <Reveal delay={0.08}>
          <Lead className="mt-8 max-w-2xl">
            Areas I&apos;m actively developing my thinking in.
          </Lead>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-2">
          {explorationAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.05}>
              <div className="border-t pt-7">
                <Meta>0{i + 1}</Meta>
                <Heading as="h3" className="mt-4">
                  {area.title}
                </Heading>
                <Text className="mt-3 max-w-md">{area.description}</Text>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
