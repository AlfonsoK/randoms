/*
  Er... I guess you could also use this to gen pseudo-randomly your 4D & 6D numbers
  I'm just separating this piece of code out for cases where I need to generate random integers
  (usually used by other code)
*/

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor( Math.random() * (maxFloored - minCeiled + 1) + minCeiled ); 
    // The maximum is exclusive and the minimum is inclusive (if u remove the +1)
  }

console.time("Generate randoms")
let arr = [];
for (let n = 1; n <= 4; n++) {
  arr.push(getRandomInt(0, 9));
}
console.log(arr.join(''));
console.timeEnd("Generate randoms")