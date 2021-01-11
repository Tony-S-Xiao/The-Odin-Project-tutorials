let container = document.querySelector('#container');

let para = document.createElement('p');
para.style.color = 'red';
para.innerText = 'wow a red para';
container.appendChild(para);

let head = document.createElement('h3');
head.style.color = 'blue';
head.innerText = 'a blue head';
container.appendChild(head);

let new_div = document.createElement('div');
new_div.style.borderColor = 'black';
new_div.style.borderStyle = 'solid';
new_div.style.backgroundColor = 'pink';
new_div.innerText = 'wow';

container.appendChild(new_div);

let header_1 = document.createElement('h1');
header_1.innerText = 'I am a header!';
let para_1 = document.createElement('p');
para_1.innerText = 'I am a paragraph!';
new_div.appendChild(para_1);
new_div.appendChild(header_1);

