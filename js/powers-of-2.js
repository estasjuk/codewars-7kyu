

function powersOfTwo(n){
  let array = [];
  for (let i = 0; i <= n; i +=1) {
    array.push(Math.pow(2, i));
  }
  return array;
}

console.log(powersOfTwo(5));