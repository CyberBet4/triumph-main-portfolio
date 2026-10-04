export type Project = {
  slug: string;
  name: string;
  title: string;
  description: string;
  category: string;
  role: string;
  /** Optional live-product status, e.g. "Live Product". */
  status?: string;
  /** Featured projects receive stronger visual treatment. */
  featured: boolean;
  /** CTA label, e.g. "View case study" or "View project". */
  ctaLabel: string;
  /** Case-study route. */
  href: string;
  media: {
    /** Tailwind aspect-ratio class, e.g. "aspect-[16/9]". */
    aspect: string;
    alt: string;
    index: string;
    /**
     * Optional path to a real image under /public. When provided, the media
     * component renders it via next/image; otherwise an editorial placeholder
     * is shown. Expected: /projects/<slug>/hero.webp
     */
    src?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "musicade",
    name: "Musicade",
    title: "Designing a connected ecosystem for the people behind live events.",
    description:
      "Bringing event planning, ticketing, artist discovery, campaigns, and collaboration into one connected product experience.",
    category: "EventTech / Event Management",
    role: "Product Designer",
    status: "Live Product",
    featured: true,
    ctaLabel: "View case study",
    href: "/work/musicade",
    media: {
      aspect: "aspect-[16/9]",
      alt: "Musicade — connected ecosystem for live events",
      index: "01",
    },
  },
  {
    slug: "clientshot",
    name: "ClientShot",
    title: "Turning customer feedback into an operational workflow.",
    description:
      "A customer experience platform that helps organizations collect, understand, assign, and act on customer feedback.",
    category: "B2B SaaS / HealthTech",
    role: "Lead Product Designer",
    status: "Live Product",
    featured: true,
    ctaLabel: "View case study",
    href: "/work/clientshot",
    media: {
      aspect: "aspect-[4/3]",
      alt: "ClientShot — customer feedback workflow",
      index: "02",
    },
  },
  {
    slug: "payrep",
    name: "PayRep",
    title: "Making everyday banking simpler through smarter payment experiences.",
    description:
      "Designing faster, more contextual payment experiences for a live mobile banking product.",
    category: "FinTech · Mobile Banking",
    role: "Senior Product Designer",
    featured: true,
    ctaLabel: "View case study",
    href: "/work/payrep",
    media: {
      aspect: "aspect-[4/5]",
      alt: "PayRep — smarter mobile payment experiences",
      index: "03",
    },
  },
  {
    slug: "elsrt",
    name: "ELSRT",
    title: "Coordinating sample movement across a healthcare network.",
    description:
      "A healthcare logistics and laboratory sample tracking product designed to help coordinate sample movement across facilities, states, and riders/carriers.",
    category: "HealthTech",
    role: "Lead Product Designer",
    status: "Live Product",
    featured: false,
    ctaLabel: "View project",
    href: "/work/elsrt",
    media: {
      aspect: "aspect-[16/9]",
      alt: "ELSRT — healthcare logistics and laboratory sample tracking",
      index: "04",
    },
  },
  {
    slug: "xchangebox",
    name: "XChangeBox",
    title: "Connecting businesses around commodity financing.",
    description:
      "A trade finance platform connecting businesses, farmers, and investors around commodity financing and transactions.",
    category: "Trade Finance · FinTech",
    role: "Senior Product Designer",
    status: "Live Product",
    featured: false,
    ctaLabel: "View project",
    href: "/work/xchangebox",
    media: {
      aspect: "aspect-[3/2]",
      alt: "XChangeBox — trade finance platform",
      index: "05",
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const additionalProjects = projects.filter((project) => !project.featured);

export const principles = [
  {
    index: "01",
    title: "Simplify the workflow",
    body: "Remove unnecessary steps and make the user's next decision clear.",
  },
  {
    index: "02",
    title: "Design the system",
    body: "Understand how screens, data, people, and workflows connect.",
  },
  {
    index: "03",
    title: "Think beyond the happy path",
    body: "Design for what happens when users make mistakes, change their minds, or encounter unexpected conditions.",
  },
  {
    index: "04",
    title: "Design for efficiency",
    body: "Reduce unnecessary work without removing necessary understanding.",
  },
];

export const playgroundItems = [
  {
    index: "01",
    type: "UX Teardown",
    title: "Why does this workflow need so many steps?",
  },
  {
    index: "02",
    type: "Interaction Experiment",
    title: "Designing for the moment before a decision.",
  },
  {
    index: "03",
    type: "AI Product Concept",
    title: "What should an AI interface actually do?",
  },
];

export const featuredInsight = {
  title: "Complexity is inevitable. Confusion isn't.",
  category: "Product Design · Systems Thinking",
  readingTime: "5 min",
  href: "/insights/complexity-is-inevitable",
};
