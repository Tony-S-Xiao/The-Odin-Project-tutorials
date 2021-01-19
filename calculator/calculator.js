
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
 [15, '4'], [16, '5'], [17, '6'],  [18, '×'],  [19, '÷'],
 [20, '1'], [21, '2'], [22, '3'],  [23, '+'],  [24, '-'],
 [25, '0'], [26, '.'], [27, 'C'],  [28, '^'],  [29, '=']]);
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
        this._display_on = true;
    }
    print() {
        if(this._display_on) {
            for(let i = 0; i < this._css_display.length; ++i) {
                this._css_display[i].textContent = this._display[this._window_start + i];
            }            
        }
    }
    reset() {
        this._display = new Array();
        this._window_start = 0;
        this._cursor = 0;
        this._display_on = true;
        this.showCursor();
        this.print();
    }
    showCursor() {
        for(let item of this._css_display) {
            item.classList.remove('cursor');
        }
        if(this._cursor < 8)
        this._css_display[this._cursor].classList.add('cursor');
    }
    moveCursorLeft() { 
        if(this._display_on) {
            if (this._cursor > 0 && this._cursor <= 8)
                --this._cursor;
            else if(this._window_start > 0 && this._window_start + this._cursor <= this._display.length - 1) {
                --this._window_start;
            }
            this.print();
            this.showCursor();
        }
    }
    moveCursorRight() {
        if(this._display_on) {
            if (this._cursor >= 0 && this._cursor < 8)
                ++this._cursor;
            else if (this._window_start >= 0 && this._window_start + this._cursor < this._display.length - 1) {
                ++this._window_start;
            }
            this.print();
            this.showCursor();
        }
    }
    insertString(input) {
        if(this._display_on) {
            let insert_pos = this._window_start + this._cursor;
            let to_concat = input.split('');
            if(insert_pos > this._display.length) {
                this._display = this._display.concat(to_concat);
            } else {
                this._display.splice(insert_pos, 0, ...to_concat);
                for(let i = 0; i < to_concat.length; ++i) {
                    this.moveCursorRight();
                }
            }
            this.print();            
        }
    }
    deleteCharacter() {
        let insert_pos = this._window_start + this._cursor;
        if(insert_pos >= 1 && insert_pos <= this._display.length ||
            insert_pos >= 0 && insert_pos < this._display.length && this._display.length == 1) {
            this._display.splice(insert_pos - 1, 1);
            this.moveCursorLeft();
        }
        this.print();   
    }
    turnDisplayOff(){
        this.reset();
        this._display_on = false;
    };
    turnDisplayOn(){
        this._display_on = true;
        this.reset();
    };
    printErr() {
        this.reset();
        this._display = 'ERROR.'
        this.print();
        this._display_on = false;
    }
 }
 //Add eventlisteners to all buttons.
let display_obj = new Display();
let printfunc = function(e) {
    display_obj.insertString(e.target.textContent);
}
let printfuncNeg = function(e) {
    display_obj.insertString(e.target.textContent);
}
let delfunc = function(e) {
    display_obj.deleteCharacter();
}
let moveleftfunc = function(e) {
    display_obj.moveCursorLeft();
}
let moverightfunc = function(e) {
    display_obj.moveCursorRight();
}
let resetfunc = function(e) {
    display_obj.reset();
}
let simpleEvalArith = function(e) {
    display_obj._display = lex(display_obj._display.join(''));
    display_obj.print();
}
// const token_list = new Set(['LN', 'LOG', '\u03C0', 'e', 'SIN', 'COS', 'TAN',
//  '7', '8', '9', '1', '2', '3', '4', '5', '6', '0',
// '(', ')', '×', '÷', '+', '-', '.', '^' ]);
// function tokenize(input_str) {
//  let arr = input_str.split('()-.^×÷+');

// }
const keyboard_hardcoded_functionality =
 new Map([[0, delfunc], [1, moveleftfunc], [2, moverightfunc],  [3, printfunc],  [4, printfunc],
 [5, printfunc], [6, printfunc], [7, printfunc],  [8, printfunc],  [9, printfunc],
 [10, printfunc], [11, printfunc], [12, printfunc],  [13, printfunc],  [14, printfunc],
 [15, printfunc], [16, printfunc], [17, printfunc],  [18, printfunc],  [19, printfunc],
 [20, printfunc], [21, printfunc], [22, printfunc],  [23, printfunc],  [24, printfunc],
 [25, printfunc], [26, printfunc], [27, resetfunc],  [28, printfunc],  [29, simpleEvalArith]]);
let to_wire = document.querySelectorAll('.keyboarddigit');
let j = 0;
for(let node of to_wire) {
    node.addEventListener('click', keyboard_hardcoded_functionality.get(j));
    ++j;
}
display_obj.insertString('123');
let to_check = lex('SINSINSISINN(100+231.22×4)×(1-2)');