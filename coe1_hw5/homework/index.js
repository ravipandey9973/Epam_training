//Task -1 -----------
//Write a function - isEquals It should accept two arguments and returns true if first one value equals second one or false otherwise

function isEquals(a, b) {
  return a === b;
}
// eslint-disable-next-line no-magic-numbers
console.log(isEquals(3, 3));

// Task-2 -------------
//Write a function - isBigger It should accept two arguments and returns true if first one has greater value than second one or false otherwise. 

function isBigger(a, b) {
  return a > b;
}
// eslint-disable-next-line no-magic-numbers
console.log(isBigger(5, -1));

// Task-3 ---------------
//Write a function - storeNames It should accept an arbitrary number of strings and return an array of that strings

// Using spread operator------------
function storeNames(...name) {
  return name;
}
console.log(storeNames('Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy'));

// Task - 4 ------------
//Write a function - getDifference It should accept two arguments as numbers and return their difference. But the function never  returns a negative value. 
//If second parameter is greater than first one, function will change their order

function getDifference(a, b) {
  if (a > b) {
      return a - b;
  }
    else {
      return b - a;
    }
}
// eslint-disable-next-line no-magic-numbers
console.log(getDifference(5, 3));

// Task - 5 ------------
//Write a function - negativeCount It should accept an array of numbers and return the count of negative values from the array

function negativeCount(arr) {
  let count = 0;
  for (let i of arr) {
      if (i < 0) {
          count++;
      }
  }
  return count;
}
// eslint-disable-next-line no-magic-numbers
console.log(negativeCount([4, 3, 2, 9]));
// eslint-disable-next-line no-magic-numbers
console.log(negativeCount([0, -3, 5, 7]));

// Task - 6 ---------------
//Write a function – letterCount It accepts two string arguments and returns an integer of the count of occurrences 
//the 2nd argument is found in the first one. If no occurrences can be found, a count of 0 should be returned

function letterCount(str1, str2) {
  let num = 0;
  for (let i = 0; i < str1.length; i++) {
      if (str1[i] === str2) {
          num++
      }
  } return num;
} console.log(letterCount('Marry', 'r'));
console.log(letterCount('Barny', 'y'));
console.log(letterCount('', 'z'));

// Task - 7 ---------------
//Our basketball team (x – our team) completed the championship. The result of each match look like "x:y". 
//Results of all matches are recorded in the collection like this: ["95:74", "107:107", "99:110", ...]
//Write a function – countPoints
//It should accept a collection of football games scores and count the points of our team in the championship. 
//Rules for counting points for each match:  if x > y - 3 points  if x < y - 0 point  if x = y - 1 point

function countPoints(scores) {
  let res = 0;
  for (let points of scores) {
      let [x, y] = points.split(':');
      x = Number(x);
      y = Number(y);
      if (x > y) {
          // eslint-disable-next-line no-magic-numbers
          res += 3;
      } if (x < y) {
          res += 0;
      } if (x === y) {
          res = res + 1;
      }
  }
  return res;
}
console.log(countPoints(['100:90', '110:98', '100:100', '95:46', '54:90', '99:44', '90:90', '111:100']));
