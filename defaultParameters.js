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