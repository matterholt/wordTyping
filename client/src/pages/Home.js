import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";

import { savedWordTemp } from "../assets/savedWordsTemp";

export const Home = () => {
  const [numberOfWords, seNumberOfWords] = useState(5);
  const [wordsToType, setWordsToType] = useState([]);

  function GetRandomWordList() {
    // fetches randoms word from some api
  }
  function RandomWord(number, wordArr) {
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
  function GetCustomWordList() {
    // words that can be saved on local storage for just fun,
    const words = savedWordTemp
      .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")
      .split(" ");
    //
    const choosenWords = RandomWord(numberOfWords, words);
    console.log(choosenWords);
    setWordsToType(choosenWords);
  }
  return (
    <div>
      <Typography variant="h1" gutterBottom>
        Typing Practice
      </Typography>
      <Typography variant="body1">Start Learning how to type words</Typography>
      <ButtonGroup
        color="primary"
        aria-label="small outlined primary button group"
      >
        <Button onClick={GetCustomWordList}>Custom List</Button>
        <Button>Random List</Button>
      </ButtonGroup>

      <Container maxWidth="sm">
        <Button
          variant="contained"
          size="large"
          color="primary"
          href="/TypingPractice"
        >
          Typing Practice
        </Button>
      </Container>
    </div>
  );
};
