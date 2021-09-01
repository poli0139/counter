"use strict";
let maxNumber;
let iterator;
init();

function init() {
  maxNumber = 11;
  iterator = 0;
  loop();
}

function loop() {
  console.log("loop", iterator);
  iterator++;

  if (iterator < maxNumber) {
    setTimeout(loop, 500);
  }
}
