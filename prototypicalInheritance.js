// - In JS we don’t have classes we have objects. So how can we implement inheritance only using 
// Objects. Now lets say we have a circle class and another object called shape and add all the
//  methods in the shape object e.g. computeSize() etc. And then somehow we can link the circle
//   object with shape object. Now we’ll refer the shape object as the prototype of the circle object.
//   So prototype is a parent ob another object.


// - Every object in JS has a prototype/ parent and it inherits all the member defined in it’s
//  prototype. Lets prove it. If we create a variable x using let and then initialize it with an
//   object literal, and then inspect it we would find out that empty object has a prototype which
//    is Object e.g. it has it’s own methods like constructor function, hasOwnProperty which is also
//     a method, then toString method. So we have this x object in the memory and x has a link to
//      another object which is it’s prototype, lets call it objectBase. FYI It’s not official term.
//       Every object in JS directly or indirectly inherits from objectBase. objectBase is the root
//        of all objects in JS, and it doesn’t have a prototype or a parent. Now to prove that this
//         is right lets create another empty object, call it y. Then use Object.getPrototypeOf() on
//          both x and y and compare there return values, which evaluates to true.


// - Prototypical Inheritance: When we use the toString() method on x using dot notation, we didn’t
//  define this method for the x object, x was an empty object, so how does this work ? how can we
//   access this method ?? Well When we access a property or method on an object, JS engine first
//    looks for that property or method on the object itself, if it cant find it, it looks in the
//     prototype for that object all the way up to the root Object which we called the objectBase.




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


// There is a problem with this implementation. Every object in JS has a constructor property that
//  returns the function that was used to construct or create that object.  e.g the prototype of c
//   object is Circle.prototype which is the the objectBase which has the constructor property which
//    references the Circle constructor function. Now with this we can create a circle object like this
//     e.g. Circle.prototype which returns us the objectBase then we use the constructor property on
//      it e,g. Circle.prototype.constructor and this now return the Circle constructor function and
//       we technically append it with new keyword  and pass it a radius of 1 and this returns a circle
//        object. And this expression (new Circle.prototype.constructor(1)) is equivalent to new
//         Circle(1).

// // When our circle object explicitly inherits from the shape object, we no longer have that
//  constructor property, but if we look at the prototype of the object, it is returning the Shape() 
//  constructor not the Circle Constructor, in other words what we have now we no longer can create
//   circle objects based on this constructor in the dynamic fashion. So if we get this Circle
//    constructor dynamically in a function and then try to access it’s prototype property and
//     then the constructor and then new that up, we get a Shape Object not a Circle Object. The 
//     reason why we are having this problem is because we reset the prototype of the circle. Before 
//     we reset our Circle.prototype to Shape.prototype, it was set to the Circle constructor that’s 
//     why we could new up a circle like new Circle.prototype.constructor(1).

// So as a best practice when you reset a prototype of an object, you should also reset the
// constructor. So here we should reset Circle.prototype.constructor = Circle.
Circle.prototype.constructor = Circle;

// Extracted 
function extend(Child, Parent) {
  // Now squareBase inherits from shapeBase or Shape.prototype
  Child.prototype = Object.create(Parent.prototype);
  //resetting the constructor
  //Child.prototype.constructor = Child;

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
console.log(Circle.constructor);
