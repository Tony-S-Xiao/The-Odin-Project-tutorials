const repeatString = function(input_string, number_of_times) {
    if(number_of_times == 0) return '';
    if(number_of_times < 0) return 'ERROR';
    let output_string = '';
    for(let i = 0; i < number_of_times; ++i) {
        output_string += input_string;
    }
    return output_string;
}

module.exports = repeatString
