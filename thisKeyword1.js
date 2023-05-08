'use strict'

// So we create a Circle Constructor Function and in it set this.draw to a function and within it 
// do a console.log of this. Now create a new Circle object called c and then invoke draw method on 
// the c object. It will output the circle object, because this points at the it. 



const Circle = function() {
  this.draw = function() {
    console.log(this);
  }
}

const c = new Circle();
// So we create a Circle Constructor Function and in it set this.draw to a function and within it 
// do a console.log of this. Now create a new Circle object called c and then invoke draw method on 
// the c object. It will output the circle object, because this points at the it. 
const draw = Circle.draw;
console.log(draw);

c.draw()
// If we simply call the draw() Function, instead of the circle object we’re going to see
// Global Object in node, Why didn’t we the circle object?
draw();

// Firstly you need to know that this(c.draw()) is called a method call, in this case this in 
// the function will point to c object. Now syntax like this e.g. draw() is called a function call, 
// we’re calling this as a stand alone function that is not part of an object. So when we call this 
// function, by default this in the draw function will point to the global object which is global in 
// node. 

// Now in JS we have strict mode, JS engine will be more sensitive, so it will do more error checking 
// if there are errors that silently fail, it’s going to turn them into exceptions, and also it will 
// change the behavior of the this keyword in functions. To enable the strict mode on the top of the 
// file declare ‘use strict’. Now instead of getting the global object in node we get undefined, So if 
// we enable strict mode and use a method as a function, this by default will no longer point to the 
// global object, it’ll be set to undefined. And the reason is to prevent us from modifying global 
// object. 

class Square {
  draw() {
    console.log(this);
  }
}

// Now we’ll see how this keyword behaves in ES6 classes. Define a new class Square and declare draw 
// method in it that log this to the console. Then create a new instance of Square class and log the 
// reference of draw method to the console and then invoke the draw() function. Now when we called 
// the draw() Function it returned us undefined because by default the body of our classes are executed 
// in the strict mode. 
const square = new Square();
console.log(square.draw);
draw();