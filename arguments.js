// - What if we want to have the flexibility to pass in as many arguments as we want to a function
//  call e..g in the sum function below how can we implement that ? Every function in JS have a
//   special object called arguments. IF we log it to the console, we can see that it looks like
//    an array, but it is not, it is an object. But the keys we have in this object are the index
//     of arguments passed to this function.
// - Now if want a function with varying number of parameters to work all the arguments that are passed to this function. What we need to is firstly declare a variable total, then use a for/ of loop to iterate over the arguments object. Plain objects that we create using object literals dont have an iterator so we cant use for/ of loop with them but this object argument is not a plain object and we can use it with argument object. Now we can remove the parameters as well because we’re working with the arguments objects.

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }
// //sum(1,2);
// console.log(sum(1, 2, 3));


function sum1(a, b) {
  let total = 0;
  for (let value of arguments) {
    total += value
  }

  return total;
}

console.log(sum1(1, 2, 3, 4, 5));