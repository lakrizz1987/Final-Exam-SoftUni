function solve(input) {
    let text = input.shift();

    let line = input.shift();
    while (line != 'Done') {
        let array = line.split(' ');
        let command = array.shift();

        if (command == 'TakeOdd') {
            let tempArr = [];
            for (let i = 0; i < text.length; i++) {
                if (i % 2 != 0) {
                    let letter = text[i];
                    tempArr.push(letter);
                }
            }
            text = tempArr.join('');
            console.log(text);

        } else if (command == 'Cut') {
            let index = Number(array.shift());
            let length = Number(array.shift());

            let start = text.substring(0, index);
            let end = text.substring(index + length);
            text = start + end;
            console.log(text);

        } else if (command == 'Substitute') {
            let substring = array.shift();
            let replacer = array.shift();
            let isContain = false;

            while (text.includes(substring)) {
                text = text.replace(substring, replacer);
                isContain = true;
            }
            if (!isContain) {
                console.log("Nothing to replace!");
            } else {
                console.log(text);
            }
        }

        line = input.shift();
    }

    console.log(`Your password is: ${text}`);
}
solve(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
