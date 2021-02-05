document.getElementById('menu').addEventListener('click', (e)=> {
    let menu = document.getElementById('menu');
    let classes = menu.classList;
    if(classes.length == 0) {
        classes.value = 'expand';
    } else if(classes.value == 'collapse') {
        classes.value = 'expand';
    } else {
        classes.value = 'collapse';
    }
    let items = menu.querySelectorAll('.menu-item, .menu-expand, .menu-collapse');
    for(let item of items) {
        console.log(item.classList);
        if(item.classList == 'menu-expand') {
            item.classList.value = 'menu-collapse';
        } else {
            item.classList.value = 'menu-expand';
        }
    }
});