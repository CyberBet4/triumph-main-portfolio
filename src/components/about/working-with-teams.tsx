import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Lead, Text, Title } from "@/components/typography";

export function WorkingWithTeams() {
  return (
    <Section className="py-28 sm:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Title as="h2">Design doesn&apos;t happen in isolation.</Title>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <Lead>
              The best product decisions usually happen through collaboration.
            </Lead>
            <Text className="mt-6">
              I work closely with the people who understand different parts of
              the product—from founders and product managers to engineers,
              analysts, and QA.
            </Text>
            <Text className="mt-6">
              That collaboration helps me understand not only what we&apos;re
              designing, but why it needs to exist, how it should work, and
              what it will take to ship.
            </Text>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
