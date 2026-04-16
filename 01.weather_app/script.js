document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "9f2b3c3ab6f8580d026e5407357913fe";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const searchBox = document.getElementById("search-Input");
  const searchBtn = document.getElementById("search-btn");
  const weather = document.getElementById("weather");
  const errorMsg = document.getElementById("error");

  async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
      errorMsg.innerHTML = "Invalid City Name !";
      document.querySelector(".error").style.display = "block";
      weather.classList.add("weather");
    } else {
      var data = await response.json();
      console.log(data);

      document.querySelector(".error").style.display = "none";
      weather.classList.remove("weather");

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =
        `${Math.round(data.main.temp)}°C`;
      document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
      document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
      const weatherIcon = document.getElementById("weather-icon");

      if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "../images/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "../images/clear.png";
      } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "../images/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "../images/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "../images/mist.png";
      } else if (data.weather[0].main == "Storm") {
        weatherIcon.src = "../images/Storm.png";
      } else if (data.weather[0].main == "Haze") {
        weatherIcon.src = "../images/haze.png";
      }
    }
  }
  searchBtn.addEventListener("click", () => {
    if (searchBox.value == "") {
      errorMsg.style.display = "block";
      errorMsg.innerHTML = "Please ! Enter City Name.";
      weather.classList.add("weather");
    } else {
      checkWeather(searchBox.value);
    }
  });
});
