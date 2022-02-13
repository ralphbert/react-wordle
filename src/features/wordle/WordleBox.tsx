import { WordleGuessChar } from "./store/wordleSlice";

export function WordleBox({ guess, animated }: { guess: WordleGuessChar; animated?: boolean }) {
  const style = {}

  return (
    <div className={
      "wordle-box w-12 h-12 items-center justify-center flex border border-solid border-gray-300 " + (guess.state ? guess.state : '') + (animated ? ' animate__animated animate__flipInY' : '')
    } style={style}>
      {guess.char}
    </div>
  );
}
