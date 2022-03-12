function solve(input){
    let result = [];
    let totalCalories = 0
    let days = 0;
    let pattern  = /([|#])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g
    let regex = pattern.exec(input);
    while(regex){
        result.push({name:regex[2],date:regex[3],cal:regex[4]})
        totalCalories+= Number(regex[4])
        regex = pattern.exec(input)
    }
    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);
    for (const line of result) {
        console.log(`Item: ${line.name}, Best before: ${line.date}, Nutrition: ${line.cal}`)
    }
}
solve([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ])