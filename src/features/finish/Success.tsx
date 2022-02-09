import {t} from '../../lib/lang';
import {Modal} from '../modal/Modal';
import {Stats} from './Stats';

export function Success() {
    return (
        <Modal>
            <h1 style={{ marginBottom: 0, marginTop: 0, }}>{t('successTitle')}</h1>
            <Stats />
        </Modal>
    )
}
