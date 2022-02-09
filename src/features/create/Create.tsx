import {useState} from 'react';
import {Keyboard} from '../keyboard/Keyboard';
import {LetterPos, WordleGuessRow} from '../wordle/store/wordleSlice';
import {WordleRow} from '../wordle/WordleRow';
import {arrayWithLength, encode, wordLength} from '../../config';
import {CopyBox} from './CopyBox';
import {t} from '../../lib/lang';
import {copy} from '../../lib/copy';

export function Create() {
    const [word, setWord] = useState('');

    let url = '';

    if (word.length === 5) {
        url = `${window.location.href}start?word=${encode(word)}`;
    }

    function onInput(char: string): void {
        setWord(state => {
            if (state.length >= wordLength) {
                return state;
            }

            return state + char;
        });
    }

    function onEnter() {
        if (url) {
            copy(url);
        }
    }

    function onDelete() {
        setWord(state => {
            const parts = state.split('');
            parts.pop();
            return parts.join('');
        });
    }

    const chars = arrayWithLength(wordLength).map((i) => {
        return word.charAt(i);
    });

    const wordleRow: WordleGuessRow = {
        chars: chars
            .map(c => ({char: c, state: LetterPos.notFound})),
        state: 'guess'
    };

    return (
        <div>
            <h1>{t('createTitle')}</h1>

            <p>{t('createDescription')}</p>

            <div className="mb-md">
                <WordleRow row={wordleRow}/>
            </div>

            <Keyboard onKeyPress={onInput} onEnter={onEnter} onDelete={onDelete}/>

            {url && <CopyBox content={url}/>}
        </div>
    )
}
