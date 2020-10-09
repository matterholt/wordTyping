export function RandomWord(number = 10, wordArr) {
  // create a list of word index and the filter out the word list that matches the list
  let wordList = [];
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const maxWordCount = wordArr.length;
  while (wordList.length < number) {
    const randomWordIndex = getRandomInt(maxWordCount);
    wordList.push(wordArr[randomWordIndex]);
  }
  return wordList;
}
