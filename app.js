// import functions and grab DOM elements
const countEl = document.getElementById('dead-enemy-count');
const spawnEl = document.getElementById('spawner');
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

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
