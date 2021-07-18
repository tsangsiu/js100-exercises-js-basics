function isBlank(string) {
	return string.trim().length === 0;
}

console.log(isBlank('mars'));
console.log(isBlank('  '));
console.log(isBlank(''));