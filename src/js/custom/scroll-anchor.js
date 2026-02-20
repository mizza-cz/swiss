document.querySelectorAll(".anchor-item").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("target") === "_blank") {
      return;
    }

    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
