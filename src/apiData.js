import { hide, showCityErrorMsg, showWeatherBox } from "./domLogic";

const apiData = url => {
    fetch(url)
        .then(response => response.json())
        .then(res => {
            if (res.message) {
                showCityErrorMsg(res.message);
                hide('weather-details');
            } else {
                hide('error');
                showWeatherBox(
                    res.name,
                    res.sys,
                    res.dt,
                    res.timezone,
                    res.weather,
                    res.wind,
                    res.main
                );
            }
        })
        .catch(error => console.log(error));
};

export default apiData;