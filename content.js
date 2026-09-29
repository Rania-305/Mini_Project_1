/*
 * Central content/config file — per PRD Section 9 & 11 and AGENTS.md Section 2,
 * stats and bios live here (not hardcoded in markup) so the client can update
 * them without a code change. Values marked with brackets are placeholders
 * pending real assets/copy from the client — do not replace with guesses.
 */
window.SITE_CONTENT = {
  brand: {
    name: "Win With Nabs",
    // Placeholder accent color — swap for the real value once logo files arrive (PRD Sec. 9).
    accentColor: "#ff5a1f"
  },

  stats: {
    subscriberCount: "[SUBSCRIBER_COUNT]", // pending exact current count from client
    lifetimeViews: "2M+" // available now (PRD Sec. 9)
  },

  featuredGuests: [
    { name: "Dana White", photo: "Dana_guest.png" },
    { name: "Asher Genoot", photo: "Asher_guest.png" },
    { name: "Audie Attar", photo: "Audie_Guest.png" }
  ],

  pastSponsors: [
    { name: "Karate Combat", logoUrl: "KC_logo.png" },
    { name: "Pincho", logoUrl: "Pincho_logo.png" }
  ],

  bio: "[BIO PENDING FROM CLIENT — updated bio reflecting the show's pivot toward business and tech.]",

  storyText:
    "Win With Nabs started as a combat sports interview show recorded at Grove " +
    "Podcast Studios in Miami, and has since pivoted toward business and tech " +
    "conversations with founders, operators, and creators. [Full story copy pending from client.]",

  contact: {
    email: "nabeelishoof@gmail.com"
  },

  // Consulting booking link — pending from client (e.g. Calendly). Kept null so the
  // UI can clearly flag the blocker instead of linking somewhere fake.
  bookingLink: null
};
