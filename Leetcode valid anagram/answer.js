/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    s.toLowerCase()
   t.toLowerCase()
   let sArr = s.split("").sort()
   let tArr = t.split("").sort()

   if(JSON.stringify(sArr) == JSON.stringify(tArr)) {
       return true
   } else {return false}

};