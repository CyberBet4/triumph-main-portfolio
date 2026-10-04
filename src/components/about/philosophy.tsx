import { Container } from "@/components/container";
import { ScrollRevealText } from "@/components/reveal";
import { Section } from "@/components/section";
import { Display, Meta } from "@/components/typography";
import { philosophyStages } from "@/lib/about";

export function Philosophy() {
  return (
    <Section className="py-28 sm:py-36">
      <Container>
        <div className="border-t">
          {philosophyStages.map((stage, i) => (
            <div
              key={stage}
              className="grid grid-cols-1 gap-4 border-b py-10 sm:grid-cols-[6rem_1fr] sm:gap-10 sm:py-14"
            >
              <Meta>0{i + 1}</Meta>
              <Display as="p" className="max-w-4xl font-medium">
                <ScrollRevealText text={stage} />
              </Display>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
