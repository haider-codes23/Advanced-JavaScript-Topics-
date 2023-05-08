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

// some times when you work with inheritance this implementation that you have defined in the parent
//  object may not work or may not be ideal in a child object. That’s when we use method overriding, 
//  so we override method defined in the base object, by redefining the method on Square.prototype, 
//  it’s very important to put this after extending the circle because at this point we are resetting
//   the prototype so if we define this before resetting the prototype then this implementation is
//    going to disappear. Now when we call the sq.duplicate() it log ‘duplicate Square’ to the console
//     not ‘duplicate’. So what’s happening here is that when we call the duplicate() method on sq
//      object, JS engine looks for the duplicate method in the object itself, if it cant find it then
//       it looks up in the prototype chain and picks the first implementation. So even though we have
//        implemented duplicate method on both the parent and the child objects, the implementation on
//         the child object is used. 
Square.prototype.duplicate = function() {
  console.log('dupliacte Square');
}

const sq = new Square(10);
console.log(sq.duplicate());