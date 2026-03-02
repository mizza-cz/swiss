(function ($) {
  "use strict";

  function bindHamburger() {
    const $body = $("body");
    const $opener = $(".js-header__opener");

    $opener.on("click", function (e) {
      e.stopPropagation();
      $opener.toggleClass("is-open");
      $body.toggleClass("is-nav-open");
    });

    $(document).on("click", function (e) {
      if (
        $body.hasClass("is-nav-open") &&
        !$(e.target).closest(".menu, .js-header__opener").length
      ) {
        $opener.removeClass("is-open");
        $body.removeClass("is-nav-open");
      }
    });
  }

  function updateHeaderOffset() {
    const header = document.querySelector(".header");
    if (!header) return;

    const h = Math.ceil(header.getBoundingClientRect().height) + 8; // запас
    document.documentElement.style.setProperty("--header-offset", h + "px");
  }

  function bindStickyHeader() {
    const $header = $(".header");
    const $body = $("body");

    const MOBILE_BP = 1199; // подстрой под свой брейкпоинт, если надо
    const MOBILE_THRESHOLD = 180; // твои 160–180, потом настроишь

    function isMobile() {
      return window.matchMedia(`(max-width: ${MOBILE_BP}px)`).matches;
    }

    function apply() {
      const y = $(window).scrollTop() || 0;
      const threshold = isMobile() ? MOBILE_THRESHOLD : 0;
      const scrolled = y > threshold;

      $header.toggleClass("is-scrolled", scrolled);

      if (scrolled) {
        $body.css("padding-top", $header.outerHeight());
      } else {
        $body.css("padding-top", "");
      }

      updateHeaderOffset();
    }

    $(window).on("scroll", apply);
    $(window).on("resize", apply);
    apply();
  }

  $(function () {
    bindHamburger();
    bindStickyHeader();
  });
})(jQuery);
