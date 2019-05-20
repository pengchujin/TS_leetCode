


const lengthOfLongestSubstring = function(s: String):number {
  let len = 0
  let mapStrig = new Map()
  for(let i = 0; i < s.length; i++) {
    for(let a = i; a < s.length; a++) {
      if(mapStrig.get(s[a]) === undefined) {
          mapStrig.set(s[a], a)
          mapStrig.size >= len? len = mapStrig.size : ''
      } else {
        mapStrig.clear()
        break
      }
    }
    mapStrig.clear()
  }
  return len
}


console.log(lengthOfLongestSubstring('jbpnbwwd'))

