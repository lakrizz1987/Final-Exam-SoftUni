function solve(input) {
    let result = {};
    let text = input.shift();
    let arr = text.split(' | ')

    for (let line of arr) {
        let [word, curentDefenition] = line.split(': ')
        if (!result.hasOwnProperty(word)) {
            result[word] = [curentDefenition];
        } else {
            result[word].push(curentDefenition);
        }
    }

    let words = input.shift().split(' | ');

    let command = input.shift();
    if (command == 'Test') {
        for (let word of words) {
            if (result.hasOwnProperty(word)) {
                console.log(`${word}:`);
                result[word].forEach(element => {
                    console.log(` -${element}`);
                });
            }
        }

    } else {
        console.log(Object.keys(result).join(' '));
    }
}
solve(["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
    "bit | code | tackle",
    "Test"])



