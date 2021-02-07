const img = document.querySelector('img');
const button = document.querySelector('button');
const input = document.querySelector('input');
let fetcher = (e) => {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=pJeMLRfI6COQbn8W2Y55ZEUGgAjr9icF&s=${input.value}`, {mode: 'cors'})
    .then(function(response) {
    console.log(response.json());
      return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
        //console.log(response);
        //return response;
      })
    .catch(()=>img.src = "https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png");
      input.value = "";
    };
button.addEventListener('click', fetcher);
