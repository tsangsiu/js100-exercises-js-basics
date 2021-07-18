let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// Write some code here.
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

let output = passcode[0];

for (let element = 1; element <= passcode.length - 1; element += 1) {
	output = output.concat('-', passcode[element]);
}

console.log(output);

// Join all elements of an array with no separator character:
console.log(passcode.join(''));