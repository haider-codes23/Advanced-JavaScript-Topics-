// Another pattern for creating objects. It’s job is to create objects, but the naming convention
//  we use for it is different. Factory functions use camelCamel Notation but constructor functions
//   use Pascal Notation by convention. However instead of returning an object like we do in factory
//    functions, here we could use a different approach to initialize an object. In JS we have a
//     keyword called this and it is a reference to the object that is executing this piece of code.
//      For now imagine this references an empty object. Next using dot notation we can access
//       properties of an object, read a property or set a property. So in this new object we want to
//        add a new property called radius and we want to set it to the argument that we passed when we
//         called the constructor function. then we do the same with location. In Js objects are dynamic
//          we can always add additional properties and methods to them. So here we are adding a new
//           property to an empty object, the same way we can add a draw method to this new empty object.
//            Again we use the this keyword followed by a dot operator and the name of the function then
//             we set it to  function keyword and a function body. To create an an object using this
//              constructor function we are firstly going to declare a constant called circle and then set
//               it’s value using the new keyword followed by the name of the constructor function. When we
//                use the new operator 3 things happen. This new operator creates a new empty object, then
//                 it set’s the this keyword to point to the new empty object, finally the new keyword return
//                  the new empty object from the function CreateCircle



function createCircle(radius, location) {
  this.radius = radius;
  this.location = location;
  this.draw = function() {
    console.log('Draw');
  }
  this.move = function() {}
    
}

const circle = new circle(1, {x: 1, y: 2});
