const names = [
  { firstName: 'Ola', lastName: 'Nordmann' },
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Mario', lastName: 'Rossi' },
  { firstName: 'Jan', lastName: 'Jansen' },
];

const namesUl = document.querySelector('.names');

console.log('Before map: ', names);

const newCombinedNames = names.map((person) => {
  // modify and return elements
  return `${person.firstName} ${person.lastName}`;
});

console.log('With map: ', newCombinedNames);

//* Destructed
const newCombinedNamesDes = names.map(({ firstName, lastName }) => {
  namesUl.innerHTML += `<li>${firstName} ${lastName}</li>`;
  return `${firstName} ${lastName}`;
});

console.log('With destructed map: ', newCombinedNamesDes);

const triangles = [
  { base: 100, height: 200 },
  { base: 50, height: 100 },
  { base: 600, height: 700 },
];

const trianglesArea = triangles.map(({ base, height }) => {
  return 0.5 * base * height;
});

console.log(trianglesArea);

const rectanglesDiv = document.querySelector('.rectangles');

const rectangles = [
  { width: 100, height: 200 },
  { width: 50, height: 100 },
  { width: 600, height: 700 },
];

const rectanglesHTML = triangles.map(({ width, height }, index) => {
  rectangles.innerHTML += `<div class="rectangle"></div>`;
  return width * height;
});
