// Given a string: 'abc'
// count the total number of character 'a' in it, and output it.

function solveProblem(stringInput, charToCompare) {
    let result = 0;


    for (let i = 0; i < stringInput.length; i++) {
        console.log('iteration #', i+1, result)
        if (stringInput[i] == charToCompare) {
            result++;
            console.log('result right before return:', result)
            
        }
    }

    return result;

    console.log('after the return')

}

console.log('Result:',solveProblem('bcaa', 'a'))

// for (let j = -1; j > -10; j--) {
//     console.log('hi from negatives', j)
// }
