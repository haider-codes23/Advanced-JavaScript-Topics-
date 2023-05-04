// In JS we don’t have classes we have objects. So how can we implement inheritance only using Objects.
// Now lets say we have a circle class and another object called shape and add all the methods in the shape
//  object e.g. computeSize() etc. And then somehow we can link the circle object with shape object.
//   Now we’ll refer the shape object as the prototype of the circle object. So prototype is a parent
//    ob another object. 

// Every object in JS has a prototype/ parent and it inherits all the member defined in it’s prototype.
// Lets prove it. If we create a variable x using let and then initialize it with an object literal,
// and then inspect it we would find out that empty object has a prototype which is Object e.g. it
// has it’s own methods like constructor function, hasOwnProperty which is also a method, then toString
// method. So we have this x object in the memory and x has a link to another object which is it’s prototype
// ,lets call it objectBase. FYI It’s not official term. Every object in JS directly or indirectly
//  inherits from objectBase. objectBase is the root of all objects in JS, and it doesn’t have a
//  prototype or a parent. Now to prove that this is right lets create another empty object, call it y. Then use Object.getPrototypeOf() on both x and y and compare there return values, which evaluates to true. 


let x = {};
let y = {};

console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));
console.log(Object.getPrototypeOf(x));

// Prototypical Inheritance: When we use the toString() method on x using dot notation, we didn’t define
//  this method for the x object, x was an empty object, so how does this work ? how can we access this
//   method ?? Well When we access a property or method on an object, JS engine first looks for that
//    property or method on the object itself, if it cant find it, it looks in the prototype for that
//     object all the way up to the root Object which we called the objectBase. 

x.toString();