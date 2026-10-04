import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Caption, Meta, Title } from "@/components/typography";
import { cn } from "@/lib/utils";

/** Labeled sub-block used within a decision (Context / Decision / Why). */
export function LabeledBlock({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <Caption className="uppercase tracking-[0.16em]">{label}</Caption>
      <div className="mt-4 space-y-5">{children}</div>
    </div>
  );
}

/** A distinctive statement — used for framing quotes and key principles. */
export function Callout({
  children,
  label,
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <figure className="border-l-2 border-foreground/30 pl-6 sm:pl-8">
      {label ? (
        <Caption className="uppercase tracking-[0.16em]">{label}</Caption>
      ) : null}
      <blockquote
        className={cn(
          "font-heading text-heading font-medium tracking-tight text-balance text-foreground",
          label && "mt-4",
        )}
      >
        {children}
      </blockquote>
    </figure>
  );
}

/** Numbered decision wrapper. */
export function Decision({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Section className="py-24 sm:py-32">
      <Container>
        <div className="border-t pt-10 sm:pt-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-6">
            <Meta className="shrink-0">{number}</Meta>
            <Title as="h2" className="max-w-3xl">
              {title}
            </Title>
          </div>
        </div>
        <div className="mt-12">{children}</div>
      </Container>
    </Section>
  );
}

/** Standardized decision body: context | decision + why, then framing + visual. */
export function DecisionBody({
  context,
  decision,
  rationale,
  framing,
  children,
}: {
  context: ReactNode;
  decision: ReactNode;
  rationale: ReactNode;
  framing?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <LabeledBlock label="Context">{context}</LabeledBlock>
        </div>
        <div className="space-y-10 lg:col-span-7">
          <LabeledBlock label="Decision">{decision}</LabeledBlock>
          <LabeledBlock label="Why it mattered">{rationale}</LabeledBlock>
        </div>
      </div>

      {framing ? (
        <div className="mt-12">
          <Callout>{framing}</Callout>
        </div>
      ) : null}

      {children ? <div className="mt-12">{children}</div> : null}
    </>
  );
}
