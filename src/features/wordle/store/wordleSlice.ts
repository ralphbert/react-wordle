import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";

export interface WordleState {
  guesses: string[][];
  currentInput: string[];
  word: string,
}

export interface WordleGuessRow {
  chars: WordleGuessChar[];
  state: 'guess' | 'done';
}

export interface WordleGuessChar {
  char: string | null;
  state: 'correct' | 'exists' | null;
}

const initialState: WordleState = {
  currentInput: ['A', 'B', 'C', 'D', 'E'],
  guesses: [],
  word: 'speck',
};

export const wordleSlice = createSlice({
  name: 'wordle',
  initialState,
  reducers: {
    wordleType: (state, action: PayloadAction<string>) => {
      console.log('worldeType', action);
      const special = ['del', 'enter'];

      if (state.currentInput.length < 5 && !special.includes(action.payload)) {
        state.currentInput = [...state.currentInput, action.payload];
      }

      if (action.payload === 'del' && state.currentInput.length > 0) {
        const arr = [...state.currentInput];
        arr.pop();
        state.currentInput = [...arr];
      }

      if (action.payload === 'enter' && state.currentInput.length === 5) {
        state.guesses.push([...state.currentInput]);
        state.currentInput = [];
      }
    }
  }
});

export const selectCurrentInput = (state: RootState) => state.wordle.currentInput;
export const selectGuesses = (state: RootState) => state.wordle.guesses;
export const selectWorldeRows = (state: RootState): WordleGuessRow[] => {
  const result: WordleGuessRow[] = [];
  const word = state.wordle.word.split('');

  for (let i = 0; i < 6; i++) {
    const guess = state.wordle.guesses[i];

    const guessRow: WordleGuessRow = {
      chars: [],
      state: guess ? 'done' : 'guess',
    };

    for (let j = 0; j < 5; j++) {
      const currentChar = (guess?.[j].toLowerCase() || null);
      let charOnRightPosition = (currentChar && word.indexOf(currentChar) === j) || false;
      const includesChar = (currentChar && word.includes(currentChar)) || false;

      const char: WordleGuessChar = {
        char: currentChar,
        state: charOnRightPosition ? 'correct' : includesChar ? 'exists' : null,
      };

      guessRow.chars.push(char);
    }

    result.push(guessRow);
  }

  if (state.wordle.guesses.length < 6) {
    result[state.wordle.guesses.length] = {
      state: 'guess',
      chars: Array.from(Array(5).keys()).map((_, i) => {
        const c = state.wordle.currentInput[i];
        console.log('key', i, c);

        return {
          char: c,
          state: null,
        }
      })
    };
  }

  return result;
};

export const { wordleType } = wordleSlice.actions;
export default wordleSlice.reducer;
