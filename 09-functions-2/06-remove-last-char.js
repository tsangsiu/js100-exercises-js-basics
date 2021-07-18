function removeLastChar(string) {
	string = string.split('')
	string.pop();
	string = string.join('');
	
	return string;
}

console.log(removeLastChar('ciao!'));
console.log(removeLastChar('hello'));