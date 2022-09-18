const values = [100, 200, 300, 400, 500];

const newArray = values.some((value, index, array) => {
  console.log({ index, value });
  if (value >= 300) {
    return true;
  }
});

console.log(newArray);
