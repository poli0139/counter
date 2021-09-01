"use strict";
const arr = [];
let counter;
init();

function init() {
  counter = 0;
  loop();
}
function loop() {
  console.log(counter);
  counter++;
  arr.unshift(counter);
  arr.length = 9;
  console.log(arr);
  setTimeout(loop, 1000);
}
