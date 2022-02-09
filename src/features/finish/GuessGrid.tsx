import {GuessChar, LetterPos} from '../wordle/store/wordleSlice';

export interface GuessGridProps {
    guesses: GuessChar[][]
}

export function GuessGrid({ guesses }: GuessGridProps) {
    return (
        <div>
            {guesses.map((word, wordIndex) => (
                <span key={wordIndex}>
                    {word.map((char, charIndex) => (
                        <span style={{ margin: '1px' }} key={charIndex}>
                            { char.state === LetterPos.notFound && '⬜' }
                            { char.state === LetterPos.exists && '🟨' }
                            { char.state === LetterPos.correct && '🟩' }
                        </span>
                    ))}
                    <br />
                </span>
            ))}
        </div>
    )
}

/*
RDLE🇩🇪 373 2/6

⬜⬜🟩🟩🟨
🟩🟩🟩🟩🟩
by @dewordle

 */
