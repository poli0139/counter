"use strict";
const one = document.querySelector("#artwork1");
const two = document.querySelector("#artwork2");
const three = document.querySelector("#artwork3");
const four = document.querySelector("#artwork4");
const five = document.querySelector("#artwork5");
const six = document.querySelector("#artwork6");
const seven = document.querySelector("#artwork7");
const eight = document.querySelector("#artwork8");
const nine = document.querySelector("#artwork9");

//ARTWORK1

for (let size = 100; size <= 300; size += 20) {
  // console.log(size);
  const newElem1 = document.createElement("div");
  newElem1.classList.add("box");
  newElem1.style.width = `${size}px`;
  newElem1.style.height = `${size}px`;
  one.appendChild(newElem1);
}

//ARTWORK2
for (let i = 0; i <= 90; i += 10) {
  // console.log(i);
  const newElem2 = document.createElement("div");
  newElem2.classList.add("box");
  newElem2.style.transform = `rotate(${i}deg)`;
  two.appendChild(newElem2);
}

//ARTWORK3
for (let size = 0; size <= 100; size += 10) {
  // console.log(size);
  const newElem3 = document.createElement("div");
  newElem3.classList.add("circle");
  newElem3.style.width = `${size}px`;
  newElem3.style.height = `${size}px`;
  three.appendChild(newElem3);
}
//ARTWORK4
for (let i = -90; i <= 90; i += 20) {
  // console.log(i);
  const newElem4 = document.createElement("div");
  newElem4.classList.add("box");
  newElem4.style.transform = `translate(${i}px, ${i}px)`;
  four.appendChild(newElem4);
}
//ARTWORK5

for (let size = 1; size <= 512; size *= 2) {
  // console.log(size);
  const newElem5 = document.createElement("div");
  newElem5.classList.add("circle");
  newElem5.style.width = `${size}px`;
  newElem5.style.height = `${size}px`;
  five.appendChild(newElem5);
}
//ARTWORK6
for (let i = -20; i <= 45; i += 5) {
  // console.log(i);
  const newElem6 = document.createElement("div");
  newElem6.classList.add("circle");
  newElem6.style.transform = `translate(${i - 50}px,)`;
  newElem6.style.transform = `rotate(${i * 4}deg)`;
  six.appendChild(newElem6);
}
//ARTWORK7

for (let i = 0; i <= 200; i += 10) {
  const newElem7 = document.createElement("div");
  newElem7.classList.add("circle");
  newElem7.style.width = `${i}px`;
  newElem7.style.height = `${i}px`;
  newElem7.style.transform = `translate(${i}px, ${-i / 2}px)`;
  seven.appendChild(newElem7);
}

//ARTWORK8

for (let i = 50; i <= 200; i += 10) {
  const newElem8 = document.createElement("div");
  newElem8.classList.add("box");
  newElem8.style.width = `${i}px`;
  newElem8.style.height = `${i}px`;
  newElem8.style.transform = `translate(${i / 2}px) rotate(${i}deg)`;
  eight.appendChild(newElem8);
}

//ARTWPRK9
for (let size = 50; size <= 200; size += 30) {
  const newElem9box = document.createElement("div");
  const newElem9circle = document.createElement("div");
  newElem9box.classList.add("box");
  newElem9circle.classList.add("circle");
  newElem9box.style.width = `${size}px`;
  newElem9box.style.height = `${size}px`;
  newElem9circle.style.width = `${size}px`;
  newElem9circle.style.height = `${size}px`;
  nine.appendChild(newElem9box);
  nine.appendChild(newElem9circle);
}
