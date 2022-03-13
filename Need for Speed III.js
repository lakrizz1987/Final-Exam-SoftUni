function solve(input) {
    let result = [];
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let array = line.split('|');
        let car = array.shift();
        let mileage = Number(array.shift());
        let fuel = Number(array.shift());

        let obj = {};
        obj.name = car;
        obj.mileage = mileage;
        obj.fuel = fuel;
        result.push(obj);
    }

    let line = input.shift();
    while (line != 'Stop') {

        let array = line.split(' : ');
        let command = array.shift();

        if (command == 'Drive') {
            let curentCar = array.shift();
            let curentMileage = Number(array.shift());
            let curentFuel = Number(array.shift());

            for (let obj of result) {
                if (obj.name == curentCar) {
                    if (curentFuel > obj.fuel) {
                        console.log('Not enough fuel to make that ride');
                    } else {
                        obj.fuel -= curentFuel;
                        obj.mileage += curentMileage;
                        console.log(`${curentCar} driven for ${curentMileage} kilometers. ${curentFuel} liters of fuel consumed.`);
                        if (obj.mileage >= 100000) {
                            console.log(`Time to sell the ${curentCar}!`)
                            let index = result.indexOf(obj);
                            result.splice(index, 1);
                        }
                    }
                }
            }

        } else if (command == 'Refuel') {
            let curentCar = array.shift();
            let curentFuel = Number(array.shift());
            for (let obj of result) {
                if (obj.name == curentCar) {
                    let newFuel = obj.fuel + curentFuel;
                    if (newFuel > 75) {
                        let refill = 75 - obj.fuel;
                        obj.fuel = 75;
                        console.log(`${curentCar} refueled with ${refill} liters`);
                    } else {
                        obj.fuel = newFuel;
                        console.log(`${curentCar} refueled with ${curentFuel} liters`);
                    }
                }
            }

        } else if (command == 'Revert') {
            let curentCar = array.shift();
            let curentMileage = Number(array.shift());
            for (let obj of result) {
                if (obj.name == curentCar) {
                    let newMil = obj.mileage - curentMileage;
                    if (newMil < 10000) {
                        obj.mileage = 10000;
                    } else {
                        console.log(`${curentCar} mileage decreased by ${curentMileage} kilometers`);
                        obj.mileage = newMil;
                    }
                }
            }
        }

        line = input.shift();
    }

    for (let obj of result) {
        console.log(`${obj.name} -> Mileage: ${obj.mileage} kms, Fuel in the tank: ${obj.fuel} lt.`)
    }
}
solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]


)