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

console.log(Circle.prototype === c1.__proto__);

c1.draw();

Circle.prototype.toString = function() {
  return 'Circle of radius' + this.radius;
}