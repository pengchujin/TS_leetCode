

const longestPalindrome = function(s:string):string {
  if(!s){
    return ''
  } if(s.length == 1) {
    return s
  }
  let maxNumber = 2
  let maxString = ''
  let i
  let reverseString = s.split("").reverse().join("")
  for(i = 0; i < s.length; i++){
    for(let x = maxNumber; x<= (s.length-i); x++ ) {
      if(reverseString.indexOf(s.slice(i,i+x)) == -1 || s.slice(i,i+x) != s.slice(i,i+x).split("").reverse().join("") ) {
      } else {
          maxNumber++ 
          s.slice(i,i+x).length > maxString.length ? maxString = s.slice(i,i+x):''
        } 
  }
};
    maxString != maxString.split("").reverse().join("") || !maxString ?  maxString = s[0] : ''
    return maxString 
    
}

console.log(longestPalindrome('babad'))
