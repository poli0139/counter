"use strict";
const letters = ["a", "b", "c", "d", "e", "f"];
console.log(letters);
const newarr = letters;
newarr[4] = "*";
console.log(letters);

const people = ["Harry", "Ron", "Hermione"];
let result;
result = people.splice(result, 2);
console.log(result);
console.log(people);
const str = "abcdefghij";
const arr1 = str.split();
const arr2 = Array.from(str);
const arr3 = arr2.toString();
console.log(arr1);
console.log(arr2);
console.log(arr3);
