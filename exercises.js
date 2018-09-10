/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 * 
 */
var stringCount = function (str) {
  return str.length;
}

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength = function (arr) {
  return arr.length;
}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */


var countAll = function (arr)  {
    return arr.reduce(function (accum, curr) {
      return accum + curr;  
    
      }, 0);
    
  
}




/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings = function (arr) {
    return arr.map(function (index) {
      return index.length;
    })
};

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
var countAllStrings = function (arr) {
  //console.log("arr:", arr);
  return arr.reduce(function (accum, curr){
    //console.log("accum:", accum);
    //console.log("curr:", curr);
    return curr.length + accum;
  }, 0);
}




/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function (arr) {
    return arr.split("");
}; 

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */

var lengthOfLast = function (arr) {
    return arr[2].length;
    console.log(arr);
}

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */

// arr=[1,2,11]

//1
//3

var sumBelowTen = function (arr) {
  return arr.reduce(function (accum, curr) {
    if (curr <= 10) {
      return accum + curr;
    }
    else {
      return accum;
    }
  }, 0); 
}


/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */


 var moreThanTenLetters = function(arr) {
   return arr.reduce(function (accum, curr) {
    if (curr.length > 10) {
      return accum + 1;
    }
    else {
      return accum;
    }
   }, 0)
 }
 
//  function (arr) {
//     return arr.filter(function (letters) {
//      return letters.length > 10;
//    })
//  }


/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = function (arr) {
  return arr.reduce(function (accum, curr) {
    return accum * curr;
  })
};

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive = function (arr) {
  return arr.reduce(function (accum, curr) {
    if (curr >= 0) {
      return accum + curr;
    }
    else {
      return accum;
    }
  }, 0)
};

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function (arr) {
  return arr.reduce(function (accum, curr) {
    if (curr.length <= 3) {
      return accum + 1;
    }
    else {
      return accum;
    }
  }, 0)
};


/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function (arr) {
  return arr.map(function(index) {
    return index * 2;
  })
}

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */

 var countObjects = function (arr) {
   console.log(arr);
   return arr.length
  }


module.exports = {
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  doubleArray: doubleArray,
  countObjects: countObjects
};
