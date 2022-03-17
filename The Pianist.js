function solve(input) {
    let obj = {};
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let arr = input.shift().split('|');
        obj[arr[0]] = {};
        obj[arr[0]][arr[1]] = arr[2];
    }

    let line = input.shift();
    while (line != 'Stop') {
        let newArr = line.split('|');
        let command = newArr.shift();
        if (command == 'Add') {
            let [piece, composer, key] = newArr;
            if (obj.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`)
            } else {
                obj[piece] = {};
                obj[piece][composer] = key;
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command == 'Remove') {
            let piece = newArr.shift();
            if (obj.hasOwnProperty(piece)) {
                delete obj[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command == 'ChangeKey') {
            let [piece, newKey] = newArr;
            if (obj.hasOwnProperty(piece)) {
                let name = Object.keys(obj[piece])[0];
                obj[piece][name] = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`)
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }

        line = input.shift();
    }

    //"{Piece} -> Composer: {composer}, Key: {key}"

    for (let piece in obj) {
        let composer = Object.entries(obj[piece])
        console.log(`${piece} -> Composer: ${composer[0][0]}, Key: ${composer[0][1]}`)
    }

}

solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]
)