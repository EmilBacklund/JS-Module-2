// find()
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const foundValue = values.find((currentValue) => currentValue === 5);

console.log(foundValue);

// Example 2
// Find the all temperatures above 120 fahrenheit

const temperatures = [40, 70, 88, 90, 135, 182, 195];

const findTemperature = temperatures.find((value) => value > 120);

console.log(findTemperature);

const profiles = [
  {
    name: 'Uzo',
    id: 234234,
  },
  {
    name: 'Hesh',
    id: 78787,
  },
  {
    name: 'Emil',
    id: 777763,
  },
  {
    name: 'Clark',
    id: 673254782365472,
  },
];

console.log(profiles[1].name.toLowerCase());

// in the given array of profiles,
// find the first name that starts with the letter "h"

const findName = profiles.find((value) => value.name[0].toLowerCase() === 'h');
const findName2 = profiles.find((value) =>
  value.name.toLowerCase().startsWith('h')
);
console.log(findName);
console.log(findName2);

const books = [
  { title: 'Building a Spaceship', inStock: true },
  { title: 'Growing Orchids', inStock: false },
  { title: 'River Fisher', inStock: false },
];

const foundBook = books.find((book) => {
  if (book.inStock) {
    return true;
  }
});

if (foundBook === undefined) {
  console.log(`No books in stock`);
} else {
  console.log(`Books are in stock`);
}
