
// If we have some variables that are highly related to each other, a better approach will
//  be putting these variables inside an object. And then we can pass that object anywhere in
//  the program and all the variables will be available in a single object. Now further if we
//  have functions that operate on those values, we can place those function inside the object
//  and that way the values and function all will be available where ever the object is passed
//  in the program. To add a function into an object what we do is make the name of the function
//  the key of the property and the value is the function. This is what we refer to object oriented
//  style programming. OOP is a style of programming where we see a program as a collection of objects
//  that talk to each other to perform some functionality. Here we have the circle object with a few
//  properties and a function, if a function is a part of an object we call that function a method.
//  So here we are calling the draw method of the circle object. 

let raduis = 1;
let x = 1;
let y = 1;

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function() { },
	move: function() { },
};

function draw() {

}

function move() {

}