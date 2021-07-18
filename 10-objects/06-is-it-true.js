let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

/*

"It's true!" is never output. It is because all property nams in an object is of
 string type, just that we can omit the quotation signs when the object is 
defined using object literal.

*/