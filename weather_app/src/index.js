import {addWeather, alertErr} from './viewer/dom.js';
import getCurrWeather from './model/weather.js';

let button = document.querySelector('button');
button.addEventListener('click', (e)=>{
    let fetched = getCurrWeather(document.querySelector('input').value);
    document.querySelector('input').value = "";
    fetched.then((result)=>{
    if(result.cod != '404')
    addWeather(result.name, result.weather[0].main, result.main.temp);
    else
    alertErr('city not found!');
    });
})
let input = document.querySelector('input');
input.addEventListener('keydown', (e)=> {
    if(e.code == 'Enter' || e.code == 'NumpadEnter') {
        button.click();
    }
});