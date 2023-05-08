//- A Special kind of methods in objects is called getter and setters.
//- If we have an object that has two properties firstName and lastName and somewhere in our
//  program we want to combine the first name or last name, either we could use the dot notation
//   syntax and concatenate the returned values. The other way would be to use the dot notation
//    syntax inside of the template literal. But the best way would be to define a method within
//     the object itself that would combine the firstName and lastName of a person. and when we
//      want a person’s fullName we can simply call that method.


// The problem with this approach is this, that it is read only. In other words we cannot set
//  ta person full name from the outside. So how do we do this, this is where getter and setter
//   come into picture.


// - we use getter to access properties in an object and we use setter to change and mutate them.
//  So in this object we should implement a getter so we can read this person’s fullName and with a
//   setter we can set it from the outside.


// - So the method we have fullName we prefix it with the keyword get and now this method fullName
//  is a getter method. A setter is very similar, we start with the set keyword then the name of the
//   property or method and then the code block. However this method needs a parameter e.g. value or
//    anything and the value of this parameter will be what we have on the right side of the object
//     key value assignment e.g. person.fullName = “M  Ibraheem ”. If we use this setter the firstName
//      property will be set to “M” and lastName property will be set to “Ibraheem”


const person = {
  firstName: "Haider",
  lastName: "Ali",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }

}
// To get a value we cannot use our getter method like a regular function, we use dot notation
//  syntax e.g. the name of the object followed by a Dot, then the name of the
//  setter method without the parentheses
console.log(person.firstName + " " + person.lastName);
console.log(`${person.firstName} ${person.lastName}`);
console.log(person.fullName);
// When we want to set a value we cannot call the setter method like we call a regular function
// we use dot notation syntax e.g. the name of the object followed by a Dot, then the name of the
// setter method and then the use the assignment operator to assign it a value
console.log(person.fullName = "M ibraheem");

console.log(person);