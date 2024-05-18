class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('The name must be a string of 2 to 10 characters');
    }

    if (!types.includes(type)) {
      throw new Error('Incorrect character type');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    switch (type) {
      case 'Bowman':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Swordsman':
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Magician':
        this.attack = 10;
        this.defence = 40;
        break;
      case 'Undead':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Zombie':
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Daemon':
        this.attack = 10;
        this.defence = 40;
        break;
    }
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Cannot level up a character with 0 health');
    }

    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health === 0) {
      throw new Error('Cannot damage a character with 0 health');
    }

    this.health -= points * (1 - this.defence / 100);
    this.health = Math.max(this.health, 0);
  }
}

export default Character;
