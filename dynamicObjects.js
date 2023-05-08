// That means you can always add properties and methods after creating an object.
//  Or remove already existing ones. Or change the value of properties as well


const circle = {
  raduis: 1,
};

circle.diameter = 2;
circle.location = {x: 1, y: 2};

console.log(circle)

delete circle.location;

console.log(circle)