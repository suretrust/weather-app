import { hide, showErrorMsg } from "./domLogic";

const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.status);
    }
    return response.json()
}

const renderErrors = (error) => {
    hide('weather-details');
    (error.message === '404') ? showErrorMsg('City not found') : showErrorMsg('Oops!');
}

export { handleErrors, renderErrors }