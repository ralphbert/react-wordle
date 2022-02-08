import { useAppDispatch } from "../../store/hooks";
import { wordleType } from "./store/wordleSlice";

export function Keyboard() {
  const chars = [
    'qwertzuiop'
      .toUpperCase()
      .split(''),
    'asdfghjkl'
      .toUpperCase()
      .split(''),
    'yxcvbnm'
      .toUpperCase()
      .split('')
  ];

  const dispatch = useAppDispatch();

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
    backgroundColor: '#ccc',
    padding: '1em 0.75em',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.25'
  }

  function onKeyPress(code : string) {
    console.log('code', code)
    dispatch(wordleType(code));
  }

  return (
    <div className="keyboard" style={keyboardStyle}>
      {chars.map((row, rowIndex) => <div className="keyboard-row" style={rowStyle} key={rowIndex}>
        {row.map((char, charIndex) => <button
          onClick={() => onKeyPress(char)}
          type="button"
          className="keyboard-key"
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