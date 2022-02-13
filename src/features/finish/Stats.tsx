import {useAppSelector} from '../../store/hooks';
import {selectResultGrid, selectStats, selectWord} from '../wordle/store/wordleSlice';
import {GuessGrid} from './GuessGrid';
import {guessCount} from '../../config';
import {CreateLink} from '../wordle/CreateLink';
import {t} from '../../lib/lang';
import {copy} from '../../lib/copy';
import {getWordUrl, resultGridToString} from '../../lib/helpers';
import {Button} from '../../ui/Button';
import {Support} from '../wordle/Support';

export function Stats() {
    const stats = useAppSelector(selectStats);
    const word = useAppSelector(selectWord);
    const resultGrid = useAppSelector(selectResultGrid);

    function onClick() {
        copy(
            `${t('tries')}: ${stats.guesses.length}/${guessCount}\n` +
            resultGridToString(resultGrid) +
            '\n\n' + t('tryYourself') + '\n' + getWordUrl(word) +
            '\n\nby https://www.harrer.io' +
            '\nBuy me a coffee: https://www.paypal.com/paypalme/ralphharrer',
        )
    }

    return (
        <div className="mt-6">
            <div>
                <div className="text-center">
                    <div className="inline-block mx-auto border border-gray-200 border-solid p-1">
                        <p>{stats.guesses.length}/{guessCount}</p>
                        <GuessGrid guesses={stats.guesses}/>
                    </div>
                </div>

                <Button className="mt-4" variant="success" onClick={onClick}>{t('share')}</Button>
            </div>
            <hr className="my-4"/>
            <CreateLink/>
            <hr className="my-4"/>
            <Support/>
        </div>
    )
}
