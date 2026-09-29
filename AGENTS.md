# Agent Guardrails — Win With Nabs Site

These rules apply to any AI agent (or human contributor using one) working
in this repository. [PRD.md](PRD.md) is the source of truth for scope and
requirements; [Proposal.md](Proposal.md) is the original client interview.
If this file conflicts with the PRD, flag the conflict instead of silently
picking one.

## 1. Scope discipline
- Build only what's in [PRD.md](PRD.md). Do not add pages, features, pricing
  displays, e-commerce, login/accounts, or analytics dashboards — these are
  explicitly out of scope (see PRD Section 12).
- Do not add prices anywhere on the Consulting or Sponsorships pages. This is
  an explicit client requirement, not an oversight.
- If a request would expand scope beyond the PRD, say so and ask before
  building it.

## 2. Never fabricate client content or assets
- Never invent or guess: subscriber counts, view counts, guest names,
  sponsor names, bios, testimonials, or booking links. Use only what's
  listed in PRD Section 9 ("Available now"). Everything under "Needed from
  client" must stay as an obvious placeholder (e.g. `[SUBSCRIBER_COUNT]`,
  `[BOOKING_LINK]`) until the client supplies the real value.
- Never fabricate or stock-photo-fake a "Karate Combat" logo, guest photo,
  or headshot. Use clearly labeled placeholder boxes until real, rights-
  cleared assets are supplied.
- Do not display detailed audience demographics/stats — deliberately
  excluded per the client's decision (PRD Section 9).
- Stats and bios should be sourced from a single content file/config, not
  hardcoded inline in markup, so the client can correct them without a code
  change.

## 3. Forms and data handling
- Sponsorship, Consulting, and Contact forms send data to
  `nabeelishoof@gmail.com` (or whatever backend the client confirms). Never
  point form submissions at a third-party address, test inbox, or logging
  service without explicit confirmation.
- Validate all form input server-side, not just client-side.
- Include spam mitigation (honeypot field and/or CAPTCHA) on every public
  form — submissions land in a personal inbox with no filtering.
- Never log, print, or persist full form submissions (name/email/message)
  to a public repo, console output, or committed files.
- Do not add analytics/tracking scripts, third-party embeds, or cookies
  beyond what's needed for the booking-tool integration unless the client
  asks for them.

## 4. Secrets and credentials
- Never commit API keys, email service credentials, `.env` files, or
  booking-tool tokens to the repository. Use environment variables and add
  them to `.gitignore`.
- If a task requires a secret that isn't available, stop and ask — don't
  invent a placeholder key that looks real enough to be mistaken for one.

## 5. Accessibility and quality baseline
- Maintain sufficient color contrast for the accent color against the dark
  background (PRD Section 11).
- All form inputs need visible labels and must be keyboard-navigable.
- Hero video must have a static poster/fallback image and must not autoplay
  with sound.
- Test responsive behavior at common breakpoints (mobile ~375px, tablet,
  desktop) before considering a page done — two-column sections must stack
  on small screens.

## 6. Design tone
- Keep the "professional with edge" tone from the PRD — dark background,
  bold headlines, one accent color from the client's logo. Avoid generic
  page-builder/template aesthetics; this was an explicit client complaint
  about reference sites they disliked.
- Don't reuse layouts/copy verbatim from the inspiration sites named in the
  PRD (Grove Podcast Studios, Creator Science, The Casuals MMA) — use them
  for structural inspiration only, not to copy.

## 7. Before build-blocking work
- Several items in PRD Section 9 are blocking (logo files, hero video,
  photos, bio, booking link, Karate Combat usage rights). If a task depends
  on one of these and it's missing, use a labeled placeholder and note the
  dependency rather than guessing or delaying silently.

## 8. Version control and deployment
- Don't push, force-push, or deploy without explicit user confirmation.
- Don't delete or overwrite [PRD.md](PRD.md), [Proposal.md](Proposal.md), or
  client-provided assets without confirmation — treat them as source
  material, not scratch files.

## 9. When in doubt
- Prefer asking a clarifying question over guessing when a PRD requirement
  is ambiguous (see PRD Section 13, Open Questions).
- Surface open questions back to the client/user rather than silently
  resolving them with an assumption.
