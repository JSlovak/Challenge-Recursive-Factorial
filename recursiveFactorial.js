//Ex. factorial(4) //4 * 3 * 2 * 1 = 24

module.exports = function recursiveFactorial(num){
var factorial = 0;

//Base Case
if(num === 0){
  return 1;
}

// multiply num by num-1 until we hit 1 (base-case)
// decrement num & recurse
// (as the the recursion unstacks, will multiply num * returned value)
return num * recursiveFactorial(num -1);

};

//num = 4
//return 4 * recursiveFactorial(3)
//return 3 * recursiveFactorial(2)
//return 2 * recursiveFactorial(1)
//return 1 * recursiveFactorial(0)

//return 4 * recursiveFactorial(3)
//return 3 * recursiveFactorial(2)
//return 2 * recursiveFactorial(1)
//return 1 * 1 // 1

//return 4 * recursiveFactorial(3)
//return 3 * recursiveFactorial(2)
//return 2 * 1 // 2
//return 1 * 1 // 1

//return 4 * recursiveFactorial(3)
//return 3 * 2 // 6
//return 2 * 1 // 2
//return 1 * 1 // 1

//return 4 * 6 // 24
//return 3 * 2 // 6
//return 2 * 1 // 2
//return 1 * 1 // 1

