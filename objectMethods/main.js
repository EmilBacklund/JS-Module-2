const users = {
  userName: 'Rullstolsbandit',
  level: 400,
  isCompetitive: false,
};

// 1. Dot Notation
console.log(users.level);

// 2. Bracket Notation
console.log(users['isCompetitive']);
console.log(users['level']);
console.log(users['userName']);

const recipe = {
  ingredient_0: 'Egg',
  ingredient_1: 'Milk',
  ingredient_2: 'Flour',
};

const ingredient1 = console.log(recipe['ingredient_0']);
const ingredient2 = console.log(recipe['ingredient_' + 1]);

for (let i = 0; i <= 2; i++) {
  console.log(recipe['ingredient_' + i]);
}

const myUser = {
  userName: 'Rullstolsbandit',
  level: 400,
  isCompetitive: false,
};

// how to loop through an array

for (const myKey in myUser) {
  console.log(myUser[myKey]);
}

const carProfile = {
  make: 'bwm',
  year: 2015,
  vinNumber: 233322,
};

for (const myKey in carProfile) {
  console.log(myKey + ': ' + carProfile[myKey]);
}

const person = {
  firstName: 'Ola',
  lastName: 'Nordmann',
  module: 'JavaScript',
};
console.log(person);

const personKeys = Object.keys(person);
console.log(personKeys);
