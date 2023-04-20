// Write a node program that takes in an unlimited number of command
// line arguments, goes through each and prints out the sum of them.
// If any argument is not a whole number, skip it. Do support negative
// numbers though. If any argument is not a number, output an error
// message. We need at least two arguments.

// Example use case:
// node sum.js 1 2 3
// Expected output:
// 6

// 1. INPUT(s) CLI args!? -> process.argv
// 2. OUTPUT(s) CLI string / out -> console.log()
// 3. PROCESSING
    // * a plan for how to get from input to output
    // * break it into as many steps as you can

    // RULES:

    // 1. [X] unlimited number of cli args
    // 2. [X] must be at least 2 cli args
    // 3. [X] skip decimal numbers
    // 4. [X] allow negative numbers
    // 5. [X] if a value entered is NaN, show an error

    // PROCESS:

    // 1. [X] loop through our cli args
    // 2. [X] calculate a sum of all nums
    // 3. [X] output the total

    let sum = 0;
    const enteredNums = process.argv.slice(2); // Remove first 2 items (node info)
    console.log('enteredNums:', enteredNums);
    
    // Number.isInteger - if it is decimal or not
    
    if(enteredNums.length >= 2) { // Minimum 2 args
    
        // What kind of loops can we use?
        // .forEach()
        // for...of
        // c-style for
        // ASSIGNMENT; TERMINATION CONDITION; ITERATORATION
        for(let i = 0; i < enteredNums.length; i = i + 1) {
            const currentNum = Number(enteredNums[i]);
            if(Number.isInteger(currentNum)) { // Only add whole numbers!
                sum = sum + currentNum;
            }
            else if(Number.isNaN(currentNum)) { // Only allow numbers!
                console.log('Error: Non-number entered!');
                return;
            }
        }
    
        console.log('sum:', sum);
    
    } else {
        console.log('Please enter at least 2 arguments.');
    }
    