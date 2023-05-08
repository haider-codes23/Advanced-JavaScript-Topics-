// Polymorphism means may forms. It’s an extremely powerful technique in Object Oriented Programming.


// Square Constructor / Inherit from objectBase the roots of all objects
function extend(Child, Parent) {
  // Now we want the Square to inherit from Shape
  Child.prototype = Object.create(Parent.prototype);
  // Here we set our constructor to Square
  Child.prototype.constructor = Child;
}
// Our Shape constructor/ object inherits from ObjectBase
function Shape() {
  //...
}
// prototype member of Shape
Shape.prototype.duplicate = function() {
  console.log('dupliacte Shape');
}
// Circle constructor - inherits from objectBase or Circle.prototype which has a constructor property
// that references the Circle Construtor. 
function Circle(radius) {
  this.radius = radius;
}
// Here Our Circle.prototype inherits from Shape.prototype thus it no longer has the constructor property
// that references the Circle.prototype.constructor, instead the constructor property inherits the Shape.prototype.constructor
// So to solve this problem we can reset the Circle.prototype.constructor back to Circle Constructor
extend(Circle, Shape);

// prototype member of Circle
Circle.prototype.duplicate = function() {
  console.log('dupliacte Circle');
}

// Square constructor - inhertis from ObjectBase or Square.prototype
function Square(size) {
  this.size = size;
}

// chnages the prototype of Square to inherit from shape.prototype
extend(Square, Shape);
// Method overriding 
Square.prototype.duplicate = function() {
  console.log('dupliacte Square');
}


const c = new Circle(1);
//const c1 = new Circle.prototype.constructor(1);
console.log(c);
//console.log(Circle.prototype.constructor);

// const sq = new Square(10);
// console.log(sq.duplicate());

// Here we have a simple hierarchy, on top we have Shape and below we have two child objects Circle
//  and Shape. Each object provides a different implementation of the duplicate method. So we have many
//   implementation or forms of the duplicate method. That’s what we call polymorphism. The reason why
//    it is powerful, is because e.g. if we have an array of shape objects which contains a Circle and
//     a Square object. And then we use for/ of loop to iterate over the objects in the array. In the
//      loops body we invoke the the duplicate method on the object that the loop is currently iterating
//       over. depending on the type of object, the implementation of the duplicate method will be called.
//        e.g the first object in the array is circle so the implementation of the duplicate method in the
//         Circle object will be called, if it’s a square a different implementation will be called.
//          In procedural programming we would have to firstly check what type of object it is with 
//          an if else statement, and lets say if it passes that check then perhaps we have a function
//           somewhere else like duplicateCircle(), now this function is not part of any object.
//            In OOP we encapsulate our variables and functions into an object. Now What if we had
//             10 different kinds of shape that means we’d have 10 if else statements . In contrast
//              when we encapsulate our variables and functions into an object and use inheritance,
//               we can use many forms of a method in a single line of code. Isn’t that beautiful. 

const shapes = [
  new Circle(1),
  new Square(10),
]

for (let shape of shapes) {
  shape.duplicate();
}

for (let shape of shapes) {
  if(shape.type() === 'circle') {
    duplicateCircle();
  } else if(shape.type === 'square') {
    duplicateSquare();
  } else {
    duplicateShape();
  }
}
