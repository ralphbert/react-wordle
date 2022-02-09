import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";

export enum LetterPos {
  notFound = 'not-found',
  exists = 'exists',
  correct = 'correct',
}

const letterPosMap = {
  [LetterPos.notFound]: 0,
  [LetterPos.exists]: 1,
  [LetterPos.correct]: 2,
};

function getBestState(char: string, input: WordleGuessChar[]): WordleGuessChar {
  return input.filter(i => i.char === char).reduce((best, cur) => {
    if (letterPosMap[best.state] < letterPosMap[cur.state]) {
      return cur;
    } else {
      return best;
    }
  }, {
    char: char,
    state: LetterPos.notFound,
  });
}

function getWordGuessResult(guess: string[], word: string[]): GuessChar[] {
  return guess.map((char, i) => {
    let letterPos = LetterPos.notFound;

    if (word[i] === char) {
      letterPos = LetterPos.correct;
    } else if (word.includes(char)) {
      letterPos = LetterPos.exists;
    }

    return { char, state: letterPos };
  });
}

export interface WordleState {
  guesses: GuessChar[][];
  currentInput: string[];
  word: string,
  charUsage: {
    [key: string]: LetterPos,
  };
}

export interface GuessChar {
  char: string;
  state: LetterPos;
}

export interface WordleGuessRow {
  chars: WordleGuessChar[];
  state: 'guess' | 'done';
}

export interface WordleGuessChar {
  char: string | null;
  state: LetterPos;
}

const initialState: WordleState = {
  currentInput: [],
  guesses: [],
  word: 'speck',
  charUsage: {},
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
        const word = state.word.split('');
        const guess = [...state.currentInput];
        const result = getWordGuessResult(guess, word);
        state.guesses.push([...result]);
        state.currentInput = [];

        result.forEach((res) => {
          const oldCharState = state.charUsage[res.char];
          const bestState = getBestState(res.char, result);

          if (oldCharState == null) {
            state.charUsage = {
              ...state.charUsage,
              [res.char]: bestState.state,
            };
          } else {
            state.charUsage = {
              ...state.charUsage,
              [res.char]: letterPosMap[res.state] < letterPosMap[oldCharState] ? oldCharState : res.state,
            };
          }
        });
      }
    }
  }
});

export const selectCurrentInput = (state: RootState) => state.wordle.currentInput;
export const selectGuesses = (state: RootState) => state.wordle.guesses;
export const selectLetters = (state: RootState) => state.wordle.charUsage;
export const selectWorldeRows = (state: RootState): WordleGuessRow[] => {
  const result: WordleGuessRow[] = [];
  const word = state.wordle.word.split('');

  for (let i = 0; i < 6; i++) {
    const guess = state.wordle.guesses[i];

    const guessRow: WordleGuessRow = {
      chars: guess || Array.from(Array(5).keys()).map(() => {
        return {
          char: null,
          state: LetterPos.notFound,
        } as WordleGuessChar
      }),
      state: guess ? 'done' : 'guess',
    };

    result.push(guessRow);
  }

  if (state.wordle.guesses.length < 6) {
    result[state.wordle.guesses.length] = {
      state: 'guess',
      chars: Array.from(Array(5).keys()).map((_, i) => {
        const c = state.wordle.currentInput[i];
        return {
          char: c,
          state: LetterPos.notFound,
        }
      })
    };
  }

  return result;
};

export const { wordleType } = wordleSlice.actions;
export default wordleSlice.reducer;
