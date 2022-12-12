/* eslint-disable linebreak-style */
export default class Character {
  constructor(name, type) {
    const roles = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (typeof name === 'string' && (name.length <= 10) && (name.length >= 2)) {
      this.name = name;
    } else {
      throw new Error('Некорректное имя');
    }
    if (roles.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Некорректный тип');
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Персонаж мертв');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Персонаж мертв');
    }
  }
}
