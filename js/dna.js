function DNAStrand(dna){
const newDna = dna.split("");
  let newStr = "";
  for (let el of newDna) {
    if (el === "A") {
      el = "T";
    }
     else if (el === "T") {
       el === "A"
     } 
    else if (el === "C") {
       el === "G"
     } 
    else if (el === "G") {
       el === "C"
     } 
    else continue;
  }
    return newStr = newDna.join("");
    
}

DNAStrand("GHJLTAAAT")
console.log(DNAStrand("GHJLTAAAT"));