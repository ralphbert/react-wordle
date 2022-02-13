import {LetterPos} from '../wordle/store/wordleSlice';

export interface KeyboardKeyProps {
    onKeyPress: (key: string) => void;
    char: string;
    status?: LetterPos;
}

export function KeyboardKey({onKeyPress, char, status}: KeyboardKeyProps) {
    return (
        <button
            onClick={() => onKeyPress(char)}
            type="button"
            className={'keyboard-key' + (status ? ' ' + status : '')}>
            {(char === 'del') ? (
                <svg className="delete-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path fill="currentColor"
                          d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z" />
                </svg>
            ) : char === 'enter' ? (
                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="none">
                        <g id="e78b735d304681cfe676b065f0c52415" transform="translate(1.000000, 2.000000)" fill="currentColor">
                            <path d="M17.8092891,9.16970948 C17.6662809,10.1889189 16.8177655,11.0112716 15.7563268,11.1192253 L8.8919327,11.1192253 L8.8919327,6.67090014 L0,13.3354501 L8.8919327,20 L8.8919327,15.5739006 L17.7743315,15.5739006 L17.7743315,15.5484998 C20.2340727,15.5421495 22.2202979,13.5767582 22.2298317,11.1160502 L22.2330097,11.1160502 L22.2330097,0 L17.8092891,0 L17.8092891,9.16970948 Z" id="Path" />
                        </g>
                    </g>
                </svg>
            ) : char}

        </button>
    )
}
