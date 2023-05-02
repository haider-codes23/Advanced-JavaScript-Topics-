// We can use the for/ in loop with plain objects but we cannot use for/ of loop because plain objects
//  are not iterate-able, so we can use Object.keys(circle) method and pass it the object circle as an
//   argument, the Object.keys() method returns an array that contains all the keys of the object passed
//    to it as an argument, Object is a builtin constructor function, so somewhere we have a constructor
//     function, and whenever we create an object using an object literal syntax, internally that is
//      translated into a call to this constructor function, so when we create an object using object literal
//       syntax, internally that is translated to a call to the Object constructor function. also we learnt
//        that all functions in JS are objects so they have properties and methods that we can access using
//         dot notation. So when we type Object. we see all the properties and methods defined in this object.




const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  },
};

for (let key in circle) {
  console.log(key);
}

for (let key of Object.keys(circle)) {
  console.log(key);
}

function Object() {

}

Object.keys();
