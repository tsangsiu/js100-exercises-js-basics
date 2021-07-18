let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }


let person = {};
for (let element of nestedArray) {
	person[element[0]] = element[1];
}

console.log(person);

/*
let person = Object.fromEntries(nestedArray);  // not working in Cloud9
console.log(person);
*/