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

console.log(person.firstName + " " + person.lastName);
console.log(`${person.firstName} ${person.lastName}`);
console.log(person.fullName);
console.log(person.fullName = "M ibraheem");
console.log(person);