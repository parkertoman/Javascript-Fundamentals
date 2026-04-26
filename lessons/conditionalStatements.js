function ifExampleFunc(paramOne){
    console.log("Before if statement")
    if(paramOne > 10){
        console.log(`The value of ${paramOne} is true.`);
    }
    console.log("After if statement");
};
// ifExampleFunc(100);

// If/else statement
const elseStatementExample = (paramOne) => {
    if(paramOne == "JavaScript"){
        console.log("The condition was true.");
    } else {
        console.log("The condition was false.");
    }
};
// elseStatementExample("JavaScript");

const ifElseStatementExample = (paramOne) => {
    if(paramOne == "JavaScript"){
        console.log("The condition was true.");
    } else if(paramOne <= 10){
        console.log("The value was less than or equal to ten.");
    } else if(paramOne >= 10){
        console.log("The value was greater than or equal to ten.");
    } else {
        console.log("The last else block got executed.");
    }
};
// ifElseStatementExample("abc");

const logicalIfStatement = (paramOne, paramTwo) => {
    if(paramOne = 10 && paramTwo > 10){
        console.log("Both conditions were true.");
    } else console.log("Both conditions were false.");

    if (paramOne <= 9 || paramTwo > 20){
        console.log("One of the conditions was true.");
    } else console.log("None of the conditions was true.");
};
// logicalIfStatement(10, 12);

const ternaryOperatorFunc = (paramOne) => {
    const result = paramOne > 10 ? "The value inside paramOne is greater than ten." : "The value inside paramOne is NOT greater than ten."
    console.log(result);
};
// ternaryOperatorFunc(12);

// Switch statement
const favoriteColor = (color) => {
    switch (color) {
        case "Blue":
            console.log(`My favorite color is ${color}.`);
            break;
        case "Red":
        case "red":
        case "RED":
            console.log(`My favorite color is ${color}.`);
            break;
        case 10:
            if (color % 2 == 0){
                console.log("Case 10 was met and the value inside color was an even number");
            }
            break;
        default:
            console.log(`My favorite color is ${color}. DEFAULT!`);
            break;
    }
};
favoriteColor("RED");