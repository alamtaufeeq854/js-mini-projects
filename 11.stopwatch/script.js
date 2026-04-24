document.addEventListener("DOMContentLoaded", () => {
  let [seconds, minutes, hours] = [0, 0, 0];
  let timer = null;
  let displayTime = document.getElementById("display-time");
  let start = document.getElementById("start");
  let stop = document.getElementById("stop");
  let reset = document.getElementById("reset");

  function stopWatch() {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes == 60) {
      minutes = 0;
      hours++;
    }

    let h = hours < 10 ? "0" + hours : hours;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let m = minutes < 10 ? "0" + minutes : minutes;

    displayTime.innerHTML = h + ":" + m + ":" + s;
  }

  function watchInterval() {
    if (timer !== null) {
      clearInterval(timer);
    }

    start.src = "../images/pause.png";
    timer = setInterval(stopWatch, 1000);
  }

  function stopTimer() {
    clearInterval(timer);
    start.src = "../images/start.png";
  }

  function resetTimer() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
    start.src = "../images/start.png";
  }

  start.addEventListener("click", watchInterval);
  stop.addEventListener("click", stopTimer);
  reset.addEventListener("click", resetTimer);
});
