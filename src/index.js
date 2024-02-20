function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.main.temp;
  let cityElement = document.querySelector("#city");
  cityElement.textContent = response.data.city;

  temperatureElement.textContent = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "0fabbb54t5ce773e761073oa14a077f0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
