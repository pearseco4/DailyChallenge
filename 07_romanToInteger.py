# go to https://leetcode.com/problems/roman-to-integer/ to see the full problem
class Solution(object):
    def romanToInt(self, s: str) -> int: 
        # create a map of roman numeral values 
        lookup = {
            "I":1,
            "V":5,
            "X":10,
            "L":50,
            "C":100,
            "D":500,
            "M":1000,
        }
        # set N equal to length of string 
        N = len(s)
        # pointer 
        i = N-1
        output = 0
        while i >= 0:
            if i < N-1 and lookup[s[i]] < lookup[s[i+1]]: 
                output += lookup[s[i]]
            else:
                output += lookup[s[i]]
            i-=1
        return output