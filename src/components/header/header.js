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

  function bindStickyHeader() {
    const $header = $(".header");
    const $body = $("body");

    function apply() {
      const scrolled = $(window).scrollTop() > 0;
      $header.toggleClass("is-scrolled", scrolled);

      if (scrolled) {
        $body.css("padding-top", $header.outerHeight());
      } else {
        $body.css("padding-top", "");
      }
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
function updateHeaderOffset() {
  const header = document.querySelector(".header");
  if (!header) return;

  const h = Math.ceil(header.getBoundingClientRect().height) + 8; // +8px запас
  document.documentElement.style.setProperty("--header-offset", h + "px");
}

window.addEventListener("load", updateHeaderOffset);
window.addEventListener("resize", updateHeaderOffset);
window.addEventListener("scroll", updateHeaderOffset);
