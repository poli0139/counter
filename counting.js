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
  if (arr.length < 9) {
    setTimeout(loop, 1000);
    console.log(arr);
  }
}
