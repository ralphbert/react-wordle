import {t} from '../../lib/lang';
import {Modal} from '../modal/Modal';
import {Stats} from './Stats';
import {useAppSelector} from '../../store/hooks';
import {selectWord} from '../wordle/store/wordleSlice';
import {Title} from '../../ui/Title';

export function Failure() {
    const word = useAppSelector(selectWord);

    return (
        <Modal>
            <Title>{t('failureTitle')}</Title>

            <p>{t('failureText')}</p>
            <p><strong style={{ textTransform: 'uppercase' }}>{ word }</strong></p>

            <Stats />
        </Modal>
    )
}
