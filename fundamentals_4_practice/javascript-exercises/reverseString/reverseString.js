const reverseString = function(input_string) {
    let arr_of_char = input_string.split('');
    for(let i = 0; i < Math.floor(arr_of_char.length / 2); ++i) {
        [arr_of_char[i], arr_of_char[arr_of_char.length - i - 1]] = [arr_of_char[arr_of_char.length - i - 1], arr_of_char[i]];
    }
    return arr_of_char.join('');
}
module.exports = reverseString
