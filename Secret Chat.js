function solve(input) {
    let text = input.shift();

    let line = input.shift();
    while (line != 'Reveal') {

        let array = line.split(':|:');
        let command = array.shift();

        if (command == 'InsertSpace') {
            let index = Number(array.shift());
            let start = text.substring(0, index);
            let end = text.substring(index);
            text = start + ' ' + end;
            console.log(text)


        } else if (command == 'Reverse') {
            let substring = array.shift();
            if (text.includes(substring)) {
                let startIndex = text.indexOf(substring);
                let endIndex = startIndex + substring.length;
                let word = text.substring(startIndex, endIndex);

                let strat = text.substring(0, startIndex);
                let end = text.substring(endIndex);
                text = strat + end;

                word = word.split('').reverse().join('');
                text = text + word;
                console.log(text)

            }else{
                console.log('error')
            }
        } else if (command == 'ChangeAll') {
            let substring = array.shift();
            let replacer = array.shift();
            while (text.includes(substring)) {
                text = text.replace(substring, replacer);
            }
            console.log(text)

        }

        line = input.shift();
    }

    console.log(`You have a new text message: ${text}`)
}
solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])

console.log(`--------`)

solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])  