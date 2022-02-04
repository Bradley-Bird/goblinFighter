// import functions and grab DOM elements
import { renderEnemy } from './utils.js';
const form = document.getElementById('enemy-name-form');
const countEl = document.getElementById('dead-enemy-count');
const playerHpEl = document.getElementById('player-hp');
const heroModelEl = document.getElementById('hero-model');
const enemyEl = document.getElementById('enemy');

// let state
let deadEnemyCount = 0;
let playerHP = 10;
let enemies = [
    { id: 1, name: 'Sephiroth', hp: 10000 },
    { id: 2, name: 'Cactaur', hp: 1 },
];
let enemyId = 3;

// set event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //grab the form
    const data = new FormData(form);
    //use the form variable to get the user input
    const enemyName = data.get('enemy-name');
    //make enemy object with form data
    //increment id
    const newEnemy = {
        id: enemyId++,
        name: enemyName,
        hp: Math.ceil(Math.random() * 7),
    };
    //add to enemy array
    enemies.push(newEnemy);
    // console.log(newEnemy, enemies, 'check');
    displayEnemy();
    //display--cant do till function is written
});
function displayEnemy() {
    enemyEl.textContent = '';
    for (let enemy of enemies) {
        const enemyCard = renderEnemy(enemy);
        enemyCard.addEventListener('mousedown', () => {
            heroModelEl.classList.add('hero-img-attack');
        });
        enemyCard.addEventListener('mouseup', () => {
            heroModelEl.classList.remove('hero-img-attack');
        });
        enemyCard.addEventListener('click', () => {
            enemyClick(enemy);
        });
        enemyEl.append(enemyCard);
    }
}
displayEnemy();

function enemyClick(enemy) {
    if (enemy.hp <= 0) return;
    const playerHit = Math.ceil(Math.random() * 10);
    const enemyHit = Math.ceil(Math.random() * 10);
    // alert('click', playerHit);
    if (playerHit > 5) {
        alert(`You hit ${enemy.name}!`);
        enemy.hp--;
    } else {
        alert('Miss!');
    }
    if (enemy.hp === 0) deadEnemyCount++, (countEl.textContent = deadEnemyCount);

    if (enemyHit > 4) {
        alert(`You've been hit!`);
        playerHP--;
    } else {
        alert('Miss!', enemyHit);
    }
    playerHpEl.textContent = playerHP;

    displayEnemy();
    if (playerHP === 0) {
        alert('you have died');
    }
}
