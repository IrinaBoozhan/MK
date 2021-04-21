export function changeHP(value) {
   this.hp -= value;
   if (this.hp <= 0) {
      this.hp = 0;
   }
   return this.hp;
}

export function elHP() {
   return document.querySelector('.player' + this.player + ' .life');
}

export function renderHP() {
   return this.elHP().style.width = this.hp + '%';
}
