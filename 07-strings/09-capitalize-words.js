let string = 'launch school tech & talk';
let words = string.split(' ');

for (let i = 0; i < words.length; i += 1){
	words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}

string = words.join(' ');

console.log(string);