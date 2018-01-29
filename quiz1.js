// 1. Write a **recursive** function which receives an array and returns the sum of the elements of the array.

function sum(array, i=0) {
  if (i === array.length) {
    return 0;
  } else {
    return array[n] + sum(array, n + 1);
  }
}

let arr = [1,2,3,4,5]

sum(arr);

// 2.	Given two temperatures, return true if one is less than 0 and the other is greater than 100.
//     a.	icyHot(120, -1) → true
//     b.	icyHot(-1, 120) → true
//     c.	icyHot(2, 120) → false

function icyHot(a, b) {
  if(a < 0 && b > 100 || a > 100 && b < 0){
    return true;
  } else {
    return false;
  }
}

icyHot(-1, 120);
icyHot(120, -1);
icyHot(2, 120);

// 3.	Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.
//     a.	makes10(9, 10) → true
//     b.	makes10(9, 9) → false
//     c.	makes10(1, 9) → true

function makes10(a, b) {
  if(a === 10 || b === 10 || (a + b) === 10){
    return true;
  } else {
    return false;
  }
}

makes10(9, 10);
makes10(9, 9);
makes10(1, 9);


// 4.	Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.
//     a.	front22("kitten") → "kikittenki"
//     b.	front22("Ha") → "HaHaHa"
//     c.	front22("abc") → "ababcab"

function front22(string) {
  if(string.length < 2){
    return string + string + string;
  } else {
    let firstTwoCharacters = string.substr(0, 2);
    return firstTwoCharacters + string +firstTwoCharacters;
  }
}

front22("kitten");
front22("Ha");
front22("abc");

// 5. Solve https://codility.com/programmers/lessons/3-time_complexity/frog_jmp/
//   Submit the screenshot of your solution after being put through the codility grader.

function frogJump(X, Y, D) {
  return Math.ceil((Y - X) / D);
}

frogJump(10, 85, 30);


// 10. (Optional) Solve https://codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
//   Submit a screenshot of your solution after being put through the codility grader.
