document.addEventListener("DOMContentLoaded", () => {
  let scrollContainer = document.querySelector(".gallery");
  let backBtn = document.getElementById("backbtn");
  let nextBtn = document.getElementById("nextbtn");

  let step = scrollContainer.querySelector("div").clientWidth;

  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollBy({
      left: evt.deltaY,
      behavior: "smooth",
    });
  });

  nextBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: step,
      behavior: "smooth",
    });
  });

  backBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: -step,
      behavior: "smooth",
    });
  });
});
