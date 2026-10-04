import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/container";
import { Media } from "@/components/media";
import { BlurReveal, Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { Glow } from "@/components/surface";
import { Display, Eyebrow, Lead } from "@/components/typography";
import { MetaGrid } from "@/components/case-study/visuals";

type HeroMeta = { label: string; value: string };

type HeroMedia = {
  src?: string;
  alt: string;
  label: string;
  meta?: string;
  index?: string;
  aspectClassName: string;
};

export function CaseStudyHero({
  eyebrow,
  title,
  summary,
  meta,
  media,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  meta: HeroMeta[];
  media: HeroMedia;
}) {
  return (
    <Section className="pt-32 pb-20 sm:pt-44 sm:pb-28">
      <Glow strong className="left-1/2 top-0 size-[38rem] -translate-x-1/2" />
      <Container>
        <BlurReveal>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-meta text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All work
          </Link>
        </BlurReveal>

        <BlurReveal delay={0.06}>
          <Eyebrow className="mt-10">{eyebrow}</Eyebrow>
        </BlurReveal>

        <BlurReveal delay={0.12}>
          <Display className="mt-8 max-w-5xl">{title}</Display>
        </BlurReveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal delay={0.18} className="lg:col-span-5">
            <Lead className="max-w-md">{summary}</Lead>
          </Reveal>
          <Reveal delay={0.22} className="lg:col-span-7">
            <MetaGrid items={meta} />
          </Reveal>
        </div>

        <Reveal delay={0.26} y={24}>
          <Media
            src={media.src}
            label={media.label}
            meta={media.meta}
            index={media.index}
            alt={media.alt}
            aspectClassName={media.aspectClassName}
            className="mt-16 sm:mt-20"
          />
        </Reveal>
      </Container>
    </Section>
  );
}
