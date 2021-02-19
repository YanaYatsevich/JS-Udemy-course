'use strict';

//my version
// const task3Element = document.getElementById('task-3');


// function noName() {
    
//     alert('Hello');
// }

// function withName(name) {
//     alert(name);
// }

// noName();
// withName('Yana');

// task3Element.addEventListener('click', noName);

// function newFunc(str1, str2, str3) {
//     const result = str1 + str2 + str3;
//     alert(result);
// }

// newFunc('this', 'is', 'function');


//course version
const task3Element = document.getElementById('task-3');

function greet() {
  alert('Hi there!');
}

function greetUser(userName) {
  alert('Hi ' + userName);
}

function combine(str1, str2, str3) {
  const combinedText = `${str1} ${str2} ${str3}`;
  return combinedText;
}

greetUser('Max');

task3Element.addEventListener('click', greet);

const combinedString = combine('Hi', 'there', '!');
alert(combinedString);