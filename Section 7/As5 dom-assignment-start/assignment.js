//1
const li1 = document.querySelector('#task-1');
const li2 = document.getElementById('task-1');

li1.style.backgroundColor = 'black';
li2.style.color = 'white';

//2
const title1 = document.querySelector('title');

const title2 = document.head;
const title22 = title2.querySelector('title');

title22.textContent = 'Assignment - Solved!';

//3
// const h1 = document.getElementsByTagName('h1');
// h1[0].textContent = 'Assignment - Solved!';
const h1 = document.querySelector('h1');
h1.innerHTML = 'Assignment - Solved!';