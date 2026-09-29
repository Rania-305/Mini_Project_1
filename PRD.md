# Product Requirements Document: Win With Nabs Business Site

**Status:** Draft
**Owner:** [Your Name], Product Manager
**Client/Stakeholder:** Nabeel "Nabs" Ishoof
**Last updated:** 2026-09-28

---

## 1. Overview

Win With Nabs is a podcast/YouTube channel hosted by Nabeel Ishoof, recorded at
Grove Podcast Studios in Miami. Originally a combat sports interview show, the
brand is pivoting toward business and tech content, with past guests
including Dana White, Asher Genoot, and Audie Attar.

This project delivers a professional business website for Win With Nabs. The
site is **not** a fan/content page for the show — it exists to convert
visitors (primarily brands) into qualified inquiries for sponsorships,
consulting, and guest pitches.

## 2. Problem Statement

Nabs currently has no dedicated business presence separate from his social
channels. Brands evaluating a sponsorship, individuals seeking consulting,
and prospective guests have no single, credible destination to evaluate his
reach, understand his offers, and take action. This results in missed or
informal inquiries that are harder to track and qualify.

## 3. Goals & Success Metrics

### Goals
- Establish a credible, professional web presence that reflects the show's
  pivot to business/tech.
- Drive qualified **sponsorship inquiries** as the primary conversion event.
- Provide a clear secondary path to book **consulting calls**.
- Provide a clear path for **prospective guests** to pitch themselves.
- Avoid a generic, template-looking, "AI-made" aesthetic.

### Success Metrics (proposed — confirm with client)
- Number of sponsorship inquiry form submissions per month.
- Number of consulting "Book a Call" click-throughs per month.
- Number of guest pitch submissions per month.
- Bounce rate on the Home and Sponsorships pages.
- Qualitative: client sign-off that the visual design meets the "professional
  with edge" bar and is not template-looking.

## 4. Target Audience & Personas

| Persona | Need | Primary CTA |
|---|---|---|
| **Brand / Sponsor decision-maker** | Proof of reach and credibility (subscriber count, 2M+ lifetime views, notable guests, past sponsor history) before committing budget | Submit sponsorship inquiry |
| **Aspiring creator / professional** | Wants advice on building a social media career; needs to know consulting is offered and how to book | Book a consulting call |
| **Prospective podcast guest** | Wants a clear, low-friction way to pitch themselves for the show | Submit guest request |

## 5. Key User Flows

1. **Sponsor flow (primary):** Land on Home → skim credentials/social proof →
   navigate to Sponsorships → review partnership details and past sponsor →
   submit inquiry form → confirmation.
2. **Consulting flow (secondary):** Land on Home or Consulting page → read
   value proposition → click "Book a Call" → external booking tool (e.g.
   Calendly) → confirmation.
3. **Guest flow (secondary):** Land on Home or About → navigate to Contact Us
   → submit guest request form → confirmation.

## 6. Information Architecture / Site Map

- **Home** (`/`)
- **About** (`/about`)
- **Sponsorships** (`/sponsorships`) — primary conversion page
- **Consulting** (`/consulting`)
- **Contact Us** (`/contact`)

Navigation: primary nav links on the left (Home, About, Sponsorships,
Consulting, Contact Us), logo on the right, on every page.

## 7. Page-Level Requirements

### 7.1 Home
**Purpose:** Hook visitors, establish credibility, and route them toward the
right offer.

Sections, top to bottom:
1. **Nav bar** — nav links left, logo right (persistent across all pages).
2. **Hero** — full-width background video of Win With Nabs clips on loop
   (muted, autoplay), bold headline, scroll-down affordance/arrow at the
   bottom.
3. **"The Win With Nabs Story"** — text block on the left, large supporting
   image on the right.
4. **"Nabs' Credentials"** — text block on the left covering subscriber
   count, 2M+ lifetime views, featured guests (Dana White, Asher Genoot,
   Audie Attar), and the Karate Combat partnership; smaller supporting image
   on the right.

**Responsive behavior:** On small screens, each two-column section (text +
image) stacks vertically (text first, then image, unless client feedback
says otherwise during design review).

**Acceptance criteria:**
- Hero video loops seamlessly and does not block page interaction while
  loading (poster/fallback image shown until video is ready).
- All credential numbers are driven by content data (see Section 9), not
  hardcoded copy, so they can be updated without a code change.
- Page is fully navigable and legible on mobile viewport widths (~375px+).

### 7.2 About
**Purpose:** Establish Nabs' personal background and the show's
business/tech direction, building trust beyond raw stats.

**Content:**
- Nabs' background/bio (updated for the business/tech pivot — pending from
  client).
- Narrative on why the show moved from combat sports interviews to
  business/tech.
- Supporting photography (headshot, studio photos).

**Acceptance criteria:**
- Bio content is sourced from a single content file/CMS field so it can be
  updated without touching layout code.

### 7.3 Sponsorships (Primary conversion page)
**Purpose:** Give brands everything they need to say yes, then capture the
inquiry.

**Content:**
- Description of what a partnership/sponsorship looks like (placements,
  formats — pending detail from client).
- Featured past guests (Dana White, Asher Genoot, Audie Attar) as social
  proof.
- Past sponsor showcase: Karate Combat (logo usage pending client
  permission).
- Reach/credibility stats (subscriber count, 2M+ lifetime views). Detailed
  audience demographics/stats are explicitly excluded per client decision.
- Sponsorship inquiry form.

**Form fields (proposed — confirm with client):**
- Name (required)
- Company/brand (required)
- Email (required)
- Budget range or partnership type (optional)
- Message (required)

**Behavior:** On submit, form data is emailed to `nabeelishoof@gmail.com`
and the user sees an on-page confirmation state (no dead-end redirect).

**Acceptance criteria:**
- Form validates required fields client-side and server-side before
  sending.
- Submission triggers a notification to `nabeelishoof@gmail.com` and
  displays a success confirmation to the user.
- Page is structured so the sponsorship offer/value prop is visible before
  any scrolling is required to find the form (inspired by Grove Podcast
  Studios' pattern of leading with the offer).

### 7.4 Consulting
**Purpose:** Communicate that Nabs offers social-media-career consulting and
drive a booking, without listing prices.

**Content:**
- Explanation of consulting service (advice on building a social media
  career).
- No pricing displayed.
- "Book a Call" CTA linking to an external scheduling tool (e.g. Calendly —
  link pending from client).

**Acceptance criteria:**
- "Book a Call" CTA is visually prominent and present without requiring
  the user to scroll through unrelated content first.
- CTA opens the booking link in a way that doesn't strand the user (e.g.
  new tab), so they don't lose the site.

### 7.5 Contact Us
**Purpose:** Catch-all for general inquiries and the guest-request flow.

**Content:**
- General inquiry form.
- Guest request form (or a unified form with an inquiry-type selector —
  design decision to confirm).
- Contact email displayed: `nabeelishoof@gmail.com`.

**Form fields (proposed — confirm with client):**
- Name (required)
- Email (required)
- Inquiry type: General / Guest request (required)
- Message (required)

**Acceptance criteria:**
- Both general and guest-request submissions route to
  `nabeelishoof@gmail.com`.
- User receives on-page confirmation after submission.

## 8. Design Requirements

- **Tone:** Professional with edge — between sleek corporate and a fight
  poster. Not generic, template-looking, or obviously "AI-made."
- **Palette:** Dark background with a single accent color matched to Nabs'
  existing logo (exact logo file pending from client).
- **Typography:** Bold, confident headlines consistent with the brand tone.
- **Imagery:** Hero background video of show clips; large lifestyle/story
  image on Home; headshot and studio photography on About; guest photos
  where usage rights are confirmed.
- **Responsiveness:** All pages must be mobile-friendly; multi-column
  sections stack vertically on small screens.
- **Inspiration:**
  - *Grove Podcast Studios* (grovepodcast.com) — liked. Site should mirror
    its pattern of leading with concrete offers and pairing every service
    with a direct action (e.g. "Book Now"), rather than a passive
    "contact me if interested" model.
  - *Creator Science* sponsor page — disliked for being visually too plain.
  - *The Casuals MMA* — disliked for the same reason (not visually strong).
- **Reference asset:** [Layout_Sketch.jpeg](Layout_Sketch.jpeg) — initial
  layout sketch for the Home page.

## 9. Content Requirements

### Available now
- Subscriber count
- 2M+ lifetime views
- Featured guests: Dana White, Asher Genoot, Audie Attar
- Past sponsor: Karate Combat
- Contact email: `nabeelishoof@gmail.com`

### Needed from client before build/launch (blocking items)
- [ ] Exact current subscriber count
- [ ] Logo files (for nav, favicon, brand accent color reference)
- [ ] Video clips for the hero section
- [ ] Headshot and studio photos
- [ ] Guest photos Nabs is cleared to use
- [ ] Updated bio reflecting the business/tech pivot
- [ ] Booking link for consulting calls (e.g. Calendly)
- [ ] Confirmation of rights to use the Karate Combat logo

### Deliberately excluded
- Detailed audience demographics/statistics (client's decision — reach
  metrics only, no deep analytics breakdown).
- Pricing information on the Consulting page.

## 10. Functional Requirements

- FR1: Site must render four content pages plus Home, each reachable from a
  persistent nav bar.
- FR2: Sponsorship inquiry form must capture submissions and deliver them to
  `nabeelishoof@gmail.com`.
- FR3: Contact Us page must support both general inquiries and guest
  requests, delivered to `nabeelishoof@gmail.com`.
- FR4: Consulting page must link out to an external booking tool for calls.
- FR5: Home page hero must support a looping background video with a
  graceful fallback (static image) if video fails to load.
- FR6: All pages must be responsive, with two-column sections collapsing to
  a single stacked column below a defined breakpoint (e.g. 768px).

## 11. Non-Functional Requirements

- **Performance:** Hero video should be compressed/optimized so it does not
  materially delay page load; consider lazy-loading below-the-fold images.
- **Accessibility:** Sufficient color contrast against the dark background
  for the chosen accent color; forms must have labeled inputs and keyboard
  navigation support.
- **Browser/device support:** Latest versions of major browsers (Chrome,
  Safari, Edge, Firefox); mobile-first responsive support down to common
  phone viewport widths.
- **Spam protection:** Forms should include basic spam mitigation (e.g.
  honeypot field or CAPTCHA) since submissions land in a personal inbox.
- **Maintainability:** Stats (subscriber count, view count) and bios should
  be editable without code changes (e.g. config/content file or lightweight
  CMS).

## 12. Out of Scope (v1)

- E-commerce or payment processing (no pricing shown anywhere).
- User accounts/login.
- Blog or episode archive/media library.
- Detailed audience analytics dashboards or public stat pages.
- Multi-language support.

## 13. Open Questions

1. What exact copy/details describe "what a sponsorship partnership looks
   like" (formats, placements, deliverables)?
2. Should Contact Us use one unified form with an inquiry-type selector, or
   two separate forms (general vs. guest request)?
3. What booking tool will be used for consulting calls, and is the link
   ready?
4. Is there a preferred email-delivery mechanism (e.g. form backend/service)
   or should submissions go through a specific existing tool?
5. Any brand guidelines beyond "accent color matches the logo" (fonts, logo
   usage rules)?

## 14. Milestones (proposed)

| Milestone | Description |
|---|---|
| M1 | Content and asset collection complete (Section 9 blocking items resolved) |
| M2 | Visual design/mockups approved by client (tone, palette, Home layout) |
| M3 | Home and Sponsorships pages built and functional |
| M4 | About, Consulting, and Contact Us pages built and functional |
| M5 | Forms wired to email delivery and tested end-to-end |
| M6 | Responsive QA across breakpoints and browsers |
| M7 | Client review and launch |

## 15. Appendix

- Source proposal/client interview: [Proposal.md](Proposal.md)
- Layout sketch: [Layout_Sketch.jpeg](Layout_Sketch.jpeg)
