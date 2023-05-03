let baseSalary = 30000;
let overTime = 10;
let rate = 20;

function getWage(baseSalary, overTime, rate) {
  return baseSalary + (overTime * rate);
}

console.log(getWage(baseSalary, overTime, rate));

// If we encapsualte all these variables and the functions into a single object then that would be called 
// Encapsulation. 

let person = {
  baseSalary: 30000,
  overTime: 10,
  rate: 20,
  getWage() {
    return baseSalary + (overTime * rate);
  }
}

console.log(person.getWage());