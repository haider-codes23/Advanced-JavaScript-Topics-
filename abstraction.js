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