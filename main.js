/*
 * Shared behavior across all pages: nav toggle, scroll cue, booking-link
 * placeholder handling, and form submission handling. Page content (stats,
 * bios, guest lists, etc.) is authored directly as static HTML per page —
 * see content.js for the single reference copy the client should edit, and
 * copy those values into each page's markup by hand. Forms POST to Formspree
 * (PRD Section 13, Open Question 4 — GitHub Pages has no server, so a static-
 * site-friendly form backend is used instead of a custom backend). Formspree
 * validates required fields server-side and forwards submissions to the
 * email configured on the form (see each form's data-contact-email and
 * action attributes in HTML).
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

    // Placeholder endpoint — swap in the real Formspree form ID once created.
    if (form.action.includes("FORMSPREE_FORM_ID")) {
      showStatus(
        statusEl,
        "error",
        "This form isn't connected to a real Formspree endpoint yet. Replace FORMSPREE_FORM_ID in the HTML once a form is created at formspree.io."
      );
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          showStatus(statusEl, "success", "Thanks — your message has been sent.");
        } else {
          showStatus(statusEl, "error", "Something went wrong sending your message. Please try again or email us directly.");
        }
      })
      .catch(() => {
        showStatus(statusEl, "error", "Something went wrong sending your message. Please try again or email us directly.");
      })
      .finally(() => {
        if (submitBtn) submitBtn.disabled = false;
      });
  }

  function showStatus(el, type, message) {
    if (!el) return;
    el.textContent = message;
    el.classList.remove("success", "error");
    el.classList.add(type);
  }
})();
