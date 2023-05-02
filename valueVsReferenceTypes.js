// Primitive values are atomic values we cannot change there values
// Here we declared a variable x and initialized it with the value 1. Then we declare another
// variable y and assign it with the value of variable x. What happens here is that variable y get’s
// assigned a copy of the variable x not the original variable x. So when we increment y it doesn’t affect x.

let x = 1;
let y = x;

y += 5;

console.log(x)
console.log(y);


// - Here we declared a variable c and initialized it with an object, next we declare another variable d
//  and assign it with the variable c. What happens here is that variable d gets assigned a reference to
//   the object. So now both c and d point to the same location in memory and if we changed the value of
//    the property value in the object referenced by d, the change will also be noticed when we access c.

// So the take away is that primitives are copied by their value and Objects are copied by their reference.


let c = {value: 20};
let d = c;

d.value = 30;

console.log(c);
console.log(d);
