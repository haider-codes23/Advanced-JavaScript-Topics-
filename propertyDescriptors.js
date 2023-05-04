let person = { name:"Haider" };
// console.log(person);
// for (let key in person) {
//   console.log(key);
// }

// let objectBase = Object.getPrototypeOf(person);
// // console.log(objectBase);
// let descriptor = Object.getOwnPropertyDescriptors(objectBase, 'toString');
// console.log(descriptor);


Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: true,
  configurable:false

});

person.name = 'Ahsan'

console.log(person.name);
console.log(Object.keys(person));
delete person.name;
console.log(person);