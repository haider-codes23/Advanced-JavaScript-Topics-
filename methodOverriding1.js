// Method overriding is when we have in a base class or a base object, but we want to change it’s
//  implementation in a direct class, or a direct object. E.g. lets reimplement the move method in
//   Circle Class which is defined in the Shape Class.

class Shape {
  move() {
    console.log('move');
  }
}

//- Lets imagine you have a scenario where you want to reuse some of the code you have implemented
// in the parent move method. In that case you can call that using the super keyword

class Circle extends Shape {
  // Here we have reimplemented move() and inside it we use the super keyword and rthe move method to 
  // use the implementation of move method in Circle class's parent class which is Shape Class
  move() {
    super.move();
    console.log('circle move');
  }


}

const c = new Circle('red', 1);
c.move();
