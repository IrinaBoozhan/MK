import { changeHP, elHP, renderHP } from './HP.js';

export const player1 = {
   player: 1,
   name: 'Kitana',
   hp: 100,
   img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
   weapon: ['knife', 'ax', 'sword'],
   changeHP,
   elHP,
   renderHP
};


export const player2 = {
   player: 2,
   name: 'Sonya',
   hp: 100,
   img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
   weapon: ['knife', 'ax', 'sword'],
   changeHP,
   elHP,
   renderHP
};

export const HIT = {
   head: 30,
   body: 25,
   foot: 20,
}

export const ATTACK = ['head', 'body', 'foot'];