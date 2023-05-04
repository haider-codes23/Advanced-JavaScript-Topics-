class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log('move');
  }
}

// //We have a Shape Class and a Circle Class, we want the Circle Class to inherit from Shape Class, so
//  we’ll use the extend keyword along with the name of the parent class after the name of Circle Class.
//   Then we create a draw method inside the circle class. Then we create a Circle object called c and
//    call the draw method using it. If we inspect the circle c object in the console, we’d find out that
//     in our circle objects prototype we have a draw method, because all the methods we implement in the
//      class end up in the prototype for Circle. Now this prototype object itself has a prototype, this is
//       where we have the move method.

// //- lets imagine all our shapes need a color, so we add a constructor to Shape class and add color as
//  parameter to the constructor and set the color property. Right now we dont get any errors, but if we
//   add a constructor in the circle class, we get an exception, because if we have a constructor in the
//    parent class, and then you add a constructor in the direct class, inside of the constructor in the
//     child you should make sure to call the parent class constructor first, to initialize this base object.
//      So in the Circle class constructor we can use the **super** keyword to reference the parent object.
//       and we call it like a function and we pass it the color argument and in our constructor we also pass
//        the color argument. And when we create a new Circle Object we need to pass color as an argument.
//         Now we can add additional properties here. e.g. radius

class Circle extends Shape {
  constructor(color, radius){
    super(color);
    this.radius = radius;
  }


  draw() {
    console.log('draw');
  }
}

const c = new Circle('red', 1);
console.log(c);
c.draw();