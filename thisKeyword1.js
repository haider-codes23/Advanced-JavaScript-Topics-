'use strict'

const Circle = function() {
  this.draw = function() {
    console.log(this);
  }
}

const c = new Circle();
const draw = Circle.draw;
console.log(draw);

c.draw()

draw();

class Square {
  draw() {
    console.log(this);
  }
}

const square = new Square();
console.log(square.draw);