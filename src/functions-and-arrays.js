// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(num1, num2) {
    if (num1> num2){
        return num1
    }
    else if (num1<num2){
        return num2
    }
    else {
        return num1 || num2
    }
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
        return null;
    }

    if (words.length === 1) {
        return words[0];
    }

    let longestWord = words[0];  
    for (let i = 1; i < words.length; i++) {
        
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

console.log(longestWord(words))

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    if(numbers.length === 0){
        return 0
    }

    if (numbers.length === 1){
        return numbers[0]
    }

    let totalSUm= 0;

    for (let i= 0; i< numbers.length; i++){
        totalSUm += numbers[i];

    }
    return totalSUm
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length=== 0){
        return 0
    }

    if(numbers2.length===1){
        return numbers2[0]
    }

let average = sumNumbers(numbers2)/numbers2.length
return average

}
   
// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, findWord) {
    if (words2.length===0){
        return null;
    }
    else if (words2.includes (findWord)){
        return true;
    }
    else {
        return false
    }
}
