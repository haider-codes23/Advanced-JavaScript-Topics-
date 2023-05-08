// While inheritance is a great solution to solve the problem of code reuse, we have to be careful
// about using it because it can make our code complex and fragile. So dont use inheritance for the
// sake of using it especially in small projects.

// Start with simple objects and then when you see a number of these objects share a similar
// features then you can encapsulate those features inside a generic object and use inheritance,
// but remember inheritance is not the only solution to enable code reuse. There is another
// technique called composition, but lets look at the problem with inheritance first.

// We have an animal object with two methods called eat() and walk(). And we have two objects that
// derive from animal Person and Dog, and tomorrow we introduce a new object called Goldfish that
// derives from animal, our hierarchy is broken, because our Goldfish can’t walk, they can only 
// swim, so we have got the hierarchy wrong and this is something that happens  quite often among
// inexperienced developers.

// So to solve this problem we need to change our hierarchy. On Top we should have the animal object
// with eat() method, under that we are going to have two objects Mammals and Fish, Mammals have the
// walk() method and Fish has the Swim() method. And then we can have Person and Dog derive from
// Mammal, and Goldfish derive from Fish.

// But now this hierarchy is more complex than before, now what would happens if we had 10 different
//  types of animals, this hierarchy would get more and more complex.

// If you want to use inheritance keep it to 1 level. There is a famous saying 
// Favor Composition over Inheritance

// With composition instead of having a complex hierarchy like this, we can compose a few objects
// together to create a new Object. And this technique gives us great flexibility. So, back to our
// previous example instead of using Inheritance, we can define various features for our animals
// as independent objects. So we can use 3 objects like canWalk, canEat and canSwim, each of these
// objects are plain JS objects with certain properties and methods. 


// - Lets define a new object canEat using object literal syntax and in this object we define
//  one method called eat and do a simple console.log(’eating’). Now we are defining a feature as
//  an object. Next we create a canWalk and canSwim Object. Now we can compose these two objects
//  canEat and canWalk together to create a person that can eat and walk. So in ES6 we have a method
//  Object.assign() and we can use this to copy the properties and methods from one object to 
//  another, so we pass an empty object as target object and pass one or more objects as source.
//  So if we pass canEat and canWalk with an empty object this method will copy all the properties
//  and methods from canEat and canWalk to the empty object, and returns an object that has all
//  those methods and properties so we assignt this object to a person const.
-
const canEat = {
  eat: function() {
    console.log('Eating');
  }
}

const canWalk = {
  walk: function() {
    console.log('Walking');
  }
}

const canSwim = {
  swim: function() {
    console.log("Swimming")
  }
}


// Now we want to have a person object, which we can by simply composing canWalk and canEat objects
// together. If tomorrow we want a Goldfish object we can simply compose canEat and canSwim together
// to get a Goldfish. So we dont have a hierarchy and we can come up with any combination of these
// objects to create new objects. In JS we use Mixins to achieve composition. 
// const person = Object.assign({}, canEat, canWalk, canSwim);

// const person = Object.assign(Person.prototype, canEat, canWalk, canSwim);

// Now if you are using a constructor function we can still use this technique, So lets define a
// constructor called Person, then we can add any properties and methods specific to person object,
// and next instead of passing an empty object we could pass Person.prototype as the target object.
// And we dont need the return value anymore. So we have modified the prototype of person and added
// the capability to eat, walk and swim. So next time we create a person object the person will
// have these capabilities. 


function Person() {
  
}

// Now to make this code more readable we can extract these two lines of code into a function
// called mixin, the first argument is target object e.g. Person.prototype or Goldfish.prototype,
// next we dont know how many source arguments we are going to pass so we can decide how many source
// parameters we are going to have, to solve this problem we can use the rest operator in ES6, so 
// we add only one source parameter and then append rest operator to it and this will collect all
// the arguments an turn them into an array, next sources is an array but Object.assign() needs
// sources explicitly we cannot pass an array so this time we will use the spread operator to
// spread an array into multiple arguments


// Composition
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}
mixin(Person.prototype, canEat, canWalk, canSwim);
console.log(person);
