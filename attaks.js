import getRandom from './random.js';
import { HIT, ATTACK } from './createPlayers.js';
import { $formFight } from './constDOM.js';


export const enemyAttack = () => {

   const hit = ATTACK[getRandom(3) - 1];
   const defence = ATTACK[getRandom(3) - 1];
   return {
      hit,
      value: getRandom(HIT[hit]),
      defence,
   }
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