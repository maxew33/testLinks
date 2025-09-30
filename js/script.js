const modal = document.getElementById("shareModal");
document.getElementById("sharePicto").addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "false");
});
document.getElementById("closeModal").addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "true");
});
