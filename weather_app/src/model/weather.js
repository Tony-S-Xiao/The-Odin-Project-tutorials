import api_key from './key.js'
import PrefixTree from './prefix_tree.js'
/*
fetch('./city_data.json')
.then((value)=>{
    return value.json();
}).then((value)=> {
    for(let city of value) {
        console.log(city.name);
    }
});
*/

let tree = new PrefixTree(['wow', 'wow1', 'wat', 'aawwwa1', 'apple', 'wateverlah']);
tree.displayAllWords();
console.log(tree);
const getCurrWeather = async (city) => {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&mode=metric`);
    let result = await response.json();
    return result;
}
export default getCurrWeather;