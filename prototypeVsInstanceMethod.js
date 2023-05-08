// Lets say we create two objects using our Circle Constructor function. Now both of theses objects
//  will have draw method, if we had 1000 Circle objects in the memory, we are going to have a 1000
//   copies of the draw method. In real world your objects are going to have several methods, so if
//    you want to have a large number of objects in your memory you are going to waste a lot of memory
//     by keeping copies of all these methods. So what’s the solution. So how does prototypical
//      inheritance works, when we access a property or method on an object JS engine first looks
//       at the object itself, if it can’t find that property or method, it will look at the prototype
//        of that object. So now we can take this draw method out and put it in it’s prototype, we are
//         going to have a single instance of this prototype in our memory which we call the circleBase,
//          so we are going to have a single instance of the draw method. So how we do that ? We learnt
//           that every Constructor has a prototype property and this is exactly the same as prototype
//            of our circle objects c1 and c2. e.g. Circle.prototype === c1.__proto__, we’d find out that
//             these two properties are referencing the same object in memory. Thats the circleBase.



function Circle(radius) {
  // Instance property
  this.radius = radius;
  // Instanace methods
  this.move = function() {
    this.draw();
    console.log('move');
  }
}
// Prototype members 
Circle.prototype.draw = function() {
  this.move();
  console.log('Draw');
}

const c1 = new Circle(1);
const c2 = new Circle(1);

// console.log(Circle.prototype === c1.__proto__);

// c1.draw();

for (let key in c1) {
  console.log(c1[key]);
}

// - Using Circle.prototype we can easily access this object, so you know JS objects are dynamic,
//  so we can always add something to them later. So we can add the draw method e.g. Circle.prototype.
//  draw = function() { console.log(’draw’);} with that we no longer need the draw method on the object
//   instance itself. Now if we log our objects c1 and c2 to the console,we’d find out that our object
//    only have a radius property, the draw method is on the prototype, the circleBase Object.
//     Now because of prototypical inheritance we can still access the draw method


// - So essentially we have two kinds of properties and methods in JS, we have instance property and
//  methods, we call them instance members, and prototype members.

Circle.prototype.toString = function() {
  return 'Circle of radius' + this.radius;
}

// In both these kind of members we can reference other members e.g. in the draw method which
//  is a prototype method we can call an instance method like move() on the circle class. By the
//   same token in an instance member we can access a prototype member e.g. in the move method we
//    use this.draw(). Now obviously the draw method is an instance method so the JS engine will
//     look for it on the prototype. 