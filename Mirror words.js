function solve(input) {
    let regEx1 = /([#@])(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g
    //let regEx2 = /([#@])\1(?<word1>[A-Za-z]{3,})\1(?<word2>[A-Za-z]{3,})\1\1/g

    let text = input[0];
    let result = [];

    let pattern1 = regEx1.exec(text);

    while (pattern1 != null) {

        let word1 = pattern1.groups.word1;
        let word2 = pattern1.groups.word2;

        let array = [word1, word2];
        result.push(array);

        pattern1 = regEx1.exec(text);
    }

    //let pattern2 = regEx2.exec(text);

    /*while (pattern2 != null) {

        let word1 = pattern2.groups.word1;
        let word2 = pattern2.groups.word2;

        let array = [word1, word2];
        result.push(array);

        pattern2 = regEx2.exec(text);
    }*/

    if (result.length < 1) {
        console.log("No word pairs found!");
        console.log("No mirror words!");
    } else {
        console.log(`${result.length} word pairs found!`);

        let wordsArr = [];
        for (let line of result) {
            let word1 = line[0];
            let word2 = line[1];
            let word2Rev = word2.split('').reverse().join('')
            if (word1 === word2Rev) {
                let buff = word1 + ' <=> ' + word2;
                wordsArr.push(buff);
            }
        }

        if(wordsArr.length < 1){
            console.log("No mirror words!");
        }else{
            console.log('The mirror words are:')
            console.log(wordsArr.join(', '))
        }
    }

}
solve([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ]
)