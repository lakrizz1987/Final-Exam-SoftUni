function solve(input) {
    let regEx = /(=|\/)(?<name>[A-Z][A-Za-z]{2,})\1/g
    let result = [];

    let pattern = regEx.exec(input)

    while (pattern != null) {
        result.push(pattern.groups.name)
        pattern = regEx.exec(input);
    }
    let points = 0;
    if (result.length > 0) {
        for (let element of result) {
            points += element.length;
        }
    }

    console.log(`Destinations: ${result.join(', ')}`)
    console.log(`Travel Points: ${points}`)
}
solve("=Hawai=/C1yprus/=Invalid/invalid==i5valid=/I5valid/=i=")