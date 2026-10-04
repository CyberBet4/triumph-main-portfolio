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
import { Caption, Lead, Meta, Subheading, Text, Title } from "@/components/typography";
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
  ParticipantGrid,
} from "@/components/case-study";
import { projects } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import {
  artistNeeds,
  audienceFlow,
  beyondHappyPath,
  btgCapabilities,
  coordinationAreas,
  constraints,
  expansionAreas,
  followStates,
  musicadeHeroMeta,
  musicadeOverviewMeta,
  participants,
  ticketingFlow,
  workspaceArchitecture,
} from "@/lib/musicade";

const project = projects.find((p) => p.slug === "musicade")!;

export const metadata: Metadata = {
  title: { absolute: "Musicade — Triumph Anazia, Product Designer" },
  description:
    "How Triumph Anazia helped Musicade evolve from a mobile experience into a connected ecosystem for event organizers, artists, and audiences.",
  alternates: {
    canonical: "/work/musicade",
  },
};

export default function MusicadePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CaseStudyHero
          eyebrow="Musicade"
          title={project.title}
          summary="Musicade connects creators, organizers, talent, and audiences across the event lifecycle."
          meta={musicadeHeroMeta}
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
            Musicade connects creators, organizers, talent, and audiences
            across the event lifecycle.
          </Lead>
          <Text>
            I worked across the product as it evolved from an existing mobile
            experience into a broader web platform—structuring workflows,
            simplifying journeys, and connecting previously separate parts of
            the product.
          </Text>
          <div className="pt-2">
            <MetaGrid items={musicadeOverviewMeta} columns={2} />
          </div>
        </CaseStudySection>

        <TheChallenge />
        <ContextAndConstraints />
        <Ecosystem />

        <Decision
          number="01"
          title="Aligning product architecture with monetization"
        >
          <DecisionBody
            context={
              <>
                <Text>
                  The founder wanted to monetize workspaces by charging
                  workspace owners for collaborator seats.
                </Text>
                <Text>
                  However, the requirements referenced campaign limits while
                  campaigns existed outside the workspace. This created a
                  product architecture contradiction.
                </Text>
              </>
            }
            decision={
              <>
                <Text>
                  I challenged this during a client discussion and proposed
                  that the workspace contain Projects, Campaigns, and
                  Inventory.
                </Text>
                <Text>
                  A usage and subscription banner was also introduced to make
                  workspace usage and plan context visible.
                </Text>
              </>
            }
            rationale={
              <Text>
                The resulting structure meant the workspace owner could pay for
                collaborators while those collaborators could access the
                relevant projects, campaigns, and inventory.
              </Text>
            }
            framing="Rather than treating the workspace as a container for one feature, I used the monetization model to question what the workspace should actually represent."
          >
            <WorkspaceVisual />
          </DecisionBody>
        </Decision>

        <Decision number="02" title="Turning separate contact lists into one audience">
          <DecisionBody
            context={
              <Text>
                Email and SMS initially maintained separate contact lists.
              </Text>
            }
            decision={
              <>
                <Text>
                  I proposed a central Audience system that could be accessed
                  from both email and SMS workflows.
                </Text>
                <Text>
                  The goal was to create one audience identity for a person
                  while allowing their information to become richer over time.
                </Text>
              </>
            }
            rationale={
              <Text>
                A single audience identity means one source of truth across
                email and SMS—while a person&apos;s information grows as they
                engage, they remain one record.
              </Text>
            }
            framing="One person should not become multiple audience records simply because their contact information changes or expands."
          >
            <div className="space-y-6">
              <Meta>Information architecture · Data modeling · Product thinking</Meta>
              <FlowSteps steps={audienceFlow} />
            </div>
          </DecisionBody>
        </Decision>

        <Decision number="03" title="Capturing intent without blocking the purchase">
          <DecisionBody
            context={
              <>
                <Text>
                  Some Musicade events use third-party ticketing platforms.
                  There was a requirement to track when a user self-reported
                  that they had purchased a ticket externally.
                </Text>
                <Text>
                  The initial concept used a &ldquo;Get Ticket&rdquo; popup
                  requiring the user&apos;s full name and email before
                  redirecting them.
                </Text>
              </>
            }
            decision={
              <>
                <Text>
                  Making this information mandatory before redirecting could
                  introduce unnecessary friction before the actual purchase.
                </Text>
                <Text>
                  I proposed moving the information capture to the return
                  journey.
                </Text>
              </>
            }
            rationale={
              <Text>
                This approach separated ticket purchase from audience capture,
                reducing the risk of placing an additional requirement in front
                of the external purchase flow.
              </Text>
            }
          >
            <FlowSteps steps={ticketingFlow} />
          </DecisionBody>
        </Decision>

        <Decision number="04" title="Designing for intent beyond the checkout">
          <DecisionBody
            context={
              <Text>
                The client wanted users to be able to indicate interest without
                purchasing immediately.
              </Text>
            }
            decision={
              <>
                <Text>
                  I placed &ldquo;Mark as Interested&rdquo; directly beneath
                  the primary &ldquo;Proceed to checkout&rdquo; action.
                </Text>
                <Text>
                  The action was also kept accessible while scrolling.
                </Text>
              </>
            }
            rationale={
              <Text>
                A user who is not ready to purchase today should not become a
                lost user. The experience allowed users to express intent and
                receive reminders.
              </Text>
            }
            framing="Designing for intent, not just conversion."
          >
            <ActionHierarchyVisual />
          </DecisionBody>
        </Decision>

        <Decision number="05" title="Reducing cognitive load after purchase">
          <DecisionBody
            context={
              <Text>
                The success page contained several competing actions and pieces
                of information: Share event, View ticket, Marketing CTA, Ticket
                information, Ticket delivery confirmation, Apple/Google Wallet,
                and Add to calendar.
              </Text>
            }
            decision={
              <>
                <Text>
                  The challenge was to create a hierarchy without removing
                  useful actions.
                </Text>
                <Text>
                  I grouped the Wallet actions with the ticket information,
                  then structured the secondary actions as View Ticket, Share
                  Event, and Add Calendar.
                </Text>
                <Text>
                  The marketing CTA was placed below the core post-purchase
                  actions. I also added confirmation of the number of tickets
                  purchased and that ticket holders were being notified.
                </Text>
              </>
            }
            rationale={
              <Text>
                Without hierarchy, a success page forces users to parse many
                competing actions at once. Grouping the ticket and wallet
                actions—and moving marketing below the core actions—lets people
                confirm their purchase and move on.
              </Text>
            }
            framing="After a successful purchase, the primary job of the page is reassurance and access—not another conversion."
          >
            <SuccessHierarchyVisual />
          </DecisionBody>
        </Decision>

        <Decision number="06" title="Designing the follow flow around account state">
          <DecisionBody
            context={
              <Text>
                The follow action had three different user states: an existing
                signed-in user, an existing signed-out user, and a new user.
              </Text>
            }
            decision={
              <>
                <Text>
                  Instead of treating these as separate disconnected flows, I
                  designed an intermediary &ldquo;Follow this organizer&rdquo;
                  modal that clearly presented the available paths.
                </Text>
                <Text>
                  The modal also included social proof: &ldquo;Join thousands
                  of fans already following their favorite organizer on
                  Musicade&rdquo;—using audience avatars and a +2K indicator
                  based on the available audience context.
                </Text>
              </>
            }
            rationale={
              <Text>
                Designing around account state keeps the experience coherent:
                users are guided through the right next step—follow, sign in,
                or create an account—without being dropped into a dead end.
              </Text>
            }
          >
            <FollowStatesVisual />
          </DecisionBody>
        </Decision>

        <CaseStudySection title="Designing beyond the happy path">
          <Lead>
            The work was not only about designing ideal flows. The product
            required thinking through:
          </Lead>
          <ListGroup items={beyondHappyPath} columns={2} />
          <div className="pt-4">
            <Callout>
              Senior product design is often about designing what happens when
              the expected journey doesn&apos;t happen.
            </Callout>
          </div>
        </CaseStudySection>

        <Outcome />
        <Reflection />
        <MusicadeFinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

function TheChallenge() {
  return (
    <Section className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Title as="h2">The challenge</Title>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <Lead>
              Creating and running an event involves coordinating many moving
              parts at once:
            </Lead>
            <div className="mt-6">
              <ListGroup items={coordinationAreas} columns={2} />
            </div>
            <Lead className="mt-12">
              At the same time, independent artists and creators need ways to:
            </Lead>
            <div className="mt-6">
              <ListGroup items={artistNeeds} columns={1} />
            </div>
            <Text className="mt-12">
              Musicade was evolving toward a connected ecosystem rather than a
              collection of isolated features.
            </Text>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function ContextAndConstraints() {
  return (
    <Section className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Title as="h2">Working inside a moving product</Title>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="border-t">
              {constraints.map((constraint, i) => (
                <div key={constraint.title} className="border-b py-8">
                  <div className="flex gap-5">
                    <Meta className="shrink-0">0{i + 1}</Meta>
                    <div>
                      <Subheading as="h3">{constraint.title}</Subheading>
                      <Text className="mt-3">{constraint.body}</Text>
                      {constraint.title === "Rapid product expansion" ? (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {expansionAreas.map((area) => (
                            <span
                              key={area}
                              className="rounded-full border px-3 py-1 font-mono text-caption text-muted-foreground"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function Ecosystem() {
  return (
    <Section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <Title as="h2" className="max-w-2xl">
            One product, multiple workflows
          </Title>
        </Reveal>
        <Reveal delay={0.08}>
          <Lead className="mt-8 max-w-2xl">
            Musicade had to work across several roles with different goals,
            while keeping the overall experience coherent.
          </Lead>
        </Reveal>
        <Reveal delay={0.14} className="mt-14">
          <ParticipantGrid items={participants} />
        </Reveal>
      </Container>
    </Section>
  );
}

function WorkspaceVisual() {
  return (
    <Panel>
      <div className="rounded-xl border bg-background p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <Caption className="uppercase tracking-[0.16em]">Workspace</Caption>
          <span className="font-mono text-caption text-muted-foreground">
            Usage &amp; plan banner
          </span>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {workspaceArchitecture.map((item) => (
            <div
              key={item}
              className="rounded-lg border bg-muted/50 px-4 py-3 text-center font-mono text-caption text-foreground/80"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
        <Caption className="shrink-0 uppercase tracking-[0.16em]">Result</Caption>
        <Text>
          Collaborators access the projects, campaigns, and inventory
          they&apos;re part of.
        </Text>
      </div>
    </Panel>
  );
}

function ActionHierarchyVisual() {
  return (
    <Panel className="max-w-md">
      <div className="space-y-3">
        <div className="flex items-center justify-center rounded-xl bg-foreground px-6 py-3.5 text-center text-body font-medium text-background">
          Proceed to checkout
        </div>
        <div className="flex items-center justify-center rounded-xl border px-6 py-3.5 text-center text-body font-medium text-foreground">
          Mark as interested
        </div>
      </div>
      <p className="mt-6 text-center font-mono text-caption text-muted-foreground">
        Secondary intent, kept accessible while scrolling
      </p>
    </Panel>
  );
}

function SuccessHierarchyVisual() {
  return (
    <Panel>
      <div className="grid gap-6 sm:grid-cols-3">
        <Group
          label="Primary"
          items={["Ticket information", "Apple / Google Wallet"]}
        />
        <Group
          label="Secondary"
          items={["View ticket", "Share event", "Add calendar"]}
        />
        <Group label="Tertiary" items={["Marketing CTA"]} />
      </div>
      <div className="mt-6 border-t pt-4">
        <Caption className="uppercase tracking-[0.16em]">Confirmation</Caption>
        <Text className="mt-3">
          Number of tickets purchased · Ticket holders notified
        </Text>
      </div>
    </Panel>
  );
}

function Group({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <Caption className="uppercase tracking-[0.16em]">{label}</Caption>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-lg border bg-background px-4 py-2.5 text-body text-foreground/80"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FollowStatesVisual() {
  return (
    <Panel>
      <div className="grid gap-4 sm:grid-cols-3">
        {followStates.map((s, i) => (
          <div key={s.state} className="rounded-xl border bg-background p-5">
            <Meta>0{i + 1}</Meta>
            <Caption className="mt-3 block uppercase tracking-[0.14em]">
              {s.state}
            </Caption>
            <p className="mt-2 font-heading text-subheading font-medium tracking-tight text-foreground">
              {s.action}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t pt-4">
        <Caption className="uppercase tracking-[0.16em]">Social proof</Caption>
        <Text className="mt-3">
          &ldquo;Join thousands of fans already following their favorite
          organizer on Musicade&rdquo; — audience avatars with a +2K indicator.
        </Text>
      </div>
    </Panel>
  );
}

function Outcome() {
  return (
    <CaseStudySection title="From product concept to live ecosystem">
      <Text>
        Musicade is a live product and has been used in real-world scenarios.
      </Text>
      <Callout label="From a project update">
        &ldquo;Today Musicade books another artist — Deposit secured
        today.&rdquo;
      </Callout>
      <Text>
        Musicade has been used to facilitate artist bookings, including
        bookings where deposits have been secured.
      </Text>
      <Text>
        On September 1st, Musicade announced a partnership with Bridging the
        Gap (BTG) for artist discovery. The partnership lets artists:
      </Text>
      <ListGroup items={btgCapabilities} columns={1} />
      <Text>
        I contributed to the product as it expanded into a broader ecosystem
        connecting event organizers, artists, audiences, and supporting
        workflows.
      </Text>
    </CaseStudySection>
  );
}

function Reflection() {
  return (
    <CaseStudySection title="Complexity isn't necessarily the problem. Unstructured complexity is.">
      <Text>
        The product contained a lot of moving parts. The goal was not to
        eliminate all complexity.
      </Text>
      <Text>
        The goal was to make the relationships between those parts
        understandable so users could complete their tasks without needing to
        understand the underlying system.
      </Text>
      <div className="pt-4">
        <Callout>
          That is where I think product design creates the most value: making
          complex systems feel simple without pretending the complexity
          doesn&apos;t exist.
        </Callout>
      </div>
    </CaseStudySection>
  );
}

function MusicadeFinalCta() {
  return (
    <Section id="contact" inverse className="py-32 sm:py-44">
      <Glow inverse className="left-1/2 top-0 size-[36rem] -translate-x-1/2" />
      <Container>
        <Reveal>
          <Title as="h2" className="max-w-3xl text-inverse-foreground">
            Have a complex product problem?
          </Title>
        </Reveal>
        <Reveal delay={0.08}>
          <Lead className="mt-8 max-w-2xl text-inverse-foreground/70">
            I help teams turn complicated workflows into products people can
            actually understand and use.
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
