/* Problem #2
   Note the infinite sequence of numbers: 0, 2, 2, 4, 6, 10, 16, 26, ….
   Write a function, sequence( n ), to return the nth number in this
   sequence, e.g. sequence( 6 ) → 10. 
   
   SEEMS BUGGY (Work in Progress)
*/


// Generate sequence based on polynomial interpolation
const generateSequence = function(initial, generateToLength){
    // Traverse to get pattern      
    let differences = [];
    let m = 0;
    for(let n = 0; n < initial.length; n++){
        if(m + 1 < initial.length)
            m += 1;
        
        // Check if current and future number has any difference
        // x2-x1, x3-x2, x4-x3 ... xMax
        if(n < initial.length - 1){
          differences.push(initial[m] - initial[n])            
        }
    }
    console.log('Differences: ',differences)
    
    // Now work the difference backwards
    // xMax-x(Max-1) + x(Max-1)-x(Max-2) = xNth
    // xNth + last one
    let next = 0;
    for(let max = initial.length-1; max >= initial.length-3; max--){
        console.log('Differences:', differences[max])
    }
    return initial;
}

const sequence = function(index){
    let maxArraySize = (index > 30) ? index + 3 : 30;
    let generated = generateSequence([0, 2, 2, 4, 6, 10, 16, 26], maxArraySize);
    return generated[index]
}

console.log( sequence(7) )
