import {t} from '../../lib/lang';
import {Modal} from '../modal/Modal';
import {Stats} from './Stats';
import {Title} from '../../ui/Title';

export function Success() {
    return (
        <Modal>
            <Title>{t('successTitle')}</Title>
            <Stats />
        </Modal>
    )
}
