/*-----------------------------------------------------------------
Challenge: 06-range
Difficulty: basic
Prompt:
- Write a function called range that accepts two integers as arguments and returns an array of integers starting with the first argument up to one less than the second argument.
- The range function must be called with the first argument less than or equal to the second argument, otherwise return the string "First argument must be less than second".
Examples:
range(1,4) //=> [1,2,3]
range(-2, 3) //=> [-2,-1,0,1,2]
range(1,1) //=> []
range(5,2) //=> "First argument must be less than second"
-----------------------------------------------------------------*/
// Your solution for 06-range here:

function range(first, second) {
    if (first > second) {
        return('first argunent must be less than the second argument')
    }
    
    let array = [];
    for (let i = first; i < second; i++) {
        array.push(i)
    }

    return array;
}

console.log(range(1, 10))
