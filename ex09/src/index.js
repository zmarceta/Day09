// Write code below this line
function functionElse(num) {
	if (num <= 5) {
		return "5 or smaller";
	}
	else {
		return "Bigger then 5";
	}	
}

console.log(functionElse(4));
console.log(functionElse(5));
console.log(functionElse(6));
console.log(functionElse(10));

// Write code above this line
module.exports = functionElse;