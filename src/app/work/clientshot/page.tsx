import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Glow } from "@/components/surface";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  Caption,
  Lead,
  Meta,
  Text,
  Title,
} from "@/components/typography";
import {
  Callout,
  CaseStudyHero,
  CaseStudySection,
  Decision,
  DecisionBody,
  FlowSteps,
  ListGroup,
  MetaGrid,
  Panel,
} from "@/components/case-study";
import { projects } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import {
  actionRequirements,
  clientshotHeroMeta,
  clientshotOverviewMeta,
  contextFlow,
  feedbackResolution,
  feedbackToAction,
  formCapabilities,
  formModel,
  operationalAreas,
  orgLevels,
  pollingImproved,
  pollingOriginal,
  postSubmissionQuestions,
  problemFlow,
  structureFocus,
} from "@/lib/clientshot";

const project = projects.find((p) => p.slug === "clientshot")!;

export const metadata: Metadata = {
  title: { absolute: "ClientShot — Triumph Anazia, Product Designer" },
  description:
    "How Triumph Anazia helped ClientShot turn customer feedback into an operational workflow across teams, branches, and responsibilities.",
  alternates: {
    canonical: "/work/clientshot",
  },
};

export default function ClientShotPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CaseStudyHero
          eyebrow="ClientShot"
          title={project.title}
          summary="ClientShot is a customer experience platform built to help organizations collect, understand, and act on feedback across multiple channels."
          meta={clientshotHeroMeta}
          media={{
            label: project.name,
            meta: project.category,
            index: project.media.index,
            alt: project.media.alt,
            aspectClassName: project.media.aspect,
            src: project.media.src,
          }}
        />

        <CaseStudySection title="Overview">
          <Lead>
            ClientShot helps organizations collect and analyze customer
            feedback across channels, then turn that feedback into something
            teams can act on.
          </Lead>
          <Text>
            Over time, the product expanded beyond feedback collection into a
            broader operational system involving:
          </Text>
          <div className="flex flex-wrap gap-2">
            {operationalAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border px-3 py-1 font-mono text-caption text-muted-foreground"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="pt-2">
            <MetaGrid items={clientshotOverviewMeta} columns={2} />
          </div>
        </CaseStudySection>

        <CaseStudySection title="Feedback is only the beginning">
          <Lead>Collecting feedback is relatively easy.</Lead>
          <Text>
            The harder problem begins after someone submits it. Organizations
            need to:
          </Text>
          <ListGroup items={feedbackResolution} columns={1} />
          <div className="pt-4">
            <FlowSteps steps={problemFlow} />
          </div>
          <div className="pt-4">
            <Callout>
              A feedback platform becomes significantly more valuable when
              feedback can move through the organization instead of stopping at
              a dashboard.
            </Callout>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Designing for organizational complexity">
          <Lead>
            ClientShot had to support organizations with multiple branches,
            departments, teams, roles, permissions, and responsibilities.
          </Lead>
          <Text>
            A customer submitting feedback does not necessarily interact with
            the same structure as the internal team responsible for resolving
            it. The product therefore had to serve both the external customer
            experience and the internal operational workflow.
          </Text>
          <div className="pt-4">
            <FlowSteps steps={contextFlow} />
          </div>
        </CaseStudySection>

        <Decision number="01" title="Replacing the dead end after a completed poll">
          <DecisionBody
            context={
              <Text>
                The original polling experience could return a user to an
                &ldquo;already voted&rdquo; state after they had completed a
                poll. That state communicated completion, but did not help the
                user understand what remained available.
              </Text>
            }
            decision={
              <Text>
                I proposed a completion state that clearly showed the poll had
                been completed, that other available polls remained, and a
                clear next action for the user.
              </Text>
            }
            rationale={
              <Text>
                The goal was to turn a dead-end state into a useful
                continuation point—so completing one poll did not mean leaving
                the experience.
              </Text>
            }
            framing="Completion should not automatically mean abandonment."
          >
            <BeforeAfter
              beforeLabel="Original"
              afterLabel="Improved"
              before={<FlowSteps steps={pollingOriginal} />}
              after={<FlowSteps steps={pollingImproved} />}
            />
          </DecisionBody>
        </Decision>

        <Decision number="02" title="Designing forms as a flexible system">
          <DecisionBody
            context={
              <>
                <Text>
                  ClientShot forms needed to support more than basic questions:
                </Text>
                <ListGroup items={formCapabilities} columns={2} />
              </>
            }
            decision={
              <>
                <Text>
                  As forms become more powerful, the builder itself can become
                  harder to understand.
                </Text>
                <Text>
                  The design goal was to give organizations flexibility without
                  forcing them to understand unnecessary system complexity.
                </Text>
              </>
            }
            rationale={
              <Text>
                A simple mental model—question, logic, action, next step—keeps
                the builder approachable even as its capabilities grow.
              </Text>
            }
            framing="As forms become more powerful, the builder itself can become harder to understand."
          >
            <div className="space-y-6">
              <Meta>Conceptual model</Meta>
              <FlowSteps steps={formModel} />
            </div>
          </DecisionBody>
        </Decision>

        <Decision number="03" title="Turning feedback into something a team can act on">
          <DecisionBody
            context={
              <>
                <Text>
                  A customer complaint or piece of feedback should not simply
                  remain inside an analytics dashboard. It may require:
                </Text>
                <ListGroup items={actionRequirements} columns={2} />
              </>
            }
            decision={
              <Text>
                This led to product workflows around ticketing and
                responsibility—so feedback moves from a signal to something
                with an owner, a status, and a path to resolution.
              </Text>
            }
            rationale={
              <Text>
                Feedback becomes actionable only when it can be owned,
                assigned, and tracked through the organization.
              </Text>
            }
            framing="Moving from feedback analytics to operational accountability."
          >
            <FlowSteps steps={feedbackToAction} />
          </DecisionBody>
        </Decision>

        <Decision number="04" title="Making organizational complexity manageable">
          <DecisionBody
            context={
              <Text>
                ClientShot needed to work for organizations with multiple
                locations and teams.
              </Text>
            }
            decision={
              <>
                <Text>
                  The product had to represent relationships between
                  organization, branch, department, team, and role/permission.
                  The design challenge was to make this structure
                  understandable without overwhelming users.
                </Text>
                <ListGroup items={structureFocus} columns={1} />
              </>
            }
            rationale={
              <Text>
                When structure is predictable, users know where something
                belongs and who is responsible for it—without needing to see
                the whole system.
              </Text>
            }
            framing="The interface should reflect how the organization actually works."
          >
            <HierarchyVisual />
          </DecisionBody>
        </Decision>

        <CaseStudySection title="Designing for what happens after submission">
          <Lead>
            The product required thinking beyond the moment feedback was
            submitted. Questions included:
          </Lead>
          <ListGroup items={postSubmissionQuestions} columns={1} />
          <div className="pt-4">
            <Callout>
              The real product begins after the user presses submit.
            </Callout>
          </div>
        </CaseStudySection>

        <Outcome />
        <Reflection />
        <ClientShotFinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

function BeforeAfter({
  beforeLabel,
  afterLabel,
  before,
  after,
}: {
  beforeLabel: string;
  afterLabel: string;
  before: React.ReactNode;
  after: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
      <div>
        <Caption className="uppercase tracking-[0.16em] text-muted-foreground">
          {beforeLabel}
        </Caption>
        <div className="mt-4">{before}</div>
      </div>
      <div>
        <Caption className="uppercase tracking-[0.16em]">{afterLabel}</Caption>
        <div className="mt-4">{after}</div>
      </div>
    </div>
  );
}

function HierarchyVisual() {
  return (
    <Panel>
      <ol>
        {orgLevels.map((level, i) => (
          <li
            key={level.label}
            className={cn(
              "flex items-center gap-4 border-b py-3.5 last:border-b-0",
              level.indent,
            )}
          >
            <span className="w-8 shrink-0 font-mono text-caption text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-foreground">{level.label}</span>
          </li>
        ))}
      </ol>
    </Panel>
  );
}

function Outcome() {
  return (
    <CaseStudySection title="A live system used across real organizations">
      <Text>ClientShot is a live product.</Text>
      <Text>
        It has been used by RHVN / Institute of Human Virology Nigeria to
        collect feedback across facilities.
      </Text>
      <Text>
        ClientShot has been used across facilities to collect feedback from
        patients and clients.
      </Text>
      <div className="pt-4">
        <Callout>
          As Lead Product Designer, I worked across the product&apos;s
          experience and underlying workflows, helping shape how feedback,
          forms, teams, organizational structures, and operational actions fit
          together.
        </Callout>
      </div>
    </CaseStudySection>
  );
}

function Reflection() {
  return (
    <CaseStudySection title="Feedback is a workflow, not a destination.">
      <Lead>
        The most important shift in thinking was treating feedback as the
        beginning of a workflow rather than the end of one.
      </Lead>
      <Text>
        Once feedback enters an organization, it needs context, ownership, and
        a path toward action.
      </Text>
      <div className="pt-4">
        <Callout>
          Good CX software should not only tell a team what customers said. It
          should help the team decide what happens next.
        </Callout>
      </div>
    </CaseStudySection>
  );
}

function ClientShotFinalCta() {
  return (
    <Section id="contact" inverse className="py-32 sm:py-44">
      <Glow inverse className="left-1/2 top-0 size-[36rem] -translate-x-1/2" />
      <Container>
        <Reveal>
          <Title as="h2" className="max-w-3xl text-inverse-foreground">
            Building something complex?
          </Title>
        </Reveal>
        <Reveal delay={0.08}>
          <Lead className="mt-8 max-w-2xl text-inverse-foreground/70">
            I help teams turn complicated workflows and product requirements
            into experiences people can understand and use.
          </Lead>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-11 rounded-full bg-inverse-foreground px-6 text-inverse hover:bg-inverse-foreground/90 hover:text-inverse"
            >
              <Link href={siteConfig.links.mail}>
                Let&apos;s build something better
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-11 rounded-full border border-inverse-foreground/25 px-6 text-inverse-foreground hover:bg-inverse-foreground/10 hover:text-inverse-foreground"
            >
              <Link href="/work">
                View more work
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
