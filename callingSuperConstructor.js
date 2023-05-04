// Our Shape constructor/ object inherits from ObjectBase
function Shape(color) {
  this.color = color;
}

// prototype member of Shape
Shape.prototype.duplicate = function() {
  console.log('dupliacte');
}

// Circle Constructor/ Object inherits from ObjectBase 
function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

// prototype member of Circle 
Circle.prototype.draw = function() {
  console.log('draw');
}
// Now circleBAse inherits from shapeBase or Shape.prototype
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;


// const sh = new Shape();
// const c = new Circle(1, 'red');


// // console.log(c.duplicate());
// console.log(Object.getPrototypeOf(c));

// Square Constructor / Inherit from objectBase the roots of all objects
function extend(Child, Parent) {
  // Now we want the Square to inherit from Shape
  Child.prototype = Object.create(Parent.prototype);
  // Here we set our constructor to Square
  Child.prototype.constructor = Child;

}
function Square(size) {
  this.size = size;
}

extend(Square, Shape);



const sq = new Square(10);
console.log(sq.duplicate());



