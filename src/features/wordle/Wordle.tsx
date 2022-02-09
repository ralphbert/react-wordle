import { Link } from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {Keyboard} from "./Keyboard";
import {selectWorldeRows, wordleType} from "./store/wordleSlice";
import {WordleRow} from "./WordleRow";

export function Wordle() {
  const dispatch = useAppDispatch();
  const style = {
    marginBottom: '2em'
  };

  function onEnter(char : string) {
    dispatch(wordleType(char));
  }

  const rows = useAppSelector(selectWorldeRows);

  return (
  <> 
    <div className="wordle" style={style}>
      {rows.map((row, i) => <WordleRow row={row} key={i}/>)}
    </div>
    <Keyboard onEnter={onEnter} /> 
    <Link to="/">Create</Link>
  </>
  );
}