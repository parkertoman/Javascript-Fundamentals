function pemdas(){
    console.log(10 + 32 * 12 / 3);
    console.log((10 + 32) * (12 / 3));
};
pemdas();

function assignment(paramOne, paramTwo){
    console.log(paramOne += paramTwo);
    console.log(paramOne *= paramTwo);
    console.log(paramOne %= paramTwo);
};
assignment(4, 2);

function comparison(paramOne, paramTwo){
    const comparisonOne = paramOne == paramTwo;
    const comparisonTwo = paramOne != paramTwo;
    const comparsionThree = paramOne === paramTwo;
    console.log(`'==' asks if ${paramOne} has the same value as "${paramTwo}". The answer is ${comparisonOne}.`);
    console.log(`'!=' asks if ${paramOne} does not have the same value as "${paramTwo}". The answer is ${comparisonOne}.`);
    console.log(`'===' asks if ${paramOne} has the same value and data type as "${paramTwo}". The answer is ${comparisonOne}.`);
};
comparison(4, "4");