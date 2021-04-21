import { logs } from './logs.js';
import getRandom from './random.js';

export const generateLogs = (type, player1, player2, value) => {
   const $chat = document.querySelector('.chat');
   let text = '';
   const date = new Date;
   const time = `${date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()}`;
   switch (type) {
      case 'start':
         text = $chat.insertAdjacentHTML('afterbegin', `<p>${logs[type].replace('[time]', time).replace('[player1]', player1.name).replace('[player2]',
            player2.name)}</p>`);
         break;

      case 'end':
         text = $chat.insertAdjacentHTML('afterbegin', `<p>${time + ' ' + logs[type][getRandom(logs[type].length) - 1].replace('[playerWins]',
            player1.name).replace('[playerLose]', player2.name)}</p>`);
         break;

      case 'defence':
         text = $chat.insertAdjacentHTML('afterbegin', `<p>${time + ' ' + logs[type][getRandom(logs[type].length) - 1].replace('[playerKick]',
            player1.name).replace('[playerDefence]', player2.name)}</p>`);
         break;

      case 'hit':
         text = $chat.insertAdjacentHTML('afterbegin', `<p> ${time + ' ' + logs[type][getRandom(logs[type].length) - 1].replace('[playerKick]',
            player2.name).replace('[playerDefence]', player1.name)} -${value} [${player2.hp} / 100]</p> `);
         break;

      case 'draw':
         text = $chat.insertAdjacentHTML('afterbegin', `<p p > ${time + ' ' + logs[type]}</p> `);
         break;
      default:
         text = 'WTF?!'
   }
   return (text);
}