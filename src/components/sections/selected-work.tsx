import { Container } from "@/components/container";
import {
  ProjectFeature,
  ProjectSecondary,
} from "@/components/project-presentation";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Text, Title } from "@/components/typography";
import { featuredProjects } from "@/lib/content";

export function SelectedWork() {
  const [flagship, ...rest] = featuredProjects;

  return (
    <Section id="work" className="py-28 sm:py-36">
      <Container>
        <Reveal>
          <Title as="h2">Selected Work</Title>
        </Reveal>
        <Reveal delay={0.08}>
          <Text className="mt-6 max-w-2xl">
            A selection of products I&apos;ve designed across event technology,
            customer experience, fintech, and complex operational workflows.
          </Text>
        </Reveal>

        {/* Flagship — Musicade */}
        <Reveal className="mt-16 sm:mt-20">
          <ProjectFeature project={flagship} priority />
        </Reveal>

        {/* Secondary projects */}
        <div className="mt-16 grid grid-cols-1 gap-16 sm:mt-24 md:grid-cols-2 md:gap-10">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectSecondary project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
