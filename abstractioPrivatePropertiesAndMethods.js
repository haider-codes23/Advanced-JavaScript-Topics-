// If we have a Constructor Function Circle that takes a radius parameters, and assigns that radius
//  parameter to the objects property radius referenced by **this** keyword. When we invoke this 
//  Constructor function using the **new** keyword, the new keyword creates a new empty object { }
//   and then the **this** keyword in the Function Circle points or references this empty new object.


//  Lets create a new property in the Circle function and set it to an object with x and y coordinates,
//   create a method called computeOptimumLocation(), then invoke this method inside the draw method.
//    But now outside of this function use the circle Object that we created earlier with dot notation
//     and you can access this computeOptimumLocation from outside the function as well, the point is
//      that not all the member of the circle object which include the methods should be accessible
//       outside the Constructor function Circle. E.g. the computeOptimumLocation() must only be 
//       invoked inside the draw() method. So In OOP we have a core concept called abstraction, which 
//       means we should hide the details or complexities and show only those which are essential.
//        In our Example we should hide the properties defaultLocation and the computeOptimiumLocation,
//         these are implementation details, we watn to hide these from the consumer of the object.

// function Circle(radius) {
//   this.radius = radius;

//   this.defaultLocation = { x: 0, y: 1 };

//   this.computeOptimumLocation() {
//     //....
//   }

//   this.draw() {
//     this.computeOptimumLocation()
//     console.log('draw');
//   };
// }

// const circle = new Circle(10);
// circle.computeOptimumLocation();

function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 1 };

   let computeOptimumLocation = function() {
    //....
  }

  this.draw() {
    computeOptimumLocation()
    console.log('draw');
    console.log(this.radius);
    };
}

const circle = new Circle(10);
circle.computeOptimumLocation();