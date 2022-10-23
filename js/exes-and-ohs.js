// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
  let arrayO = str.split("").filter(elem => (elem === "o" || elem === "O"));
  let arrayX = str.split("").filter(elem => (elem === "x" || elem === "X"));
    if (arrayO.length === arrayX.length)
  return true;
  else return false;
}

console.log(XO("xxoofhjdzxofo"));
console.log(XO("xxoofhjdzxxofo"));
