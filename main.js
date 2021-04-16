const $arenas = document.querySelector('.arenas');

const $formFight = document.querySelector('.control')
const $fightButton = $formFight.querySelector('.button');


const HIT = {
   head: 30,
   body: 25,
   foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];

const player1 = {
   player: 1,
   name: 'Kitana',
   hp: 100,
   img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
   weapon: ['knife', 'ax', 'sword'],
   attack: function (name) {
      console.log(name + ' ' + 'Fight...')
   },
   changeHP,
   elHP,
   renderHP
};


const player2 = {
   player: 2,
   name: 'Sonya',
   hp: 100,
   img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
   weapon: ['knife', 'ax', 'sword'],
   attack: function (name) {
      console.log(name + ' ' + 'Fight...')
   },
   changeHP,
   elHP,
   renderHP
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


function playerWins(name) {
   const $loseTitle = createElement('div', 'loseTitle');
   if (name) {
      $loseTitle.innerText = name + ' wines';
   }
   else {
      $loseTitle.innerText = 'Draw!';
   }
   return $loseTitle;
}


// $randomButton.addEventListener('click', function () {
// player1.changeHP();
// player2.changeHP();
// player1.renderHP();
// player2.renderHP();

// if (player1.hp === 0 || player2.hp === 0) {
// $randomButton.disabled = true;
// createReloadButton();
// }

// if (player1.hp === 0 && player1.hp < player2.hp) {
// $arenas.appendChild(playerWins(player2.name))
// }
// else if (player2.hp === 0 && player2.hp < player1.hp) {
// $arenas.appendChild(playerWins(player1.name))
// }
// else if (player2.hp === 0 && player2.hp === 0) {
// $arenas.appendChild(playerWins())
// }

// })


$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

function getRandom(num) {
   return Math.ceil(Math.random() * num);
}



function changeHP(value) {
   this.hp -= value;

   if (this.hp <= 0) {
      this.hp = 0;

   }
   return this.hp;
}


function elHP() {
   return document.querySelector('.player' + this.player + ' .life');
}


function renderHP() {
   return this.elHP().style.width = this.hp + '%';
}



function createReloadButton() {
   const $reloadWrap = createElement('div', 'reloadWrap');
   const $buttonRestart = createElement('div', 'button');
   $arenas.appendChild($reloadWrap);
   $reloadWrap.appendChild($buttonRestart);
   $buttonRestart.innerText = 'Restart';
   $buttonRestart.addEventListener('click', function () { return window.location.reload() });
}

function enemyAttack() {
   const hit = ATTACK[getRandom(3) - 1];
   const defence = ATTACK[getRandom(3) - 1];
   return {
      hit,
      value: getRandom(HIT[hit]),
      defence,
   }

}



$formFight.addEventListener('submit', function (e) {
   e.preventDefault();

   const enemy = enemyAttack();

   const attack = {};
   for (let item of $formFight) {
      if (item.checked && item.name === 'hit') {
         attack.hit = item.value;
         attack.hit === enemy.defence ? attack.value = 0 : attack.value = getRandom(HIT[item.value]);
      }
      if (item.checked && item.name === 'defence') {
         attack.defence = item.value;
         attack.defence === enemy.hit ? enemy.value = 0 : enemy.value;
      }
      item.checked = false;
   }
   console.log('###:a', attack);
   console.log('###:e', enemy);

   player1.changeHP(enemy.value);
   player2.changeHP(attack.value);

   console.log(player1.hp);
   console.log(player2.hp);

   player1.renderHP();
   player2.renderHP();


   if (player1.hp === 0 || player2.hp === 0) {
      $fightButton.disabled = true;
      createReloadButton();
   }

   if (player1.hp === 0 && player1.hp < player2.hp) {
      $arenas.appendChild(playerWins(player2.name))
   }
   else if (player2.hp === 0 && player2.hp < player1.hp) {
      $arenas.appendChild(playerWins(player1.name))
   }
   else if (player2.hp === 0 && player2.hp === 0) {
      $arenas.appendChild(playerWins())
   }


})