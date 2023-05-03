let baseSalary = 30000;
let overTime = 10;
let rate = 20;

function getWage(baseSalary, overTime, rate) {
  return baseSalary + (overTime * rate);
}

console.log(getWage(baseSalary, overTime, rate));

// If we encapsualte all these variables and the functions into a single object then that would be called 
// Encapsulation. This is better as you can see that the getWage() method in the person object doesn't have
// any poarameters, in contrast our getWage() function has 3 parameters. The reason why we didn't need
// parameters was becasue all these parameters were actually modeled as properties of this person object
// All these properties and getWage() method are highly related so they are part of one unit. 

let person = {
  baseSalary: 30000,
  overTime: 10,
  rate: 20,
  getWage() {
    return baseSalary + (overTime * rate);
  }
}

console.log(person.getWage());

