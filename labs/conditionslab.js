const ifElseFunction = (paramOne, paramTwo) => {
    if(paramOne == paramTwo){
        console.log(`${paramOne} has the same value as ${paramTwo}.`);
    } else {
        console.log(`${paramOne} does not have the same value as ${paramTwo}.`);
    }
};
ifElseFunction(10, 10);
ifElseFunction("Dog", "Cat");

const switchFunction = (grade) => {
    switch(grade) {
        case "E":
            console.log("Excellent");
            break;
        case "V":
            console.log("Very Good");
            break;
        case "G":
            console.log("Good");
            break;
        case "A":
            console.log("Average");
            break;
        case "F":
            console.log("Fail");
            break;
        default:
            console.log("Not a valid grade");

    }
};
switchFunction("V");
switchFunction(10);