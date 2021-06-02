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
    return (newStr)
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

    if (newArr.includes(true)) {
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
    let newArr = [];

    arr.map(obj => Boolean(obj) ? newArr.push(obj) : console.log(arr.indexOf(obj)))

    return newArr;
}

function getIndexToIns(arr, num) {
    let newArr = arr.concat(num).sort(function(a, b) { return a - b });

    return newArr.indexOf(num);
}

function mutation(arr) {

    let newArr = [];
    for (let i = 0; i < arr[1].length; i++) {
        if (arr[0].toLowerCase().includes(arr[1][i].toLowerCase())) {
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
    let sortAsc = function(a, b) { return a - b };
    let reducer = function(acc, cval) { return acc + cval };
    let newArr = arr.sort(sortAsc);

    for (let i = arr[0]; i < arr[1]; i++) {
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

function spinalCase(str) {
    let regex = /\s|_|-|(?=[A-Z])/g;

    return str.split(regex).join("-").toLowerCase()
}


function translatePigLatin(str) {
    let vowels = /a|e|i|o|u/i;
    let holder;

    if (str[0].match(vowels)) {
        return str.concat('way');
    } else if (!str[0].match(vowels)) {
        holder = str.split(/[a|e|i|o|u].?/i);
        return holder[0], str.substring(holder[0].length) + holder[0] + "ay";
    }
}


function myReplace(str, before, after) {
    if (before[0] !== before[0].toLowerCase()) {
        console.log(str.replace(before, after[0].toUpperCase() + after.substring(1)));
    } else if (before[0] !== before[0].toUpperCase()) {
        return str.replace(before, after[0].toLowerCase() + after.substring(1));
    }
    return str.replace(before, after);
}

function pairElement(str) {
    let dna = {
        'G': 'C',
        'C': 'G',
        'A': 'T',
        'T': 'A'
    }

    let newArr = [];
    for (let i = 0; i < str.length; i++) {
        newArr.push([str[i], dna[str[i]]])
    }

    return newArr;
}

function fearNotLetter(str) {

    let base = str.charCodeAt(0);

    for (let i = 1; i < str.length; i++) {
        if (str.charCodeAt(i) - base !== i) {
            return String.fromCharCode(str.charCodeAt(i) - 1);
        }
    }
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

function convertHTML(str) {
    let entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&apos;"
    };

    return str.replace(/([&<>\"'])/g, char => entities[char]);
}











function steamrollArray(arr) {

    let firstHolder = arr.reduce((acc, el) => acc.concat(el), []);
    let secondHolder = firstHolder.reduce((acc, el) => acc.concat(el), [])
    let thirdHolder = secondHolder.reduce((acc, el) => acc.concat(el), [])
    return thirdHolder;
}

function binaryAgent(str) {

    let newArr = str.split(" ");
    let newStr = "";
    let char = "";
    let result = [];

    for (let elem of newArr) {
        let binaryToDigit = parseInt(elem, 2);
        char = newStr.concat("", String.fromCharCode(binaryToDigit));
        result.push(char);
    }

    return result.join('');
}


function truthCheck(collection, pre) {

    let checker = 0;

    for (let i = 0; i < collection.length; i++) {
        let selection = collection[i][pre];

        if (!selection) checker += 1;
        else checker += 0;
    }

    if (checker === 0) return true;
    else return false;
}








function rot13(str) {
    let newArr = [];
    let arrOfStr = str.split(" ")
    let newArrOfStr = []
    let temp = ""
    let wordHolder = ""


    for (let i = 0; i < arrOfStr.length; i++) {

        for (let j = 0; j < arrOfStr[i].length; j++) {
            newArr.pop()
            if (arrOfStr[i].charCodeAt(j) < 78 && arrOfStr[i].charCodeAt(j) > 64) {
                temp = String.fromCharCode(arrOfStr[i].charCodeAt(j) + 13)
            } else if (arrOfStr[i].charCodeAt(j) > 77 && arrOfStr[i].charCodeAt(j) < 91) {
                temp = String.fromCharCode(arrOfStr[i].charCodeAt(j) - 13)
            } else {
                temp = arrOfStr[i][j]
            }

            newArrOfStr.push(temp)

        }
        newArrOfStr.push(" ")
        wordHolder = newArrOfStr.join("")
        newArr.push(wordHolder)

    }

    console.log(newArr.toString().trim())
    return newArr.toString().trim();
}