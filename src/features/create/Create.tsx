import {useState} from 'react';
import {Keyboard} from '../keyboard/Keyboard';
import {LetterPos, WordleGuessRow} from '../wordle/store/wordleSlice';
import {WordleRow} from '../wordle/WordleRow';
import {arrayWithLength, wordLength} from '../../config';
import {CopyBox} from './CopyBox';
import {t} from '../../lib/lang';
import {copy} from '../../lib/copy';
import {getWordUrl} from '../../lib/helpers';
import {Bar} from '../bar/Bar';
import {Layout} from '../../ui/Layout';

export function Create() {
    const [word, setWord] = useState('');

    let url = '';

    if (word.length === 5) {
        url = getWordUrl(word);
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
        <Layout
            header={
                <Bar>{t('createTitle')}</Bar>
            }
            main={
                <div className="mx-2">

                    <p className="mb-4">{t('createDescription')}</p>

                    <div className="mb-8">
                        <WordleRow row={wordleRow}/>
                    </div>

                    {url && <CopyBox content={url}/>}
                </div>
            }
            footer={
                <Keyboard onKeyPress={onInput} onEnter={onEnter} onDelete={onDelete}/>
            }
        >
        </Layout>
    )
}
