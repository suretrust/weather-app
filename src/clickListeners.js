import getInputCity from "./getInputCity";
import apiData from "./apiData";
import { hide, showLoading, showFahrenheit, showCelsius, show } from "./domLogic";

const clickListeners = () => {
    const city = document.getElementById("city");
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;
    const apiKey = `&APPID=e43078cb1a48713be6d68ea7035e03f0`;
    const apiUnit = `&units=imperial`;
    hide('error');

    document.addEventListener("click", function (event) {
        if (event.target.id === "search" && city.checkValidity()) {
            hide('error');
            showLoading();
            show('weather-details');
            apiData(`${apiUrl}${getInputCity()}${apiUnit}${apiKey}`);
            event.preventDefault();
        } else if (event.target.id == "fahrenheit") {
            const fahrenheit = document.getElementById("fahrenheit");

            if (fahrenheit.innerHTML === `°F`) {
                showFahrenheit();
            } else {
                showCelsius();
            }
        }
    })
}

export default clickListeners;