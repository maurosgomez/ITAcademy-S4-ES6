// EXERCICI 1

// 1

const multiply = (num1, num2) => num1 * num2;
console.log(multiply(5, 5));

// 2

const toCelsius = fahrenheit => (5/9) * (fahrenheit-32);
console.log(toCelsius(100));

// 3

const padZeros = (num, totalLen) => {

    var numStr = num.toString();
    var numZeros = totalLen - numStr.length;

    for (var i = 1; i <= numZeros; i++) {
        numStr = "0" + numStr;
    }
    return numStr;
}

console.log(padZeros(5, 5));

// 4

const power = (base, exponent) => {
    var result=1;
    for (var i=0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

console.log(power(4, 2));

// 5

const greet = (who) => {
    console.log("Hello " + who);
}

greet("Mauro");



// EXERCICI 2

const users = [
    {firstName: 'Homer', lastName: 'Simpson'},
    {firstName: 'Marge', lastName: 'Simpson'},
    {firstName: 'Bart', lastName: 'Simpson'},
    {firstName: 'Lisa', lastName: 'Simpson'},
    {firstName: 'Maggie', lastName: 'Simpson'}
];

users.map(function(username) {
    console.log(username.firstName);
});



// EXERCICI 3

var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let phrase = epic.reduce((previous, current) => previous + " " + current);
console.log(phrase);



// EXERCICI 4

const reverseString = string => {
    console.log([...string].reverse().join(" ").toString());
}

reverseString("This is a reversed string");



// EXERCICI 5

function doMoreWork(){
    console.log("Do more work");
  }

function b() {
    // 
}
async function a() {
    let work = await b();
    doMoreWork();
}

a();



// EXERCICI 6

let tasks = [
    {
        'name': 'Start React web',
        'duration': 120
    },
    {
        'name': 'Work out',
        'duration': 60
    },
    {
        'name': 'Procrastinate on facebook',
        'duration': 240
    }
];

const tasksArray = [];
tasks.forEach((item) => {
    tasksArray.push(item.name);
});

let outcome = tasks.map((task) => task.name);
console.log(outcome);



// EXERCICI 7

const multiplicar = (numberA, numberB) => {
    numberA = parseInt(prompt("Choose a number from 1 to 10"), 10);
    numberB = parseInt(prompt("Choose another number from 1 to 10"), 10);
    let i;
        
    if(isNaN(numberA) || isNaN(numberB)) {
        console.log("Introduce a correct number");

    } else {
        
        for (i = 1; i <= numberB; i++) {
            console.log(`${numberA} X ${i} = ${numberA * i}`);

        }  
    }  
}

multiplicar();