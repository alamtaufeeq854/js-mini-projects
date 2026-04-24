document.addEventListener("DOMContentLoaded", () => {
  let progress = document.getElementById("progress");
  let song = document.getElementById("song");
  let ctrlIcon = document.getElementById("ctrlIcon");
  let backward = document.getElementById("backward");
  let forward = document.getElementById("forward");

  song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
  };

  function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
      song.pause();
      ctrlIcon.classList.remove("fa-pause");
      ctrlIcon.classList.add("fa-play");
    } else {
      song.play();
      ctrlIcon.classList.add("fa-pause");
      ctrlIcon.classList.remove("fa-play");
    }
  }

  progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  };

  song.addEventListener("play", () => {
    setInterval(() => {
      progress.value = song.currentTime;
    }, 500);
  });

  function forwardPlay() {
    if (song.currentTime < song.duration - 5) {
      song.currentTime += 5;
    }
  }

  function backwardPlay() {
    if (song.currentTime > 5) {
      song.currentTime -= 5;
    }
  }
  ctrlIcon.addEventListener("click", playPause);
  forward.addEventListener("click", forwardPlay);
  backward.addEventListener("click", backwardPlay);
});
