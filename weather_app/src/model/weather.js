const api_key = '72f040111dbe75bc6ac7d4510cfe60fa';
const getCurrWeather = (city) => {
        return new Promise((resolve, reject)=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`, {mode:'cors'})
        .then((response)=>{
            return response.json();
        })
        .then((value)=>{
            if(value.cod == '404') {
                reject('City not found!');
            } else {
                resolve(value);
            }
        });
    });
}
export default getCurrWeather;