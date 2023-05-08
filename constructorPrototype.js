// We learnt that every object in JS has a prototype or a parent. Now the proper way to get a
//  prototype of an object is by using Object.getPrototypeOf(myObj) and we pass it an object. What
//   we get here is myObj.__proto__(paent of myObj). One thing we need to know is that constructors
//    have a prototype property. So here we a Circle Constructor function, we know that functions
//     are objects, so they have properties and methods. So if we use dot notation with Constructor
//      name Circle. we would get all the methods we can use with it, so we have a prototype property
//       e.g Circle.prototype, this is the object that will be used as the parent for object created
//        by the Circle constructor. Now if we put this together, we have a myObj object, this object
//         is created by a constructor and this constructor(new Object()) has a prototype property and
//          which is the parent of the myObj or prototype of myObj. 

let myObj = {};

Object.getPrototypeOf(myObj);
// myObj.__proto__(parent of myObj)
// Constructor.prototype()


function Circle(radius) {
  this.radius = radius;
}
Circle.prototype;
console.log(Circle.prototype);



// const circle = new Circle(1);

// lets define an empty object, this object has a prototype property which is it’s parents,
//  and this is what we call objectBase, which has it’s own member methods like hasOwnProperty()
//   and so on. Now this empty object is created using the Object Constructor function( new Object()),
//    now this constructor has a prototype property and this is the object that will be used as the
//     prototype for all objects created by this constructor. So the parent of the empty object and
//      the prototype of the constructor are the same.

// console.log(myObj.__proto__);