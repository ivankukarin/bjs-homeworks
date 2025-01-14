"use strict";

//////// Задача 1

class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = +attack;
    this.durability = +durability;
    this.range = +range;
    this.initialDurability = +durability;
  }

  takeDamage(damage) {
    let damageDelta = this.durability - damage;
    if (damageDelta >= 0) {
      this.durability = damageDelta;
    } else {
      this.durability = 0;
    }
  }

  getDamage() {
    if (this.durability >= this.initialDurability * 0.3) {
      return this.attack;
    } else if (this.durability === 0) {
      return 0;
    } else {
      return this.attack / 2;
    }
  }

  isBroken() {
    return this.durability === 0;
  }
}

// const sword = new Weapon ("Меч", 24, 500, 1);

// sword.takeDamage(5);
// console.log(sword.durability);

// sword.takeDamage(550);
// console.log(sword.durability);

// const arm = new Weapon ("Рука", 1, Infinity, 1 );
// arm.takeDamage(20);
// console.log(arm.durability);

// const bow = new Weapon ("Лук", 10, 200, 3);
// bow.takeDamage(20);
// console.log(bow.durability);

// bow.takeDamage(200);
// console.log(bow.durability);

// const knife = new Weapon ("Нож", 5, 300, 1);
// const cane = new Weapon ("Посох", 8, 300, 2);

// const longBow = new Weapon ("Длинный Лук", 5, bow.durability, 1);
// const axe = new Weapon ("Секира", 8, 300, sword.range);
// const caneStorm = new Weapon("Посх Бури", 10, cane.durability,);

/////////////// Задача 2

class Sword extends Weapon {
  constructor(name = "Меч", attack = 25, durability = 500, range = 555) {
    super(name, attack, durability, range);
  }
}

const sword = new Sword();
console.log(sword);

class Arm extends Weapon {
  constructor(name = "Рука", attack = 1, durability = Infinity, range = 1) {
    super(name, attack, durability, range);
  }
}

const arm = new Arm();
console.log(arm);

class Bow extends Weapon {
  constructor(name = "Лук", attack = 10, durability = 200, range = 3) {
    super(name, attack, durability, range);
  }
}

const bow = new Bow();
console.log(bow);

class Knife extends Weapon {
  constructor(name = "Нож", attack = 5, durability = 300, range = 1) {
    super(name, attack, durability, range);
  }
}

const knife = new Knife();
console.log(knife);

class Cane extends Weapon {
  constructor(name = "Посох", attack = 8, durability = 300, range = 2) {
    super(name, attack, durability, range);
  }
}

const cane = new Cane();
console.log(cane);

/// Усиленное оружие

class LongBow extends Bow {
  constructor(name = "Длинный Лук", attack = 15, durability, range = 4) {
    super(name, attack, durability, range);
  }
}

const longBow = new LongBow();
console.log(
  `${longBow.name} range is ${longBow.range} and longBow durability is ${
    longBow.durability
  }`
);

class Axe extends Sword {
  constructor(name = "Секира", attack = 27, durability = 800, range) {
    super(name, attack, durability, range);
  }
}

const axe = new Axe();
console.log(`${axe.name} атака ${axe.attack} и дальность ${axe.range}`);

class StormCane extends Cane {
  constructor(name = "Посох Бури", attack = 10, durability, range = 3) {
    super(name, attack, durability, range);
  }
}

const caneStorm = new Cane();
console.log(caneStorm);

///////////// Задача 3

class StudentLog {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    if (!(grade === NaN) & (grade % 1 === 0) & (1 <= +grade <= 5)) {
      if (this.hasOwnProperty(subject)) {
        this[subject].push(grade);
      } else {
        this[subject] = new Array();
        this[subject].push(grade);
      }
    } else {
      console.log(
        `Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`
      );
    }

    return this[subject].length;
  }

  getAverageBySubject(subject) {
    let sum = 0;
    if (this[subject]) {
      for (let i = 0; i < this[subject].length; i++) {
        sum += this[subject][i];
      }
      return sum / this[subject].length;
    } else {
      return 0;
    }
  }

  getTotalAverage() {
    function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
    let numGrade = 0;
    let sumGrade = 0;

    for (let subject in this) {
      if (Array.isArray(this[subject])) {
        numGrade += this[subject].length;
        for (let i = 0; i < this[subject].length; i++) {
          sumGrade += this[subject][i];
        }
      }
    }
    return sumGrade / numGrade;
  }
}

const log = new StudentLog("Олег Никифоров");

log.addGrade(2, "algebra");
log.addGrade(4, "algebra");
log.addGrade(5, "geometry");
log.addGrade(4, "geometry");

console.log(log);
console.log(log.getAverageBySubject("geometry")); // 4.5
console.log(log.getAverageBySubject("algebra")); // 3
console.log(log.getAverageBySubject("math")); // 0

console.log(log.getTotalAverage());
