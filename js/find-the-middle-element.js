// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
// The input to the function will be an array of three distinct numbers (Haskell: a tuple).
// For example:
// gimme([2, 3, 1]) => 0

function gimme (triplet) {
  const max = Math.max(...triplet);
  const min = Math.min(...triplet);
  for (let index = 0; index < triplet.length; index += 1) {
    if (triplet[index] > min && triplet[index] < max) {
      return index;
}
    }
  }

console.log(gimme[4, 15, 2]);
//console.log(gimme[-3, 20, 18]);
// console.log(gimme[5, 25, 50]);