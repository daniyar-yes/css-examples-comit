// check if a string is a palindrome and return true or false

function checkIfPalindrome(word) {

    let processedWord = word.toLowerCase().split('.').join('');

    if (processedWord.length <=1) {
        return false;
    }
    
    let left = 0;
    let right = processedWord.length - 1;


    while (left < right) {
        if (processedWord[left] !== processedWord[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

let textToShow = checkIfPalindrome('Now do I repayaper i od won.')
console.log(textToShow)

// kayark
//  lr