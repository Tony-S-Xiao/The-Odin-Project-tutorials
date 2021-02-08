import {addWeather, alertErr} from './viewer/dom.js';
import getCurrWeather from './model/weather.js';


let button = document.querySelector('button');
button.addEventListener('click', (e)=>{
    let fetched = getCurrWeather(document.querySelector('input').value);
    document.querySelector('input').value = "";
    fetched.then((result)=>{
    console.log(result);
    addWeather(result.name, result.weather[0].main, result.main.temp);
    }).catch((err)=>{alertErr(err)});
})
let input = document.querySelector('input');
input.addEventListener('keydown', (e)=> {
    //console.log(e.code);
    if(e.code == 'Enter' || e.code == 'NumpadEnter') {
        button.click();
    }
});