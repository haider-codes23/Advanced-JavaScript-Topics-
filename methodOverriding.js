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
  console.log('dupliacte');
}
function Square(size) {
  this.size = size;
}
extend(Square, Shape);

Square.prototype.duplicate = function() {
  console.log('dupliacte Square');
}

const sq = new Square(10);
console.log(sq.duplicate());