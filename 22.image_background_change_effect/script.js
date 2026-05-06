document.addEventListener("DOMContentLoaded", () => {
  var imgBox = document.querySelector(".img-box");
  var imgWrap = document.querySelector(".img-wrap");
  var originalImg = document.getElementById("originalImg");
  var line = document.getElementById("line");

  originalImg.style.width = imgBox.offsetWidth + "px";

  var leftSpace = imgBox.offsetLeft;

  imgBox.onmousemove = function (e) {
    var boxWidth = e.pageX - leftSpace + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
  };
});
document.addEventListener("DOMContentLoaded", () => {
  const imgBox = document.querySelector(".img-box");
  const imgWrap = document.querySelector(".img-wrap");
  const originalImg = document.getElementById("originalImg");
  const line = document.getElementById("line");

  // Set image width and recalculate on resize
  function syncWidth() {
    originalImg.style.width = imgBox.offsetWidth + "px";
  }
  syncWidth();
  window.addEventListener("resize", syncWidth);

  // Shared move handler for both mouse and touch
  function handleMove(clientX) {
    const rect = imgBox.getBoundingClientRect();
    let x = clientX - rect.left;

    // Clamp within box bounds
    x = Math.max(0, Math.min(x, rect.width));

    imgWrap.style.width = x + "px";
    line.style.left = x + "px";
  }

  // Mouse events
  imgBox.addEventListener("mousemove", (e) => {
    handleMove(e.clientX);
  });

  // Touch events
  imgBox.addEventListener(
    "touchstart",
    (e) => {
      e.preventDefault(); // prevent page scroll
      handleMove(e.touches[0].clientX);
    },
    { passive: false },
  );

  imgBox.addEventListener(
    "touchmove",
    (e) => {
      e.preventDefault();
      handleMove(e.touches[0].clientX);
    },
    { passive: false },
  );
});
