import { getRandom, createElement } from '/../utils/index.js';
import { HIT, ATTACK, LOGS } from '/../constants/index.js';
import PLayer from '/../Player/index.js';

export const enemyAttack = () => {

   const hit = ATTACK[getRandom(3) - 1];
   const defence = ATTACK[getRandom(3) - 1];
   return {
      hit,
      value: getRandom(HIT[hit]),
      defence,
   }
}


export function createReloadButton() {

   const $reloadWrap = createElement('div', 'reloadWrap');
   const $buttonRestart = createElement('div', 'button');
   $arenas.appendChild($reloadWrap);
   $reloadWrap.appendChild($buttonRestart);
   $buttonRestart.innerText = 'Restart';
   $buttonRestart.addEventListener('click', () => {
      return window.location.reload();
   });
}


export function generateLogs(type, { name } = {}, { name: playerName2 } = {}, value) {
   const $chat = document.querySelector('.chat');
   let text = '';
   const date = new Date;
   const time = `${date.getHours() + ':' + date.getMinutes() +
      ':' + date.getSeconds()}`;
   switch (type) {
      case 'start':
         text = $chat.insertAdjacentHTML('afterbegin', `<p>${LOGS[type].replace('[time]', time).replace('[player1]', name).replace('[player2]',
            playerName2)}</p>`);
         break;

      case 'end':
         text = $chat.insertAdjacentHTML('afterbegin', `<p>${time + ' ' + LOGS[type][getRandom(LOGS[type].length) - 1].replace('[playerWins]',
            name).replace('[playerLose]', playerName2)}</p>`);
         break;

      case 'defence':
         text = $chat.insertAdjacentHTML('afterbegin', `<p>${time + ' ' + LOGS[type][getRandom(LOGS[type].length) - 1].replace('[playerKick]',
            name).replace('[playerDefence]', playerName2)}</p>`);
         break;

      case 'hit':
         text = $chat.insertAdjacentHTML('afterbegin', `<p> ${time + ' ' + LOGS[type][getRandom(LOGS[type].length) - 1].replace('[playerKick]',
            playerName2).replace('[playerDefence]', name)} -${value} [${player2.hp} / 100]</p> `);
         break;

      case 'draw':
         text = $chat.insertAdjacentHTML('afterbegin', `<p p > ${time + ' ' + LOGS[type]}</p> `);
         break;
      default:
         text = 'WTF?!'
   }
   return (text);
}


export const playerAttack = () => {
   const attack = {};
   for (let item of $formFight) {
      if (item.checked && item.name === 'hit') {
         attack.value = getRandom(HIT[item.value]);
         attack.hit = item.value;
      }
      if (item.checked && item.name === 'defence') {
         attack.defence = item.value;
      }
      item.checked = false;
   }
   return attack;
}


export const restart = (player1, player2) => {
   window.addEventListener("load", () => {
      generateLogs('start', player1, player2);
   });
}


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


