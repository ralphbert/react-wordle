import {notify} from './notifications';
import {t} from './lang';

export function copy(content: string) {
    navigator.clipboard.writeText(content).then(() => {
        notify(t('copyDone'))
    });
}
