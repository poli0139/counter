"use strict";
//trying variables
const bool = true;
const num = 41;
const str = "Peter";
const obj = {
  cats: 2,
  cars: 1,
};
const nothing = null;
let undf;
const symbol = Symbol("symbol");
//trting typeof
typeof bool;
typeof num;
typeof str;
typeof obj;
typeof nothing;
typeof undf;
typeof symbol;

//CONCATENATION

const n1 = 1;
const n2 = 2;
const s1 = "1";
const s2 = "2";
//THRUTHY AND FALSY
const value = " ";
if (value) {
  console.log("value is truthy");
} else {
  console.log("value is falsy");
}
