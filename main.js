import { player1, player2 } from './createPlayers.js';
import createElement from './createElement.js';
import { $arenas, $formFight } from './constDOM.js';
import { showResult } from './wines.js';
import { restart } from './reload.js';
import { generateLogs } from './generateLogs.js';
import { enemyAttack, playerAttack } from './attaks.js';


const createPlayer = (playerObj) => {

   const $player = createElement('div', 'player' + playerObj.player);
   const $progressbar = createElement('div', 'progressbar');
   const $life = createElement('div', 'life');
   const $name = createElement('div', 'name');
   const $character = createElement('div', 'character');
   const $img = createElement('img');

   $player.appendChild($progressbar);
   $progressbar.appendChild($life);
   $progressbar.appendChild($name);
   $player.appendChild($character);
   $character.appendChild($img);

   $life.style.width = playerObj.hp + '%';
   $name.innerText = playerObj.name;
   $img.src = playerObj.img;

   return $player;
};


$formFight.addEventListener('submit', (e) => {
   e.preventDefault();
   const enemy = enemyAttack();
   const player = playerAttack();

   if (player.defence !== enemy.hit) {
      player1.changeHP(enemy.value);
      player1.renderHP();
      generateLogs('hit', player2, player1, enemy.value);
   } else {
      generateLogs('defence', player2, player1);
   }

   if (player.hit !== enemy.defence) {
      player2.changeHP(player.value);
      player2.renderHP();
      generateLogs('hit', player1, player2, player.value);
   } else {
      generateLogs('defence', player2, player1);
   }

   showResult();

   console.log(player1.hp);
   console.log(player2.hp);

})
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));


restart();
