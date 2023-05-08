let baseSalary = 30000;
let overTime = 10;
let rate = 20;

function getWage(baseSalary, overTime, rate) {
  return baseSalary + (overTime * rate);
}

console.log(getWage(baseSalary, overTime, rate));

// If we encapsualte all these variables and the functions into a single object then that would be called 
// Encapsulation. This is better as you can see that the getWage() method in the person object doesn't have
// any parameters, in contrast our getWage() function has 3 parameters. The reason why we didn't need
// parameters was becasue all these parameters were actually modeled as properties of this person object
// All these properties and getWage() method are highly related so they are part of one unit. 

let person = {
  baseSalary: 30000,
  overTime: 10,
  rate: 20,
  getWage() {
    return baseSalary + (overTime * rate);
  }
}

console.log(person.getWage());

// // **Abstraction** is when all the complexity are hidden on the inside from you, like a cars
//  engine or how the brakes work, you simply use the car without having the knowledge about how
//   the engine operates. We can use the same technique in our objects, so we can hide a few of our
//    properties and methods from the outside, and this gives us a couple of benefits, first is that
//     we’ll make the **interface of those objects simpler**, using and understanding an object with
//      a few properties and methods is easier than an object with several properties and methods.
//       The second benefit is that it helps us **reduce the impact of change.** Lets imagine that
//        tomorrow we decide to change these private methods, none of these changes will leak to the
//         outside.

//**Inheritance** is a mechanism that allows you to eliminate redundant code e.g in html we have
//  different elements like TextBox, select and checkbox and they have some properties like font-size
//  , font-weight and padding, and some methods like click() and focus() that applies to all three
//   elements, now instead of writing these properties and methods for all three elements separately,
//    we can define these properties and methods in a single place and have all these elements inherit
//     those properties and methods.


// Polymorphism, Poly means many and morph means forms. So it means **many forms**. It allows you 
// to get rid of long if-else or switch statements. Back to our HTML elements example, all these 
// elements should have the ability to be rendered on a page, but the way each element is rendered is
//  different from others. And if we want to render multiple elements in a procedural way, our code
//   will require switch statements to see if it was the select element or the text element or the
//    checkbox element to render that element, But with OOP we can implement a render method in each
//     of these objects and the render method will behave differently depending on the type of object
//      we are referencing

