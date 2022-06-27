const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function toUpperCaseFirstLetter(sentence){
  console.log('sentence', sentence.split(" "))
  let words = sentence.split(" ")
   let capitalWords = words.map(function(word){
    //console.log('word', word.charAt(0).toUpperCase() + word.slice(1))
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
  console.log('capitalWords', capitalWords.join(" "))
  return capitalWords.join(" ")
}
const titleCased = () => {
  return tutorials.map(toUpperCaseFirstLetter)
}

