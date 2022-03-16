function solve(input) {
    let regEx = /(@(#+))(?<name>[A-Z]{1}[A-Za-z0-9]{4,}[A-Z]{1})(@(#+))/;
    let n = Number(input.shift());
    let result = [];

    for (let i = 0; i < n; i++) {
        let barcode = input[i];
        let patern = regEx.exec(barcode);
        if (patern == null) {
            console.log('Invalid barcode');
        } else {
            let number = '';
            let nameProduct = patern.groups.name;
            for (let char of nameProduct) {
                if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
                    number += char;
                }
            }
            if (number.length < 1) {
                number = '00';
            }
            console.log(`Product group: ${number}`);
        }
    }
}
solve((["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]))



solve((["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]))