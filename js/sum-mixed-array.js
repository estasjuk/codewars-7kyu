function sumMix(x){
  let result = 0;
for (let i = 0; i < x.length; i +=1) {
  result += Number(x[i]);
}
  return result
}

console.log(sumMix([1, 3, 5, "6", "3"]));