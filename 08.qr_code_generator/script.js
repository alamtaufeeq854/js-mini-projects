document.addEventListener("DOMContentLoaded", () => {
  const api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

  let imgBox = document.getElementById("imgBox");
  let qrImage = document.getElementById("qrImage");
  let qrText = document.getElementById("qrText");
  let generate = document.getElementById("generate");

  function generateQR() {
    if (qrText.value.length > 0) {
      qrImage.src = api + encodeURIComponent(qrText.value);
      imgBox.classList.add("show-img");
    } else {
      qrText.classList.add("error");
      setTimeout(() => {
        qrText.classList.remove("error");
      }, 1000);
    }
  }

  generate.addEventListener("click", generateQR);
});
