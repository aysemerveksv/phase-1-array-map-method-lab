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

const titleCased = () => {
  return tutorials
}

const titleCaseTutorials = tutorials.map(tutorial => {
  const words = tutorial.split(' ');
  const capitalizedWords = words.map(word => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  });
  return capitalizedWords.join(' ');
});

// Sort the titleCaseTutorials array to match the order of the original tutorials array
const sortedTitleCaseTutorials = titleCaseTutorials.sort((a, b) => {
  return tutorials.indexOf(a) - tutorials.indexOf(b);
});

console.log(sortedTitleCaseTutorials);

