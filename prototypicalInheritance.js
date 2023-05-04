// Our Shape constructor/ object inherits from ObjectBase
function Shape() {
  //...
}

// prototype member of Shape
Shape.prototype.duplicate = function() {
  console.log('dupliacte');
}

// Circle Constructor/ Object inherits from ObjectBase 
function Circle(radius) {
  this.radius = radius;
}

// prototype member of Circle 
Circle.prototype.draw = function() {
  console.log('draw');
}
// Now circleBAse inherits from shapeBase or Shape.prototype
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;


function extend(Child, Parent) {
  // Now squareBase inherits from shapeBase or Shape.prototype
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;

}

// Square Constructor/ Object inherits from ObjectBase
function Square(length) {
  this.length = length;
}

extend(Square, Shape)




const sh = new Shape();
const c = new Circle(1);
const sq = new Square(1);

// console.log(c.duplicate());
// console.log(sq.duplicate());
console.log(Object.getPrototypeOf(c));
