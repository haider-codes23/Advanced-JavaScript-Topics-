const circle = {
  raduis: 1,
};

circle.diameter = 2;
circle.location = {x: 1, y: 2};

console.log(circle)

delete circle.location;

console.log(circle)