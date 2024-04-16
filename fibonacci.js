/* Write 2 method to get fibonacci numbers to the nth degree
    1st method with recursion
    2nd method with loops
*/

// We could this package Commander https://www.npmjs.com/package/commander
// For better args processing and hinting
if(!process.argv[2]) {
  console.log('Please include argument in integer for n number');
  process.exit(1);
}

// I'm just being annoying here to be verbose and write extra code for the lols
if(!Number.isInteger(Number(process.argv[2]))) {
  console.log(`Entered: ${process.argv[2]}.`,'\nInteger please. Not float');
  process.exit(1);
}

const n = parseInt(process.argv[2]);

console.time('Fibonacci by Recursion');
console.log(fibonacciRecursion(n));
console.timeEnd('Fibonacci by Recursion');

console.time('Fibonacci by Loop');
console.log(fibonacciLoop(n));
console.timeEnd('Fibonacci by Loop');

/*
In mathematical terms, the sequence Fn of Fibonacci numbers is defined by the recurrence relation: 
F_{n} = F_{n-1} + F_{n-2}           
 with seed values and F_0 = 0 and F_1 = 1           
The Nth Fibonacci Number can be found using the recurrence relation shown above:

if n = 0, then return 0. 
If n = 1, then it should return 1. 
For n > 1, it should return Fn-1 + Fn-2
*/
function fibonacciRecursion(n) {
  // Large n would cause a call stack limit error (RangeError: Maximum call stack size exceeded)
  // Honestly, avoid recusive functions when possible
  // This call stack limit could be avoided by making the code async (setTimeout(fib(n),0))
  if(n <= 1) {
    return n;
  }

  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}

// Simplest and fastest without using an array
// to do iteratively with fib = (array[n-1]) + (array[n-2])
// Of course, we could store each sequence in array if we so wish
function fibonacciLoop(n) {
  if(n <= 1) {
    return n;
  }
  let fib, n1 = 0, n2 = 1;
  for (let i = 2; i <= n; i++) {
    fib = n1 + n2;
    n1 = n2
    n2 = fib
  }

  return fib;
}