// Site-wide config — single source of truth for nav, social, and contacts.
// Edit here; Header, Footer, and pages read from it. (See Plan/Website-Architecture.md §4)

export type NavItem = { label: string; href: string };

export const site = {
  name: "NSA @ Texas State",
  shortName: "NSA",
  tagline: "The one link every Nepali Bobcat can share.",
  description:
    "The Nepalese Student Association at Texas State — part resource hub, part community home for Nepali Bobcats.",
  // TODO: confirm real contact email (Readme.md §5)
  email: "hello@nsa-txst.org",
};

// Two clusters, one flat nav (Readme.md §2 / Architecture §2).
export const nav: { community: NavItem[]; resources: NavItem[] } = {
  community: [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
    { label: "Exec Board", href: "/exec-board" },
    { label: "About & Join", href: "/about" },
  ],
  resources: [
    { label: "Coming from Nepal", href: "/coming-from-nepal" },
    { label: "New Bobcat Guide", href: "/new-bobcat-guide" },
    { label: "Academics", href: "/academics" },
    { label: "Living in San Marcos", href: "/living-in-san-marcos" },
    { label: "Resources & FAQ", href: "/resources" },
  ],
};

// TODO: replace "#" with real handles (Readme.md §6).
export const social: NavItem[] = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Bobcat Organization Hub", href: "#" },
];

// Pinned everywhere (footer + Resources page). Readme.md §5.
export const emergencyContacts = [
  { label: "ISSS", value: "(512) 245-7966", href: "tel:+15122457966" },
  {
    label: "University Police (after hours)",
    value: "(512) 245-2805",
    href: "tel:+15122452805",
  },
];
