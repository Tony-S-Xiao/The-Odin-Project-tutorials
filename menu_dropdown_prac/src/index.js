document.getElementById('menu').addEventListener('click', (e)=> {
    let classes = e.target.classList;
    console.log(classes);
    if(classes.length == 0) {
        classes.value = 'expand';
    } else if(classes.value == 'collapse') {
        classes.value = 'expand';
    } else {
        classes.value = 'collapse';
    }
});