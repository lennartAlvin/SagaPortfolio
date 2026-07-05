(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var header = document.querySelector("[data-header]");
  var onScroll = function () {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var menuToggle = document.querySelector("[data-menu-toggle]");
  var mobileNav = document.querySelector("[data-mobile-nav]");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function () {
      var expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
      mobileNav.hidden = expanded;
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuToggle.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
      });
    });
  }

  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    var revealItems = document.querySelectorAll(".reveal");
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    revealItems.forEach(function (item, index) {
      item.style.transitionDelay = Math.min(index * 0.04, 0.24) + "s";
      observer.observe(item);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  var form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = form.querySelector("#name");
      var email = form.querySelector("#email");
      var message = form.querySelector("#message");
      var status = form.querySelector("[data-form-status]");
      var valid = true;

      [
        { field: name, key: "name", test: function (value) { return value.trim().length > 0; } },
        { field: email, key: "email", test: function (value) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); } },
        { field: message, key: "message", test: function (value) { return value.trim().length > 0; } }
      ].forEach(function (item) {
        var error = form.querySelector('[data-error-for="' + item.key + '"]');
        var ok = item.test(item.field.value);
        if (error) error.hidden = ok;
        if (!ok) valid = false;
      });

      if (!valid) {
        if (status) {
          status.hidden = false;
          status.textContent = "Please fix the highlighted fields.";
        }
        return;
      }

      if (status) {
        status.hidden = false;
        status.textContent = "Thanks. Your message is ready to send once a backend is connected.";
      }

      form.reset();
    });
  }
})();
