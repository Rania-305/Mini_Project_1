## Feedback - Client conversation (10/11/2026)

- Top priorities and feedback from client (in his words):
    - Need better quality on the home page for the videos that are playing in the background; they're a little too grainy right now
    - Top of website (header on first page) should be a funnel, not a page to the Win with Nabs hyperlink
    - The YouTube channel hyperlink should exist somewhere in the website, just not at the top of the funnels
    - Probably should put the credentials up top and the book a call option right next to it
    - "About Nabs" should be the last tab
    - "Guests" then "About Us" should be the third and second to last tabs respectively
    - Make a calendly link for booking consultation or appointments

## PRD.md features not yet built (ranked by client)

1. Hero background video (PRD 7.1, FR5, §8, §11) — spec requires a looping, muted, autoplay video with a poster/fallback image; site currently uses static rotating images instead.
    a. This has not yet been built because I'm still awaiting video clips and assets from the client that will fit the website format. Until I receive these, it cannot be built.
2. Consulting "Book a Call" CTA linking to an external scheduling tool (PRD 7.4, FR4) — consulting.html only links to the Contact page; no booking link or `data-booking-pending` wiring is used.
3. Server-side form validation (PRD 7.3, 7.5, FR2, FR3) — now handled by Formspree once a real form ID is in place. See the form's `action` attribute in [contact.html](contact.html#L44) and the submit handling in [main.js](main.js#L62-L94).
4. Email delivery to `nabeelishoof@gmail.com` on form submit — forms now POST to Formspree, which forwards to the configured email. Requires replacing the `FORMSPREE_FORM_ID` placeholder in [contact.html](contact.html#L44) with a real form ID from a Formspree account verified to nabeelishoof@gmail.com. Note: GitHub Pages (the current host per [README.md](README.md)) has no server, so Formspree is used instead of a custom backend — Netlify Forms was considered but requires Netlify hosting, which this site doesn't use.
5. On-page success confirmation after a valid form submission (PRD 7.3, 7.5) — now shown via the `.form-status` element; see the success/error handling in [main.js](main.js#L76-L94).
6. CAPTCHA as a spam-mitigation option (PRD §11) — only the honeypot field is implemented, not a CAPTCHA.