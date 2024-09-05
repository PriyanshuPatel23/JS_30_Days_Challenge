document.getElementById("searchButton").addEventListener("click", function () {
  const cityName = document.getElementById("cityInput").value;
  const apiKey = "55c0dd2c92d9f78d656930a739f45d9a";

  const geocodingUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;

  fetch(geocodingUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        alert("City not found, please try again.");
        return;
      }

      const latitude = data[0].lat;
      const longitude = data[0].lon;

      getWeather(latitude, longitude);

      getForecast(latitude, longitude);
    });
});

function getWeather(latitude, longitude) {
  const apiKey = "55c0dd2c92d9f78d656930a739f45d9a";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  fetch(weatherUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `HTTP error! status: ${response.status} - ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("cityName").innerHTML = `Weather in ${data.name}`;
      document.getElementById(
        "temperature"
      ).innerHTML = `Temperature: ${data.main.temp}°C`;
      document.getElementById(
        "weatherCondition"
      ).innerHTML = `Description: ${data.weather[0].description}`;
    })
    .catch((error) => {
      console.error("Error in fetching weather:", error);
      alert("An error occurred: " + error.message);
    });
}

function getForecast(latitude, longitude) {
  const apiKey = "55c0dd2c92d9f78d656930a739f45d9a";
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  fetch(forecastUrl)
    .then((response) => response.json())
    .then((data) => {
      // Data me se sirf wo readings le lo jo din me ek hi baar ka data ho
      const forecastData = data.list.filter((reading) =>
        reading.dt_txt.includes("12:00:00")
      );

      // Update the forecast cards
      updateForecast(forecastData);
    })
    .catch((error) => console.error("Error fetching weather data:", error));
}

function updateForecast(forecastData) {
  const forecastContainer = document.querySelector(".forecast-cards");
  const cardTemplate = document.querySelector(".forecast-card");

  // Card ko clear kar do pehle (sirf ek card chhodein)
  forecastContainer.innerHTML = "";

  // Loop for 5 days data
  forecastData.forEach((dayData, index) => {
    // Ek naya card clone karo
    const newCard = cardTemplate.cloneNode(true);

    // Date ko convert karo aur din ka naam nikaalo
    const date = new Date(dayData.dt * 1000); // Unix timestamp ko date me badlo
    const day = date.toLocaleDateString("en-US", { weekday: "long" }); // Weekday ka naam
    const temp = Math.round(dayData.main.temp); // Temperature in Celsius
    const condition = dayData.weather[0].description; // Weather condition description
    const icon = `http://openweathermap.org/img/wn/${dayData.weather[0].icon}.png`; // Weather icon

    // Naye card ko data se update karo
    newCard.querySelector("p:nth-child(1)").innerText = day; // Din ka naam
    newCard.querySelector("img").src = icon; // Weather icon
    newCard.querySelector(
      "p:nth-child(3)"
    ).innerText = `Temperature: ${temp}°C`; // Temperature
    newCard.querySelector(
      "p:nth-child(4)"
    ).innerText = `Condition: ${condition}`; // Weather condition

    // Naya card forecastContainer me add karo
    forecastContainer.appendChild(newCard);
  });
}
