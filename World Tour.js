function solve(input) {
    let route = input.shift();

    let line = input.shift();
    while (line != 'Travel') {
        let array = line.split(':');
        let command = array.shift();

        if (command == 'Add Stop') {
            let index = Number(array.shift());
            let string = array.shift();
            if (index >= 0 && index < route.length) {
                let strart = route.substring(0, index);
                let end = route.substring(index);
                route = strart + string + end;
            }
            console.log(route)

        } else if (command == 'Remove Stop') {
            let startIndex = Number(array.shift());
            let endIndex = Number(array.shift());
            if (startIndex >= 0 && startIndex < route.length && endIndex >= 0 && endIndex < route.length) {
                let strart = route.substring(0, startIndex);
                let middle = route.substring(startIndex, endIndex + 1);
                let end = route.substring(endIndex + 1);
                route = strart + end;
            }
            console.log(route);

        } else if (command == 'Switch') {
            let oldString = array.shift();
            let newString = array.shift();
            if (route.includes(oldString)) {
                route = route.replace(oldString, newString);
            }
            console.log(route);
        }

        line = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${route}`)
}
solve((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]))