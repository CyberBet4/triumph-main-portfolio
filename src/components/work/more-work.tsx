import { Container } from "@/components/container";
import { ProjectCompact } from "@/components/project-presentation";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Title } from "@/components/typography";
import { additionalProjects } from "@/lib/content";

export function MoreWork() {
  return (
    <Section className="py-28 sm:py-36">
      <Container>
        <Reveal>
          <Title as="h2">More work</Title>
        </Reveal>

        <div className="mt-14 flex flex-col gap-14 sm:gap-16">
          {additionalProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <ProjectCompact project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
