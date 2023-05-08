// function sum(a, b) {
//   let total = 0;
//   for (let value of arguments) {
//     total += value
//   }

//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5))

//In JS if we want to have a varying number of parameters, we can use the rest operator.
//  Lets modify the declaration of the sum function. Add a parameter and call it args and
//   then prefix it with three dots(…). This is what we call the rest operator. The reason
//    why it is different from a spread operator is because we are using this three dot operator
//     as a parameter for a function, a spread operator is used with in an array literal. remove
//      all the code in the sum function. The rest operator takes all the arguments and puts them
//       in an array

// The difference between a spread oerpetor and rest operator is that rest operator is
// prefixed to the parameter of a function and a spread operator is used within an array literal.

// IF you have other parameter other than the rest operator parameter, then the rest operator
// parameter should always be last. 

function sum(...args) {
  return args.reduce((a,b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5, 10));