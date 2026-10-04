import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  /** Renders a large black (light) / white (dark) contrast block. */
  inverse?: boolean;
  id?: string;
  as?: "section" | "div";
};

export function Section({
  children,
  className,
  inverse = false,
  id,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative isolate py-24 sm:py-32",
        inverse && "bg-inverse text-inverse-foreground",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
