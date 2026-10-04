import { Container } from "@/components/container";
import {
  ProjectFeature,
  ProjectSecondary,
} from "@/components/project-presentation";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Title } from "@/components/typography";
import { featuredProjects } from "@/lib/content";

export function FeaturedWork() {
  const [flagship, ...rest] = featuredProjects;

  return (
    <Section className="py-28 sm:py-36">
      <Container>
        <Reveal>
          <Title as="h2">Featured work</Title>
        </Reveal>

        {/* Flagship — Musicade */}
        <Reveal className="mt-16 sm:mt-20">
          <ProjectFeature project={flagship} priority />
        </Reveal>

        {/* Secondary — ClientShot + PayRep */}
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
