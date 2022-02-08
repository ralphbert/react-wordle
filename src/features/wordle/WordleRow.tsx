import { WordleGuessRow } from "./store/wordleSlice";
import { WordleBox } from "./WordleBox";

export function WordleRow({ row }: { row: WordleGuessRow }) {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.25em',
    marginBottom: '0.25em',
  };

  return (
    <div className={"wordle-row " + row.state} style={style}>
      { row.chars.map((char, i) => (<WordleBox guess={char} key={i} />)) }
    </div>
  );
}