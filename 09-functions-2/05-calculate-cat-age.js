function catAge(humanYears) {
	let catYears = 0;
	
	if (humanYears === 1) catYears = 15;
	else if (humanYears === 2) catYears = 15 + 9;
	else if (humanYears >= 3) catYears = 15 + 9 + (humanYears - 2) * 4;
	
	return catYears;
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32