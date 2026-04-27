document.addEventListener("DOMContentLoaded", () => {
  let popup = document.getElementById("popup");
  let submit = document.getElementById("btn");
  let close = document.getElementById("close");

  function openPopup() {
    popup.classList.add("open-popup");
  }

  function closePopup() {
    popup.classList.remove("open-popup");
  }

  submit.addEventListener("click", openPopup);
  close.addEventListener("click", closePopup);
});
