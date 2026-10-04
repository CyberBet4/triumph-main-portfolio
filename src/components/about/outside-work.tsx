import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Lead, Text, Title } from "@/components/typography";
import { outsideWorkItems } from "@/lib/about";

export function OutsideWork() {
  return (
    <Section className="py-28 sm:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Title as="h2">Outside client work</Title>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <Lead>
              I use side projects and experiments to explore product ideas,
              interactions, and workflows without the constraints of a client
              brief.
            </Lead>
            <ul className="mt-8 border-t">
              {outsideWorkItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between gap-4 border-b py-3.5"
                >
                  <Text>{item}</Text>
                </li>
              ))}
            </ul>
            <div className="mt-10">
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
        </div>
      </Container>
    </Section>
  );
}
