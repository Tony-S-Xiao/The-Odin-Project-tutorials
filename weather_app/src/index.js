import {addWeather, alertErr} from './viewer/dom.js';
import getCurrWeather from './model/weather.js';


let button = document.querySelector('button');
button.addEventListener('click', async (e)=>{
    try {
        let fetched = await getCurrWeather(document.querySelector('input').value);
        document.querySelector('input').value = "";
        console.log(fetched);
        addWeather(fetched.name, fetched.weather[0].main, fetched.main.temp);        
    } catch (err) {
        alertErr('city not found!');
    }
    /*
    fetched.then((result)=>{
    console.log(result);
    addWeather(result.name, result.weather[0].main, result.main.temp);
    }).catch((err)=>{alertErr(err)});
    */
})
let input = document.querySelector('input');
input.addEventListener('keydown', (e)=> {
    //console.log(e.code);
    if(e.code == 'Enter' || e.code == 'NumpadEnter') {
        button.click();
    }
});