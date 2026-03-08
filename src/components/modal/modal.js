document.addEventListener("click", function (e) {
  const a = e.target.closest('a[data-bs-toggle="modal"]');
  if (a) e.preventDefault();
});

const modal = document.getElementById("articleModal");

if (modal) {
  modal.addEventListener("hidden.bs.modal", function () {
    const iframes = modal.querySelectorAll("iframe");

    iframes.forEach((iframe) => {
      iframe.src = iframe.src;
    });
  });
}
