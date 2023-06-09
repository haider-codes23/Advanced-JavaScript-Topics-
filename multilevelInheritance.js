// let myArray = [];

// - lets define an array and call it myArray. Now lets inspect it, it has a prototype which we can
//  call the arrayBase and in the prototype we have all the array methods e.g. push, pull map, filter
//   etc. So myArray derives from arrayBase. Now if we inspect further down we’d find out that
//    arrayBase itself has a prototype which is objectBase or root object in JS. So myArray derived
//     from arrayBase and arrayBase derived from objectBase. This is what we call multilevel
//      inheritance.


// Another Example: We have a constructor function Circle and then we create a circle object using
//  the constructor Circle. If we inspect the circle object, we’d find out that circle object that we
//   created using the Circle Constructor has a prototype, and this prototype is the prototype for all
//    circle objects we create using our circle constructor. Let’s call this circleBase. So 
//     we call Circle constructor to create a new object and set it’s prototype property to circleBase.
//      In other words objects created by given constructor will have the same prototype. so all object
//       created by circle will have the same prototype that is circleBase and circleBase has the
//        prototype called objectBase


const arr = [];
console.log(arr);