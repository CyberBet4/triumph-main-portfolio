export const siteConfig = {
  name: "Triumph Anazia",
  role: "Product Designer · Systems Thinker · Frontend Engineer",
  description:
    "Product Designer specializing in simplifying complex business workflows into intuitive digital products through systems thinking, product strategy, and thoughtful UX.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  links: {
    mail: "mailto:hello@triumphanazia.com",
    email: "hello@triumphanazia.com",
    linkedin: "#",
    github: "#",
  },
  nav: [
    { label: "Work", href: "/work" },
    { label: "Playground", href: "/playground" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
