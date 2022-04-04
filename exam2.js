function solve(input) {
    let regEx = /^([$%])(?<tag>[A-Z][a-z]{2,})\1: \[(?<num1>\d+)\]\|\[(?<num2>\d+)\]\|\[(?<num3>\d+)\]\|$/
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let pattern = regEx.exec(line);
        if(pattern == null){
            console.log("Valid message not found!")
        }else{
            console.log(`${pattern.groups.tag}: ${String.fromCharCode(pattern.groups.num1)+String.fromCharCode(pattern.groups.num2)+String.fromCharCode(pattern.groups.num3)}`)
        }
    }
}
solve(["4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"])
