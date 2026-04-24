const longString = "Hello, learners! " +
                    "Welcome to Javascript fundamentals. " +
                    "This practice will teach you the basics of Javascript strings.";

const anotherLongString = 'Hello, learners! '+
                            'Welcome to Javascript fundamentals. ' +
                            'This practice will teach you the basics of Javascript strings.';

const anotherLongStringTwo = 'Hello, learners!\
                                Welcome to Javascript fundamentals.\
                                This practice will teach you the basics of Javascript strings.';

let alpha = "Hello";
// let alpha = "10";
let beta = "world!";
let number = 10;

// let combinedVariables = alpha + beta;\
let combinedVariables = alpha + number;
const combinedVariablesTwo = "I say " + alpha + ' ' + beta + ' ' + number + " times.";
// console.log(combinedVariablesTwo)
// alpha + number = "Hello " + "10"
// console.log("1" + "1")
// console.log(1 + 1)

// console.log(combinedVariables);
// console.log(alpha);
// console.log(beta);

const VALUE_ONE = 10;
const VALUE_TWO = 20;

// console.log("Thirty is " + (VALUE_ONE + VALUE_TWO) + " and not " + (2 * VALUE_ONE + VALUE_TWO));
// console.log("Thirty is " + VALUE_ONE + VALUE_TWO + " and not " + 2 * VALUE_ONE + VALUE_TWO);

// console.log(`Thirty is ${VALUE_ONE + VALUE_TWO} and not ${2 * VALUE_ONE + VALUE_TWO}`);

// console.log(`${VALUE_TWO} is greater than ${VALUE_ONE}.`)

// console.log('it\'s a cat.');
// console.log("it's a cat.");

// console.log(longString.length)
const name = 'Carl';
// console.log(name.length);

// console.log(name.at(-2))

// C, a, r, l -> String
// 0, 1, 2, 3 -> Indexing starts from left to right.
// -4, -3, -2, -1 -> Indexing starts from right to left.
// 1, 2, 3, 4 -> This is for length.

// Boolean value or data type only has true or false.
// console.log(name.includes('ca'));

// console.log(name.toUpperCase())

console.log("      asagasdas adasd     asdasgas     ".trim())
console.log("      asagasdas adasd     asdasgas     ".trim().length) // CHaining technique
console.log("      asagasdas adasd     asdasgas     ".length)

// "      asagasdas adasd     asdasgas     " -> "asagasdas adasd     asdasgas"