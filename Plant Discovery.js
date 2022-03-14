function solve(input) {
    let n = Number(input.shift());
    let result = [];

    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let array = line.split('<->');
        let name = array[0];
        let rarity = Number(array[1]);

        let obj = {};

        obj['name'] = name;
        obj['rarity'] = rarity;
        obj['rate'] = [];

        result.push(obj);
    }

    let line = input.shift();
    while (line != 'Exhibition') {

        let array = line.split(': ')
        let command = array.shift();
        let isInvalid = true;
        if (command == 'Rate') {
            let newArr = array.shift().split(' - ');

            let plant = newArr[0];
            let rating = Number(newArr[1]);

            for (const obj of result) {
                if (obj.name == plant) {
                    obj.rate.push(rating);
                    isInvalid = false;
                }
            }

            if (isInvalid) {
                console.log('error');
            }

        } else if (command == 'Update') {
            let newArr = array.shift().split(' - ');

            let plant = newArr[0];
            let newRarity = Number(newArr[1]);

            for (const obj of result) {
                if (obj.name == plant) {
                    obj.rarity = newRarity;
                    isInvalid = false;
                }
            }

            if (isInvalid) {
                console.log('error');
            }

        } else if (command == 'Reset') {
            let newArr = array.shift().split(' - ');

            let plant = newArr[0];

            for (const obj of result) {
                if (obj.name == plant) {
                    obj.rate = [];
                    isInvalid = false;
                }
            }

            if (isInvalid) {
                console.log('error');
            }

        }

        line = input.shift();
    }

    console.log('Plants for the exhibition:')

    for (const obj of result) { 
        let sum = 0;
        if (obj.rate.length > 0) {
            for (const num of obj.rate) {
                sum += num;
            }
            console.log(`- ${obj.name}; Rarity: ${obj.rarity}; Rating: ${(sum / obj.rate.length).toFixed(2)}`);
        } else {
            console.log(`- ${obj.name}; Rarity: ${obj.rarity}; Rating: ${(sum).toFixed(2)}`);
        }

    }

}

solve(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])

console.log(`----------`)

solve((["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])
)