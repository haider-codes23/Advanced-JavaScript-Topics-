// - There are 3 ways to clone an object
// - we can use the for/ in loop to iterate over an object properties and then copy the value of the circle[key] to the anotherCircle[key]. So anotherCircle is intially an empty object, in which we create a new property called radius and then assign it with the value of the property radius of the object circle.
// - Next we can use the Object.assign() method. The first argument that we pass to it is the object in which the properties and methods of all the other arguments(objects) will be copied to. The object in the first argument is the one that gets mutated, others don’t. So mostly we use an empty object so that our objects dont get mutated.
// - Third way is to use the spread operator. Firstly we create a new object within it we use three dots followed by the name the object we want to clone. The spread operators takes all the properties and methods from the named object and puts them in between this object literal.

const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  },
};

const anotherCircle = {};

for (let key in circle) {
  anotherCircle[key] = circle[key];
  //anotherCircle['radius'] = circle['radius'];
  //anotherCircle['draw'] = circle['draw'];

}
circle.color = 'green';
// console.log(circle);
// console.log(anotherCircle);

const yetAnotherCircle = Object.assign({}, {color:"red"});

// console.log(yetAnotherCircle);

const yetYetAnotherCircle = {...yetAnotherCircle};
yetYetAnotherCircle.size = "small";

console.log(yetAnotherCircle);
console.log(yetYetAnotherCircle);