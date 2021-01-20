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
    if(curr_val.length > 0)
        token_arr_out.push(new Token(curr_val, 'T_NUM'));
    token_arr_out.push(new Token(null, 'T_END'));
    return token_arr_out;
}
/*
Returns a n-ary parse tree.

add ::= mul add'
add' ::= END | "+" mul add' | "-" mul add'

mul ::=  term mul'
mul' ::= END | "*" term mul' | "/" term mul'

term ::= <num> | "(" add ")"
*/
function parse(token_arr) {
    if(token_arr === undefined)
    return null; 
    let i = 0;
    function term() {
        if(token_arr[i]._token_type == 'T_NUM') {
            let curr_node = {type: 'term', val: +token_arr[i]._val};
            ++i;
            return curr_node;
        }
        return null;
    }
    function mul_p() {
        let curr_node = {type:'mul_p', op_arr: null, term_arr: null};
        let op_arr = new Array();
        let term_arr = new Array();
        while(token_arr[i]._token_type == 'T_OP' && (token_arr[i]._val == '×' || token_arr[i]._val == '÷')) {
            op_arr.push(token_arr[i]._val);
            ++i;
            let curr_term = term();
            if(curr_term === null) return null;
            term_arr.push(curr_term);
        }
        curr_node.op_arr = op_arr;
        curr_node.term_arr = term_arr;
        return curr_node;
    }
    function mul() {
        let curr_left = term();
        let curr_right = mul_p();
        if(curr_left === null || curr_right === null)
            return null;
        return {type:'mul', left: curr_left, right: curr_right};
    }
    // Returns a 
    function add_p() {
            let curr_node = {type:'add_p', op_arr: null, mul_arr: null};
            let op_arr = new Array();
            let mul_arr = new Array();
            while(token_arr[i]._token_type == 'T_OP' && (token_arr[i]._val == '+' || token_arr[i]._val == '-')) {
                op_arr.push(token_arr[i]._val);
                ++i;
                let curr_mul = mul();
                if(curr_mul === null) return null;
                mul_arr.push(curr_mul);
            }
            curr_node.op_arr = op_arr;
            curr_node.mul_arr = mul_arr;
            return curr_node;
        }
    // Returns a binary tree node.
    function add() {
        return {type: 'add', left: mul(), right: add_p()};
    }
    return add();
}
