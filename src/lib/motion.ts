import type { Variants } from "motion/react";

/**
 * Design-system easing curves.
 * These mirror the `--ease-*` tokens in globals.css so that Motion values
 * and CSS transitions share the same feel.
 */
export const ease = {
  out: [0.22, 1, 0.36, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
  spring: [0.34, 1.25, 0.64, 1] as const,
};

/**
 * Shared enter transitions. Applied from a parent via `initial`/`animate`
 * or from an `AnimatePresence` orchestration.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: ease.out },
  },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: ease.out } },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: ease.out },
  },
};
