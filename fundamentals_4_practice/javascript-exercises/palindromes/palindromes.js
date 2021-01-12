const palindromes = function(word) {
    for(let i = 0; i <= Math.floor(word.length/2); ++i) {
        if(word.charAt(i) != word.charAt(word.length - 1 - i))
        return false;
    }
    return true;
}

module.exports = palindromes
