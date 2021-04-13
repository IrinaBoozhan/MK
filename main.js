const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');


const player1 = {
   player: 1,
   name: 'Kitana',
   hp: 100,
   img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
   weapon: ['knife', 'ax', 'sword'],
   attack: function (name) {
      console.log(name + ' ' + 'Fight...')
   },
};


const player2 = {
   player: 2,
   name: 'Sonya',
   hp: 100,
   img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
   weapon: ['knife', 'ax', 'sword'],
   attack: function (name) {
      console.log(name + ' ' + 'Fight...')
   }
};


function createElement(tag, className) {
   const $tag = document.createElement(tag);
   if (className) {
      $tag.classList.add(className);
   }
   return $tag;
}


function createPlayer(playerObj) {
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


function changeHP(player) {
   const $playerLife = document.querySelector('.player' + player.player + ' .life');

   $playerLife.style.width = player.hp + '%';
   if (player.hp > 0) { player.hp -= Math.ceil(Math.random() * 20) }
   else {
      $arenas.appendChild(playerLose(player.name));
      $playerLife.style.width = 0;
      $randomButton.disabled = true;
   }
}

$randomButton.addEventListener('click', function () {
   changeHP(player1);
   changeHP(player2);
})


function playerLose(name) {
   const $loseTitle = createElement('div', 'loseTitle');

   $loseTitle.innerText = name + ' lose';

   if (player1.name === name) { $loseTitle.innerText = `${player2.name}` + ' wines!' }
   else { $loseTitle.innerText = `${player1.name}` + ' wines!' }

   return $loseTitle;
}


$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));


