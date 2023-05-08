// - In Classical OOP we have two kinds of methods Instance methods and Static methods
// Below, draw() method is an instance method, Because this method is available by an instance of 
// class or an object. And if we inspect the Circle object we’d find out that in the instance of the 
// circle object we have the draw method.

// In contrast we have static methods, these are available on the class itself. Not the object 
// instance. We often use them to create utility functions that are not specific to a given object. 
// e.g. in the Circle class the method draw is specific to the Circle Object. It’s a particular 
// circle object that we want to draw so that’s why it’s an instance method.



class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  //Instance Method- BEcause this method is avaibale by an instance of class or an object
  draw() {

  }

  // Static Method
  // Now we will write a static method that is not tied to a particular circle object called parse, 
  // it takes a string, it will parse it and return a new circle object, that circle object will have 
  // a radius property so we’ll access that and store it in a variable called radius, then we new up 
  // the Circle object with that radius and return it. Now to make it static we use the static keyword 
  // in the front. Now this static method will not be available on the circle object so we cant 
  // access it now. But it’s accessible on the Class reference e.g Circle.parse, So with static 
  // methods we are not working with a particular class object, we are working with the Circle 
  // class itself. So to call a static method we don’t need an instance of a class.
  
  parse(Str) {
     const radius = JSON.parse(str).radius;
      return new Circle(radius);
  }
}

const circle = new Circle(1);


const circle1 = Circle.parse('{"radius": 1}');
console.log(circle1);