const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
let arrayList = [1, 5, 7, 4, 3, 8];
const randomNumberAgain = Math.random();

console.log(randomNumber);
console.log(randomNumberAgain);
    
if (randomNumber > 0.7) {
        alert('You shall not pass');
    }
   
for (const el of arrayList) {
    console.log(el);
}

for (let i = arrayList.length - 1; i >= 0; i--) { //потому что наш список начинается с нуля
    console.log(arrayList[i]);
}

//неправильное решение
// if ((randomNumber && randomNumberAgain) > 0.7 || (randomNumber || randomNumberAgain) <= 0.2) {
//     alert ("Oh my god, it's alert again");
// }


if ((randomNumber > 0.7 && randomNumberAgain > 0.7) || (randomNumber <= 0.2 || randomNumberAgain <= 0.2)) {
    alert ("Oh my god, it's alert again");
}