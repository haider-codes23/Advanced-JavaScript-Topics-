function Circle(radius) {
  // Instance property - member
  this.radius = radius;
  // Instanace methods - member
  this.move = function() {
    this.draw();
    console.log('move');
  }
}

const c1 = new Circle(1);

// Prototype method - member
Circle.prototype.draw = function() {
  console.log('Draw');
}

c1.draw();

for (let key in c1) {
  console.log(key);
}