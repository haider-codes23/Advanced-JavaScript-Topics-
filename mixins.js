// Composition
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}


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

function Person() {
  
}

// const person = Object.assign({}, canEat, canWalk, canSwim);
// const person = Object.assign(Person.prototype, canEat, canWalk, canSwim);
mixin(Person.prototype, canEat, canWalk, canSwim);
console.log(person);
