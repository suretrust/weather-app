import { celsiusToFahrenheit, fahrenheitToCelsius } from "./conversion";
import capitalizeFirstLetter from "./capitalizeFirstLetter";
import moment from "moment";

const hide = (id) => {
    getElement(id).style.display = "none";
}

const show = (id) => {
    getElement(id).style.display = "block";
}

const showLoading = () => {
    const weatherDetails = document.getElementById("weather-details");
    weatherDetails.innerHTML = `<div class="d-flex justify-content-center mt-5">
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>`;
}

const showErrorMsg = (message) => {
    const error = document.getElementById('error');
    error.innerText = `${capitalizeFirstLetter(
        message
    )}, please try again.`;
    show('error');
}

const showWeatherBox = (name, sys, dt, timezone, weather, wind, main) => {
    const weatherDetails = document.getElementById("weather-details");

    weatherDetails.innerHTML =
        `<div class="animated rollIn card  bg-secondary text-white my-3 mx-md-5 shadow-lg">
            <div class="card-header border-light d-flex justify-content-between">
                <div class="my-auto">
                    <h3 class="mb-0">${name}, ${sys.country}</h3>
                    <div class="text-white-50">${moment.unix(dt).utcOffset(timezone / 60).format('LL')}</div>
                </div>
                <img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" class="animated pulse infinite img-fluid">
            </div>
            <div class="card-body text-center">
                <h5 class="card-title font-weight-bold">${capitalizeFirstLetter(weather[0].description)}</h5>
                <div class="text-white">Wind Speed: ${wind.speed} m/s</div>
                <div class="text-white">Wind Direction: ${wind.deg}&deg;</div>
                <div class="text-white">Humidity: ${main.pressure} %</div>
                <div class="text-white">Pressure: ${main.humidity} hPa</div>
            </div>
            <div class="card-footer bg-transparent border-light">
            
                <div class="d-flex justify-content-between" role="group">
                    <div class="temp-box">
                        <span class="temp" id="temp">${main.temp}</span>
                        <span class="temp-unit rounded-lg" id="fahrenheit">°F</span>
                    </div>
                    <div class="my-auto">
                        ${moment.unix(dt).utcOffset(timezone / 60).format('LT')}
                    </div>
                </div>
            </div>
        </div>`;
}

const showFahrenheit = () => {
    const temp = document.getElementById("temp");
    const fahrenheit = document.getElementById("fahrenheit");

    temp.innerText = fahrenheitToCelsius(temp.innerText);
    fahrenheit.innerText = `°C`;
}

const showCelsius = () => {
    const temp = document.getElementById("temp");
    const fahrenheit = document.getElementById("fahrenheit");

    temp.innerText = celsiusToFahrenheit(temp.innerText);
    fahrenheit.innerText = `°F`;
}

const getElement = (id) => {
    return document.getElementById(`${id}`);
}

export { hide, show, showLoading, showFahrenheit, showCelsius, showErrorMsg, showWeatherBox }