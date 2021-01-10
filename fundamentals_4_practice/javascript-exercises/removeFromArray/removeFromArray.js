const removeFromArray = function(input_arr, ...to_del) {
    let input_set = new Set(input_arr);
    for(item of to_del) {
        if(input_set.has(item))
        input_set.delete(item);
    }
    return Array.from(input_set);
}

module.exports = removeFromArray
