/*
  Er... I guess you could also use this to gen pseudo-randomly your 4D & 6D numbers
  I'm just separating this piece of code out for cases where I need to generate random integers
  (usually used by other code)
*/

console.log(getRandomList());

export function getRandomList(length = 10, min = 0, max = 10) {
  console.time("Generate randoms")
  let arr = [];
  for (let n = 1; n <= length; n++) {
    arr.push(genRandomInt(min, max));
  }
  console.timeEnd("Generate randoms")
  return arr;
}

export function genRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor( Math.random() * (maxFloored - minCeiled + 1) + minCeiled ); 
  // The maximum is exclusive and the minimum is inclusive (if u remove the +1)
}



