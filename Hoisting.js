// The key difference between a function declaration and function expression is that we can call the
//  function which is created using the function declaration syntax before it’s declaration, but we cant
//   do that with function expression. The reason for this is our JS engine executes this code it moves all
//    the function declarations to the top. This is what we call hoisting. Hoisting is the process of
//     moving function declarations to the top of the file. /





/ function declaration 
function walk() {
  console.log('walk');
}

// function expression
let run = function() {
  console.log('run');
};

walk();
run();