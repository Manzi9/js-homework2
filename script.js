//Question 1

function add(x, y) {
  return x + y;
}

console.log(add(10, 15));

//Question 2 (Was it meant to be using ".reverse" or a "for" loop?)

// function reverse(arr) {
//   console.log(arr.reverse());
// }

// reverse(hello);

// function reverse(arr) {
//   const reverseArr = arr.reverse();
//   return reverseArr;
// }

// console.log(reverseArr(carBrands));

//Question 4

var carBrands = [
  "ford",
  "merc",
  "bmw",
  "bentley",
  "audi",
  "porsche",
  "lambo",
  "maserati",
  "bugatti",
  "fiat",
];

console.log(carBrands);

///Question 5]

carBrands[3] = "chrysler";

console.log(carBrands);

//Question 6

carBrands.splice(4, 5);

console.log("Q6", carBrands);
//Question 7
//Push
carBrands.push("ferrari");
console.log(carBrands);

//Pop
carBrands.pop("ford");
console.log(carBrands);

//Shift
carBrands.shift();
console.log(carBrands);

//Unshift
carBrands.unshift("tesla");
console.log(carBrands);

//Concat
console.log(carBrands[1].concat(carBrands[2])); //How would I separate the 2 arrays? I had the same issue on the last homework.

carBrands.push(
  "bentley",
  "audi",
  "porsche",
  "lambo",
  "maserati",
  "bugatti",
  "fiat"
);

console.log(carBrands);

//Splice
carBrands.splice(0, 1);

console.log(carBrands);

//Slice
console.log(carBrands.slice(1, 3));

console.log(carBrands);

//Reverse
carBrands.reverse();
console.log(carBrands); //This hasn't worked?

//Join
console.log(carBrands.join("--"));

//forEach
carBrands.forEach(details);

function details(item, index, arr) {
  console.log(` ${item} is at position ${index}.  `);
}

//Includes
console.log(carBrands.includes("honda"));

//IndexOf
console.log(carBrands.indexOf("bmw"));

//Every

function howLong(arr) {
  return arr.length;
}

console.log(carBrands.every(howLong)); // Why does this resolve to TRUE instead of the length of the array?

//Some
function plus5chars(item) {
  return item.length > 5;
}

console.log(carBrands.some(plus5chars));

//Filter

function lowerThanM(arr) {
  return arr < "m";
}
console.log(carBrands.filter(lowerThanM));

//Find

const answer = carBrands.find(findChrysler);

function findChrysler(item) {
  return item === "chrysler";
}
console.log(answer);

//Find in Array

const index = carBrands.findIndex(findIndexChrysler);

function findIndexChrysler(item) {
  return item === "chrysler";
}
console.log(index);

//Sort

carBrands.sort();

console.log(carBrands);

//Map

const convert = carBrands.map(upperCase);

function upperCase(item) {
  return item.toUpperCase();
}

console.log(convert);
