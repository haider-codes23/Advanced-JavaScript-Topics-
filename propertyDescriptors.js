### 

// We have an object that contains a key value pair and it’s called person. If we use dot notation
//  with it we can access different methods from it’s prototype e.g person.toString(). However if we
//   iterate over the members of this object we are not going to see anything else other than the key,
//    none of the properties and methods defined in the objectBase are visible here. By the same token
//     when you log the return value of Object.keys(person), you only get an array with the name of the
//      property as a string in the array. So how cant we iterate over the methods defined in the 
//      object base. **The reason is in JS our properties have attributes attached to them**.
//       Sometimes these attributes prevent a property from being enumerated. What that means, first
//        get prototype of person using getPrototypeOf(person), so this is our objectBase, Now to see
//         the attributes attached to the toString method, we use Object.getOWnPropertyDescriptor(objectBase), as
//          first argument we pass the objectBase and as second argument we pass the name of the target
//           property or method that is ‘toString’ and this will **return an object that we call a
//            property descriptor** which we can log to the console. So here is our descriptor object,
//             by looking at the properties, configurable is true, that means we can delete this member
//              if we want to, enumerable is false and thats why when we iterated over a person object,
//               we couldn’t see the toString method. We also have writable set to true, which means we
//                can over write this method, we can change it’s implementation.



// When you create an object you can set these attributes to your own properties. Earlier we used
//  Object.defineProperty() method, we used it to define a getter and setter for the property. So as
//   the first argument we pass the object, and as the second argument we pass the target property,
//    the third argument is an object which is our property descriptor object, this is where we add
//     attributes of this property, e.g we’ll set writeable: false, now our property is read only,
//      if we tried changing the value of this property it wouldn’t change. We can set 
//      enumerable to false then the key and value both wouldn’t show up e.g. if we use
//       Object.keys(person) we would get an empty array, in contrast if enumerable was true,
//        it would send an array with enumerable properties. By default all these attributes
//         are true, all properties are writable, enumerable, and configurable. So if we set
//          configurable to false. Now we cannot delete this property.


let person = { name:"Haider" };
// console.log(person);
// for (let key in person) {
//   console.log(key);
// }

let objectBase = Object.getPrototypeOf(person);
// // console.log(objectBase);
let descriptor = Object.getOwnPropertyDescriptors(objectBase, 'toString');
console.log(descriptor);


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