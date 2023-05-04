class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  //Instance Method- BEcause this method is avaibale by an instance of class or an object
  draw() {

  }

  // Static Method
  parse(Str) {
     const radius = JSON.parse(str).radius;
      return new Circle(radius);
  }
}

const circle = new Circle(1);


const circle1 = Circle.parse('{"radius": 1}');
console.log(circle1);