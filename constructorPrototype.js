let myObj = {};

Object.getPrototypeOf(myObj);
// myObj.__proto__(parent of myObj)
// Constructor.prototype()


function Circle(radius) {
  this.radius = radius;
}
Circle.prototype

const circle = new Circle(1);

console.log(myObj.__proto__);