export function renderEnemy(enemyStats) {
    //turn createElement's into something we can call
    const enemyEl = document.createElement('div');
    enemyEl.classList.add(`enemy-${enemyStats.id}`);

    const enemyUl = document.createElement('ul');

    const enemyName = document.createElement('li');
    enemyName.textContent = enemyStats.name;
    const enemyIconEl = document.createElement('li');
    const enemyIcon = document.createElement('img');
    enemyIcon.setAttribute('src', './assets/enemy-icon.png');
    enemyIcon.classList.add('icon');
    const enemyHp = document.createElement('li');
    enemyHp.textContent = enemyStats.hp;
    enemyIconEl.append(enemyIcon);
    enemyUl.append(enemyName, enemyIconEl, enemyHp);
    enemyEl.append(enemyUl);
    return enemyEl;
}
