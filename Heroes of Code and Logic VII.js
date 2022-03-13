function solve(input) {
    let n = Number(input.shift());
    let result = [];

    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let array = line.split(' ');
        let name = array[0];
        let health = Number(array[1]);
        let mana = Number(array[2]);

        let obj = { name, health, mana };

        result.push(obj);
    }

    let line = input.shift();
    while (line != 'End') {
        let array = line.split(' - ');

        let command = array.shift();
        if (command == 'CastSpell') {
            let heroName = array.shift();
            let manaNeeded = Number(array.shift());
            let spellName = array.shift();
            for (let obj of result) {
                if (obj.name == heroName) {
                    if (obj.mana >= manaNeeded) {
                        obj.mana -= manaNeeded;
                        console.log(`${heroName} has successfully cast ${spellName} and now has ${obj.mana} MP!`);
                    } else {
                        console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                    }
                }
            }

        } else if (command == 'TakeDamage') {
            let heroName = array.shift();
            let damage = Number(array.shift());
            let attacker = array.shift();
            for (let obj of result) {
                if (obj.name == heroName) {
                    obj.health -= damage;
                    if (obj.health > 0) {
                        console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${obj.health} HP left!`);
                    } else {
                        console.log(`${heroName} has been killed by ${attacker}!`);
                        let index = result.indexOf(obj);
                        result.splice(index, 1);
                    }
                }
            }

        } else if (command == 'Recharge') {
            let heroName = array.shift();
            let amount = Number(array.shift());
            for (let obj of result) {
                if (obj.name == heroName) {
                    let newMana = obj.mana + amount;
                    if (newMana > 200) {
                        console.log(`${heroName} recharged for ${200 - obj.mana} MP!`);
                        obj.mana = 200;
                    } else {
                        console.log(`${heroName} recharged for ${amount} MP!`);
                        obj.mana = newMana;
                    }
                }
            }

        } else if (command == 'Heal') {
            let heroName = array.shift();
            let amount = Number(array.shift());
            for (let obj of result) {
                if (obj.name == heroName) {
                    let newHealth = obj.health + amount;
                    if (newHealth > 100) {
                        console.log(`${heroName} healed for ${100 - obj.health} HP!`);
                        obj.health = 100;
                    } else {
                        console.log(`${heroName} healed for ${amount} HP!`);
                        obj.health = newHealth;
                    }
                }
            }
        }

        line = input.shift();
    }

    result.forEach(obj => {
        console.log(obj.name);
        console.log(`  HP: ${obj.health}`);
        console.log(`  MP: ${obj.mana}`);
    })
}

solve(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'])