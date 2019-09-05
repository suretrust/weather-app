import getInputCity from "./getInputCity";
import apiData from "./apiData";
import conversion from "./conversion";

const clickListeners = () => {
    const error = document.getElementById("error");
    error.style.display = "none";

    document.addEventListener("click", function (event) {
        const city = document.getElementById("city");
        if (event.target.id === "search" && city.checkValidity()) {
            const weatherDetails = document.getElementById("weather-details");
            error.style.display = "none";

            weatherDetails.innerHTML = `<div class="d-flex justify-content-center mt-5">
                                            <div class="spinner-border" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        </div>`

            apiData(`http://api.openweathermap.org/data/2.5/weather?q=${getInputCity()}&units=imperial&APPID=e43078cb1a48713be6d68ea7035e03f0`);
            event.preventDefault();
        } else if (event.target.id == "fahrenheit") {
            const fahrenheit = document.getElementById("fahrenheit");
            const temp = document.getElementById("temp");

            if (fahrenheit.innerHTML === `°F`) {
                temp.innerText = conversion.fahrenheitToCelsius(temp.innerText);
                fahrenheit.innerHTML = `°C`;
            } else {
                temp.innerText = conversion.celsiusToFahrenheit(temp.innerText);
                fahrenheit.innerHTML = `°F`;
            }
        }
    })
}

export default clickListeners;