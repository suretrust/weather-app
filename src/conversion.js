const conversion = (() => {
    const fahrenheitToCelsius = (temp) => {
        return ((temp - 32) * (5 / 9)).toFixed(1);
    }

    const celsiusToFahrenheit = (temp) => {
        return ((temp * (9 / 5)) + 32).toFixed(1);
    }

    return {
        celsiusToFahrenheit,
        fahrenheitToCelsius
    }
})();

export default conversion;