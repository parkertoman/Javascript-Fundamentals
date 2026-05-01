// const programmingLanguages = new Map();
// programmingLanguages.set("JS", "JavaScript");
// programmingLanguages.set("PY", "Python");
// programmingLanguages.set("JA", "Java");
// programmingLanguages.set("RR", "Ruby on Rails");

const programmingLanguages = new Map([
    ["JS", "JavaScript"], 
    ["PY", "Python"], 
    ["JA", "Java"], 
    ["RR", "Ruby on Rails"]
]);

// console.log(programmingLanguages.size);
// programmingLanguages.clear();

// const result = programmingLanguages.delete("Rr");
// console.log(result);

// const language = programmingLanguages.get("JS");
// console.log(language);

// console.log(programmingLanguages.has("Ja"));

// Loop a map collection
// for (let lang of programmingLanguages){
//     console.log(lang);
// }

// for (let key of programmingLanguages.keys()) {
//     console.log(key);
// }

// for (let item of programmingLanguages.entries()) {
//     console.log(item);
// }

// function processData(value, key){
//     console.log(`The key is ${key}. The value is ${value}.`);
// }

// programmingLanguages.forEach(processData);

// programmingLanguages.forEach((value, key) => {
//     console.log(`The key is ${key}. The value is ${value}.`);
// })

// programmingLanguages.forEach(function processData(value, key) {
//     console.log(`The key is ${key}. The value is ${value}.`);
// })

// Create a set
// const letters = new Set();

// Add values to a Set
// letters.add("a");
// letters.add("b");
// letters.add("c");

// Duplicate example
const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");

console.log(letters);
// Output: Set(3) { 'a', 'b', 'c' }