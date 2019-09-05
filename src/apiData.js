import capitalizeFirstLetter from "./capitalizeFirstLetter";
import moment from "moment";

const apiData = url => {
    const error = document.getElementById("error");
    const weatherDetails = document.getElementById("weather-details");

    fetch(url)
        .then(response => response.json())
        .then(res => {
            if (res.message) {
                error.style.display = "block";
                error.innerText = `${capitalizeFirstLetter(
                    res.message
                )}, please try again.`;
            } else {
                error.style.display = "none";
                weatherDetails.innerHTML = `<div class="animated slideInUp card  bg-secondary text-white my-3 mx-md-5 shadow-lg">
                                                <div class="card-header border-light d-flex justify-content-between">
                                                    <div class="my-auto">
                                                        <h3 class="mb-0">${res.name}, ${res.sys.country}</h3>
                                                        <div class="text-white-50">${moment.unix(res.dt).utcOffset(res.timezone / 60).format('LL')}</div>
                                                    </div>
                                                    <img src="http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png" class="animated pulse infinite img-fluid">
                                                </div>
                                                <div class="card-body text-center">
                                                    <h5 class="card-title font-weight-bold">${capitalizeFirstLetter(res.weather[0].description)}</h5>
                                                    <div class="text-white">Wind Speed: ${res.wind.speed} m/s</div>
                                                    <div class="text-white">Wind Direction: ${res.wind.deg}&deg;</div>
                                                    <div class="text-white">Humidity: ${res.main.pressure} %</div>
                                                    <div class="text-white">Pressure: ${res.main.humidity} hPa</div>
                                                </div>
                                                <div class="card-footer bg-transparent border-light">
                                                
                                                    <div class="d-flex justify-content-between" role="group">
                                                        <div class="temp-box">
                                                            <span class="temp" id="temp">${res.main.temp}</span>
                                                            <span class="temp-unit rounded-lg" id="fahrenheit">°F</span>
                                                        </div>
                                                        <div class="my-auto">
                                                            ${moment.unix(res.dt).utcOffset(res.timezone / 60).format('LT')}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`;
            }
        })
        .catch(error => error);
};

export default apiData;