// - A confusing Concept, the constructor function createCircle() is an object e.g. if we use the dot
// notation on this createCircle() function like createCircle. all the properties and methods will popup
// in the drop down list. What’s more confusing is that Every object in JS has a constructor property
// and that references the function that was used to create that object. So when we created an object
// using the constructor function that we wrote who created the object ? We can check that using the
// anotherCircle’s constructor property and it would return us [Function: createCircle] so here we
// have another builtin constructor called Function. When we declare a function like we have
// declared, internally JS Engine will use this Function Constructor to create this object.

// - Every Object has builtiin methods so we’ll use the **call()** method on our anotherCircle object.
// And with this we can invoke a function. The first argument is **this** argument, here we need to 
// pass an empty object and **this** keyword in the createCircle function will reference this empty
// object in the first argument. Next we pass the rest of the arguments e.g. we have radius and location.
// The syntax we used e.g. new createCircle(1, {x: 1, y: 2}) is similar to
// anotherCircle.call({}, 1, {x: 1, y: 2}). When we use the **new** operator, this new operator will
// create an empty object and pass that as the first argument to the call method and this empty object
// will determine for **this** keyword.

// - There’s another method called apply() which we can use to call a function but instead of passing
//  all the arguments individually we pass them in an array.

// Constructor Function
function createCircle(radius, location) {
  this.radius = radius;
  this.location = location;
  this.draw = function() {
    console.log('Draw');
  }
  this.move = function() {}
    
}

const anotherCircle = new createCircle(1, {x: 1, y: 2});
createCircle.call({},1, {x: 1, y: 2});
console.log(anotherCircle.constructor);
console.log(createCircle.call({},1 , {x: 1, y: 2}));

console.log(anotherCircle);
console.log(createCircle.call({},1, {x: 1, y: 2}));