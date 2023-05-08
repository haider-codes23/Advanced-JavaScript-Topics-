// Every Object in JS has a property called Constructor. And that references the function
// that was used to construct or create that object. In our code we have an object called
// anotherCircle that was created using a constructor function, we will use the dot notation
// to invoke the constructor property on it, it returns the circle function that we used to 
// create that object. Now if we call this same property on our object called circle that was 
// created using the factory function, it would return us a function. So this is a built-in
// constructor function in JS. When we create an object using function declaration syntax, internally
// the JS Engine uses this built-in constructor function. Every Object has a constructor property
// and that references the function that was used to create that object.




// Factory Function
function createCircle(radius, location) {
  return {
    radius,
    location,
    draw() { },
    move() { },
  };
    
}

const circle = createCircle(1,{x: 1, y: 2});

// The main difference between Constructor function and Factory function is that constructor uses
// the this keyword to initialize the properties in the object, in factory functions we use the ususal
// function calling syntax to create an object, in contrast constructor function uses the new keyword
// that creates a new empty object, set's the this keyword to point at the empty object and then
// returns that new empty object from the constructor function. 
// Constructor Function
function createCircle(radius, location) {
  this.radius = radius;
  this.location = location;
  this.draw = function() {
    console.log('Draw');
  }
  this.move = function() {}
    
}

const anotherCircle = new createCircle(1, {x: 1, y: 2});
console.log(anotherCircle.constructor); // It returns an object that contains the function that was used to create this object []