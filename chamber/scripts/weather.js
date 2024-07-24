const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=2295b521a6bb77f339b871e2c1d1c434';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.error(error);
    }
}

apiFetch();

function displayResults(data) {
     // Convert temperature to Celsius (if needed)
  const tempCelsius = fahrenheitToCelsius(data.main.temp);

  // Update the weather card
  document.querySelector('.weather-card h3').textContent = `Weather in ${data.name}`;
  document.getElementById('weather-icon').src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  document.getElementById('weather-icon').alt = data.weather[0].description;
  document.querySelectorAll('.weather-card p')[0].innerHTML = `<strong>Temperature:</strong> ${tempCelsius}°C`;
  document.querySelectorAll('.weather-card p')[1].innerHTML = `<strong>Condition:</strong> ${data.weather[0].main}`;
  document.querySelectorAll('.weather-card p')[2].innerHTML = `<strong>Humidity:</strong> ${data.main.humidity}%`;
  document.querySelectorAll('.weather-card p')[3].innerHTML = `<strong>Wind Speed:</strong> ${data.wind.speed} m/s`;
}
// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5 / 9).toFixed(2);
}