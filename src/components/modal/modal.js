document.addEventListener("click", function (e) {
  const a = e.target.closest('a[data-bs-toggle="modal"]');
  if (a) e.preventDefault();
});
