// In this kata you will create a function that takes a list of non - negative integers 
// and strings and returns a new list with the strings filtered out.


function filter_list(l) {
  // Return a new array with the strings filtered out
  let arrayWithoutStrings = [];
  for (let i = 0; i < l.length; i+=1) {
    if (typeof l[i] === "number") {
      arrayWithoutStrings.push(l[i]);
    }
  }
  return arrayWithoutStrings;
}
console.log(filter_list([1, 13, "gh", 5, "hjhk"]));