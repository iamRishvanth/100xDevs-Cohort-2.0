/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length){
    return false
  } else {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    const len = str1.length
    for(let i = 0; i < len; i++){
      if(str2.includes(str1[i])){
        str2 = str2.replace(str1[i],"")
      }else{
        return false
      }
    }
    if(str2.length == 0){
      return true
    }else{
      return false
    }
  }
}

module.exports = isAnagram;
