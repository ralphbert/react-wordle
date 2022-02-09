import { useState } from "react";
import { Keyboard } from "../wordle/Keyboard";
import { LetterPos, WordleGuessRow } from "../wordle/store/wordleSlice";
import { WordleRow } from "../wordle/WordleRow";

export function Create() {
  function onInput(char : string) {
    //setWord(event.currentTarget.value.trim());
    setWord(state => {
      if (state.length >= 5) {
        return state;
      }

      return state + char;
    });
  }

  const [word,
    setWord] = useState('');

  const isInvalid = word.length !== 5;

  const wordleRow : WordleGuessRow = {
    chars: word
      .split('')
      .map(c => ({char: c, state: LetterPos.notFound})),
    state: 'guess'
  };

  return (
    <div>
      <h1>Create Wordle</h1>

      <WordleRow row={wordleRow}/>

      <Keyboard onEnter={onInput}/>
    </div>
  )
}