import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Eyebrow, Title } from "@/components/typography";
import { cn } from "@/lib/utils";

export function CaseStudySection({
  eyebrow,
  title,
  children,
  className,
  inverse = false,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  className?: string;
  inverse?: boolean;
}) {
  return (
    <Section inverse={inverse} className={cn("py-24 sm:py-32", className)}>
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            {eyebrow ? (
              <Eyebrow className={inverse ? "text-inverse-foreground/50" : undefined}>
                {eyebrow}
              </Eyebrow>
            ) : null}
            <Title
              as="h2"
              className={cn("mt-6", inverse && "text-inverse-foreground")}
            >
              {title}
            </Title>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="space-y-6">{children}</div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
