const body = document.querySelector('body');

const addWeather = (city, weather, temp) => {
    let city_dom = document.createElement('div');
    city_dom.textContent = city;
    body.appendChild(city_dom);
    let weather_dom = document.createElement('div');
    weather_dom.textContent = weather;
    body.appendChild(weather_dom);
    let temp_dom = document.createElement('div');
    temp_dom.textContent = temp;
    body.appendChild(temp_dom);
}

const alertErr = (err) => {
    alert(err);
}
export {addWeather, alertErr};
