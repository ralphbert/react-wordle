import { WordleGuessChar } from "./store/wordleSlice";

export function WordleBox({ guess }: { guess: WordleGuessChar }) {
  const style = {
    border: '1px solid #ccc',
    width: '1.5em',
    height: '1.5em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5em',
  }

  return (
    <div className={"wordle-box " + guess.state} style={style}>
      {guess.char}
    </div>
  );
}