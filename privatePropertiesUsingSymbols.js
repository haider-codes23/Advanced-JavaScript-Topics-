const _radius = Symbol();
const _draw = Symbol();

// Abstraction is core to OOP. It means hiding the details and complexity and showing only the 
// essentials parts. To implement abstraction we use private properties and methods. We hide certain 
// members of the object so they wouldn’t be accessible from the outside. So here we have a Circle 
// Class and we set the radius property in the constructor and this radius property is public by 
// default. Which means we can access this radius property outside the class using an instance of 
// that class. Now lets imagine we want this radius property to be private, so how do we implement 
// private properties and methods when using classes. There are 3 approaches, the first one is using 
// underscore as a naming convention, so we prefix our property with an underscore 
// e.g. this._radius = radius, it’s a terrible approach because we can still access it from outside.

// The next approach uses ES6 symbols to implement private properties and methods. Primitive types 
// include symbols as well. So we are going to declare a const and call it _radius and set it to a 
// symbol(), so symbol() is function we call to generate a symbol. A symbol is a unique identifier, 
// every time we call this function we get a new unique identifier. If we create a symbol and compare 
// it with another symbol it’s going to return false. every time we call this symbol() function we get 
// a new unique identifier, which we can store in a variable . And we can use this new unique value 
// stored in a variable as a property name for an object. e.g. in the constructor function we can use 
// this unique identifier instead of property name “radius”, Now when we log our circle object on the 
// console, the property name that shows is called symbol, this is just how we see it, internally 
// it is a unique value. If we try to access the radius property we wouldn’t get the access. 

class Circle {
  constructor(radius) {
    //this.radius = radius;
    this._radius = radius;
  }
  // draw() {
  //   //.....
  // }

  // to implement a private method like draw, we can define another symbol and lets call it _draw. 
  // Now instead of using draw as the name of the method we can use our symbol here. Now in ES6 we have 
  // this new feature called computer property names, so we can add brackets and inside of this 
  // brackets we add an expression. When that expression is evaluated, the resulting value will be 
  // used as a name of the property or method. So here we pass _draw the name of the variable that 
  // hold the value of the symbol. Now the unique identifier will be used as the name of this 
  // identifier. 
  [_draw]() {
    //...
  }

}

const c = new Circle(2);
console.log(c._radius);