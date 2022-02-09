import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {Keyboard} from '../keyboard/Keyboard';
import {isValidWord, selectLetters, selectWordleRows, wordleDelete, wordleEnter, wordleType} from './store/wordleSlice';
import {WordleRow} from './WordleRow';
import {t} from '../../lib/lang';

export function Wordle() {
    const dispatch = useAppDispatch();
    const style = {
        marginBottom: '2em'
    };

    function onKeyPress(char: string) {
        dispatch(wordleType(char));
    }

    function onDelete() {
        dispatch(wordleDelete());
    }

    function onEnter() {
        dispatch(wordleEnter());
    }

    const isValid = useAppSelector(isValidWord);

    const rows = useAppSelector(selectWordleRows);
    const charUsage = useAppSelector(selectLetters);
    const linkToWordle = <Link to="/">{t('createYourOwn')}</Link>;

    return (
        <>
            {(isValid) ? (
                <div>
                    <h1>{t('playTitle')}</h1>
                    <div className="wordle" style={style}>
                        {rows.map((row, i) => <WordleRow row={row} key={i}/>)}
                    </div>
                    <Keyboard charUsage={charUsage} onKeyPress={onKeyPress} onEnter={onEnter} onDelete={onDelete}/>
                    {linkToWordle}
                </div>
            ) : (
                <div className="animate__animated animate__bounce">
                    <h1>{t('errorInvalidWordTitle')}</h1>
                    <p>{t('errorInvalidWord')}</p>
                    <div>{linkToWordle}</div>
                </div>
            )}
        </>
    );
}
