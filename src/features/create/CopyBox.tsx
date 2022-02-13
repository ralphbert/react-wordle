import {t} from '../../lib/lang';
import {copy} from '../../lib/copy';
import {Button} from '../../ui/Button';

export interface CopyBoxProps {
    content: string;
}

export function CopyBox({content}: CopyBoxProps) {
    function onClick() {
        copy(content);
    }

    return (
        <div className="text-center mb-4 copy-box animate__animated animate__bounceIn">
            <h3 className="font-bold text-lg">{t('shareTitle')}</h3>
            <div className="flex gap-2">
                <input className="px-2 py-1 w-full border border-solid border-gray-300 rounded" value={content} readOnly={true} />
                <Button onClick={onClick}>{t('copy')}</Button>
            </div>
        </div>
    );
}
