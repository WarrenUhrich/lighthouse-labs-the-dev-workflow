// Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least two arguments.

// Example command: node sum.js 1 2 3 4 5
// Example output:  15

// Retrieve command line arguments
const commandLineArgs = process.argv;
// console.log(commandLineArgs);

// Confirm there are two arguments (first 2 don't count, they are node and our script)
if (commandLineArgs.length >= 4) {
    // Store the numbers in an array
    const numbers = commandLineArgs.slice(2);
    // console.log(numbers);

    // variable to keep track of the sum
    let sum = 0;

    // loop through the numbers
    for(const num of numbers) {
        // console.log(num);

        // Convert string arg to a number (typecast)
        const convertedNum = Number(num);

        // check if it is not a number; show error
        if(isNaN(convertedNum)) {
            console.log('Error: Non-number.');

        // check if whole number
        } else if(Number.isInteger(convertedNum)) {
            // add to total sum
            // sum += convertedNum; // sum = sum + convertedNum;
            sum = sum + convertedNum;
        }
    }

    // output the sum
    console.log('Sum:', sum);
}
