function solve(input) {
    let meassage = input.shift();

    let line = input.shift();
    while (line != 'Decode') {

        let array = line.split('|');
        let command = array.shift();

        if (command === 'Move') {
            let n = Number(array.shift());
            let strat = meassage.substring(0, n);
            let end = meassage.substring(n);
            meassage = end + strat;

        } else if (command === 'Insert') {
            let index = Number(array.shift());
            let value = array.shift();

            let strat = meassage.substring(0, index);
            let end = meassage.substring(index);
            meassage = strat + value + end;

        } else if (command == 'ChangeAll') {
            let char = array.shift();
            let replacement = array.shift();

            while (meassage.includes(char)) {
                meassage = meassage.replace(char, replacement)
            }
        }

        line = input.shift();
    }

    console.log(`The decrypted message is: ${meassage}`)
}
solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]
)