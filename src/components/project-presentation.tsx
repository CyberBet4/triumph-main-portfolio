import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Media } from "@/components/media";
import { Caption, Eyebrow, Heading, Meta, Text } from "@/components/typography";
import type { Project } from "@/lib/content";

/** Flagship — large full-width editorial presentation. */
export function ProjectFeature({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <article>
      <Link href={project.href} className="group block">
        <Media
          src={project.media.src}
          label={project.name}
          meta={project.category}
          index={project.media.index}
          alt={project.media.alt}
          aspectClassName={project.media.aspect}
          priority={priority}
          className="transition-[transform,border-color] duration-500 ease-out group-hover:border-foreground/20"
        />
      </Link>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8">
          <Link href={project.href} className="group block">
            <Eyebrow>{project.name}</Eyebrow>
            <Heading
              as="h3"
              className="mt-5 max-w-2xl transition-opacity group-hover:opacity-70"
            >
              {project.title}
            </Heading>
            <Text className="mt-5 max-w-xl">{project.description}</Text>
            <span className="mt-7 inline-flex items-center gap-1.5 font-mono text-meta text-foreground">
              {project.ctaLabel}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-6 lg:col-span-4">
          <MetaField label="Category" value={project.category} />
          <MetaField label="Role" value={project.role} />
        </div>
      </div>
    </article>
  );
}

/** Secondary — substantial but smaller presentation. */
export function ProjectSecondary({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col">
      <Link href={project.href} className="group block">
        <Media
          src={project.media.src}
          label={project.name}
          meta={project.category}
          index={project.media.index}
          alt={project.media.alt}
          aspectClassName={project.media.aspect}
          className="transition-[transform,border-color] duration-500 ease-out group-hover:border-foreground/20"
        />
      </Link>

      <div className="mt-8 flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-4">
          <Meta>{project.category}</Meta>
          <Caption>{project.role}</Caption>
        </div>
        <Link href={project.href} className="group mt-4 block">
          <Eyebrow>{project.name}</Eyebrow>
          <Heading
            as="h3"
            className="mt-4 max-w-md transition-opacity group-hover:opacity-70"
          >
            {project.title}
          </Heading>
        </Link>
        <Text className="mt-4 flex-1 max-w-md">{project.description}</Text>
        <Link
          href={project.href}
          className="group mt-7 inline-flex items-center gap-1.5 font-mono text-meta text-foreground"
        >
          {project.ctaLabel}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

/** Compact — additional work with reduced visual weight. */
export function ProjectCompact({ project }: { project: Project }) {
  return (
    <article className="group border-t pt-8 sm:pt-10">
      <Link
        href={project.href}
        className="grid grid-cols-1 gap-8 sm:grid-cols-[1fr_1.4fr] sm:gap-10"
      >
        <Media
          src={project.media.src}
          label={project.name}
          meta={project.category}
          index={project.media.index}
          alt={project.media.alt}
          aspectClassName={project.media.aspect}
          className="transition-[transform,border-color] duration-500 ease-out group-hover:border-foreground/20"
        />

        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Meta>{project.category}</Meta>
            {project.status ? (
              <span className="inline-flex items-center gap-1.5 font-mono text-caption uppercase tracking-[0.14em] text-muted-foreground">
                <span className="size-1.5 rounded-full bg-foreground/50" />
                {project.status}
              </span>
            ) : null}
          </div>
          <Eyebrow className="mt-5">{project.name}</Eyebrow>
          <Heading
            as="h3"
            className="mt-3 max-w-lg transition-opacity group-hover:opacity-70"
          >
            {project.title}
          </Heading>
          <Text className="mt-3 max-w-lg">{project.description}</Text>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-2">
            <MetaFieldInline label="Role" value={project.role} />
            <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-meta text-foreground">
              {project.ctaLabel}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

function MetaField({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t pt-4">
      <Caption className="uppercase tracking-[0.14em]">{label}</Caption>
      <Meta as="p" className="mt-2">
        {value}
      </Meta>
    </div>
  );
}

function MetaFieldInline({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-6">
      <Caption className="uppercase tracking-[0.14em]">{label}</Caption>
      <Meta as="p" className="mt-1.5">
        {value}
      </Meta>
    </div>
  );
}
