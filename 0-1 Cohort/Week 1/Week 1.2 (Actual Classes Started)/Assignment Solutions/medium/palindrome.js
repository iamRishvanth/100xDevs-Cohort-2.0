/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().split("") // now it's array
  str = str.filter((x) => {
    return x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 112
  })
  return str.join("") == str.reverse().join("");
}

module.exports = isPalindrome;
