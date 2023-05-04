const _radius = new WeakMap();

// //  So here we have a private property, but maybe you want to read this value, from the outside.
//  Perhaps we don’t want to set it, we just want to read it. One way is to define a method like getRadius
//   and in it we return _radius.get(this) and then we could use our Circle class instance to call this
//    getRadius() method, but calling a method is not good, what if we could read that like a property,

// // So earlier we talked about constructor functions, we used Object.defineProperty(this, ) to define a
//  getter, so we passed it an object e.g this, set the name of the property like radius and then pass
//   another object in which we add the get method, but this syntax is very convoluted.


class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    
    // Object.defineProperty(this, 'radius', {
    //   get: function() {
    //     //...
    //   }
    // })
  }

  //    In ES6 we can create a getter and setter much easier. We add the get keyword before the name of
  //     the getter function, parenthesis and then the body of the getter, inside we
  //      return _radius.get(this)

  get radius() {
    return _radius.get(this);
  }

  set radius(radius) {
    _radius.set(this, value);
  }
  
  // getRadius() {
  //   return _radius.get(this);
  // }

  // get radius() {
  //   return this._radius.get(this);
  // }
}

const c = new Circle(1); 
console.log(c.getRadius());
