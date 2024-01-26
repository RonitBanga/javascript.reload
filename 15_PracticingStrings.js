console.log("World\"".length);

const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'foxx';
console.log(sentence.includes(word));
console.log(`The word "${word}" ${sentence.includes(word) ? "is" : "is not"} in the sentence.`);

let text = "Hello world, welcome to the universe.";
let result = text.startsWith("Hello");
console.log(result);
result = text.startsWith("Universe.");
console.log(result);

console.log(text.toLowerCase());

let str = "Please give Rs 1000";
let amount = Number.parseInt(str.slice("Please give Rs ".length));
console.log(amount);
