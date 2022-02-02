// function doctorize(firstname) {
//   return `Dr. ${firstname}`;
// }

// const { constants } = require('buffer');

// // A non function
// funtion(firstname) {
//     return `Dr. ${firstname}`;

// Function expression
// const doctorize = function (firstname) {
//   return `Dr. ${firstname}`;
// };

// const inchToCm = function (inches) {
//   return inches * 2.54;
// };

// const inchToCm = (inches) => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// const add = (a, b = 3) => a + b;

// function makeABaby(first, last) {
//   const baby = {
//     name: ` ${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

const makeABaby = (first, last) => ({
  name: ` ${first} ${last}`,
  age: 0,
});

(function (age) {
  return `You are cool and age ${age}.`;
})(10);

// Methods
const richi = {
  nom: ' Richi Udoh',
  sayHi() {
    console.log(`Hey ${this.nom}`);
    return 'Hey Richi';
  },
  // Short hand Method
  yellhi() {
    console.log('Hii Richiii!!! ');
  },
  // Arrow function
  wisperHi: () => {
    console.log('Hii Richi I am a king');
  },
};

// callback Functions
// Click callback

const button = document.querySelector('.clickMe');

function handleClick() {
  console.log(`Great clicking`);
}

button.addEventListener('click', () => {
  console.log('Nice Job!!');
});

// Timer Callback
setTimeout(() => {
  console.log('Done! Time to eat.');
}, 1000);
