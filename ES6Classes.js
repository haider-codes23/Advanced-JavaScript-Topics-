function Circle(radius) {
  this.radius = radius;

  this.draw = function() {
    console.log('Draw');
  }
}

// lets rewrite the above code using ES6 Classes
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