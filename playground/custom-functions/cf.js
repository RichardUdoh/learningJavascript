console.log('it works');

// Function definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  console.log('Running Calcute Bill!!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}
const richiTotal = 300;
const richitax = 1.8;

// Function Call. or **Run**
// const myTotal = calculateBill(200, 1.13);
const myTotal = calculateBill(richiTotal, richitax);
// console.log(`Your Total is is $${myTotal}`);
console.log(`Richi, your Total is $${myTotal}`);

function sayHiTo(firstName) {
  return `Hello ${firstName}.`;
}

const greeting = sayHiTo('Udoh');
console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goes') {
  return `HEY ${name.toUpperCase()}. `;
}

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);
