import {t} from '../../lib/lang';
import {Modal} from '../modal/Modal';
import {Stats} from './Stats';
import {useAppSelector} from '../../store/hooks';
import {selectWord} from '../wordle/store/wordleSlice';

export function Failure() {
    const word = useAppSelector(selectWord);

    return (
        <Modal>
            <h1 style={{ marginBottom: 0, marginTop: 0, }}>{t('failureTitle')}</h1>

            <p>{t('failureText')}</p>
            <p><strong style={{ textTransform: 'uppercase' }}>{ word }</strong></p>

            <Stats />
        </Modal>
    )
}
