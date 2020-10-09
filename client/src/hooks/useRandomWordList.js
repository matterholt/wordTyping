import React, { useState } from "react";
import { savedWordTemp } from "../assets/savedWordsTemp";
import { RandomWord } from "../helpers/randomWordList";

function useRandomWordList() {
  const [wordsToType, setWordsToType] = useState([]);

  function GetCustomWordList(numberOfWords) {
    // remove logic into custom hook,
    // words that can be saved on local storage for just fun,
    const words = savedWordTemp
      .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")
      .split(" ");
    const chosenWords = RandomWord(numberOfWords, words);
    setWordsToType(chosenWords);
  }

  return { wordsToType, GetCustomWordList };
}

export { useRandomWordList };
