import { chars } from "../../config";
import { useAppSelector } from "../../store/hooks";
import { selectLetters } from "./store/wordleSlice";

export interface KeyboardProps {
  onEnter : (char : string) => void;
}

export function Keyboard({onEnter} : KeyboardProps) {
  const keyboardStyle = {};

  const rowStyle = {
    display: 'flex',
    gap: '0.5em',
    marginBottom: '0.5em',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const keyStyle = {
    borderRadius: '4px',
    padding: '1em 0.75em',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.25'
  }

  function onKeyPress(code : string) {
    onEnter(code);
    // dispatch(wordleType(code));
  }

  const letters = useAppSelector(selectLetters);

  return (
    <div className="keyboard" style={keyboardStyle}>
      {chars.map((row, rowIndex) => <div className="keyboard-row" style={rowStyle} key={rowIndex}>
        {row.map((char, charIndex) => <button
          onClick={() => onKeyPress(char)}
          type="button"
          className={"keyboard-key " + letters[char]}
          style={keyStyle}
          key={charIndex}>{char}</button>)}
        {rowIndex === 1
          ? (
            <button
              onClick={() => onKeyPress('del')}
              type="button"
              className="keyboard-key"
              style={keyStyle}>Backspace</button>
          )
          : null}
        {rowIndex === 2
          ? (
            <button
              onClick={() => onKeyPress('enter')}
              type="button"
              className="keyboard-key"
              style={keyStyle}>Enter</button>
          )
          : null}
      </div>)}
    </div>
  )
}