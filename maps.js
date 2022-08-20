const testWord = 'JavaScript';
const words = ['cat', 'dog', 'variableName', 'HORSE'];

//We want to know the lenght of each word -> [ 6, 6, 12, 6]

 const wordLenghts = words.map((word) => {
    return word.length;
    
 });

 console.log(wordLenghts)

 //We want all words to be in ALLCAPS

 //console.log(testWord.toUpperCase());
 const allInCaps = words.map((word) => {
    return word.toUpperCase();
 });

 console.log(allInCaps);

 //We want to all words to be completely lowercase

 //console.log(testWord.toLowerCase());

 const allInLower = words.map((word) => {
    return word.toLowerCase();
 });

 console.log(allInLower);

 //We want to create string to learn the alphabet like: B for Banana, P for Pencil

//  console.log(testWord[0] + ' is for ' + testWord);
//  console.log(`${testWord[0]} is for ${testWord}`)

const learnAlphabet = words.map((word) => {
    return `${word.toUpperCase()[0]} is for ${word}`;

});
console.log(learnAlphabet);