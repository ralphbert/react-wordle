import {LetterPos} from '../features/wordle/store/wordleSlice';
import {encode} from '../config';

export function stateToChar(letterPos: LetterPos): string {
    switch (letterPos) {
        case LetterPos.correct:
            return '🟩';
        case LetterPos.exists:
            return '🟨';
        default:
            return '⬜';
    }
}

export function resultGridToString(resultGrid: string[][]): string {
    return resultGrid.map(row => {
        return row.join('');
    }).join('\n')
}

export function getWordUrl(word: string): string {
    return `${getUrl()}/start?word=${encode(word)}`;
}

export function getUrl() {
    return window.location.origin + '/' + process.env.REACT_APP_BASENAME
}
