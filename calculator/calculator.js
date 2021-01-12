let display = document.querySelector('#display');
let digit = document.createElement('div');
digit.classList.add('displaydigit');
for(let i = 0; i < 8; ++i) {
    digit.id = i;
    digit.style.display = 'inline-block';
    digit.textContent = i;
    digit.style.userSelect = 'none';
    display.append(digit);
    digit = digit.cloneNode(true);
}