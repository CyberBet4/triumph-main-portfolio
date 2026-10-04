import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type TypographyProps<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

function createTypography(defaultTag: ElementType, baseClass: string) {
  function Component<T extends ElementType = typeof defaultTag>({
    as,
    className,
    ...props
  }: TypographyProps<T>) {
    const Tag = (as ?? defaultTag) as ElementType;
    return <Tag className={cn(baseClass, className)} {...props} />;
  }
  Component.displayName = String(defaultTag);
  return Component;
}

/** Largest editorial statement. One per view, ideally. */
export const Display = createTypography(
  "h1",
  "font-heading text-display font-semibold tracking-tight text-balance",
);

/** Page / section title. */
export const Title = createTypography(
  "h2",
  "font-heading text-title font-semibold tracking-tight text-balance",
);

/** Section heading. */
export const Heading = createTypography(
  "h3",
  "font-heading text-heading font-semibold tracking-tight text-balance",
);

/** Subordinate heading. */
export const Subheading = createTypography(
  "h4",
  "font-heading text-subheading font-medium tracking-tight text-balance",
);

/** Body copy. */
export const Text = createTypography("p", "text-body text-foreground/80");

/** Larger lede / intro copy. */
export const Lead = createTypography("p", "text-body-lg text-foreground/80");

/** Small uppercase label that introduces a section. */
export const Eyebrow = createTypography(
  "span",
  "font-mono text-meta uppercase tracking-[0.18em] text-muted-foreground",
);

/** Monospace metadata (dates, indices, tags). */
export const Meta = createTypography(
  "span",
  "font-mono text-meta text-muted-foreground",
);

/** Smallest supporting text. */
export const Caption = createTypography(
  "span",
  "text-caption text-muted-foreground",
);
