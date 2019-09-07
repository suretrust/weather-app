import { hide, showWeatherBox } from "./domLogic";
import { renderErrors, handleErrors } from "./errorHandleAndRender";

const apiData = url => {
    fetch(url)
        .then(handleErrors)
        .then(response => {
            hide('error');
            showWeatherBox(
                response.name,
                response.sys,
                response.dt,
                response.timezone,
                response.weather,
                response.wind,
                response.main
            );
        })
        .catch(renderErrors);
}

export default apiData;