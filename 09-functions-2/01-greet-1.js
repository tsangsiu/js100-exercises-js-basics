function greet(greeting = 'Hello') {
  console.log(greeting + ', world!');
}

greet('Salutations');
greet();

greet(undefined);  // 'undefined, world!' X

/*

When undefined is passed to the above function, it is equivalent to passing no
argument to the function. Hence, the function will return 'Hello, world!'.

*/