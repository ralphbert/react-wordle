import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {Keyboard} from '../keyboard/Keyboard';
import {
    isValidWord,
    selectIsLost,
    selectIsSuccess,
    selectLetters,
    selectWordleRows,
    wordleDelete,
    wordleEnter,
    wordleType
} from './store/wordleSlice';
import {WordleRow} from './WordleRow';
import {t} from '../../lib/lang';
import {Success} from '../finish/Success';
import {Failure} from '../finish/Failure';
import {CreateLink} from './CreateLink';
import {Support} from './Support';
import {Bar} from '../bar/Bar';
import {Link} from 'react-router-dom';
import {Layout} from '../../ui/Layout';
import {useEffect, useState} from 'react';

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
    const isSuccess = useAppSelector(selectIsSuccess);
    const isLost = useAppSelector(selectIsLost);

    const rows = useAppSelector(selectWordleRows);
    const charUsage = useAppSelector(selectLetters);
    const linkToWordle = <CreateLink/>;
    const linkButton = <Link className="py-1 px-2 border border-solid border-gray-500 rounded"
                             to="/">{t('createYourOwnButton')}</Link>;
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isSuccess || isLost) {
            const timeout = setTimeout(() => setShow(true), 1000);
            return () => {
                clearTimeout(timeout);
                setShow(false);
                console.log('clear timeout');
            }
        }
    }, [isSuccess, isLost]);

    return (
        <>
            {(isValid) ? (
                <>
                    <Layout header={
                        <Bar rightContent={linkButton}>
                            {t('playTitle')}
                        </Bar>
                    } main={
                        <div>
                            <div className="wordle" style={style}>
                                {rows.map((row, i) => <WordleRow row={row} key={i}/>)}
                            </div>
                            {isSuccess && show && <Success/>}
                            {isLost && show && <Failure/>}
                        </div>
                    } footer={
                        <Keyboard charUsage={charUsage} onKeyPress={onKeyPress} onEnter={onEnter} onDelete={onDelete}/>
                    }/>
                </>
            ) : (
                <Layout
                    header={<Bar>{t('errorInvalidWordTitle')}</Bar>}
                    main={
                        <>
                            <p className="animate__animated animate__bounce">{t('errorInvalidWord')}</p>
                            <div className="my-2">{linkToWordle}</div>
                        </>
                    }
                    footer={<Support/>}
                />
            )}
        </>
    );
}
