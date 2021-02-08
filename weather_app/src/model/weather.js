import api_key from './key.js'
const getCurrWeather = async (city) => {

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&mode=metric`);
        let result = await response.json();
        return result;

}
export default getCurrWeather;