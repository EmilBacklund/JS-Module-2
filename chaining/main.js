const products = [
  { name: 'dress', price: 600 },
  { name: 'cream', price: 60 },
  { name: 'book', price: 200 },
  { name: 'bottle', price: 50 },
  { name: 'bedsheet', price: 350 },
];

const productsOnSale = products
  .filter(({ price }) => price > 100)
  .map(({ name, price }) => `The ${name} new price is ${price / 2} NOK`);

console.log(productsOnSale);

// example 2
// In this example, we have a list of products that we want to apply a discount to for a sale, but only products where:

// the price is 5 or higher (>= 5)
// the products are in stock (inStock === true)
// We then need to store this discounted amount so it can be displayed at a later stage.

// We can do this in a two step process with chaining:

// filter the products that are equal to or above 5 as well as being in stock
// map out the filtered products while performing a calculation to get the discount and storing it as a value

const inventoryProducts = [
  { name: 'Milk', price: 5.0, inStock: true },
  { name: 'Cheese', price: 10.0, inStock: true },
  { name: 'Bread', price: 8.0, inStock: false },
  { name: 'Beans', price: 3.0, inStock: true },
  { name: 'Eggs', price: 12.0, inStock: true },
  { name: 'Rice', price: 4.0, inStock: false },
  { name: 'Meat', price: 25, inStock: true },
  { name: 'Coffee', price: 12.0, inStock: true },
  { name: 'Tea', price: 8.0, inStock: false },
  { name: 'Bottled Water', price: 4.0, inStock: false },
];

const DISCOUNT_PERCENTAGE = 20;

const filteredProducts = inventoryProducts
  .filter(({ price, inStock }) => price >= 5 && inStock)
  .map((product) => {
    product.discountedPrice =
      product.price - (DISCOUNT_PERCENTAGE / 100) * product.price;
    return product;
  });

console.log(filteredProducts);

// example 3

const students = [
  { name: 'Victoria', age: 19, isOnline: true, results: [80, 61, 66, 50, 91] },
  { name: 'Theo', age: 32, isOnline: false, results: [57, 99, 96, 72, 96] },
  { name: 'Markus', age: 54, isOnline: true, results: [50, 92, 70, 66, 90] },
  { name: 'Aksel', age: 21, isOnline: true, results: [77, 86, 70, 71, 75] },
  { name: 'Felix', age: 29, isOnline: false, results: [99, 76, 59, 74, 68] },
  { name: 'Benjamin', age: 48, isOnline: true, results: [65, 85, 74, 83, 54] },
  { name: 'Ulrik', age: 39, isOnline: true, results: [92, 72, 55, 69, 58] },
  { name: 'Alma', age: 28, isOnline: false, results: [92, 91, 66, 77, 71] },
  { name: 'July', age: 37, isOnline: true, results: [78, 70, 59, 76, 95] },
  { name: 'Leo', age: 42, isOnline: true, results: [55, 64, 88, 88, 95] },
];

const studentResult = students
  .filter(({ isOnline, age }) => isOnline && age >= 30)
  .reduce((classAverage, student, index, classArray) => {
    const studentsTotalMarks = student.results.reduce(
      (studentAverage, result, index, resultsArray) => {
        return (studentAverage += result / resultsArray.length);
      },
      0
    );

    return (classAverage += studentsTotalMarks / classArray.length);
  }, 0);

console.log(studentResult);

// const studentAverage = studentResult.reduce(
//   (average, result, index, resultsArray) => {
//     return (average += result.results / studentResult.length);
//   },
//   0
// );

// console.log(studentAverage);
