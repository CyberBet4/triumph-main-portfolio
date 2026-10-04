import { ArrowDown } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Eyebrow, Heading, Meta } from "@/components/typography";
import { timelineStages } from "@/lib/about";

export function Timeline() {
  return (
    <Section className="py-28 sm:py-36">
      <Container>
        <Reveal>
          <Eyebrow>Career progression</Eyebrow>
        </Reveal>

        <ol className="mt-12 border-t">
          {timelineStages.map((stage, i) => (
            <Reveal key={stage} delay={i * 0.05}>
              <li className="flex items-center gap-5 border-b py-6 sm:gap-8 sm:py-7">
                <Meta className="w-10 shrink-0">0{i + 1}</Meta>
                <Heading as="span" className="flex-1 font-medium">
                  {stage}
                </Heading>
                {i < timelineStages.length - 1 ? (
                  <ArrowDown
                    aria-hidden
                    className="size-4 shrink-0 text-muted-foreground/50"
                  />
                ) : null}
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
