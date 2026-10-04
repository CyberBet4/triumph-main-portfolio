import { Container } from "@/components/container";
import { ScrollRevealText } from "@/components/reveal";
import { Section } from "@/components/section";
import { Glow } from "@/components/surface";
import { Display, Eyebrow, Heading } from "@/components/typography";

export function Philosophy() {
  return (
    <Section inverse className="py-32 sm:py-44">
      <Glow inverse className="left-1/2 top-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2" />
      <Container>
        <Eyebrow className="text-inverse-foreground/50">
          Design philosophy
        </Eyebrow>

        <Display as="h2" className="mt-10 max-w-4xl text-inverse-foreground">
          I design efficient systems.
        </Display>

        <div className="mt-10 max-w-2xl">
          <Heading as="p" className="font-medium text-inverse-foreground/90">
            <ScrollRevealText text="Complexity is inevitable. Confusion isn't." />
          </Heading>
        </div>
      </Container>
    </Section>
  );
}
