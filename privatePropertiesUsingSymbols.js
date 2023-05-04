const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    //this.radius = radius;
    this._radius = radius;
  }
  // draw() {
  //   //.....
  // }
  [_draw]() {
    //...
  }

}

const c = new Circle(2);
console.log(c._radius);