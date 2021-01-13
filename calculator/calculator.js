// Initialize the keyboard.
let keyboard = document.querySelector('#keyboard');
let keyboard_digit = document.createElement('button');
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
// Populate the keyboard with the correct text.
const keyboard_hardcoded_text =
 new Map([[0, 'DEL'], [1, '🠔'], [2, '🠖'],  [3, 'LN'],  [4, 'LOG'],
 [5, '\u03C0'], [6, 'e'], [7, 'SIN'],  [8, 'COS'],  [9, 'TAN'],
 [10, '7'], [11, '8'], [12, '9'],  [13, '('],  [14, ')'],
 [15, '4'], [16, '5'], [17, '6'],  [18, '\u00D7'],  [19, '\u00F7'],
 [20, '1'], [21, '2'], [22, '3'],  [23, '\u002B'],  [24, '-'],
 [25, '0'], [26, '.'], [27, '(-)'],  [28, 'C'],  [29, '=']]);
let to_populate = document.querySelectorAll('.keyboarddigit');
let i = 0;
for(let node of to_populate) {
    node.textContent = keyboard_hardcoded_text.get(i);
    node.style.userSelect = 'none';
    ++i;
}
// Initialize the display with 8 digits.
let display = document.querySelector('#display');
let digit = document.createElement('div');
digit.classList.add('displaydigit');
for(let i = 0; i < 8; ++i) {
    digit.id = i;
    digit.style.display = 'inline-block';
    digit.style.userSelect = 'none';
    display.append(digit);
    digit = digit.cloneNode(true);
}
// Display controller object.
class Display {
    constructor() {
        this._display = new Array();
        this._window_start = 0;
        this._css_display = Array.from(document.querySelector('#display').querySelectorAll('.displaydigit'));
        this._cursor = 0;
    }
    print() {
        for(let i = 0; i < this._css_display.length; ++i) {
            this._css_display[i].textContent = this._display[this._window_start + i];
        }
    }
    reset() {
        this._display = new Array();
        this._window_start = 0;
        print();
    }
    toggleCursor() {
        this._css_display[this._cursor].classList.toggle('cursor');
    }
    moveCursorLeft() {
        if(this._cursor < 8)
        --this._cursor;
    }
    moveCursorRight() {
        if(this._cursor >= 0)
        ++this._cursor;
    }
 }

let display_obj = new Display();
display_obj._display = ['a','b','c'];
display_obj.print();
display_obj.moveCursorRight();
display_obj.toggleCursor();

