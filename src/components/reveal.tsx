"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { ease } from "@/lib/motion";

type RevealProps = {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

/** Fade-and-rise into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.6, ease: ease.out, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** A controlled blur-in: sharpens and settles into place. */
export function BlurReveal({
  children,
  className,
  delay = 0,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, ease: ease.out, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Word({
  progress,
  range,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  children: React.ReactNode;
}) {
  const opacity = useTransform(progress, range, [0.4, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block will-change-transform">
      {children}
    </motion.span>
  );
}

type ScrollRevealTextProps = {
  text: string;
  className?: string;
  wordClassName?: string;
};

/**
 * Scroll-driven text highlight: words brighten from muted to full as the
 * block moves through the viewport. Use for one or two focal statements.
 * Respects `prefers-reduced-motion` by rendering static, fully-readable text.
 */
export function ScrollRevealText({
  text,
  className,
  wordClassName,
}: ScrollRevealTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.35"],
  });

  if (reduced) {
    return <span className={cn("inline", className)}>{text}</span>;
  }

  const words = text.split(" ");

  return (
    <span ref={ref} className={cn("inline", className)}>
      {words.map((word, i) => (
        <Word
          key={`${word}-${i}`}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
        >
          <span className={wordClassName}>{word}</span>
          {"\u00A0"}
        </Word>
      ))}
    </span>
  );
}
