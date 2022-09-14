// example 1
const values = [100, 200, 300, 400, 500];

function callbackFn(element, index, array) {
  // Modify and return element here
  return element ? 200 : 300;
}

const newArray = values.filter(callbackFn);
console.log(newArray);

const filteredNumbers = values.filter((element) => element >= 300);

console.log(filteredNumbers);

const numbers = [4, 23, 55, 66, 777, 100, 500, 250];

const filtered = numbers.filter((element) => element >= 100);
console.log(filtered);

// create an array of people, with name and age.

const people = [
  { name: 'Kari', age: 28 },
  { name: 'Astrid', age: 32 },
  { name: 'Hans', age: 22 },
  { name: 'Inger', age: 19 },
  { name: 'Liv', age: 42 },
  { name: 'Kristoffer', age: 12 },
  { name: 'Anne', age: 12 },
  { name: 'Martin', age: 17 },
  { name: 'Joakim', age: 45 },
  { name: 'Ellen', age: 7 },
];

const filteredPersons = people.filter(({ age }) => age >= 22);

console.log(filteredPersons);

const games = [
  { title: 'Mayhem Fighter', isMultiplayer: true, rating: 8 },
  { title: 'Build-a-farm', isMultiplayer: true, rating: 9 },
  { title: 'Ghost Story', isMultiplayer: false, rating: 8 },
  { title: 'Fast Car Racer', isMultiplayer: true, rating: 7 },
  { title: 'Elf and Dwarf RPG', isMultiplayer: false, rating: 8 },
];

const filteredGames = games.filter(
  ({ isMultiplayer, rating }) => rating >= 8 && isMultiplayer === true
);

console.log(filteredGames);
