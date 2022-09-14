// Reduce

const values = [2, 3, 4, 6, 7];

// We want to use the reduce array method to calculate the sum
// of the items in the array values
// the zero in the end of the reduce method decides what total should start on

const sum = values.reduce((total, item) => {
  /** *
   * 0 = 0 + 2
   * total is 2
   *
   * total = 2 + 3
   * total is 5
   *
   * total = 5 + 4
   * total is 9
   *
   * total = 9 + 6
   * total is 15
   */
  total += item;
  return total;
}, 0);

const garages = [
  {
    brand: 'BMW',
    cars: 10,
  },
  {
    brand: 'Fiat',
    cars: 20,
  },
  {
    brand: 'Toyota',
    cars: 40,
  },
  {
    brand: 'Volvo',
    cars: 1,
  },
];

const carSum = garages.reduce((total, { cars }) => {
  total += cars;
  return total;
}, 50);

const products = [
  {
    title: 'pudding',
    isInStock: false,
    quantity: 2,
    price: 20,
    currency: 'NOK',
  },
  {
    title: 'cheese',
    isInStock: true,
    quantity: 5,
    price: 15,
    currency: 'NOK',
  },
  {
    title: 'fish',
    isInStock: true,
    quantity: 19,
    price: 40,
    currency: 'NOK',
  },
  {
    title: 'milk',
    isInStock: true,
    quantity: 10,
    price: 19,
    currency: 'NOK',
  },
];

const productSum = products.reduce((total, { isInStock, price, quantity }) => {
  return isInStock ? (total += price * quantity) : 0;
}, 0);

console.log(productSum);
