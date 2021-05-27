// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello();

const MESSAGE = "Hi Yana! It's return value.";
const DEFAULT_NAME = "Yana! It's default value";

// ex 1, ex 3
const sayHello = (name = DEFAULT_NAME) => {
  console.log('Hi ' + name);
};

sayHello('Yana');
sayHello();

//Ex2 i.e1
const sayHelloWithArg = (greeting, name) => {
  console.log(greeting + ' ' + name + ' with arguments');
};

sayHelloWithArg('Hello','Yana');

// ie 2
const sayHelloWithoutArg = () => {
  console.log('Hello Yana without arguments');
};

sayHelloWithoutArg();

//ie 3


const sayHelloWithReturn = () => {
  const greetingPhrase = console.log(`${MESSAGE}`);
  return greetingPhrase;
};

sayHelloWithReturn();


//ex 4
// const YOUR_INPUT_1 = prompt('Please write smth through semicolumn');

const checkInput = (callback,...strings) => {
  let phrase = '';
  for (const str of strings) {
    phrase = console.log(str);
  }
  callback(phrase);
};

const checkIfValid = (string) => {
  if (!string) {
    alert('Invalide input');
  } else {
    return string;
  }
};

// checkInput(YOUR_INPUT);
checkInput(checkIfValid, 'hi', 'ho');
// checkInput(checkIfValid);


//решение курса
// const sayHello = name => console.log('Hi ' + name);

// const sayHello2 = (name, phrase) => console.log(phrase + ' ' + name);
// const sayHello3 = () => console.log('Hi Hard-coded!');
// const sayHello4 = name => 'Hi ' + name;

// sayHello('Max');
// sayHello2('Max', 'Hello');
// sayHello3();
// console.log(sayHello4('Max'));

// const sayHello5 = (name, phrase = 'Hi') => console.log(phrase + ' ' + name);

// sayHello5('Manuel');
// sayHello5('Manuel', 'Hello');

// function checkInput(cb, ...strings) {
//   let hasEmptyText = false;
//   for (const text of strings) {
//     if (!text) {
//       hasEmptyText = true;
//       break;
//     }
//   }
//   if (!hasEmptyText) {
//     cb();
//   }
// }

// checkInput(
//   () => {
//     console.log('All not empty!');
//   },
//   'Hello',
//   '12',
//   'adsfa',
//   'Not empty'
// );