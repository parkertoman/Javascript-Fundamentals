function sentenceFunction(noun, verb){
    return noun + " " + verb + ".";
};
console.log(sentenceFunction("I", "ran"));

function addFunction(valueOne, valueTwo = 15){
    return valueOne + valueTwo;
};
console.log(addFunction(14));
console.log(addFunction(19));

const sentenceFunctionTwo = (wordOne, wordTwo, wordThree) => {
    return wordOne + " " + wordTwo + " " + wordThree + ".";
}
console.log(sentenceFunctionTwo("I", "like", "pizza"));