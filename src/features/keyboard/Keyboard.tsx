import {chars} from '../../config';
import {CharUsage} from '../wordle/store/wordleSlice';
import {KeyboardRow} from './KeyboardRow';

export interface KeyboardProps {
    onEnter: () => void;
    onDelete: () => void;
    onKeyPress: (char: string) => void;
    charUsage?: CharUsage;
}

export function Keyboard({onEnter, onKeyPress, onDelete, charUsage}: KeyboardProps) {
    function onInput(char: string) {
        if (char === 'enter') {
            onEnter();
        } else if (char === 'del') {
            onDelete();
        } else {
            onKeyPress(char);
        }
    }

    return (
        <div className="keyboard">
            {chars.map(
                (row, index) =>
                    <KeyboardRow key={index} charUsage={charUsage} chars={row} onKeyPress={onInput}/>
            )}
        </div>
    )
}
