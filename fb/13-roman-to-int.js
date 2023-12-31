//https://leetcode.com/problems/roman-to-integer

var romanToInt = function(s) {
    let output = 0;
    symbol = {
      "I":1,             
      "V":5,             
      "X":10,             
      "L":50,             
      "C":100,             
      "D":500,             
      "M":1000 }
    
    for(i = 0;i<s.length;i++) {
        (symbol[s[i]] < symbol[s[i+1]]) ? output -= symbol[s[i]] : output += symbol[s[i]];
    }
    return output;
};
  
