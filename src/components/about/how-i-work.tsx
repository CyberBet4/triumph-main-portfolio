import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Lead, Subheading, Text, Title } from "@/components/typography";
import { collaborators, contributions } from "@/lib/about";

export function HowIWork() {
  return (
    <Section className="py-28 sm:py-36">
      <Container>
        <Reveal>
          <Title as="h2">How I work</Title>
        </Reveal>
        <Reveal delay={0.08}>
          <Lead className="mt-8 max-w-2xl">
            I enjoy working on products where there are multiple users,
            workflows, rules, business requirements, technical dependencies,
            and edge cases to consider.
          </Lead>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <Subheading as="h3">I work closely with</Subheading>
            <List items={collaborators} className="mt-8" />
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <Subheading as="h3">My role isn&apos;t limited to producing screens</Subheading>
            <Text className="mt-4 text-foreground/70">I contribute to:</Text>
            <ul className="mt-6 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {contributions.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between gap-4 border-b py-3.5"
                >
                  <Text>{item}</Text>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function List({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li
          key={item}
          className="border-b py-3.5 font-mono text-meta text-foreground/80"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
