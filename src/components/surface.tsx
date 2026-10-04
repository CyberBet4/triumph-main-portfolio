import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children?: ReactNode;
  className?: string;
  interactive?: boolean;
};

/**
 * Default surface. Calm, editorial, structured. Not glassy.
 */
export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-card text-card-foreground",
        interactive &&
          "transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
}

type GlassPanelProps = {
  children?: ReactNode;
  className?: string;
  /** Stronger, more opaque glass for overlays. */
  strong?: boolean;
};

/**
 * Selective liquid-glass surface. Use only for navigation, overlays, and
 * special interactive elements — never as the default card style.
 */
export function GlassPanel({ children, className, strong = false }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "border backdrop-blur-lg backdrop-saturate-150",
        strong
          ? "border-glass-border bg-glass-strong shadow-lg"
          : "border-glass-border bg-glass",
        className,
      )}
    >
      {children}
    </div>
  );
}

type GlowProps = {
  className?: string;
  /** Stronger, higher-contrast glow. */
  strong?: boolean;
  /** For inverse (dark-in-light / light-in-dark) surfaces. */
  inverse?: boolean;
};

/**
 * A subtle neutral radial glow. Applied sparingly behind focal content.
 */
export function Glow({ className, strong = false, inverse = false }: GlowProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-10 rounded-full blur-2xl",
        inverse ? "bg-glow-inverse" : strong ? "bg-glow-strong" : "bg-glow",
        className,
      )}
    />
  );
}
