import {GuessChar} from '../wordle/store/wordleSlice';
import {stateToChar} from '../../lib/helpers';

export interface GuessGridProps {
    guesses: GuessChar[][]
}

export function GuessGrid({guesses}: GuessGridProps) {
    return (
        <div>
            {guesses.map((word, wordIndex) => (
                <span key={wordIndex}>
                    {word.map((char, charIndex) => (
                        <span className="m-[1px] inline-block w-[1.25em] text-center" key={charIndex}>{stateToChar(char.state)}</span>
                    ))}
                    <br/>
                </span>
            ))}
        </div>
    )
}
