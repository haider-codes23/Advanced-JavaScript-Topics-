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
