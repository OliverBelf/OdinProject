let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

function getAverageAge(arr) {
  let sum = 0;
  arr.map((item) => (sum += item.age));
  return sum / arr.length;
}

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
