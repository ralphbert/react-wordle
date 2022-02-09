import {useAppSelector} from '../../store/hooks';
import {selectStats} from '../wordle/store/wordleSlice';
import {GuessGrid} from './GuessGrid';
import {guessCount} from '../../config';
import {CreateLink} from '../wordle/CreateLink';

export function Stats() {
    const stats = useAppSelector(selectStats);

    return (
        <div>
            <div>
                <GuessGrid guesses={stats.guesses} />
                <p>{stats.guesses.length}/{guessCount}</p>
            </div>

            <CreateLink />
        </div>
    )
}
