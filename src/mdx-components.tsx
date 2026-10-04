import type { MDXComponents } from "mdx/types";
import { Display, Heading, Text, Lead, Meta, Subheading } from "@/components/typography";

export function useMDXComponents(): MDXComponents {
  return {
    h1: (props) => <Display as="h1" {...props} />,
    h2: (props) => <Subheading as="h2" {...props} />,
    h3: (props) => <Subheading as="h3" {...props} />,
    p: (props) => <Text {...props} />,
    a: (props) => (
      <a
        className="underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground"
        {...props}
      />
    ),
    ul: (props) => <ul className="my-6 list-disc space-y-2 pl-6" {...props} />,
    ol: (props) => <ol className="my-6 list-decimal space-y-2 pl-6" {...props} />,
    li: (props) => <li className="text-body text-foreground/80" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="my-6 border-l-2 border-foreground/20 pl-6 text-foreground/70"
        {...props}
      />
    ),
    code: (props) => (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em]" {...props} />
    ),
    pre: (props) => (
      <pre
        className="my-6 overflow-x-auto rounded-2xl border bg-muted p-5 font-mono text-caption"
        {...props}
      />
    ),
    hr: (props) => <hr className="my-10 border-border" {...props} />,
    table: (props) => (
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse text-body" {...props} />
      </div>
    ),
    th: (props) => (
      <th className="border-b border-border px-3 py-2 text-left font-medium" {...props} />
    ),
    td: (props) => (
      <td className="border-b border-border px-3 py-2 text-foreground/80" {...props} />
    ),
    Heading,
    Lead,
    Meta,
  };
}
