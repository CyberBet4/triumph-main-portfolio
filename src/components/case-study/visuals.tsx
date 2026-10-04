import { ArrowDown } from "lucide-react";
import type { ReactNode } from "react";
import { Caption, Meta } from "@/components/typography";
import { cn } from "@/lib/utils";

export function MetaGrid({
  items,
  columns = 3,
}: {
  items: { label: string; value: string }[];
  columns?: 2 | 3 | 4;
}) {
  const cols =
    columns === 4
      ? "sm:grid-cols-4"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-3";
  return (
    <dl className={cn("grid grid-cols-1 gap-x-8 gap-y-6", cols)}>
      {items.map((item) => (
        <div key={item.label} className="border-t pt-4">
          <dt>
            <Caption className="uppercase tracking-[0.16em]">{item.label}</Caption>
          </dt>
          <dd>
            <Meta as="p" className="mt-2">
              {item.value}
            </Meta>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function ListGroup({
  items,
  columns = 1,
}: {
  items: string[];
  columns?: 1 | 2;
}) {
  return (
    <ul
      className={cn(
        "grid gap-x-10",
        columns === 2 && "sm:grid-cols-2",
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-baseline gap-3 border-b py-3 text-foreground/80"
        >
          <span className="size-1 shrink-0 translate-y-[-0.2em] rounded-full bg-foreground/40" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** A numbered vertical flow with a down-arrow connector between steps. */
export function FlowSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="border-t">
      {steps.map((step, i) => (
        <li key={step} className="border-b py-4 last:border-b">
          <div className="flex items-center gap-4">
            <span className="w-8 shrink-0 font-mono text-caption text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 text-foreground">{step}</span>
            {i < steps.length - 1 ? (
              <ArrowDown
                aria-hidden
                className="size-4 shrink-0 text-muted-foreground/40"
              />
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Editorial participant grid with hairline dividers. */
export function ParticipantGrid({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2">
      {items.map((item, i) => (
        <div key={item} className="bg-background p-7 sm:p-9">
          <Meta>0{i + 1}</Meta>
          <p className="mt-5 font-heading text-heading font-medium tracking-tight text-foreground">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

/** A neutral container for schematic / structural visual evidence. */
export function Panel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-muted/40 p-6 sm:p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
