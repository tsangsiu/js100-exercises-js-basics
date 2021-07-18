function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

/*

The above code will raise an error that the variable a is not initialised. In 
the if block, the variable a is referenced before it is declared.

*/