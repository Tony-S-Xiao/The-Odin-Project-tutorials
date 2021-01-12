function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum (arr) {
	if(arr.length === 0) return 0;
	return arr.reduce((accu, curr)=>accu+curr);
}

function multiply (arr) {
	
	return arr.reduce((accu, curr)=>{return accu*curr});
}

function power(x, y) {
	if(y === 0) return 1;
	let ans = x;
	for(let i = 2; i <= y; ++i) {
		ans *= x;
	}
	return ans;
}

function factorial(x) {
	return x <= 1 ? 1 : x * factorial(x-1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}