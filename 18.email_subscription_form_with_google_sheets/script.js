document.addEventListener("DOMContentLoaded", () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycby5ILqf7ROFnQpVuDCGlwya6vUxzmQUIhucRr2QXtQ91CFwhQJArKypCAZ5gXes04rL/exec";

  const form = document.querySelector("form");
  const msg = document.querySelector("span");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => response.text())
      .then(() => {
        msg.innerHTML = "Thank You For Subscribing !";
        form.reset();

        setTimeout(() => {
          msg.innerHTML = "";
        }, 3000);
      })
      .catch((error) => {
        msg.innerHTML = "Something went wrong!";
        console.error("Error!", error.message);
      });
  });
});
