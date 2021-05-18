const ATTACK_VALUE = 10; //глобальная переменнная, хард код

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife); //приняли что HealthBars будут равны указанным в chosenMaxLife

function attackHandler() {  // ф-я атаки монстра
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
}

attackBtn.addEventListener('click', attackHandler);