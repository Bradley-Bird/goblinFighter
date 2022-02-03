## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## My plan

## ENEMY IS PLACE HOLDER! FIGURE OUT WHAT ENEMY IS GOING TO BE!

--add basic html
**ImportantHTML**
--Player HP--
--Two default enemies--
--defeated enemy counter--
--challenge enemy form with name creation input and submit button--
--player icon div--
**ACP**
--js
**importantJS**
--get DOM elements--
--set state--
-playerHP
-defeated enemyHP
-default enemy[id: name: hp:]---
**ACP/BREAK**

--event listener for clicking add enemy
-generate enemy id:name:hp:(Math.random)to put into enemies[]
**ACP**

--renderEnemy--PURE/TDD
-export function renderEnemy(enemyStats) {const enemyEl/iconEl/nameEl/hpEl
-enemyEl.classlist.add('enemy')
-nameEl.textContent = enemyStats.name
//
-hpEl.id =`enemy-hp-${enemyStats.id}`
-hpEl.textContent = enemyStat.hp <= 0 ? 0 : enemyStats.hp <--if less than or zero post zero otherwise update dynamically
-iconEl.textContent = enemyStats.hp > 0 ? 'aliveicon' : 'DEADicon'
if (.enemyStats.hp < 0) {
enemyStats.classList.add('dead')---for css purposes/and to 'If dead then return' function;
//now add everything to the element
enemyEl.append(nameEl,iconEl,hpEl)
//and then update the view.
return enemyEL

**ACP**
**finished**
-displayEnemy--IMPURE appends enemy data to enemy list.!!add dynamic event listener
enemyListEL.textContent = '' reset the list to stop duplicates
//then loop
for(let enemy of enemies){
//this is looping through and using the function we just made on each enemy in array
const enemyEl = renderEnemy(enemy);
//here is where we add the dynamic eventListener
enemyEl.addeventListener('click', ()=> {
//this is the function we will write for the clicking of the newly rendered enemy element
enemyClickHandler(enemy)

**ACP/BREAK**
--click handler function -

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1. **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
