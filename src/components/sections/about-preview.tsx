import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Lead, Text, Title } from "@/components/typography";

export function AboutPreview() {
  return (
    <Section className="py-28 sm:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Title as="h2">Designer by practice. Engineer by background.</Title>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <Lead>
              I started in software development before moving into product
              design. That background shaped how I approach design—I care
              about how products work, how systems connect, and what is
              technically feasible.
            </Lead>
            <Text className="mt-6">
              I work closely with founders, product managers, engineers,
              analysts, and QA teams to turn complex requirements into clear,
              efficient product experiences.
            </Text>
            <div className="mt-10">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 rounded-full px-6"
              >
                <Link href="/about">
                  More about me
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
