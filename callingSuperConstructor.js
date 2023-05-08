// Our Shape constructor/ object inherits from ObjectBase
// lets modify our Shape constructor and introduce a color parameter, we want every shape to have
//  a color. In the current implementation when we create a circle we only pass the radius, from 
//  inheritance point of view this circle object should have a color property and that should be
//   initialized at the time of creating a circle. 
function Shape(color) {
  this.color = color;
}


// prototype member of Shape
Shape.prototype.duplicate = function() {
  console.log('dupliacte');
}

// So in the Circle constructor we should call the Shape constructor. And in the parameter of the
//  Circle Constructor we should add the color parameter and pass that to the Shape function call and
//   now when we create a Circle object we pass two arguments a radius and a color. But this does not
//    work. If we check the c object it doesn’t have the color property. Why didn’t it work ? When we
//     create a new object using new keyword, this creates a new empty object and then sets this in the
//      Circle constructor to point at the new empty object, And if we dont use the new keyword this
//       in the Constructor function will point to the global object in node. So the reason why it
//        didn’t work is because in the Circle constructor we’re calling Shape function and by default
//         the this in the Shape constructor function is pointing at the global object in node. So we
//          didn’t set the color property on the new instance of the circle object, we set it in the
//           global object. So to fix this issue we use the call method on the Shape Object and pass it
//            this as the first argument, this this will be instance of the circle object, now this in
//             the Shape constructor function will point towards the this instance in the Circle
//              Constructor Fucntion. 

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



