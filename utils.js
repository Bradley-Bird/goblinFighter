export function renderEnemy(enemyStats) {
    //turn createElement's into something we can call
    const enemyEl = document.createElement('div');
    const enemyName = document.createElement('li');
    const enemyUl = document.createElement('ul');
    const enemyIconEl = document.createElement('li');
    const enemyIcon = document.createElement('img');
    const enemyHp = document.createElement('li');
    const enemyHpEl = document.createElement('span');

    enemyEl.classList.add(`enemy-${enemyStats.id}`);

    enemyName.textContent = enemyStats.name;
    const alive = enemyStats.hp > 0 ? './assets/enemy-icon.png' : './assets/dead-icon.png';
    enemyIcon.setAttribute('src', alive);

    enemyIcon.classList.add('icon');
    //make id to grab in the event handler
    // enemyHp.id = `enemy-hp-${enemyStats.id}`;
    enemyHp.textContent = 'hp:';
    enemyHpEl.textContent = enemyStats.hp < 0 ? 0 : enemyStats.hp;

    enemyIconEl.append(enemyIcon);
    enemyHp.append(enemyHpEl);
    enemyUl.append(enemyName, enemyIconEl, enemyHp);
    enemyEl.append(enemyUl);
    return enemyEl;
}
