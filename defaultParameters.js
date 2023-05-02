// - There are times we wan to supply default values to a function e.g. you want to write a function to calculate the total interest. We have three parameters called principal, rate and years. The formula to calculate the interest is principal * rate / 100 * years.
// - What if we wan to have default values for rate or number of years e..g we can use logical operator or || e.g rate = rate || 3.5 , years = years || 5. Now if the values passed as argument are truthy, they’ll be used otherwise the second operand of the || will be used.
// - In ES6 we have a cleaner way to achieve this, so instead of having these logical expressions, we can set the default values up in the parameters. With this we can get rid of the logical operator || we used.
// - when you use default values for parameters make sure all the parameter after the parameter to whom you gave a default value also have a default values other wise we could get an error like NaN


function interset(pricipal, rate, years) {

  rate = rate || 3.5;
  years = years || 5;
  return pricipal * rate / 100 * years;
}

console.log(interset(10000, 6.5, 10));

function interset(pricipal, rate = 3.5, years = 5) {

  return pricipal * rate / 100 * years;
}

console.log(interset(10000, 6.5, 10));