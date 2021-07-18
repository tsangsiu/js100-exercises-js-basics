let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: name => `Hej, ${name}`,
};

console.log(jane.greet('Bobby')); // Hej, Bobby!