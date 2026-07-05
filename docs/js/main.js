(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var header = document.querySelector("[data-header]");
  var sentinel = document.querySelector("[data-top-sentinel]");

  if (header && sentinel && "IntersectionObserver" in window) {
    var headerObserver = new IntersectionObserver(
      function (entries) {
        var entry = entries[0];
        header.classList.toggle("is-scrolled", !entry.isIntersecting);
      },
      { threshold: 0 }
    );
    headerObserver.observe(sentinel);
  } else if (header) {
    header.classList.add("is-scrolled");
  }

  var menuToggle = document.querySelector("[data-menu-toggle]");
  var mobileNav = document.querySelector("[data-mobile-nav]");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function () {
      var expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
      mobileNav.hidden = expanded;
      if (header) {
        header.classList.toggle("is-open", !expanded);
      }
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuToggle.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
        if (header) {
          header.classList.remove("is-open");
        }
      });
    });
  }

  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    var revealItems = document.querySelectorAll(".reveal");
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    revealItems.forEach(function (item, index) {
      item.style.transitionDelay = Math.min(index * 0.04, 0.24) + "s";
      revealObserver.observe(item);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

})();
