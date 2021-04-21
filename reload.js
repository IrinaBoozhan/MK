import { player1, player2 } from './createPlayers.js';
import { generateLogs } from './generateLogs.js';
import createElement from './createElement.js';
import { $arenas } from './constDOM.js';

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


export const restart = () => {
   window.addEventListener("load", () => {
      generateLogs('start', player1, player2);
   });
}