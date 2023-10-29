let a = 1,
  b = 6,
  c = 9;

let bSquared = Math.abs(b) ** 2;
let fourAC = 4 * a * c;
let twoA = 2 * a;
let bSquaredMinusFourAC = bSquared - fourAC;
let sqrt = Math.sqrt(bSquaredMinusFourAC);
let operation1 = Math.round(((-b + sqrt) / twoA) * 100) / 100;
let operation2 = Math.round(((-b - sqrt) / twoA) * 100) / 100;
operation1 === operation2
  ? console.log(`x = ${operation1}`)
  : console.log(`x = ${operation1} or x = ${operation2}`);