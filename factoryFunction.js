// // One way to create an object is using object literals. lets duplicate our circle
//  object and call the duplicate one circle2. The problem we have here is that we
//   have duplicated the implementation of the draw method and move method. We don’t
//    want to do that  e.g. if we had 10 objects, then we would have ended with 10
//     duplicate methods.  We don’t want to duplicate all that logic so that’s where need a different way to create objects. That is where we use factory or constructor functions. So lets first learn about factory functions.


// // Just like a factory producing products, this factory function produces objects. Firstly we
//  define a function and call it createCircle. Now we are going to move the definition of our circle
//   object inside our factory function. Finally we need to return this object circle, we can either
//    use a return statement at the end or we could remove the const keyword plus the name of the
//     object because we are not going to reference it anywhere and simply returning the object.
//      So when ever we call the createCircle function we’ll get a circle object in return. However
//       we have hard coded the values here, so every circle created by this function it’s radius will
//        be one. Maybe we want a circle with bigger radius. so we want to pass radius as a parameter,
//         and instead of hard coding it we would set the value of radius to the argument radius 
//          we supply when we call the createCircle function, similarly we want to add another
//           parameter here like location. And instead of hard coding the object we could set the
//            location values to the location argument that we pass to the Factory function
//             createCircle.
function createCircle(radius, location) {
  const circle = {
    radius: radius,
    location: { x: 1, y:1},
    draw() { },
    move() { },
  };

  return circle;
    
}

// // Lets make our function shorter, in modern JS if our key and value are same, we can make our
//  code shorter by removing the value and simply adding the key. Next we have is our draw method,
//   there is actually a simpler syntax to define this method, so instead of defining it as a key
//    value pair we could define it simply using the name of the function followed by a pair of
//     parenthesis and then the function body. 
// This is the same function as above, but it uses modern JS syntax
function createCircle(radius, location) {
  return {
    radius,
    location,
    draw() { },
    move() { },
  };
    
}


const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
	draw: function() { },
	move: function() { },
};

const circle2 = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
	draw: function() { },
	move: function() { },
};