import { hide, showWeatherBox } from "./domLogic";
import { renderErrors, handleErrors } from "./errorHandleAndRender";

const apiData = url => {
    fetch(url)
        .then(handleErrors)
        .then(response => {
            const { dt, main, name, sys, timezone, weather, wind } = response;
            const parameters = { dt, main, name, sys, timezone, weather, wind };

            hide('error');
            showWeatherBox(parameters);
        })
        .catch(renderErrors);
}

export default apiData;