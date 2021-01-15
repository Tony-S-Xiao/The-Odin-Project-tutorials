class Token {
    constructor(val, type) {
        this._val = val;
        this._token_type = type;
        /*
        T_OP : (, ), -, ., ^, ×, ÷, +, LN, LOG, SIN, COS, TAN;
        */
    }

}

let digits = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
let operators = new Set(['(', ')', '-', '.', '^', '×', '÷', '+']);
let math_func = new Set(['L', 'S', 'C', 'T']);

function lex(input_str) {
    let split_str = input_str.split('');
    let token_arr_out = new Array();
    let curr_val = '';
    for(let i = 0; i < split_str.length; ++i) {
        if(digits.has(split_str[i])) {
            curr_val = curr_val + split_str[i];
        } else if(operators.has(split_str[i])) {
            if(curr_val.length > 0) {
                token_arr_out.push(new Token(curr_val, 'T_NUM'));
                token_arr_out.push(new Token(split_str[i], 'T_OP'));
                curr_val = '';
            } else {
                token_arr_out.push(new Token(split_str[i], 'T_OP'));
            }
        } else if(math_func.has(split_str[i])) {
            if(curr_val.length > 0) {
                token_arr_out.push(new Token(curr_val, 'T_NUM'));
                curr_val = '';
            } 
            if(input_str.substring(i, i+2) === 'LN') {
                token_arr_out.push(new Token('LN', 'T_OP'));
            } else if (input_str.substring(i, i+3) === 'LOG') {
                token_arr_out.push(new Token('LOG', 'T_OP'));
            } else if (input_str.substring(i, i+3) === 'SIN') {
                token_arr_out.push(new Token('SIN', 'T_OP'));
            } else if (input_str.substring(i, i+3) === 'COS') {
                token_arr_out.push(new Token('COS', 'T_OP'));
            } else if (input_str.substring(i, i+3) === 'TAN') {
                token_arr_out.push(new Token('TAN', 'T_OP'));
            } else {
                return undefined;
            }
        }
    }
    return token_arr_out;
}
