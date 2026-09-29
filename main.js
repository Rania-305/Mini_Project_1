/*
 * Shared behavior across all pages: nav toggle, scroll cue, booking-link
 * placeholder handling, and form submission handling. Page content (stats,
 * bios, guest lists, etc.) is authored directly as static HTML per page —
 * see content.js for the single reference copy the client should edit, and
 * copy those values into each page's markup by hand. No email-delivery
 * backend is wired up yet — PRD Section 13, Open Question 4 is still
 * unresolved, so forms are intercepted client-side and show a "not yet
 * connected" status instead of silently failing or POSTing to a guessed
 * endpoint.
 */
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    wireNavToggle();
    wireScrollCue();
    wireBookingLinks();
    wireForms();
  });

  function wireBookingLinks() {
    // Pages mark a booking CTA as pending by adding data-booking-pending in HTML
    // once the client supplies a real link (PRD Sec. 9), remove that attribute
    // and set the real href directly in the markup.
    document.querySelectorAll("[data-booking-pending]").forEach((el) => {
      el.setAttribute("aria-disabled", "true");
      el.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Booking link is pending from the client (PRD Section 9).");
      });
    });
  }

  function wireNavToggle() {
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");
    if (!toggle || !links) return;
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  function wireScrollCue() {
    const cue = document.querySelector(".scroll-cue");
    if (!cue) return;
    cue.addEventListener("click", () => {
      const next = document.querySelector(".hero").nextElementSibling;
      if (next) next.scrollIntoView({ behavior: "smooth" });
    });
  }

  function wireForms() {
    document.querySelectorAll("form[data-form]").forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        handleFormSubmit(form);
      });
    });
  }

  function handleFormSubmit(form) {
    const statusEl = form.querySelector(".form-status");

    // Honeypot: if this hidden field is filled, silently drop the submission.
    const honeypot = form.querySelector('input[name="company_website"]');
    if (honeypot && honeypot.value.trim() !== "") {
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // No email-delivery backend is configured yet (PRD Sec. 13, Open Question 4).
    // Surface that clearly instead of pretending the message was sent.
    const destination = form.getAttribute("data-contact-email") || "the site owner";
    showStatus(
      statusEl,
      "error",
      "This form isn't connected to an email backend yet. Submissions will be delivered to " +
        destination +
        " once that's set up."
    );
  }

  function showStatus(el, type, message) {
    if (!el) return;
    el.textContent = message;
    el.classList.remove("success", "error");
    el.classList.add(type);
  }
})();
