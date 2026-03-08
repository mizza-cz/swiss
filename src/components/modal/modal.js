document.addEventListener("click", function (e) {
  const a = e.target.closest('a[data-bs-toggle="modal"]');
  if (a) e.preventDefault();
});

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("hidden.bs.modal", function () {
    modal.querySelectorAll("iframe").forEach((iframe) => {
      const src = iframe.src;
      iframe.src = "";
      iframe.src = src;
    });
  });
});
