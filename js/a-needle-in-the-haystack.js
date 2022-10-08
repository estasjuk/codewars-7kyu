// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// Example(Input --> Output)


function findNeedle(haystack) {
  // your code here
  for (let i = 0; i < haystack.length; i +=1) {
    if (haystack[i] === "needle")
  
  return `found the needle at position ${i}`;
    }
}
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));