"use strict";
const fullName = "Peter Heronimous Lind";
const firstName = fullName.substring(
  fullName.indexOf(" "),
  fullName.lastIndexOf()
);
const middleName = fullName.substring(
  fullName.indexOf(" ") + 1,
  fullName.lastIndexOf(" ")
);
const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);
console.log(firstName);
console.log(middleName);
console.log(lastName);
