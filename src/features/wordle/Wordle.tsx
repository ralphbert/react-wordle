import { useAppSelector } from "../../store/hooks";
import { Keyboard } from "./Keyboard";
import { selectWorldeRows } from "./store/wordleSlice";
import { WordleRow } from "./WordleRow";

export function Wordle() {
  const style = {
    marginBottom: '2em'
  };

const rows = useAppSelector(selectWorldeRows);

  return (
    <>
    <div className="wordle" style={style}>
      { rows.map((row, i) => <WordleRow row={row} key={i} />) }
    </div>
    <Keyboard />
    </>
  );
}