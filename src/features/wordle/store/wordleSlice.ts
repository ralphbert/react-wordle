import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../../store/store';
import {arrayWithLength, decode, encode, guessCount, wordLength} from '../../../config';

export enum LetterPos {
    notFound = 'not-found',
    exists = 'exists',
    correct = 'correct',
}

export interface CharUsage {
    [key: string]: LetterPos;
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

        return {char, state: letterPos};
    });
}

export interface WordleState {
    guesses: GuessChar[][];
    currentInput: string[];
    word: string,
    charUsage: CharUsage;
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
    word: '',
    charUsage: {},
};

export const wordleSlice = createSlice({
    name: 'wordle',
    initialState,
    reducers: {
        wordleDelete: (state) => {
            if (state.currentInput.length > 0) {
                const arr = [...state.currentInput];
                arr.pop();
                state.currentInput = [...arr];
            }
        },
        wordleEnter: (state) => {
            if (state.currentInput.length === wordLength) {
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
        },
        wordleType: (state, action: PayloadAction<string>) => {
            if (state.currentInput.length < wordLength) {
                state.currentInput = [...state.currentInput, action.payload];
            }
        },
        wordleStart: (state, action: PayloadAction<string>) => {
            const word = decode(action.payload);

            console.log('wordleStart', word);

            state.currentInput = [];
            state.guesses = [];
            state.charUsage = {};

            if (word.length === wordLength) {
                state.word = word
            } else {
                state.word = '';
            }
        }
    }
});

export const isValidWord = (state: RootState) => state.wordle.word.length === wordLength;
export const selectLetters = (state: RootState) => state.wordle.charUsage;
export const selectWordleRows = (state: RootState): WordleGuessRow[] => {
    const result: WordleGuessRow[] = [];

    for (let i = 0; i < guessCount; i++) {
        const guess = state.wordle.guesses[i];

        const guessRow: WordleGuessRow = {
            chars: guess || arrayWithLength(wordLength).map(() => {
                return {
                    char: null,
                    state: LetterPos.notFound,
                } as WordleGuessChar
            }),
            state: guess ? 'done' : 'guess',
        };

        result.push(guessRow);
    }

    if (state.wordle.guesses.length < guessCount) {
        result[state.wordle.guesses.length] = {
            state: 'guess',
            chars: arrayWithLength(wordLength).map((_, i) => {
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

export const {wordleType, wordleDelete, wordleEnter, wordleStart} = wordleSlice.actions;
export default wordleSlice.reducer;
