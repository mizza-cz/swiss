document.addEventListener("click", function (e) {
  const a = e.target.closest('a[data-bs-toggle="modal"]');
  if (a) e.preventDefault();
});

const modal = document.getElementById("articleModal");

if (modal) {
  modal.addEventListener("hidden.bs.modal", function () {
    modal.querySelectorAll("video").forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });

    modal.querySelectorAll("iframe").forEach((iframe) => {
      const src = iframe.getAttribute("src");
      iframe.setAttribute("src", "");
      iframe.setAttribute("src", src);
    });
  });
}
