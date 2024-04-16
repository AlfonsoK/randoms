/*
  Find Majority Element with few different methods.
  We'll generate a random list of numbers which is used by each methods.
  Each method should return the same results of finding which digit exists the most.
  Each method will be benchmarked.

  Note: these codes does not handle edge cases where more than 1 element could be majority
*/

run();

function run() {
  const 
    minRandomDigit = 1, 
    maxRandomDigit = 10, 
    totalDigits    = 1000000;
  const elements = getRandomInt(minRandomDigit, maxRandomDigit, totalDigits);
  // console.log(matchLoop(elements));
  // console.log(matchFindIndex(elements));
  console.log(matchBoyerMoore(elements));
  console.log(matchObject(elements));
  console.log(matchIterate(elements));
  console.log(matchReduce(elements));
}

function getRandomInt(min, max, total) {
  console.time("Generate randoms");
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  let arr = [];
  for (let n = 1; n <= total; n++) {
    arr.push(Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled));
  }
  console.timeEnd("Generate randoms");
  return arr;
}

// Just to benchmark using a loop to find object in an array
function matchLoop (elements) {
  console.time("matchLoop");
  let list = [];
  let largestCount = 0;
  let indexLargest = -1;
  for (let n of elements) {
    let index = -1;
    search_loop: for (let i = 0; i < list.length; i++){
      if(list[i].digit === n) {
        index = i;
        break search_loop;
      }
    }

    if(index >= 0) {
      list[index].count++; 
      if(list[index].count > largestCount) {
        largestCount = list[index].count;
        indexLargest = index;
      }
    } else {
      list.push({digit: n, count: 1});
    }
  }
  console.timeEnd("matchLoop");
  return indexLargest != -1 ? list[indexLargest] : "No elements found to be majority";
}

// Just to benchmark using the Array.findIndex() method
function matchFindIndex (elements) {
  console.time("matchFindIndex");
  let list = [];
  let largestCount = 0;
  let indexLargest = -1;
  for (let n of elements) {
    let index = -1;
    index = list.findIndex((el) => el.digit === n)
    if(index >= 0) {
        list[index].count++; 
        if(list[index].count > largestCount) {
          largestCount = list[index].count;
          indexLargest = index;
        }
    } else {
        list.push({digit: n, count: 1});
    }
  }

  console.timeEnd("matchFindIndex");
  return indexLargest != -1 ? list[indexLargest] : "No elements found to be majority";
}

function matchObject (elements) {
  console.time("matchObject");
  let maxKey;
  let maxCount = 0;
  const map = {};
  for (let el of elements) { 
    let count = map[el] || 0;
    map[el] = ++count;
    if (count > maxCount) {
        maxKey = el;
        maxCount = count;
    }
  }

  console.timeEnd("matchObject");
  return maxKey != undefined ? {digit: maxKey, count:maxCount} : "No elements found to be majority";
}

function matchIterate (elements) {
  console.time("matchIterate");
  let maxKey;
  let maxCount = 0;
  const map = new Map(); // Honestly the Map is not even needed
  for (let el of elements) { 
    let count = map.get(el) || 0;
    map.set(el, ++count);
    if (count > maxCount) {
        maxKey = el;
        maxCount = count;
    }
  }
  console.timeEnd("matchIterate");
  return maxKey != undefined ? {digit: maxKey, count:maxCount} : "No elements found to be majority";
}

// Just benchmarking if Array.reduce is used to iterate
function matchReduce (elements) {
  console.time("matchReduce");
  let maxKey;
  let maxCount = 0
  // the Map created is not even needed
  const map = elements.reduce((map,key) => {
    let count = map.get(key) || 0;
    map.set(key, ++count);

    if (count > maxCount) {
        maxKey = key
        maxCount = count
    }

    return map
  }, new Map())
  console.timeEnd("matchReduce");
  return maxKey != undefined ? {digit: maxKey, count:maxCount} : "No elements found to be majority";
}

// This only works when there are only 2 elements
function matchBoyerMoore (elements) {
  console.time("matchBoyerMoore");
  let digit = 0;
  let count = 0;
  for (let el of elements) {
    if(count === 0) {
      digit = el;
    }

    if(el === digit)
      count++;
    else
      count--;
  }

  console.timeEnd("matchBoyerMoore");
  return {digit, count}
  // return count !== 0 ? {digit, count} : "No elements found to be majority";
}