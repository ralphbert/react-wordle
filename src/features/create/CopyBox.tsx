import {t} from '../../lib/lang';
import {copy} from '../../lib/copy';

export interface CopyBoxProps {
    content: string;
}

export function CopyBox({content}: CopyBoxProps) {
    function onClick() {
        copy(content);
    }

    return (
        <div className="text-center cursor-pointer copy-box animate__animated animate__bounceIn" onClick={onClick}>
            <h3>{t('shareTitle')}</h3>
            <div>{content}</div>
        </div>
    );
}
