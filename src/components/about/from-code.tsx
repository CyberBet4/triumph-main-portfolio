import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Heading, Lead, Text, Title } from "@/components/typography";
import { journeyQuestions } from "@/lib/about";

export function FromCode() {
  return (
    <Section className="py-28 sm:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Title as="h2">From code to product design.</Title>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <Lead>
              I started in software development before moving into UI/UX and
              product design.
            </Lead>
            <Text className="mt-6">
              That background taught me to think about more than what appears
              on the screen. I learned to consider systems, data, technical
              constraints, dependencies, and how different parts of a product
              work together.
            </Text>
            <Text className="mt-6">
              As I moved deeper into product design, my questions changed.
            </Text>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Text className="text-muted-foreground">Instead of only asking:</Text>
            <Heading
              as="p"
              className="mt-4 font-medium text-muted-foreground"
            >
              &ldquo;How should this look?&rdquo;
            </Heading>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <Text className="text-muted-foreground">I started asking:</Text>
            <ul className="mt-6 border-t">
              {journeyQuestions.map((question) => (
                <li key={question} className="border-b py-6 sm:py-7">
                  <Heading as="p" className="max-w-xl font-medium">
                    {question}
                  </Heading>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
