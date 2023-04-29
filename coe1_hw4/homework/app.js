 /*
 1.Write a JavaScript function that reverse an integer number.
*/
function reverseNumber(num) {
    const reversed = parseInt(num.toString().split('').reverse().join(''));
    return Math.sign(num) * reversed;
  }

console.log(reverseNumber(12345)); // Output: 54321
console.log(reverseNumber(-56789)); // Output: -98765

/*
2. Write function, which iterates over array and executes function on each element.
*/

function forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
      func(arr[i]);
    }
  }

forEach([2, 5, 8], function(el) {
    console.log(el);
  });


  /*
3.Write function, which returns transformed array based on function, which is passed as a 
parameter. Reuse function from task 2.
*/
function map(arr, transformFunc) {
    var transformedArr = [];
    for (var i = 0; i < arr.length; i++) {
      transformedArr.push(transformFunc(arr[i]));
    }
    return transformedArr;
  }

var arr1 = [2, 5, 8];
var arr2 = [1, 2, 3, 4, 5];

var transformedArr1 = map(arr1, function(el) { return el + 3; });
console.log(transformedArr1); // outputs [5, 8, 11]

var transformedArr2 = map(arr2, function(el) { return el * 2; });
console.log(transformedArr2); // outputs [2, 4, 6, 8, 10]

/*
4.Write function, which returns filtered array based on function, which passed as a parameter. 
Reuse function from task 2.
*/

function filter(array, filterFunc) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (filterFunc(element)) {
        filteredArray.push(element);
      }
    }
    return filteredArray;
  }

const array1 = [2, 5, 1, 3, 8, 6];
const filteredArray1 = filter(array1, function(el) {
  return el > 3;
});
console.log(filteredArray1); // [5, 8, 6]

const array2 = [1, 4, 6, 7, 8, 10];
const filteredArray2 = filter(array2, function(el) {
  return el % 2 === 0;
});
console.log(filteredArray2); // [4, 6, 8, 10]

/*
5. Write function, which returns array of names of people, who are over 18 and their favorite 
fruit is apple. Reuse functions from task 3 and 4.
*/

function getAdultAppleLovers(data) {
    return data.filter(person => person.age > 18 && person.favoriteFruit === 'apple')
               .map(person => person.name);
  }
  const data = [
    { name: 'John', age: 20, favoriteFruit: 'banana' },
    { name: 'Jane', age: 17, favoriteFruit: 'apple' },
    { name: 'Bob', age: 25, favoriteFruit: 'apple' },
    { name: 'Alice', age: 30, favoriteFruit: 'orange' },
    { name: 'Stein', age: 19, favoriteFruit: 'apple' },
  ];
  console.log(getAdultAppleLovers(data)); // outputs ["Stein"]

  /*
6.write function, which returns array of keys of an object.
 getKeys({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [“keyOne”, 
 “keyTwo”, “keyThree”]
 */
 function getKeys(obj) {
    return Object.keys(obj);
  }
const myObj = { keyOne: 1, keyTwo: 2, keyThree: 3 };
const keys = getKeys(myObj);
console.log(keys); // ["keyOne", "keyTwo", "keyThree"]

/*
7. Write function, which returns array of values of an object.
getValues({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [1, 2, 3]
*/

function getValues(obj) {
    return Object.values(obj);
  }
const obj = { keyOne: 1, keyTwo: 2, keyThree: 3 };
const valuesArray = getValues(obj);
console.log(valuesArray); // [1, 2, 3]
