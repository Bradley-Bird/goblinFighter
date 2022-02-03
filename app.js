// import functions and grab DOM elements
import { renderEnemy } from './utils.js';
const form = document.getElementById('enemy-name-form');
const countEl = document.getElementById('dead-enemy-count');
const spawnEl = document.getElementById('spawner');
const playerHpEl = document.getElementById('player-hp');
const heroModelEl = document.getElementById('hero-model');
const enemyEl = document.getElementById('enemy');
const enemyIcon = document.getElementById('icon');
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
    console.log(newEnemy, enemies, 'check');
    displayEnemy();
    //display--cant do till function is written
});
function displayEnemy() {
    enemyEl.textContent = '';
    for (let enemy of enemies) {
        const enemyCard = renderEnemy(enemy);

        enemyCard.addEventListener('click', () => {
            enemyClick(enemy);
        });
        enemyEl.append(enemyCard);
    }
}
displayEnemy();

function enemyClick() {}
// get user input
// use user input to update state
// update DOM to reflect the new state
