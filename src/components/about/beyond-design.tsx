import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Lead, Text, Title } from "@/components/typography";

export function BeyondDesign() {
  return (
    <Section className="py-28 sm:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Title as="h2">Beyond design</Title>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <Lead>
              I still work with frontend technologies and build web
              experiences when needed.
            </Lead>
            <Text className="mt-6">
              My engineering background helps me communicate with developers,
              understand technical constraints, identify implementation risks
              early, and design experiences that can realistically be shipped.
            </Text>
            <Text className="mt-6">
              Design remains my primary focus. The engineering background is a
              differentiator—it makes the work more practical to ship.
            </Text>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
