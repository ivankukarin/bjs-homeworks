'use strict'

//////// Задача 1

class Weapon {
    constructor(name, attack, durability, range){
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
        } else { this.durability = 0 };
    }

    getDamage() {
        if (this.durability >= (this.initialDurability * 0.3) ) {
            return(this.attack);
        } else if ( this.durability === 0 ) {
                return 0 ;
        } else {
            return ( this.attack/(2) )
        }
    }

    isBroken() {
        return (this.durability === 0);
    };
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
// const axe = new Weapon ("Секкира", 8, 300, sword.range);
// const caneStorm = new Weapon("Посх Бури", 10, cane.durability,);

/////////////// Задача 2

class Sword extends Weapon {
    constructor () {
        this.name = 'Меч';
        this.attack = 25;
        this.durability = 500;
        this.range = 1;
    };
}

const sword = new Sword();
console.log (sword);

class Arm extends Weapon {
    constructor () {
        let name = 'Рука';
        let attack = 1;
        let durability = Infinity;
        let range = 1;
    };
}

const arm = new Arm();
console.log (arm);

class Bow2 extends Weapon {
    constructor () {
        this.name = 'Лук';
        this.attack = 10;
        this.durability = 200;
        this.range = 3;
    };
}

const bow = new Bow();
console.log (bow);

class Knife extends Weapon {
    constructor () {
        let name = 'Нож';
        let attack = 5;
        let durability = 300;
        let range = 1;
    };
}

const knife = new Knife();
console.log (knife);

class Cane extends Weapon {
    constructor () {
        let name = 'Посох';
        let attack = 8;
        let durability = 300;
        let range = 2;
    };
}

const cane = new Cane();
console.log (cane);