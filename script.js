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

function confirmEnding(str, target) {
    return str[str.length - 1] === target ? true : false;    
}

function repeatStringNumTimes(str, num) {

    let newStr = "";
    for (let i = 0; i < num; i++) {
      newStr = newStr.concat(str)
    }                    
    return(newStr)
}

function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
}
  
function findElement(arr, func) {
    let num = 0;
    let newArr = arr.map(func);
  
    return newArr[newArr.indexOf(true)];
}

function findElement(arr, func) {
    let newArr = arr.map(func);
    let res = 0;
    
    if(newArr.includes(true)) {
      res = newArr.indexOf(true);
      return arr[res];
    }      
} 

function booWho(bool) {
    return typeof bool === "boolean" ? true : false
}

function titleCase(str) {
    let newArr = str.toLowerCase().split(" ");

    for (let i = 0; i < newArr.length; i++) {
      newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].substring(1);
    }
    return newArr.join(" ");
}

function frankenSplice(arr1, arr2, n) {
    let copyArr2 = [...arr2];
    let head = copyArr2.slice(0, n);
    let spliced = copyArr2.splice(n);
    let body = arr1.concat(spliced);
        
    return head.concat(body);
}

function bouncer(arr) {
    let newArr  = [];
    
    arr.map(obj => Boolean(obj) ? newArr.push(obj) : console.log(arr.indexOf(obj)))
  
    return newArr;
}

function getIndexToIns(arr, num) {
    let newArr = arr.concat(num).sort(function(a, b){return a-b});
    
    return newArr.indexOf(num);
}

function mutation(arr) {

    let newArr = [];
    for(let i = 0; i < arr[1].length; i++) {
      if (arr[0].toLowerCase().includes(arr[1][i].toLowerCase())){
        newArr.push("true");
      } else {
        newArr.push("false");
      }    
    }
  
    return newArr.includes("false") ? false : true;    
}

function chunkArrayInGroups(arr, size) {
  let newArr = [];

  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));                      
  }                  
  return newArr;
}

function sumAll(arr) {
  let sortAsc = function(a, b){return a-b};
  let reducer = function(acc, cval) {return acc + cval};
  let newArr = arr.sort(sortAsc);

  for (let i = arr[0]; i < arr[1]; i++){
    if (i !== arr[0]) newArr.push(i);      
  }  
  return newArr.sort(sortAsc).reduce(reducer);
}

function diffArray(arr1, arr2) {
  var a = [];
  var b = [];
  let newArr = [];

  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  
 for (let i of arr2) {
    a = arr1.filter(item => !arr2.includes(item));   
  }

   for (let j of arr1) {
    b = arr2.filter(item => !arr1.includes(item));   
  }

  newArr = a.concat(b);
  return newArr;
}

function destroyer(...arr) {
  let mainArr = arr[0];
  let toRemove = arr.slice(1)
  return mainArr.filter(item => !toRemove.includes(item));
}

function whatIsInAName(collection, source) {
  var arr = [];
  var keys = Object.keys(source);

  arr = collection.filter(function(object) {
      for (let i = 0; i < keys.length; i++) {
        if (!object.hasOwnProperty(keys[i]) ||
            object[keys[i]] !== source[keys[i]]) {
              return false;
            }                    
        }
        return true;
      });
  return arr;
}














function uniteUnique(...arr) {
    let newArr = [];
    
    for (let n = 0; n < arr.length; n++) {
      for (let m = 0; m < arr[n].length; m++) {
        if (!newArr.includes(arr[n][m])) {
          newArr.push(arr[n][m])
        }
      }
    }
  
    return newArr;
}
  

  
  