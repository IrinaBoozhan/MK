const player1 = {
   name: 'Kitana',
   hp: 80,
   img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
   weapon: ['knife', 'ax', 'sword'],
   attack: function () {
      console.log(player1.name + ' ' + 'Fight...')
   },

};
player1.attack();

const player2 = {
   name: 'Sonya',
   hp: 90,
   img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
   weapon: ['knife', 'ax', 'sword'],
   attack: function () {
      console.log(player2.name + ' ' + 'Fight...')
   }
};
player2.attack();


function createPlayer(player, heroi) {

   const $arenas = document.querySelector('.arenas');
   const $player = document.createElement('div');
   $arenas.appendChild($player);
   $player.classList.add(player);

   const $progressbar = document.createElement('div');
   $player.appendChild($progressbar);
   $progressbar.classList.add('progressbar');

   const $life = document.createElement('div');
   $progressbar.appendChild($life);
   $life.classList.add('life');
   $life.innerText = heroi.hp;

   const $name = document.createElement('div');
   $progressbar.appendChild($name);
   $name.classList.add('name');
   $name.innerText = heroi.name;

   const $character = document.createElement('div');
   $player.appendChild($character);
   $character.classList.add('character');

   const $img = document.createElement('img');
   $character.appendChild($img);
   $img.src = heroi.img;
};

createPlayer('player1', player1);
createPlayer('player2', player2);
