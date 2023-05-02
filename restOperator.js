// function sum(a, b) {
//   let total = 0;
//   for (let value of arguments) {
//     total += value
//   }

//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5))

function sum(...args) {
  return args.reduce((a,b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5, 10));