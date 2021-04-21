const $arenas = document.querySelector('.arenas');
const $formFight = document.querySelector('.control')
const $fightButton = $formFight.querySelector('.button');
const $chat = document.querySelector('.chat');

const HIT = {
   head: 30,
   body: 25,
   foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];

const logs = {
   start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
   end: [
      'Результат удара [playerWins]: [playerLose] - труп',
      '[playerLose] погиб(ла) от удара бойца [playerWins]',
      'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
   ],
   hit: [
      '[playerDefence] пытался(ась) сконцентрироваться, но [playerKick] разбежавшись раздробил(а) копчиком левое ухо врага.',
      '[playerDefence] расстроился(ась), как вдруг, неожиданно [playerKick] случайно раздробил(а) грудью грудину противника.',
      '[playerDefence] зажмурился(ась), а в это время [playerKick], прослезившись, раздробил(а) кулаком пах оппонента.',
      '[playerDefence] чесал(а) <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил(а) грудью левый бицепс оппонента.',
      '[playerDefence] задумался(ась), но внезапно [playerKick] случайно влепил(а) грубый удар копчиком в пояс оппонента.',
      '[playerDefence] ковырялся(ась) в зубах, но [playerKick] проснувшись влепил(а) тяжелый удар пальцем в кадык врага.',
      '[playerDefence] вспомнил(а) что-то важное, но внезапно [playerKick] зевнув, размозжил(а) открытой ладонью челюсть противника.',
      '[playerDefence] осмотрелся(ась), и в это время [playerKick] мимоходом (раздробил(а)) стопой аппендикс соперника.',
      '[playerDefence] кашлянул(а), но внезапно [playerKick] показав палец, размозжил(а) пальцем грудь соперника.',
      '[playerDefence] пытался(ась) что-то сказать, а жестокий [playerKick] проснувшись размозжил(а) копчиком левую ногу противника.',
      '[playerDefence] забылся(ась), как внезапно безумный [playerKick] со скуки, влепил(а) удар коленом в левый бок соперника.',
      '[playerDefence] поперхнулся(ась), а за это [playerKick] мимоходом (раздробил(а)) коленом висок врага.',
      '[playerDefence] расстроился(ась), а в это время наглый [playerKick] пошатнувшись размозжил(а) копчиком губы оппонента.',
      '[playerDefence] осмотрелся(ась), но внезапно [playerKick] робко размозжил(а) коленом левый глаз противника.',
      '[playerDefence] осмотрелся(ась), а [playerKick] вломил(а) дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
      '[playerDefence] ковырялся(ась) в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил(а) плечом мышцы пресса оппонента.',
      '[playerDefence] пришел(ла) в себя, и в это время [playerKick] провел(а) разбивающий удар кистью руки, пробив блок, в голень противника.',
      '[playerDefence] пошатнулся(ась), а в это время [playerKick] хихикая влепил(а) грубый удар открытой ладонью по бедрам врага.',
   ],
   defence: [
      '[playerKick] потерял(а) момент и храбрый [playerDefence] отпрыгнул(а) от удара открытой ладонью в ключицу.',
      '[playerKick] не контролировал(а) ситуацию, и потому [playerDefence] поставил(а) блок на удар пяткой в правую грудь.',
      '[playerKick] потерял(а) момент и [playerDefence] поставил(а) блок на удар коленом по селезенке.',
      '[playerKick] поскользнулся(ась) и задумчивый [playerDefence] поставил(а) блок на тычок головой в бровь.',
      '[playerKick] старался(ась) провести удар, но непобедимый [playerDefence] ушел(ла) в сторону от удара копчиком прямо в пятку.',
      '[playerKick] обманулся(ась) и жестокий [playerDefence] блокировал(а) удар стопой в солнечное сплетение.',
      '[playerKick] не думал(а) о бое, потому расстроенный [playerDefence] отпрыгнул(а) от удара кулаком куда обычно не бьют.',
      '[playerKick] обманулся(ась) и жестокий [playerDefence] блокировал(а) удар стопой в солнечное сплетение.'
   ],
   draw: 'Ничья - это тоже победа!'
};


const player1 = {
   player: 1,
   name: 'Kitana',
   hp: 100,
   img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
   weapon: ['knife', 'ax', 'sword'],
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

   $life.style.width = `${playerObj.hp}` + '%';
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
   $buttonRestart.addEventListener('click', function () {
      return window.location.reload();
   });
}


function restart() {
   window.addEventListener("load", function () {
      generateLogs('start', player1, player2);
   });
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


const attack = {};

function playerAttack() {
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


function showResult() {
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


function generateLogs(type, player1, player2, value) {
   const date = new Date;
   const time = `${date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()}`;
   switch (type) {
      case 'start':
         return $chat.insertAdjacentHTML('afterbegin', `<p>${logs[type].replace('[time]', time).replace('[player1]', player1.name).replace('[player2]',
            player2.name)}</p>`);

      case 'end':
         return $chat.insertAdjacentHTML('afterbegin', `<p>${time + ' ' + logs[type][getRandom(logs[type].length) - 1].replace('[playerWins]',
            player1.name).replace('[playerLose]', player2.name)}</p>`);

      case 'defence':
         return $chat.insertAdjacentHTML('afterbegin', `<p>${time + ' ' + logs[type][getRandom(logs[type].length) - 1].replace('[playerKick]',
            player1.name).replace('[playerDefence]', player2.name)}</p>`);

      case 'hit':
         return $chat.insertAdjacentHTML('afterbegin', `<p> ${time + ' ' + logs[type][getRandom(logs[type].length) - 1].replace('[playerKick]',
            player2.name).replace('[playerDefence]', player1.name)} -${value} [${player2.hp} / 100]</p> `);

      case 'draw':
         return $chat.insertAdjacentHTML('afterbegin', `< p > ${time + ' ' + logs[type]}</ > `);
   }
}


$formFight.addEventListener('submit', function (e) {
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


restart();

