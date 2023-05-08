function Circle(radius) {
  this.radius = radius;

  this.draw = function() {
    console.log('Draw');
  }
}

// In ES6 or ES2015 which is like a modern version of JS, there is a new way to create objects and 
// implement inheritance, that’s using classes but these classes are not like classes we have in C# 
// and Java, their essentially syntactic sugar over prototypical inheritance that’s why we tried to 
// fully understand how prototypical inheritance works before we look at the new syntax which is 
// cleaner and simpler.

// lets rewrite the above code using ES6 Classes
// We start with the class keyword and add the name of the class, and then  pair of curly braces, 
// this is the body of the class. In this body we can define properties and methods. One special 
// method that we have is called constructor and we use that to initialize objects. So as parameters 
// we pass it radius and then set the radius property on the new object instance that will be created. 
// Now if you want to add a method, we don’t use the function keyword,we simply use the name of the 
// method along with parentheses and then the body of the method. And then we use the same syntax we 
// used before to create a Circle object instance. If we inspect c in the console, we’d find out that 
// we have a Circle Object with a radius property and in it’s prototype we have the draw() ,method, so 
// all the methods we add in the body of the class will end up on the prototype of the circle object. 
// Now if you dont want a method to end up on the prototype we define it in the constructor. So now 
// we have move method on the object instance the draw method on the prototype.
class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function() {
      console.log('Moving');
    }
  }

  draw() {
    console.log("Draw");
  }

  const c = new Circle(1);
}

// If we check the typeOf Circle class we’d find out that its a function, so classes in javascript 
// are function or more specially Constructor Functions. Classes in ES6 enforce the use of new operator 
// if we forget to use it, we’g get a type error that class constructor Circle cannot be invoked 
// without new keyword.