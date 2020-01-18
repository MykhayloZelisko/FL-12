function Fighter(obj) {
    let name = obj.name;
    let damage = obj.damage;
    let hp = obj.hp;
    let agility = obj.agility;
    let win = 0;
    let loss = 0;
    let maxHP = obj.hp;

    this.getName = function() {
        return name
    }

    this.getDamage = function() {
        return damage
    }

    this.getAgility = function() {
        return agility
    }

    this.getHealth = function() {
        return hp
    }

    this.attack = function(defender) {
        const maxProb = 100;
        let probAttack = maxProb - defender.getAgility();
        if (Math.random() * maxProb < probAttack) {
            defender.dealDamage(this.getDamage());
            console.log(`${this.getName()} make 20 damage to ${defender.getName()}`)
        } else {
            console.log(`${this.getName()} attack missed`)
        }
    }

    this.logCombatHistory = function() {
        return `Name: ${name}, Wins: ${win}, Losses: ${loss}`
    }

    this.heal = function(health) {
        if (hp + health > maxHP) {
            hp = maxHP
        } else {
            hp += health
        }
    }

    this.dealDamage = function(dam) {
        if (hp - dam >= 0) {
            hp = hp - dam
        } else {
            hp = 0
        }
    }

    this.addWin = function() {
        win += 1;
    }
    
    this.addLoss = function() {
        loss += 1;
    }
}

function battle(fighter, defender) {
    let t = false;
    let revers;
    while (fighter.getHealth() > 0 && defender.getHealth() > 0) {
        t = true;
        fighter.attack(defender);
        revers = fighter;
        fighter = defender;
        defender = revers;
    }
    if (t) {
        revers = fighter;
        fighter = defender;
        defender = revers;
        defender.addLoss();
        fighter.addWin();
    } else {
        return `${fighter.getName()} is dead and can't fight`
    }
}