import Image from "next/image";
import { cn } from "@/lib/utils";
import { Glow } from "@/components/surface";

type MediaProps = {
  src?: string;
  alt: string;
  /** Project label shown in the placeholder composition. */
  label: string;
  /** Mono metadata line, e.g. "EventTech · Product Design". */
  meta?: string;
  index?: string;
  /** Tailwind aspect-ratio class, e.g. "aspect-[16/9]". */
  aspectClassName: string;
  className?: string;
  priority?: boolean;
};

/**
 * Project media. Renders a real image via next/image when `src` is provided,
 * otherwise a deliberate editorial placeholder that establishes the required
 * dimensions and composition. Drop assets into /public/projects/<slug>/ and
 * pass their path as `src` to swap placeholders out.
 */
export function Media({
  src,
  alt,
  label,
  meta,
  index,
  aspectClassName,
  className,
  priority = false,
}: MediaProps) {
  return (
    <div
      className={cn(
        "relative isolate w-full overflow-hidden rounded-2xl border bg-muted",
        aspectClassName,
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 72rem, 100vw"
          className="object-cover"
        />
      ) : (
        <EditorialPlaceholder label={label} meta={meta} index={index} />
      )}
    </div>
  );
}

function EditorialPlaceholder({
  label,
  meta,
  index,
}: {
  label: string;
  meta?: string;
  index?: string;
}) {
  return (
    <div className="absolute inset-0 flex flex-col justify-between overflow-hidden p-6 sm:p-8">
      <Glow className="-right-20 -top-20 size-80" />

      {/* Abstract structural marks — establish composition, not fake UI. */}
      <div
        aria-hidden
        className="absolute -bottom-1/3 -right-1/5 size-[75%] rounded-full border border-foreground/10"
      />
      <div
        aria-hidden
        className="absolute -bottom-1/3 -right-1/5 size-[75%] translate-x-6 translate-y-6 rounded-full border border-foreground/5"
      />

      <div className="relative flex items-start justify-between">
        <span className="font-mono text-caption uppercase tracking-[0.14em] text-muted-foreground">
          {index}
        </span>
        {meta ? (
          <span className="max-w-[60%] text-right font-mono text-caption uppercase tracking-[0.14em] text-muted-foreground">
            {meta}
          </span>
        ) : null}
      </div>

      <div className="relative">
        <p className="max-w-xl font-heading text-heading font-semibold tracking-tight text-foreground">
          {label}
        </p>
        <p className="mt-3 font-mono text-caption uppercase tracking-[0.14em] text-muted-foreground/70">
          Project media
        </p>
      </div>
    </div>
  );
}
