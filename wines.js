import createElement from './createElement.js';
import { generateLogs } from './generateLogs.js';
import { player1, player2 } from './createPlayers.js';
import { createReloadButton } from './reload.js';
import { $arenas, $formFight } from './constDOM.js';

export const playerWins = (name) => {
   const $loseTitle = createElement('div', 'loseTitle');
   if (name) {
      $loseTitle.innerText = name + ' wines';
   }
   else {
      $loseTitle.innerText = 'Draw!';
   }
   return $loseTitle;
}

export const showResult = () => {
   const $fightButton = $formFight.querySelector('.button');
   if (player1.hp === 0 || player2.hp === 0) {
      $fightButton.disabled = true;
      createReloadButton();
   }
   if (player1.hp === 0 && player1.hp < player2.hp) {
      $arenas.appendChild(playerWins(player2.name));
      generateLogs('end', player2, player1);
   }
   else if (player2.hp === 0 && player2.hp < player1.hp) {
      $arenas.appendChild(playerWins(player1.name));
      generateLogs('end', player1, player2);
   }
   else if (player2.hp === 0 && player2.hp === 0) {
      $arenas.appendChild(playerWins());
      generateLogs('draw');
   }
}