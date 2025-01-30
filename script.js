let result = '19999';
console.log('result from outside: ', result)

let accumulatedValue = 0;

const arg1 = 10;
const arg2 = 100;
const arg3 = 1;

// example of arrow function
const sayHi = (number1, number2, number3) => {
    let sumFromFunction = number1 + number2 + number3;
    accumulatedValue = accumulatedValue + sumFromFunction;
    console.log('from function directly:', accumulatedValue)
    return accumulatedValue;
}

// example of regular function

function sayBi () {
    console.log('goodbye')
}
// function call
sayBi();

let endResult = sayHi(arg1, arg2, arg3);
console.log('first call:', endResult)

let bonus = 100000000000000000;
let monthlySalary = endResult + bonus;

// function call that stores the return of the f-n in the variable
endResult = sayHi(arg1, arg2, arg3);
console.log('second call:', endResult)
endResult = sayHi(arg1, arg2, arg3);
console.log('third call:', endResult)
endResult = sayHi(arg1, arg2, arg3);
console.log('4th call:', endResult)
console.log('final value of accumulator:', accumulatedValue)
console.log('monthlySalary:', monthlySalary)

// anon function example (inside setTimeout, before ,5000)

setTimeout(() => console.log('hi from setTimeout'), 5000)