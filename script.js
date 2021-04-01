function convertToF(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

function reverseString(str) {
    let newStr = [];
    
    newStr = str.split("").reverse().join("");
    return newStr;
}

function factorialize(num) {
    if (num <= 0) {
        return 1;
    } 
    
    return num * factorialize(num - 1);
}

function findLongestWordLength(str) {
    let newArr = str.split(" ");
    
    console.log(newArr)
    return str.length;
}

function findLongestWordLength(str) {
    let newArr = str.split(" ");
    let result = 0;
  
    for (let string of newArr) {
        if (string.length > result) {
          result = string.length;
        }                      
    };
  
    return result;
}

function largestOfFour(arr) {
    let newArr = [];
   
    for (let arrays of arr) {    
      newArr.push(Math.max(...arrays))
    }
  
    return newArr;
}
  
  
  