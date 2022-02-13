import {notify} from './notifications';
import {t} from './lang';

export function copy(content: string) {
    navigator.clipboard.writeText(content).then(() => {
        notify(t('copyDone'))
    });
}

export function copyHTML(content: string) {
    const type = 'text/html';
    const blob = new Blob([content], {type});
    const data = [new ClipboardItem({[type]: blob})];
    console.log('data', data, blob);

    navigator.clipboard.write(data).then(
        function () {
            notify(t('copyDone'))
        }, function (e) {
            console.log(e);
        }
    );
}
