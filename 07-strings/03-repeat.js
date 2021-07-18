function repeat(times, string) {
	let outputString = '';
	
	for (let count = 1; count <= times; count += 1) {
		outputString += string;
	}
	
	return outputString;
}

console.log(repeat(3, 'ha'));