const sumAll = function(start, end) {
    if(typeof(start) != 'number' || typeof(end) != 'number' ||
    start < 0 || end < 0) return 'ERROR';
    if(start > end) return sumAll(end, start);
    return (start + end) * (end - start + 1) / 2;
}

module.exports = sumAll
