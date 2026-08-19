(function () {
  "use strict";

  var STORAGE_KEY = null; // no persistence across page loads by design (kept dependency-free)
  var DEFAULT_LANG = "en";

  function setLang(lang) {
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : lang);
    var buttons = document.querySelectorAll(".langswitch button");
    buttons.forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang-btn") === lang);
      b.setAttribute("aria-pressed", b.getAttribute("data-lang-btn") === lang ? "true" : "false");
    });

    // localize placeholders
    document.querySelectorAll("[data-ph-" + lang + "]").forEach(function (el) {
      el.setAttribute("placeholder", el.getAttribute("data-ph-" + lang));
    });
    // localize <option> text
    document.querySelectorAll("option[data-opt-" + lang + "]").forEach(function (el) {
      el.textContent = el.getAttribute("data-opt-" + lang);
    });
    // localize document title
    var titleHolder = document.querySelector("[data-title-" + lang + "]");
    if (titleHolder) { document.title = titleHolder.getAttribute("data-title-" + lang); }

    window.__hviLang = lang;
  }

  function initLangSwitch() {
    var buttons = document.querySelectorAll(".langswitch button");
    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        setLang(b.getAttribute("data-lang-btn"));
      });
    });
    setLang(DEFAULT_LANG);
  }

  function initNavToggle() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".main-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || items.length === 0) {
      items.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach(function (el) { io.observe(el); });
  }

  function initContactForm() {
    var form = document.querySelector("#inquiry-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = (data.get("name") || "").toString();
      var company = (data.get("company") || "").toString();
      var email = (data.get("email") || "").toString();
      var product = (data.get("product") || "").toString();
      var message = (data.get("message") || "").toString();

      var subject = "Export Inquiry - " + (company || name || "New Inquiry");
      var bodyLines = [
        "Name: " + name,
        "Company: " + company,
        "Email: " + email,
        "Product interest: " + product,
        "",
        message
      ];
      var mailto =
        "mailto:zengroeddy.backup@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));
      window.location.href = mailto;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLangSwitch();
    initNavToggle();
    initReveal();
    initContactForm();
  });
})();
