// Initialize the display with 8 digits.
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
// Initialize the keyboard.
let keyboard = document.querySelector('#keyboard');
let keyboard_digit = document.createElement('div');
keyboard_digit.classList.add('keyboarddigit');
let keyboard_row = document.createElement('div');
keyboard_row.classList.add('keyboardrow');
for(let i = 0; i < 6; ++i) {
    keyboard.append(keyboard_row);
    keyboard_row = keyboard_row.cloneNode(true);
}
let keyboard_row_list = document.querySelectorAll('.keyboardrow');
for(let item of keyboard_row_list) {
    for(let i = 0; i < 5; ++i) {
        item.append(keyboard_digit);
        keyboard_digit = keyboard_digit.cloneNode(true);
    }
}
//
