export const musicadeHeroMeta = [
  { label: "Role", value: "Product Designer" },
  { label: "Category", value: "EventTech / Event Management" },
  { label: "Status", value: "Live Product" },
];

export const musicadeOverviewMeta = [
  { label: "Role", value: "Product Designer" },
  { label: "Product", value: "Musicade" },
  { label: "Category", value: "EventTech / Event Management" },
  { label: "Status", value: "Live Product" },
];

export const coordinationAreas = [
  "People",
  "Tasks",
  "Inventory",
  "Promotion",
  "Ticketing",
  "Communication",
  "Execution",
];

export const artistNeeds = [
  "Be discovered",
  "Promote themselves",
  "Connect with organizers",
  "Find opportunities",
  "Manage bookings",
];

export const constraints = [
  {
    title: "Existing mobile product",
    body: "The existing mobile product did not have a complete Figma source of truth. I reconstructed screens from the live mobile experience and pieced together prototypes so the existing experience could be understood and extended.",
  },
  {
    title: "Web V2",
    body: "The web experience was largely built from scratch. The challenge was to carry over existing mobile functionality while introducing new product capabilities under tight time constraints.",
  },
  {
    title: "Rapid product expansion",
    body: "The product was expanding across multiple areas at once:",
  },
];

export const expansionAreas = [
  "Onboarding",
  "Ticket purchase",
  "Services",
  "Gigs",
  "Guest lists",
  "Project management",
  "Campaigns",
  "Email",
  "Profiles / inventory",
  "Ticket details",
];

export const participants = [
  "Organizers",
  "Artists / DJs / Creators",
  "Marketing Teams",
  "Attendees",
];

export const workspaceArchitecture = ["Projects", "Campaigns", "Inventory"];

export const audienceFlow = [
  "Email",
  "Person exists",
  "Phone number later added",
  "Same audience identity",
];

export const ticketingFlow = [
  "View event",
  "External ticketing",
  "User purchases externally",
  "Returns to Musicade",
  "\u201cYes, I bought my ticket\u201d",
  "\u201cStay in the loop\u201d modal",
];

export const followStates = [
  { state: "Existing user", action: "Follow immediately" },
  { state: "Signed-out user", action: "Sign in" },
  { state: "New user", action: "Create account" },
];

export const beyondHappyPath = [
  "Different account states",
  "External journeys",
  "Incomplete journeys",
  "Multiple user roles",
  "Conflicting requirements",
  "Product expansion",
  "Different levels of user intent",
  "Information hierarchy",
  "What happens before and after the primary action",
];

export const btgCapabilities = [
  "Build a profile",
  "Submit a song or video",
  "Apply through Musicade",
];
