import {KeyboardKey} from './KeyboardKey';
import {CharUsage} from '../wordle/store/wordleSlice';

export interface KeyboardRowProps {
    chars: string[];
    onKeyPress: (char: string) => void;
    charUsage?: CharUsage;
}

export function KeyboardRow({chars, onKeyPress, charUsage}: KeyboardRowProps) {
    const rowStyle = {
    };

    return (
        <div className="keyboard-row" style={rowStyle}>
            {chars.map((char) => (
                <KeyboardKey status={charUsage?.[char]} key={char} onKeyPress={onKeyPress} char={char}/>
            ))}
        </div>
    )
}
