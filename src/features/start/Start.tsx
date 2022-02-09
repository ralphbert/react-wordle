import {useAppDispatch} from '../../store/hooks';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {wordleStart} from '../wordle/store/wordleSlice';
import {t} from '../../lib/lang';

export function Start() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());

        if (params.word) {
            dispatch(wordleStart(params.word));
            navigate('/play');
        }
    }, []);

    return (
        <div className="animate__animated animate__bounceInUp">{t('errorStartFailed')}</div>
    );
}
