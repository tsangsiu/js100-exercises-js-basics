const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);  // returns { firstName: 'Jane', lastName: 'Doe' }

/*

Although a is defined as const, it means that the reference pointed by a cannot
be changed. However the object itself that a is referencing is editable.

*/