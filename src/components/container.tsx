import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** Use the narrower editorial measure for long-form text. */
  size?: "content" | "narrow";
  as?: "div" | "section" | "header" | "footer";
};

export function Container({
  children,
  className,
  size = "content",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-6 sm:px-8",
        size === "narrow" ? "max-w-[var(--container-narrow)]" : "max-w-[var(--container-content)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
