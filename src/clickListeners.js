import getInputCity from "./getInputCity";
import apiData from "./apiData";
import conversion from "./conversion";

const clickListeners = () => {
    error.style.display = "none";

    document.addEventListener("click", function (event) {
        event.preventDefault();
        if (event.target.id === "search") {
            apiData(`http://api.openweathermap.org/data/2.5/weather?q=${getInputCity()}&units=imperial&APPID=e43078cb1a48713be6d68ea7035e03f0`);
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